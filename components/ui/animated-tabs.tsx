"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import {
  motion,
  AnimatePresence,
  type AnimatePresenceProps,
} from "motion/react";
import { cn } from "@/lib/utils";

type TabsAnimationContextValue = {
  activeValue: string;
  listRef: React.RefObject<HTMLDivElement | null>;
};

const TabsAnimationContext =
  React.createContext<TabsAnimationContextValue | null>(null);

function AnimatedTabs({
  className,
  value,
  defaultValue,
  onValueChange,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const [internalValue, setInternalValue] = React.useState(
    value ?? defaultValue ?? ""
  );

  // Track current value for context (works for both controlled and uncontrolled)
  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleValueChange = (newValue: string) => {
    setInternalValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsAnimationContext.Provider
      value={{ activeValue: internalValue, listRef }}
    >
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn("flex flex-col gap-2", className)}
        value={internalValue}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        {...props}
      />
    </TabsAnimationContext.Provider>
  );
}

type TabPosition = {
  left: number;
  width: number;
};

function AnimatedTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const context = React.useContext(TabsAnimationContext);
  const [tabPositions, setTabPositions] = React.useState<
    Record<string, TabPosition>
  >({});
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  if (!context) {
    throw new Error("AnimatedTabsList must be used within AnimatedTabs");
  }

  const { activeValue, listRef } = context;
  const activePosition = tabPositions[activeValue];

  // Calculate tab positions whenever tabs or layout changes
  React.useEffect(() => {
    if (!listRef.current) return;

    const updatePositions = (): void => {
      const tabElements =
        listRef.current?.querySelectorAll<HTMLElement>('[role="tab"]');
      if (!tabElements || !listRef.current) return;

      const listRect = listRef.current.getBoundingClientRect();
      const positions: Record<string, TabPosition> = {};

      tabElements.forEach((tab) => {
        const tabRect = tab.getBoundingClientRect();
        const tabValue = tab.getAttribute("data-value");

        if (tabValue) {
          positions[tabValue] = {
            left: tabRect.left - listRect.left,
            width: tabRect.width,
          };
        }
      });

      setTabPositions(positions);
    };

    // Small delay to ensure tabs are rendered
    const timeoutId = setTimeout(() => {
      updatePositions();
      setShouldAnimate(true);
    }, 50);

    const observer = new ResizeObserver(() => {
      setShouldAnimate(false);
      updatePositions();
      setTimeout(() => setShouldAnimate(true), 100);
    });

    observer.observe(listRef.current);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [listRef, props.children]);

  return (
    <TabsPrimitive.List
      ref={listRef}
      data-slot="tabs-list"
      className={cn(
        "bg-accent dark:bg-accent/50 font-good-times text-muted-foreground relative inline-flex h-9 w-full items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    >
      {activePosition && (
        <motion.div
          layoutId="activeTabPill"
          className="absolute h-[calc(100%-6px)] bg-input/78 dark:bg-input/30 rounded-md border-2 border-logo-blue shadow-sm pointer-events-none"
          initial={false}
          animate={{
            left: activePosition.left,
            width: activePosition.width,
          }}
          transition={
            shouldAnimate
              ? { type: "tween", ease: "easeOut", duration: 0.3 }
              : { duration: 0 }
          }
        />
      )}
      {props.children}
    </TabsPrimitive.List>
  );
}

function AnimatedTabsTrigger({
  className,
  value,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      data-value={value}
      value={value}
      className={cn(
        "focus-visible:ring-ring/50 relative z-10 inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border-2 border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
        "data-[state=active]:text-accent-foreground text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

type AnimatedTabsContentListProps = {
  mode?: AnimatePresenceProps["mode"];
  children:
    | React.ReactElement<typeof AnimatedTabsContent>
    | React.ReactElement<typeof AnimatedTabsContent>[];
};

function AnimatedTabsContentList({
  mode = "sync",
  children,
}: AnimatedTabsContentListProps) {
  const context = React.useContext(TabsAnimationContext);

  if (!context) {
    throw new Error("AnimatedTabsContentList must be used within AnimatedTabs");
  }

  // Filter children to only render the active one
  const activeContent = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) &&
      (child.props as any).value === context.activeValue
  );

  return <AnimatePresence mode={mode}>{activeContent}</AnimatePresence>;
}

function AnimatedTabsContent({
  className,
  value,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  const context = React.useContext(TabsAnimationContext);

  if (!context) {
    throw new Error("AnimatedTabsContent must be used within AnimatedTabs");
  }

  return (
    <motion.div
      key={value}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <TabsPrimitive.Content
        forceMount
        value={value}
        data-slot="tabs-content"
        className={cn("flex-1 outline-none", className)}
        {...props}
      />
    </motion.div>
  );
}

export {
  AnimatedTabs,
  AnimatedTabsList,
  AnimatedTabsTrigger,
  AnimatedTabsContentList,
  AnimatedTabsContent,
};

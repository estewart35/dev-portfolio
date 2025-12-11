"use client";
import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type FilterButton<T extends string> = {
  value: T;
  label: string;
};

type FilterButtonsProps<T extends string> = {
  buttons: readonly FilterButton<T>[];
  defaultSelection: T;
  filterBy: (value: T) => void;
  className?: string;
};

const FilterButtons = <T extends string>({
  buttons,
  defaultSelection,
  filterBy,
  className,
}: FilterButtonsProps<T>) => {
  const [selected, setSelected] = useState<T>(defaultSelection);

  return (
    <div className={cn("flex h-5 items-center gap-4", className)}>
      {buttons.map((btn) => (
        <Fragment key={btn.value}>
          <Button
            className={
              selected === btn.value
                ? "bg-accent text-accent-foreground dark:bg-accent/50"
                : "text-muted-foreground hover:text-accent-foreground"
            }
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelected(btn.value);
              filterBy(btn.value);
            }}
          >
            {btn.label}
          </Button>
          <Separator orientation="vertical" className="last:hidden" />
        </Fragment>
      ))}
    </div>
  );
};

export default FilterButtons;

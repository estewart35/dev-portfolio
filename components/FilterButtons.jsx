"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FilterButtons = ({ buttons, defaultSelection, filterBy, className }) => {
  const [selected, setSelected] = useState(defaultSelection);

  return (
    <div className={`flex h-5 items-center gap-4 ${className}`}>
      {buttons.map((btn) => (
        <React.Fragment key={btn.value}>
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default FilterButtons;

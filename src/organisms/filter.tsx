import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Filter({ children }: Pick<ComponentProps<"div">, "children">) {
  return <div children={children} className="grid grid-cols-[auto_1fr] gap-y-4 pb-4 border-b" />;
}

export function FilterGroup({ children, label }: Pick<ComponentProps<"div">, "children"> & { label: string }) {
  return (
    <div className="grid grid-cols-subgrid col-span-full items-center gap-x-6">
      <p children={label} />
      {children}
    </div>
  );
}

type FilterCheckboxProps = Pick<ComponentProps<"span">, "children" | "className">
  & Pick<ComponentProps<"input">, "checked" | "name" | "onChange" | "value">
  & { asChild?: boolean };

export function FilterCheckbox({ asChild = false, checked, children, className, name, onChange, value }: FilterCheckboxProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <label className="group inline-block relative shrink-0 select-none">
      <input
        checked={checked}
        className="block -z-1 size-0 opacity-0"
        name={name}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <Comp
        children={children}
        className={cn(
          "px-3 py-1.75 h-7.5 bg-card rounded-2xl border shadow-sm transition-all cursor-pointer",
          "group-hover:scale-125 group-has-[input:focus-visible]:ring-3 group-has-[input:focus-visible]:ring-ring/50",
          "group-has-[input:checked]:border-card-foreground",
          className,
        )}
      />
    </label>
  );
}

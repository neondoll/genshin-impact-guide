import type { ComponentProps } from "react";
import type { ElementalReaction, ElementalReactionElementId } from "./types";
import type { ElementId } from "../elements/types";
import { cn } from "@/lib/utils";
import { ElementalReactionIds } from "./enums";
import { selectElementalReactionById } from "./selectors";
import { selectElementById } from "../elements/selectors";

function Image({ className, elementId }: {
  className?: ComponentProps<"img">["className"];
  elementId: ElementalReactionElementId;
}) {
  if (Object.values<string>(ElementalReactionIds).includes(elementId as string)) {
    return (
      <ElementalReactionImg
        className={className}
        item={selectElementalReactionById(elementId as ElementalReaction["id"])}
      />
    );
  }

  if (Array.isArray(elementId)) {
    return (
      <div className={cn("aspect-square grid grid-cols-2", className)}>
        {elementId.map(id => (
          <Image elementId={id} />
        ))}
      </div>
    );
  }

  const element = selectElementById(elementId as ElementId);

  return (
    <img alt={element.id} className={cn("aspect-square", className)} src={element.image_src} />
  );
}

export default function ElementalReactionImg({ className, item }: {
  className?: ComponentProps<"div">["className"];
  item: ElementalReaction;
}) {
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <Image className="shrink-0 w-auto h-full" elementId={item.first_element_id} />
      <svg
        className="aspect-square shrink-0 w-auto h-1/3"
        fill="currentColor"
        viewBox="0 0 460.775 460.775"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
      </svg>
      <Image className="shrink-0 w-auto h-full" elementId={item.second_element_id} />
    </div>
  );
}

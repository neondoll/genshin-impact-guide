import type { ComponentProps } from "react";

import type { ElementId } from "@/features/elements/types";
import { selectElementById } from "@/features/elements/selectors";

interface ElementImgProps {
  className?: ComponentProps<"img">["className"];
  elementId: ElementId;
}

export default function ElementImg({ elementId, ...props }: ElementImgProps) {
  const element = selectElementById(elementId);

  return <img alt={elementId} src={element.img_src} {...props} />;
}

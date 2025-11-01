import { lazy } from "react";

// Ленивая загрузка Radix UI компонентов
export const LazyAccordion = lazy(() =>
  import("@radix-ui/react-accordion").then((module) => ({
    default: module.Accordion,
  }))
);

export const LazyDialog = lazy(() =>
  import("@radix-ui/react-dialog").then((module) => ({
    default: module.Dialog,
  }))
);

export const LazyTabs = lazy(() =>
  import("@radix-ui/react-tabs").then((module) => ({
    default: module.Tabs,
  }))
);

// Re-export остальных компонентов
export {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";

export {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@radix-ui/react-tabs";

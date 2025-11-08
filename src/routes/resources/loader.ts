import type { Resource } from "@/types/resource";
import { selectResourcesAll } from "@/features/resources/selectors";

export interface ResourcesLoaderReturn {
  resources: Resource[];
}

export default function resourcesLoader(): ResourcesLoaderReturn {
  const resources = selectResourcesAll();

  return { resources };
}

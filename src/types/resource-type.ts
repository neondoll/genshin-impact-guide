import { ResourceTypeIds } from "@/enums/resource-type";

export interface ResourceType {
  id: ResourceTypeId;
  name: string;
}

export type ResourceTypeId = typeof ResourceTypeIds[keyof typeof ResourceTypeIds];

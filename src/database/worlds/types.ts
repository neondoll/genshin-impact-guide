import { WorldKeys } from "./enums";

export interface IWorld {
  key: TWorldKey;
  name: string;
}

export type TWorldKey = typeof WorldKeys[keyof typeof WorldKeys];

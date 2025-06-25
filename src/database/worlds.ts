type World = { name: string };
type Worlds = Record<WorldKey, World>;

export const WorldEnum = { Another: "Another", Teyvat: "Teyvat" } as const;

export type WorldKey = typeof WorldEnum[keyof typeof WorldEnum];

export default {
  [WorldEnum.Teyvat]: { name: "Тейват" },
  [WorldEnum.Another]: { name: "Другой мир" },
} as Worlds;

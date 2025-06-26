type World = { name: string };
type Worlds = Record<WorldUid, World>;

export const WorldUidEnum = { Another: "another", Teyvat: "teyvat" } as const;

export type WorldUid = typeof WorldUidEnum[keyof typeof WorldUidEnum];

export default {
  [WorldUidEnum.Teyvat]: { name: "Тейват" },
  [WorldUidEnum.Another]: { name: "Другой мир" },
} as Worlds;

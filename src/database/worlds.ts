type World = { name: string };
type Worlds = Record<WorldUid, World>;

export const WorldUidEnum = { Another: "Another", Teyvat: "Teyvat" } as const;

export type WorldUid = typeof WorldUidEnum[keyof typeof WorldUidEnum];

export default {
  [WorldUidEnum.Teyvat]: { name: "Тейват" },
  [WorldUidEnum.Another]: { name: "Другой мир" },
} as Worlds;

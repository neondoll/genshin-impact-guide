type World = { name: string };
type Worlds = Record<WorldUid, World>;

export type WorldUid = typeof WorldUidEnum[keyof typeof WorldUidEnum];

export const WorldUidEnum = { Another: "another", Teyvat: "teyvat" } as const;

const worlds = {
  [WorldUidEnum.Teyvat]: { name: "Тейват" },
  [WorldUidEnum.Another]: { name: "Другой мир" },
} as Worlds;

export function getWorlds() {
  console.log("getWorlds");

  return worlds;
}

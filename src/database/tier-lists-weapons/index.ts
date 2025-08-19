export async function getTierListsWeapons() {
  return (await import("./data")).default;
}

import { ArtifactSlotKeys } from "@/database/enums/artifact-slot";
import { Badge } from "@/components/ui/badge";
import { getStat, getStats } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { PreferredStatsRecommendationsProps } from "./types";

export default async function PreferredStatsRecommendations({ recommendations }: PreferredStatsRecommendationsProps) {
  const recommendationsKeys = Object.keys(recommendations) as (keyof typeof recommendations)[];
  const rowsCount = Math.max(...recommendationsKeys.map(recommendationsKey => recommendations[recommendationsKey].length));

  const recommendationsSort = async (recommendationsKey: keyof typeof recommendations) => {
    return (await getStats(recommendations[recommendationsKey])).map(value => value.key);
  };

  const sortedRecommendations = {
    [ArtifactSlotKeys.Sands]: await recommendationsSort(ArtifactSlotKeys.Sands),
    [ArtifactSlotKeys.Goblet]: await recommendationsSort(ArtifactSlotKeys.Goblet),
    [ArtifactSlotKeys.Circlet]: await recommendationsSort(ArtifactSlotKeys.Circlet),
    additional: await recommendationsSort("additional"),
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {recommendationsKeys.map(recommendationsKey => (
            <TableHead className="text-center" key={recommendationsKey}>
              {recommendationsKey === ArtifactSlotKeys.Sands && "Часы"}
              {recommendationsKey === ArtifactSlotKeys.Goblet && "Кубок"}
              {recommendationsKey === ArtifactSlotKeys.Circlet && "Корона"}
              {recommendationsKey === "additional" && "Доп."}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: rowsCount }, (_, i) => i).map(index => (
          <TableRow className="hover:bg-inherit" key={index + 1}>
            {recommendationsKeys.map(async (recommendationsKey) => {
              const stat = index in sortedRecommendations[recommendationsKey] ? await getStat(sortedRecommendations[recommendationsKey][index]) : undefined;

              return (
                <TableCell className="text-pretty whitespace-normal" key={recommendationsKey}>
                  {stat !== undefined && (
                    <Badge
                      children={stat.abbr || stat.name}
                      className="flex justify-center w-full text-center text-pretty whitespace-normal"
                      variant="secondary"
                    />
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

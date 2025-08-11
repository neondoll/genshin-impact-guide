import { ArtifactSlotKeys } from "@/database/enums/artifact-slot";
import { Badge } from "@/components/ui/badge";
import { getStat, sortStats } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { PreferredStatsRecommendationsProps } from "./types";

export default function PreferredStatsRecommendations({ recommendations }: PreferredStatsRecommendationsProps) {
  const recommendationsKeys = Object.keys(recommendations) as (keyof typeof recommendations)[];
  const rowsCount = Math.max(...recommendationsKeys.map(recommendationsKey => recommendations[recommendationsKey].length));

  const recommendationsSort = (recommendationsKey: keyof typeof recommendations) => {
    return recommendations[recommendationsKey].map(getStat).sort(sortStats).map(value => value.key);
  };

  const sortedRecommendations = {
    [ArtifactSlotKeys.SandsOfEon]: recommendationsSort(ArtifactSlotKeys.SandsOfEon),
    [ArtifactSlotKeys.GobletOfEonothem]: recommendationsSort(ArtifactSlotKeys.GobletOfEonothem),
    [ArtifactSlotKeys.CircletOfLogos]: recommendationsSort(ArtifactSlotKeys.CircletOfLogos),
    additional: recommendationsSort("additional"),
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {recommendationsKeys.map(recommendationsKey => (
            <TableHead className="text-center" key={recommendationsKey}>
              {recommendationsKey === ArtifactSlotKeys.SandsOfEon && "Часы"}
              {recommendationsKey === ArtifactSlotKeys.GobletOfEonothem && "Кубок"}
              {recommendationsKey === ArtifactSlotKeys.CircletOfLogos && "Корона"}
              {recommendationsKey === "additional" && "Доп."}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: rowsCount }, (_, i) => i).map(index => (
          <TableRow className="hover:bg-inherit" key={index + 1}>
            {recommendationsKeys.map((recommendationsKey) => {
              const stat = index in sortedRecommendations[recommendationsKey] ? getStat(sortedRecommendations[recommendationsKey][index]) : undefined;

              return (
                <TableCell className="text-pretty whitespace-normal" key={recommendationsKey}>
                  {stat !== undefined && (
                    <Badge
                      children={stat.abbreviation || stat.name}
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

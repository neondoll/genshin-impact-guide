import type { PreferredStatsRecommendationsProps } from "./types";
import { ArtifactSlotIds } from "@/enums/artifact-slot";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatBadge from "../badges/stat-badge";

export default function PreferredStatsRecommendations({ recommendations }: PreferredStatsRecommendationsProps) {
  const recommendationsKeys = Object.keys(recommendations) as (keyof typeof recommendations)[];
  const rowsCount = Math.max(...recommendationsKeys.map(recommendationsKey => recommendations[recommendationsKey].length));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {recommendationsKeys.map(recommendationsKey => (
            <TableHead className="text-center" key={recommendationsKey}>
              {recommendationsKey === ArtifactSlotIds.Sands && "Часы"}
              {recommendationsKey === ArtifactSlotIds.Goblet && "Кубок"}
              {recommendationsKey === ArtifactSlotIds.Circlet && "Корона"}
              {recommendationsKey === "additional" && "Доп."}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: rowsCount }, (_, i) => i).map(index => (
          <TableRow className="hover:bg-inherit" key={index + 1}>
            {recommendationsKeys.map(recommendationsKey => (
              <TableCell className="text-pretty whitespace-normal" key={recommendationsKey}>
                {recommendations[recommendationsKey][index] && (
                  <StatBadge statId={recommendations[recommendationsKey][index]} />
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

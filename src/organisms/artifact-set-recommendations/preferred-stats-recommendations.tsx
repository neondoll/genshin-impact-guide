import type { PreferredStatsRecommendationsProps } from "./types";
import { ARTIFACT_SLOTS } from "@/constants/artifact-slots";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatBadge from "../badges/stat-badge";
import { selectStatById } from "@/features/stats/selectors.ts";

export default function PreferredStatsRecommendations({
  recommendations,
}: PreferredStatsRecommendationsProps) {
  const recommendationsKeys = Object.keys(recommendations) as (keyof typeof recommendations)[];
  const rowsCount = Math.max(
    ...recommendationsKeys.map(
      (recommendationsKey) => recommendations[recommendationsKey].length,
    ),
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {recommendationsKeys.map((recommendationsKey) => (
            <TableHead className="text-center" key={recommendationsKey}>
              {recommendationsKey === ARTIFACT_SLOTS.SANDS && "Часы"}
              {recommendationsKey === ARTIFACT_SLOTS.GOBLET && "Кубок"}
              {recommendationsKey === ARTIFACT_SLOTS.CIRCLET && "Корона"}
              {recommendationsKey === "additional" && "Доп."}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: rowsCount }, (_, i) => i).map((index) => (
          <TableRow className="hover:bg-inherit" key={index + 1}>
            {recommendationsKeys.map((recommendationsKey) => {
              const statId = recommendations[recommendationsKey][index];
              const stat = statId ? selectStatById(statId) : undefined;

              return (
                <TableCell
                  className="text-pretty whitespace-normal"
                  key={recommendationsKey}
                >
                  {stat && <StatBadge statName={stat.name} />}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

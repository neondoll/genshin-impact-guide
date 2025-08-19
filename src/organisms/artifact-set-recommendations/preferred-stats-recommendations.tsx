import { useEffect, useState } from "react";

import type { PreferredStatsRecommendationsProps } from "./types";
import type { TStatKey } from "@/database/stats/types";
import { ArtifactSlotKeys } from "@/database/artifact-slots/enums";
import { Badge } from "@/components/ui/badge";
import { getStat } from "@/database/stats";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function StatBadge({ statKey }: { statKey: TStatKey }) {
  const [stat, setStat] = useState<Awaited<ReturnType<typeof getStat>>>();

  useEffect(() => {
    getStat(statKey).then(setStat);
  }, [statKey]);

  return stat !== undefined && (
    <Badge
      children={stat.abbr || stat.name}
      className="flex justify-center w-full text-center text-pretty whitespace-normal"
      variant="secondary"
    />
  );
}

export default function PreferredStatsRecommendations({ recommendations }: PreferredStatsRecommendationsProps) {
  const recommendationsKeys = Object.keys(recommendations) as (keyof typeof recommendations)[];
  const rowsCount = Math.max(...recommendationsKeys.map(recommendationsKey => recommendations[recommendationsKey].length));

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
            {recommendationsKeys.map(recommendationsKey => (
              <TableCell className="text-pretty whitespace-normal" key={recommendationsKey}>
                <StatBadge statKey={recommendations[recommendationsKey][index]} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

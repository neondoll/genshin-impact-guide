import { useEffect, useState } from "react";

import { ArtifactPieceUidEnum } from "@/database/enums/artifact-piece";
import { Badge } from "@/components/ui/badge";
import { getAttribute, sortAttributes } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { PreferredAttributesRecommendationsProps } from "./types";

export default function PreferredAttributesRecommendations({ recommendations }: PreferredAttributesRecommendationsProps) {
  const recommendationsKeys = Object.keys(recommendations) as (keyof typeof recommendations)[];
  const rowsCount = Math.max(...recommendationsKeys.map(recommendationsKey => recommendations[recommendationsKey].length));
  const [sortedRecommendations, setSortedRecommendations] = useState(recommendations);

  useEffect(() => {
    recommendationsKeys.forEach((recommendationsKey) => {
      setSortedRecommendations(prevState => ({
        ...prevState,
        [recommendationsKey]: recommendations[recommendationsKey].map(value => getAttribute(value)).sort(sortAttributes).map(value => value.uid),
      }));
    });
  }, [recommendations, recommendationsKeys]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {recommendationsKeys.map(recommendationsKey => (
            <TableHead className="text-center" key={recommendationsKey}>
              {recommendationsKey === ArtifactPieceUidEnum.SandsOfEon && "Часы"}
              {recommendationsKey === ArtifactPieceUidEnum.GobletOfEonothem && "Кубок"}
              {recommendationsKey === ArtifactPieceUidEnum.CircletOfLogos && "Корона"}
              {recommendationsKey === "additional" && "Доп."}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: rowsCount }, (_, i) => i).map(index => (
          <TableRow className="hover:bg-inherit" key={index + 1}>
            {recommendationsKeys.map((recommendationsKey) => {
              const attribute = index in sortedRecommendations[recommendationsKey] ? getAttribute(sortedRecommendations[recommendationsKey][index]) : undefined;

              return (
                <TableCell className="text-pretty whitespace-normal" key={recommendationsKey}>
                  {attribute !== undefined && (
                    <Badge
                      children={attribute.abbreviation || attribute.name}
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

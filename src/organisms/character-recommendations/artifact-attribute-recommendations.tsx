import { useEffect, useState } from "react";

import { ArtifactPieceUidEnum } from "@/database/enums/artifact-piece.ts";
import { Badge } from "@/components/ui/badge";
import { cn, numberFormatPercent } from "@/lib/utils";
import { getAttribute } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { ArtifactAttributeRecommendationsProps } from "./types";

export default function ArtifactAttributeRecommendations({ recommendations }: ArtifactAttributeRecommendationsProps) {
  const [hasDescription, setHasDescription] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);
  const [hasPercent, setHasPercent] = useState(false);
  const [hasUsePercent, setHasUsePercent] = useState(false);
  const recommendationsKeys = Object.keys(recommendations) as (keyof typeof recommendations)[];

  useEffect(() => {
    setHasDescription(recommendationsKeys.some((recommendationsKey) => {
      return recommendations[recommendationsKey].some((recommendation) => {
        return recommendation.description !== undefined;
      });
    }));
    setHasNotes(recommendationsKeys.some((recommendationsKey) => {
      return recommendations[recommendationsKey].some((recommendation) => {
        return recommendation.notes !== undefined;
      });
    }));
    setHasPercent(recommendationsKeys.some((recommendationsKey) => {
      return recommendations[recommendationsKey].some((recommendation) => {
        return recommendation.percent !== undefined;
      });
    }));
    setHasUsePercent(recommendationsKeys.some((recommendationsKey) => {
      return recommendations[recommendationsKey].some((recommendation) => {
        return recommendation.use_percent !== undefined;
      });
    }));
  }, [recommendations, recommendationsKeys]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead children="Характеристики" className="text-center" />
          {hasPercent && <TableHead />}
          {hasUsePercent && (
            <TableHead
              children="Процент использования"
              className="py-2 h-auto min-h-10 text-center whitespace-normal"
            />
          )}
          {hasDescription && <TableHead />}
          {hasNotes && <TableHead children="Заметки" className="text-center" />}
        </TableRow>
      </TableHeader>
      <TableBody>
        {recommendationsKeys.map((recommendationsKey) => {
          return recommendations[recommendationsKey].map((recommendation, index) => {
            const attribute = getAttribute(recommendation.uid);

            return (
              <TableRow className="hover:bg-inherit" key={`${recommendationsKey}-${recommendation.uid}`}>
                {index === 0 && (
                  <TableHead className="p-2 w-18" rowSpan={recommendations[recommendationsKey].length}>
                    {recommendationsKey === ArtifactPieceUidEnum.SandsOfEon && "Часы"}
                    {recommendationsKey === ArtifactPieceUidEnum.GobletOfEonothem && "Кубок"}
                    {recommendationsKey === ArtifactPieceUidEnum.CircletOfLogos && "Корона"}
                    {recommendationsKey === "additional" && "Доп."}
                  </TableHead>
                )}
                <TableCell className="text-pretty whitespace-normal">
                  <Badge
                    children={attribute.abbreviation || attribute.name}
                    className="flex justify-center w-full text-center text-pretty whitespace-normal"
                    variant="secondary"
                  />
                </TableCell>
                {hasPercent && (
                  <TableCell
                    children={recommendation.percent !== undefined ? numberFormatPercent(recommendation.percent, 1) : ""}
                    className={cn(recommendation.percent !== undefined && {
                      "text-green-500": recommendation.percent >= 0.5,
                      "text-yellow-500": recommendation.percent >= 0.25 && recommendation.percent < 0.5,
                      "text-red-500": recommendation.percent < 0.25,
                    })}
                  />
                )}
                {hasUsePercent && (
                  <TableCell
                    children={recommendation.use_percent !== undefined ? numberFormatPercent(recommendation.use_percent, 1) : ""}
                    className={cn(
                      "text-center",
                      recommendation.use_percent !== undefined && {
                        "text-green-500": recommendation.use_percent >= 0.5,
                        "text-yellow-500": recommendation.use_percent >= 0.25 && recommendation.use_percent < 0.5,
                        "text-red-500": recommendation.use_percent < 0.25,
                      },
                    )}
                  />
                )}
                {hasDescription && (
                  <TableCell children={recommendation.description} className="text-pretty whitespace-normal" />
                )}
                {hasNotes && (
                  <TableCell className="text-pretty whitespace-normal">
                    {recommendation.notes !== undefined && (
                      <ul className="ml-4 list-outside list-disc">
                        {recommendation.notes.map((note, index) => (
                          <li children={note} key={index} />
                        ))}
                      </ul>
                    )}
                  </TableCell>
                )}
              </TableRow>
            );
          });
        })}
      </TableBody>
    </Table>
  );
}

import { useEffect, useState } from "react";

import type { ArtifactSetRecommendationsProps } from "./types";
import { cn, numberFormatPercent, publicImageSrc } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ArtifactSetBadge from "@/features/artifact-sets/artifact-set-badge";

export default function ArtifactSetRecommendations({ recommendations }: ArtifactSetRecommendationsProps) {
  const [diffPercent, setDiffPercent] = useState(0);
  const [hasDescription, setHasDescription] = useState(false);
  const [hasIsBetter, setHasIsBetter] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);
  const [hasPercent, setHasPercent] = useState(false);
  const [minPercent, setMinPercent] = useState(0);

  useEffect(() => {
    const hasPercent = recommendations.some((recommendation) => {
      return recommendation.percent !== undefined;
    });

    setHasDescription(recommendations.some((recommendation) => {
      return recommendation.description !== undefined;
    }));
    setHasIsBetter(recommendations.some((recommendation) => {
      return recommendation.is_better === true;
    }));
    setHasNotes(recommendations.some((recommendation) => {
      return recommendation.notes !== undefined;
    }));
    setHasPercent(hasPercent);

    if (hasPercent) {
      let maxPercent = -Infinity, minPercent = Infinity;

      recommendations.map((recommendation) => {
        if (recommendation.percent) {
          if (recommendation.percent > maxPercent) {
            maxPercent = recommendation.percent;
          }

          if (recommendation.percent < minPercent) {
            minPercent = recommendation.percent;
          }
        }
      });

      if (maxPercent !== -Infinity && minPercent !== Infinity) {
        setDiffPercent((maxPercent - minPercent) / 3);
        setMinPercent(minPercent);
      }
    }
  }, [recommendations]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {hasIsBetter && <TableHead />}
          <TableHead children="Наборы" className="text-center" />
          {hasPercent && <TableHead />}
          {hasDescription && <TableHead />}
          {hasNotes && <TableHead children="Заметки" className="text-center" />}
        </TableRow>
      </TableHeader>
      <TableBody>
        {recommendations.map(recommendation => (
          <TableRow
            className="hover:bg-inherit"
            key={"key" in recommendation ? recommendation.key : recommendation.keys.join("+")}
          >
            {hasIsBetter && (
              <TableCell className="w-16">
                {recommendation.is_better && (
                  <img
                    alt="Является лучшим выбором"
                    className="size-12 rounded-full"
                    src={publicImageSrc("better-logo-128x128.png")}
                  />
                )}
              </TableCell>
            )}
            <TableCell className="text-pretty whitespace-normal sm:w-48">
              {"key" in recommendation
                ? <ArtifactSetBadge artifactSetKey={recommendation.key} />
                : (
                    <div className="flex flex-col gap-2">
                      {recommendation.keys.map(key => <ArtifactSetBadge artifactSetKey={key} />)}
                    </div>
                  )}
            </TableCell>
            {hasPercent && (
              <TableCell
                children={recommendation.percent !== undefined ? numberFormatPercent(recommendation.percent, 2) : ""}
                className={cn(recommendation.percent !== undefined && {
                  "text-green-500": recommendation.percent >= (minPercent + (diffPercent * 2)),
                  "text-yellow-500": recommendation.percent >= (minPercent + diffPercent) && recommendation.percent < (minPercent + (diffPercent * 2)),
                  "text-red-500": recommendation.percent < (minPercent + diffPercent),
                })}
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
        ))}
      </TableBody>
    </Table>
  );
}

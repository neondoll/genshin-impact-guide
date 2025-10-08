import { useEffect, useState } from "react";

import type { ArtifactSetRecommendationsProps } from "./types";
import type { CharacterArtifactSetRecommendations } from "@/types/character-recommendations";
import { cn, numberFormatPercent } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArtifactSetBadge from "../badges/artifact-set-badge";
import IsBetter from "../is-better";

export default function ArtifactSetRecommendations({ recommendations }: ArtifactSetRecommendationsProps) {
  if (Array.isArray(recommendations)) {
    return (
      <ArtifactSetRecommendationsTable recommendations={recommendations} />
    );
  }

  const recommendationsEntries = Object.entries(recommendations);

  return (
    <Tabs defaultValue={recommendationsEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full h-auto min-h-9">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger dangerouslySetInnerHTML={{ __html: key }} key={key} value={key} />
        ))}
      </TabsList>
      {recommendationsEntries.map(([key, recommendations]) => (
        <TabsContent key={key} value={key}>
          <ArtifactSetRecommendationsTable recommendations={recommendations} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function ArtifactSetRecommendationsTable({ recommendations }: {
  recommendations: CharacterArtifactSetRecommendations;
}) {
  const [diffPercent, setDiffPercent] = useState(0);
  const [hasDescription, setHasDescription] = useState(false);
  const [hasIsBetter, setHasIsBetter] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);
  const [hasPercent, setHasPercent] = useState(false);
  const [minPercent, setMinPercent] = useState(0);

  useEffect(() => {
    const hasPercent = recommendations.some((recommendation) => {
      return Boolean(recommendation.percent);
    });

    setHasDescription(recommendations.some((recommendation) => {
      return Boolean(recommendation.description);
    }));
    setHasIsBetter(recommendations.some((recommendation) => {
      return Boolean(recommendation.is_better);
    }));
    setHasNotes(recommendations.some((recommendation) => {
      return Boolean(recommendation.notes);
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
        <TableRow className="hover:bg-inherit">
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
            key={"id" in recommendation ? recommendation.id : recommendation.ids.join("+")}
          >
            {hasIsBetter && (
              <TableCell children={<IsBetter value={Boolean(recommendation.is_better)} />} />
            )}
            <TableCell className="text-pretty whitespace-normal">
              {"id" in recommendation && (
                <ArtifactSetBadge artifactSetId={recommendation.id} />
              )}
              {"ids" in recommendation && (
                <div className="flex flex-row gap-2">
                  {recommendation.ids.map(id => <ArtifactSetBadge artifactSetId={id} key={id} />)}
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
                      <li dangerouslySetInnerHTML={{ __html: note }} key={index} />
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

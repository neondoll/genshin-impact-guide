import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn, numberFormatPercent, publicImageSrc } from "@/lib/utils";
import { getWeapon } from "@/database";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { WeaponRecommendationsProps, WeaponRecommendationsTableProps } from "./types";

function WeaponRecommendationsTable({ character, recommendations }: WeaponRecommendationsTableProps) {
  const [diffPercent, setDiffPercent] = useState(0);
  const [hasIsBetter, setHasIsBetter] = useState(false);
  const [hasPercent, setHasPercent] = useState(false);
  const [minPercent, setMinPercent] = useState(0);

  useEffect(() => {
    const hasPercent = recommendations.some((recommendation) => {
      return recommendation.percent !== undefined;
    });

    setHasIsBetter(recommendations.some((recommendation) => {
      return recommendation.is_better === true;
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
    <Table className="sm:table-fixed">
      <TableBody>
        {recommendations.map((recommendation) => {
          const weapon = getWeapon(recommendation.uid);

          return (
            <TableRow
              className="hover:bg-inherit"
              key={
                weapon.uid
                + (recommendation.refinement === undefined ? "" : `-r${recommendation.refinement}`)
                + (recommendation.postfix === undefined ? "" : `-${recommendation.postfix}`)
              }
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
              <TableCell className="text-pretty whitespace-normal">
                <Badge
                  className={cn(
                    "flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal",
                    "sm:flex-row sm:text-left",
                  )}
                  variant="secondary"
                >
                  <img
                    alt={weapon.name}
                    className="shrink-0 size-12 bg-[linear-gradient(180deg,#323947,#4a5366)] rounded-md rounded-br-2xl"
                    src={weapon.image_src}
                  />
                  <span>
                    {weapon.name}
                    {recommendation.refinement !== undefined && ` R${recommendation.refinement}`}
                    {` [${weapon.quality}⭐]`}
                    {weapon.uid === character.signature_weapon_uid && " (сигнатурное)"}
                    {recommendation.postfix !== undefined && (
                      <>
                        {" "}
                        <sub children={recommendation.postfix} />
                      </>
                    )}
                  </span>
                </Badge>
              </TableCell>
              {hasPercent && (
                <TableCell
                  children={recommendation.percent !== undefined ? numberFormatPercent(recommendation.percent, 2) : ""}
                  className={cn("text-center", recommendation.percent !== undefined && {
                    "text-green-500": recommendation.percent >= (minPercent + (diffPercent * 2)),
                    "text-yellow-500": recommendation.percent >= (minPercent + diffPercent) && recommendation.percent < (minPercent + (diffPercent * 2)),
                    "text-red-500": recommendation.percent < (minPercent + diffPercent),
                  })}
                />
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default function WeaponRecommendations({ character, recommendations }: WeaponRecommendationsProps) {
  if (Array.isArray(recommendations)) {
    return (
      <WeaponRecommendationsTable character={character} recommendations={recommendations} />
    );
  }

  const recommendationsEntries = Object.entries(recommendations);

  return (
    <Tabs defaultValue={recommendationsEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full h-auto min-h-9">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger children={key} key={key} value={key} />
        ))}
      </TabsList>
      {recommendationsEntries.map(([key, recommendations]) => (
        <TabsContent key={key} value={key}>
          <WeaponRecommendationsTable character={character} recommendations={recommendations} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

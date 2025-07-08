import { useEffect, useState } from "react";

import { cn, numberFormatPercent } from "@/lib/utils";
import { getWeapon } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { WeaponRecommendationsProps, WeaponRecommendationsTableProps } from "./types";

function WeaponRecommendationsTable({ character, recommendations }: WeaponRecommendationsTableProps) {
  const [diffPercent, setDiffPercent] = useState(0);
  const [minPercent, setMinPercent] = useState(0);

  useEffect(() => {
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
                recommendation.uid
                + (recommendation.refinement === undefined ? "" : `-r${recommendation.refinement}`)
                + (recommendation.postfix === undefined ? "" : `-${recommendation.postfix}`)
              }
            >
              <TableHead className="whitespace-normal">
                <div className="flex gap-2 items-center">
                  <img alt={weapon.name} className="shrink-0 size-10" src={weapon.image_src} />
                  <span className="py-2">
                    {weapon.name}
                    {recommendation.refinement !== undefined && ` R${recommendation.refinement}`}
                    {` [${weapon.quality}⭐]`}
                    {recommendation.uid === character.signature_weapon_uid && " (сигнатурное)"}
                    {recommendation.postfix !== undefined && (
                      <>
                        {" "}
                        <sub children={recommendation.postfix} />
                      </>
                    )}
                  </span>
                </div>
              </TableHead>
              {recommendation.percent !== undefined && (
                <TableCell
                  children={numberFormatPercent(recommendation.percent, 2)}
                  className={cn("text-center", {
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

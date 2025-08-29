import { useEffect, useState } from "react";

import type { CharacterWeaponRecommendation } from "@/features/characters-recommendations/types";
import type { WeaponId } from "@/features/weapons/types";
import type { WeaponRecommendationsProps } from "./types";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import { cn, numberFormatPercent, publicImageSrc } from "@/lib/utils";
import { selectWeaponById } from "@/features/weapons/selectors";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function WeaponBadge({ postfix, refinement, signatureWeaponId, weaponId }: {
  postfix: CharacterWeaponRecommendation["postfix"];
  refinement: CharacterWeaponRecommendation["refinement"];
  signatureWeaponId: WeaponRecommendationsProps["character"]["signature_weapon_id"];
  weaponId: WeaponId;
}) {
  const weapon = selectWeaponById(weaponId);

  return (
    <Badge
      className={cn(
        "flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal sm:flex-row",
        "sm:text-left",
      )}
      variant="secondary"
    >
      <img
        alt={weapon.name}
        className={cn("shrink-0 size-12 rounded-md rounded-br-2xl", backgroundClassByRarity(weapon.rarity))}
        src={weapon.image_src}
      />
      <span>
        {weapon.name}
        {refinement !== undefined && ` R${refinement}`}
        {weapon.id === signatureWeaponId && " (сигнатурное)"}
        {postfix !== undefined && (
          <>
            {" "}
            <sub children={postfix} />
          </>
        )}
      </span>
    </Badge>
  );
}

function WeaponRecommendationsTable({ character, recommendations }: {
  character: WeaponRecommendationsProps["character"];
  recommendations: CharacterWeaponRecommendation[];
}) {
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
        {recommendations.map(recommendation => (
          <TableRow
            className="hover:bg-inherit"
            key={
              recommendation.id
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
              <WeaponBadge
                postfix={recommendation.postfix}
                refinement={recommendation.refinement}
                signatureWeaponId={character.signature_weapon_id}
                weaponId={recommendation.id}
              />
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
        ))}
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

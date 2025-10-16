import { useEffect, useState } from "react";

import type { CharacterWeaponRecommendation } from "@/types/character-recommendations";
import type { WeaponRecommendationsProps } from "./types";
import { cn, numberFormatPercent } from "@/lib/utils";
import { selectWeaponById } from "@/features/weapons/selectors";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IsBetter from "../is-better";
import WeaponBadge from "../badges/weapon-badge";
import { selectStatById } from "@/features/stats/selectors.ts";

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
          <TabsTrigger dangerouslySetInnerHTML={{ __html: key }} key={key} value={key} />
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

function WeaponRecommendationsTable({ character, recommendations }: {
  character: WeaponRecommendationsProps["character"];
  recommendations: CharacterWeaponRecommendation[];
}) {
  const [diffPercent, setDiffPercent] = useState(0);
  const [hasIsBetter, setHasIsBetter] = useState(false);
  const [hasIsSignature, setHasIsSignature] = useState(false);
  const [hasPercent, setHasPercent] = useState(false);
  const [hasPostfix, setHasPostfix] = useState(false);
  const [hasRefinement, setHasRefinement] = useState(false);
  const [minPercent, setMinPercent] = useState(0);

  useEffect(() => {
    const hasPercent = recommendations.some((recommendation) => {
      return Boolean(recommendation.percent);
    });

    setHasIsBetter(recommendations.some((recommendation) => {
      return Boolean(recommendation.is_better);
    }));
    setHasIsSignature(recommendations.some((recommendation) => {
      return recommendation.id === character.signature_weapon_id;
    }));
    setHasPercent(hasPercent);
    setHasPostfix(recommendations.some((recommendation) => {
      return Boolean(recommendation.postfix);
    }));
    setHasRefinement(recommendations.some((recommendation) => {
      return Boolean(recommendation.refinement);
    }));

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
  }, [character.signature_weapon_id, recommendations]);

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-inherit">
          {hasIsBetter && <TableHead />}
          <TableHead children="Оружие" className="text-center" />
          {hasIsSignature && <TableHead />}
          {hasRefinement && <TableHead />}
          {hasPostfix && <TableHead />}
          {hasPercent && <TableHead />}
          <TableHead children="Заметки" className="text-center" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {recommendations.map((recommendation) => {
          const weapon = selectWeaponById(recommendation.id);

          return (
            <TableRow
              className="hover:bg-inherit"
              key={
                recommendation.id
                + (recommendation.refinement === undefined ? "" : `-r${recommendation.refinement}`)
                + (recommendation.postfix === undefined ? "" : `-${recommendation.postfix}`)
              }
            >
              {hasIsBetter && (
                <TableCell children={<IsBetter value={recommendation.is_better} />} className="w-16" />
              )}
              <TableCell className="text-pretty whitespace-normal">
                <WeaponBadge
                  weaponId={weapon.id}
                  weaponImgSrc={weapon.image_src}
                  weaponRarity={weapon.rarity}
                  weaponTitle={weapon.title}
                />
              </TableCell>
              {hasIsSignature && (
                <TableCell children={weapon.id === character.signature_weapon_id ? "сигнатурное" : ""} />
              )}
              {hasRefinement && (
                <TableCell children={recommendation.refinement !== undefined ? `R${recommendation.refinement}` : ""} />
              )}
              {hasPostfix && (
                <TableCell children={recommendation.postfix !== undefined ? recommendation.postfix : ""} />
              )}
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
              <TableCell className="text-pretty whitespace-normal">
                <ul className="ml-4 list-outside list-disc">
                  <li dangerouslySetInnerHTML={{ __html: `Дополнительная характеристика: <span class="text-[rgb(255,215,128)]">${selectStatById(weapon.secondary_stats_id).name}</span>` }} />
                  {weapon.passive_ability && (
                    <li dangerouslySetInnerHTML={{ __html: `Пассивная способность (${weapon.passive_ability.name}): ${weapon.passive_ability.description}` }} />
                  )}
                  {recommendation.notes?.map((note, index) => (
                    <li dangerouslySetInnerHTML={{ __html: note }} key={index} />
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

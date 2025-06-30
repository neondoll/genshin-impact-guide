import { ChevronsUpDown } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "@/components/container";
import Paths from "@/paths";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArtifactTypeUidEnum } from "@/database/enums/artifact-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  getArtifactSet, getAttribute, getCharacter, getCharacterRole, getElement, getGuideCharacter, getTalents, getWeapon,
  getWeaponType, qualityImageSrc,
} from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { GuideCharacterReferencePoint, GuideCharacterSuitableWeapons } from "@/database/types/guide-characters";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";
import { Badge } from "@/components/ui/badge.tsx";

type ReferencePointProps = {
  items: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["reference_point"]>;
};
type ReferencePointTableProps = {
  items: GuideCharacterReferencePoint;
};
type SuitableArtifactsProps = {
  character: CharacterLoaderData["character"];
  guideArtifacts: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["suitable_artifacts"]>;
};
type SuitableWeaponsProps = {
  character: CharacterLoaderData["character"];
  guideWeapons: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["suitable_weapons"]>;
};
type SuitableWeaponsTableProps = {
  character: SuitableWeaponsProps["character"];
  guideWeapons: GuideCharacterSuitableWeapons;
};
type UpgradingTalentsProps = {
  guideTalents: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["upgrading_talents"]>;
};

export type CharacterLoaderData = {
  character: Awaited<ReturnType<typeof getCharacter>>;
  characterElement: Awaited<ReturnType<typeof getElement>>;
  characterRoles: Awaited<ReturnType<typeof getCharacterRole>>[];
  characterWeaponType: Awaited<ReturnType<typeof getWeaponType>>;
  guideCharacter: Awaited<ReturnType<typeof getGuideCharacter>>;
};

function ReferencePoint({ items }: ReferencePointProps) {
  if (Array.isArray(items)) {
    return (
      <ReferencePointTable items={items} />
    );
  }

  const referencePoints = Object.entries(items);

  return (
    <Tabs defaultValue={referencePoints[0][0]}>
      <TabsList className="flex flex-wrap w-full h-auto min-h-9">
        {referencePoints.map(([value]) => (
          <TabsTrigger className="whitespace-pre" key={value} value={value}>{value}</TabsTrigger>
        ))}
      </TabsList>
      {referencePoints.map(([value, referencePoint]) => (
        <TabsContent key={value} value={value}>
          <ReferencePointTable items={referencePoint} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function ReferencePointTable({ items }: ReferencePointTableProps) {
  return (
    <Table className="table-fixed">
      <TableBody>
        {items.map(([referencePointKey, referencePointValue], index) => (
          <TableRow key={index}>
            <TableHead className="text-left">{referencePointKey}</TableHead>
            <TableCell className="text-right">{referencePointValue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function SuitableArtifacts({ character, guideArtifacts }: SuitableArtifactsProps) {
  const [setsDiffPercent, setSetsDiffPercent] = useState(0);
  const [setsMinPercent, setSetsMinPercent] = useState(0);

  useEffect(() => {
    let setsMaxPercent = -Infinity, setsMinPercent = Infinity;

    guideArtifacts.sets.map((guideArtifactSet) => {
      if (guideArtifactSet.percent) {
        if (guideArtifactSet.percent > setsMaxPercent) {
          setsMaxPercent = guideArtifactSet.percent;
        }

        if (guideArtifactSet.percent < setsMinPercent) {
          setsMinPercent = guideArtifactSet.percent;
        }
      }
    });

    if (setsMaxPercent !== -Infinity && setsMinPercent !== Infinity) {
      setSetsDiffPercent((setsMaxPercent - setsMinPercent) / 3);
      setSetsMinPercent(setsMinPercent);
    }
  }, [guideArtifacts]);

  return (
    <Table>
      <TableBody>
        {guideArtifacts.sets.map((guideArtifactSet, index) => {
          const artifactSet = getArtifactSet(guideArtifactSet.uid);

          return (
            <TableRow className="hover:bg-inherit" key={guideArtifactSet.uid}>
              {index === 0 && (
                <TableHead className="p-2 w-min text-right" rowSpan={guideArtifacts.sets.length}>Набор</TableHead>
              )}
              <TableCell className="p-2 min-w-42.5">
                <Badge asChild className="flex justify-start w-full text-balance whitespace-normal" variant="secondary">
                  <Link to={Paths.ArtifactSet(guideArtifactSet.uid)}>
                    <img
                      alt={artifactSet.name}
                      className="shrink-0 size-8 rounded-md"
                      src={artifactSet[ArtifactTypeUidEnum.FlowerOfLife].image_src}
                    />
                    <span>
                      {artifactSet.name}
                      {guideArtifactSet.uid === character.signature_artifact_set_uid && " (сигнатурное)"}
                    </span>
                  </Link>
                </Badge>
              </TableCell>
              {guideArtifactSet.percent !== undefined && (
                <TableCell
                  className={cn({
                    "text-green-500": guideArtifactSet.percent >= (setsMinPercent + (setsDiffPercent * 2)),
                    "text-yellow-500": guideArtifactSet.percent >= (setsMinPercent + setsDiffPercent) && guideArtifactSet.percent < (setsMinPercent + (setsDiffPercent * 2)),
                    "text-red-500": guideArtifactSet.percent < (setsMinPercent + setsDiffPercent),
                  })}
                >
                  {new Intl.NumberFormat(undefined, {
                    style: "percent",
                    minimumFractionDigits: 2,
                  }).format(guideArtifactSet.percent)}
                </TableCell>
              )}
              <TableCell
                className="text-balance whitespace-pre-line"
                colSpan={guideArtifactSet.percent === undefined ? 2 : 1}
              >
                {guideArtifactSet.description}
              </TableCell>
            </TableRow>
          );
        })}
        {(Object.keys(guideArtifacts.attributes) as (keyof typeof guideArtifacts.attributes)[]).map((guideArtifactAttributesKey) => {
          return guideArtifacts.attributes[guideArtifactAttributesKey].map((guideArtifactAttribute, index) => {
            const attribute = getAttribute(guideArtifactAttribute.uid);

            return (
              <TableRow
                className="hover:bg-inherit"
                key={`${guideArtifactAttributesKey}-${guideArtifactAttribute.uid}`}
              >
                {index === 0 && (
                  <TableHead
                    className="p-2 w-min text-right"
                    rowSpan={guideArtifacts.attributes[guideArtifactAttributesKey].length}
                  >
                    {guideArtifactAttributesKey === ArtifactTypeUidEnum.SandsOfEon && "Часы"}
                    {guideArtifactAttributesKey === ArtifactTypeUidEnum.GobletOfEonothem && "Кубок"}
                    {guideArtifactAttributesKey === ArtifactTypeUidEnum.CircletOfLogos && "Корона"}
                    {guideArtifactAttributesKey === "additional" && "Доп."}
                  </TableHead>
                )}
                <TableCell className="p-2 min-w-39.5">
                  <Badge className="flex justify-start w-full text-balance whitespace-normal" variant="secondary">
                    {attribute.name}
                  </Badge>
                </TableCell>
                {guideArtifactAttribute.percent !== undefined && (
                  <TableCell
                    className={cn({
                      "text-green-500": guideArtifactAttribute.percent >= 0.5,
                      "text-yellow-500": guideArtifactAttribute.percent >= 0.25 && guideArtifactAttribute.percent < 0.5,
                      "text-red-500": guideArtifactAttribute.percent < 0.25,
                    })}
                  >
                    {new Intl.NumberFormat(undefined, {
                      style: "percent",
                      minimumFractionDigits: 1,
                    }).format(guideArtifactAttribute.percent)}
                  </TableCell>
                )}
                <TableCell
                  className="text-balance whitespace-pre-line"
                  colSpan={guideArtifactAttribute.percent === undefined ? 2 : 1}
                >
                  {guideArtifactAttribute.description}
                </TableCell>
              </TableRow>
            );
          });
        })}
      </TableBody>
    </Table>
  );
}

function SuitableWeapons({ character, guideWeapons }: SuitableWeaponsProps) {
  if (Array.isArray(guideWeapons)) {
    return (
      <SuitableWeaponsTable character={character} guideWeapons={guideWeapons} />
    );
  }

  const suitableWeapons = Object.entries(guideWeapons);

  return (
    <Tabs defaultValue={suitableWeapons[0][0]}>
      <TabsList className="flex flex-wrap w-full h-auto min-h-9">
        {suitableWeapons.map(([value]) => (
          <TabsTrigger key={value} value={value}>{value}</TabsTrigger>
        ))}
      </TabsList>
      {suitableWeapons.map(([value, guideWeapons]) => (
        <TabsContent key={value} value={value}>
          <SuitableWeaponsTable character={character} guideWeapons={guideWeapons} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function SuitableWeaponsTable({ character, guideWeapons }: SuitableWeaponsTableProps) {
  const [diffPercent, setDiffPercent] = useState(0);
  const [minPercent, setMinPercent] = useState(0);

  useEffect(() => {
    let maxPercent = -Infinity, minPercent = Infinity;

    guideWeapons.map((guideWeapon) => {
      if (guideWeapon.percent) {
        if (guideWeapon.percent > maxPercent) {
          maxPercent = guideWeapon.percent;
        }

        if (guideWeapon.percent < minPercent) {
          minPercent = guideWeapon.percent;
        }
      }
    });

    if (maxPercent !== -Infinity && minPercent !== Infinity) {
      setDiffPercent((maxPercent - minPercent) / 3);
      setMinPercent(minPercent);
    }
  }, [guideWeapons]);

  return (
    <Table className="sm:table-fixed">
      <TableBody>
        {guideWeapons.map((guideWeapon) => {
          const weapon = getWeapon(guideWeapon.uid);

          return (
            <TableRow
              key={
                guideWeapon.uid
                + (guideWeapon.refinement === undefined ? "" : `-r${guideWeapon.refinement}`)
                + (guideWeapon.postfix === undefined ? "" : `-${guideWeapon.postfix}`)
              }
            >
              <TableHead className="whitespace-normal">
                <div className="flex gap-2 items-center">
                  <img alt={weapon.name} className="shrink-0 size-10" src={weapon.image_src} />
                  <span className="py-2">
                    {weapon.name}
                    {guideWeapon.refinement !== undefined && ` R${guideWeapon.refinement}`}
                    {` [${weapon.quality}⭐]`}
                    {guideWeapon.uid === character.signature_weapon_uid && " (сигнатурное)"}
                    {guideWeapon.postfix !== undefined && (
                      <>
                        {" "}
                        <sub>{guideWeapon.postfix}</sub>
                      </>
                    )}
                  </span>
                </div>
              </TableHead>
              {guideWeapon.percent !== undefined && (
                <TableCell
                  className={cn("text-center", {
                    "text-green-500": guideWeapon.percent >= (minPercent + (diffPercent * 2)),
                    "text-yellow-500": guideWeapon.percent >= (minPercent + diffPercent) && guideWeapon.percent < (minPercent + (diffPercent * 2)),
                    "text-red-500": guideWeapon.percent < (minPercent + diffPercent),
                  })}
                >
                  {new Intl.NumberFormat(undefined, {
                    style: "percent",
                    minimumFractionDigits: 2,
                  }).format(guideWeapon.percent)}
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

function UpgradingTalents({ guideTalents }: UpgradingTalentsProps) {
  const talents = getTalents();

  return (
    <Table className="table-fixed">
      <TableBody>
        {(Object.entries(guideTalents) as [keyof typeof guideTalents, typeof guideTalents[keyof typeof guideTalents]][]).map(([guideTalentUid, guideTalent]) => (
          <TableRow key={guideTalentUid}>
            <TableHead className="p-2 whitespace-normal">{talents[guideTalentUid].name}</TableHead>
            <TableCell className="p-2 text-center whitespace-pre-line md:whitespace-normal">{guideTalent}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function Character() {
  const {
    character, characterElement, characterRoles, characterWeaponType, guideCharacter,
  } = useLoaderData<CharacterLoaderData>();

  return (
    <Container className="flex flex-col gap-2 md:gap-4">
      <Card>
        <CardContent>
          <div className="flex gap-6">
            <img
              alt={character.name}
              className="shrink-0 size-20 rounded-xl"
              src={character.small_image_src}
              style={{ backgroundColor: `var(${characterElement.color_var})` }}
            />
            <CardTitle className="self-center">{character.name}</CardTitle>
          </div>
          <Table className="table-fixed">
            <TableBody>
              <TableRow>
                <TableHead className="p-2 text-right">Качество</TableHead>
                <TableCell className="p-2">
                  <img alt={`${character.quality} Starts`} src={qualityImageSrc(character.quality)} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="p-2 text-right">Оружие</TableHead>
                <TableCell className="p-2">
                  <div className="flex gap-1 items-center">
                    <img
                      alt={`${characterWeaponType.name} Icon`}
                      className="shrink-0 size-5"
                      src={characterWeaponType.icon_src}
                    />
                    <span>{characterWeaponType.name}</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="p-2 text-right">Элемент</TableHead>
                <TableCell className="p-2">
                  <div className="flex gap-1 items-center">
                    <img alt={characterElement.name} className="shrink-0 size-5" src={characterElement.image_src} />
                    <span>{characterElement.name}</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="p-2 text-right">Роли</TableHead>
                <TableCell className="p-2">
                  <div className="flex flex-wrap gap-2">
                    {characterRoles.map((characterRole, index) => (
                      <Tooltip key={character.roles_uid[index]}>
                        <TooltipTrigger asChild>
                          <Badge className="rounded-full">
                            <img alt={characterRole.name} className="shrink-0 size-5" src={characterRole.icon_src} />
                            <span>{characterRole.name}</span>
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent
                          className={cn(
                            "max-w-[calc(var(--container-width)-(var(--container-padding-x)*2))] text-pretty",
                            "[--container-width:var(--radix-popper-available-width)]",
                            "[--container-padding-x:calc(var(--spacing)*4)]",
                            "sm:[--container-width:var(--breakpoint-sm)] md:[--container-width:var(--breakpoint-md)]",
                            "lg:[--container-width:var(--breakpoint-lg)]",
                            "lg:[--container-padding-x:calc(var(--spacing)*6)]",
                            "xl:[--container-width:var(--breakpoint-xl)] 2xl:[--container-width:var(--breakpoint-2xl)]",
                          )}
                        >
                          <p dangerouslySetInnerHTML={{ __html: characterRole.description }} />
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {guideCharacter !== undefined && (
        <Collapsible open asChild>
          <Card>
            <CardHeader>
              <CollapsibleTrigger asChild>
                <Button className="flex justify-between w-full" variant="secondary">
                  Гайд
                  <ChevronsUpDown />
                </Button>
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent asChild>
              <CardContent>
                {(
                  guideCharacter?.required_level !== undefined
                  || guideCharacter?.required_squad !== undefined
                  || guideCharacter?.key_constellations !== undefined
                  || guideCharacter?.first_constellation_or_signature_weapon !== undefined
                ) && (
                  <Table className="table-fixed">
                    <TableBody
                      className={cn({
                        "[&_tr:last-child]:border-b": guideCharacter.upgrading_talents !== undefined
                          || guideCharacter.suitable_weapons !== undefined
                          || guideCharacter.suitable_artifacts !== undefined
                          || guideCharacter.reference_point !== undefined,
                      })}
                    >
                      {guideCharacter?.required_level !== undefined && (
                        <TableRow>
                          <TableHead className="p-2 text-right whitespace-normal">Требуемый уровень</TableHead>
                          <TableCell className="p-2 whitespace-normal">{guideCharacter.required_level}</TableCell>
                        </TableRow>
                      )}
                      {guideCharacter?.required_squad !== undefined && (
                        <TableRow>
                          <TableHead className="p-2 text-right whitespace-normal">Требуемый отряд</TableHead>
                          <TableCell
                            className="p-2 whitespace-pre-line sm:whitespace-normal"
                            dangerouslySetInnerHTML={{ __html: guideCharacter.required_squad }}
                          />
                        </TableRow>
                      )}
                      {guideCharacter?.key_constellations !== undefined && (
                        <TableRow>
                          <TableHead className="p-2 text-right whitespace-normal">Ключевые созвездия</TableHead>
                          <TableCell className="p-2 whitespace-normal">
                            {guideCharacter.key_constellations.join(", ")}
                          </TableCell>
                        </TableRow>
                      )}
                      {guideCharacter?.first_constellation_or_signature_weapon !== undefined && (
                        <TableRow>
                          <TableHead className="p-2 text-right whitespace-normal">C1 или Сигна?</TableHead>
                          <TableCell className="p-2 whitespace-pre-line sm:whitespace-normal">
                            {guideCharacter.first_constellation_or_signature_weapon}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                )}
                {(
                  guideCharacter.upgrading_talents !== undefined
                  || guideCharacter.suitable_weapons !== undefined
                  || guideCharacter.suitable_artifacts !== undefined
                  || guideCharacter.reference_point !== undefined
                ) && (
                  <Accordion className="w-full" type="multiple">
                    {guideCharacter.upgrading_talents !== undefined && (
                      <AccordionItem value="upgrading_talents">
                        <AccordionTrigger>Прокачивание талантов</AccordionTrigger>
                        <AccordionContent>
                          <UpgradingTalents guideTalents={guideCharacter.upgrading_talents} />
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {guideCharacter.suitable_weapons !== undefined && (
                      <AccordionItem value="suitable_weapons">
                        <AccordionTrigger>Оружие</AccordionTrigger>
                        <AccordionContent>
                          <SuitableWeapons character={character} guideWeapons={guideCharacter.suitable_weapons} />
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {guideCharacter.suitable_artifacts !== undefined && (
                      <AccordionItem value="suitable_artifacts">
                        <AccordionTrigger>Артефакты</AccordionTrigger>
                        <AccordionContent>
                          <SuitableArtifacts character={character} guideArtifacts={guideCharacter.suitable_artifacts} />
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {guideCharacter.reference_point !== undefined && (
                      <AccordionItem value="reference_point">
                        <AccordionTrigger>Ориентир</AccordionTrigger>
                        <AccordionContent>
                          <ReferencePoint items={guideCharacter.reference_point} />
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </Accordion>
                )}
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      )}
    </Container>
  );
}

import { ChevronsUpDown } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "@/components/container";
import Paths from "@/paths";
import VK from "@/icons/VK";
import Youtube from "@/icons/Youtube";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArtifactPieceUidEnum } from "@/database/enums/artifact-pieces";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  getArtifactSet, getAttribute, getCharacter, getCharacterRole, getElement, getGuideCharacter, getTalent, getWeapon,
  getWeaponType, qualityImageSrc,
} from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type {
  GuideCharacterAssemblyWeapons, GuideCharacterPriorityOfTalentLeveling, GuideCharacterReferencePoint,
  GuideCharacterSquadsItem,
} from "@/database/types/guide-characters";

type AssemblyArtifactsProps = {
  assemblyArtifacts: NonNullable<NonNullable<CharacterLoaderData["characterGuide"]>["assembly_artifacts"]>;
  character: CharacterLoaderData["character"];
};
type AssemblyWeaponsProps = {
  assemblyWeapons: NonNullable<NonNullable<CharacterLoaderData["characterGuide"]>["assembly_weapons"]>;
  character: CharacterLoaderData["character"];
};
type AssemblyWeaponsTableProps = {
  assemblyWeapons: GuideCharacterAssemblyWeapons;
  character: AssemblyWeaponsProps["character"];
};
type PriorityOfTalentLevelingProps = {
  priorityOfTalentLeveling: NonNullable<NonNullable<CharacterLoaderData["characterGuide"]>["priority_of_talent_leveling"]>;
};
type PriorityOfTalentLevelingTableProps = {
  priorityOfTalentLeveling: GuideCharacterPriorityOfTalentLeveling;
};
type ReferencePointProps = {
  referencePoint: NonNullable<NonNullable<CharacterLoaderData["characterGuide"]>["reference_point"]>;
};
type ReferencePointTableProps = {
  referencePoint: GuideCharacterReferencePoint;
};
type RotationProps = {
  rotation: NonNullable<NonNullable<CharacterLoaderData["characterGuide"]>["rotation"]>;
};
type SquadsProps = {
  squads: NonNullable<NonNullable<CharacterLoaderData["characterGuide"]>["squads"]>;
};

export type CharacterLoaderData = {
  character: Awaited<ReturnType<typeof getCharacter>>;
  characterElement: Awaited<ReturnType<typeof getElement>>;
  characterGuide: Awaited<ReturnType<typeof getGuideCharacter>>;
  characterRoles: Awaited<ReturnType<typeof getCharacterRole>>[];
  characterWeaponType: Awaited<ReturnType<typeof getWeaponType>>;
};

function AssemblyArtifacts({ assemblyArtifacts, character }: AssemblyArtifactsProps) {
  const [setsDiffPercent, setSetsDiffPercent] = useState(0);
  const [setsMinPercent, setSetsMinPercent] = useState(0);

  useEffect(() => {
    let setsMaxPercent = -Infinity, setsMinPercent = Infinity;

    assemblyArtifacts.sets.map((assemblyArtifactSet) => {
      if (assemblyArtifactSet.percent) {
        if (assemblyArtifactSet.percent > setsMaxPercent) {
          setsMaxPercent = assemblyArtifactSet.percent;
        }

        if (assemblyArtifactSet.percent < setsMinPercent) {
          setsMinPercent = assemblyArtifactSet.percent;
        }
      }
    });

    if (setsMaxPercent !== -Infinity && setsMinPercent !== Infinity) {
      setSetsDiffPercent((setsMaxPercent - setsMinPercent) / 3);
      setSetsMinPercent(setsMinPercent);
    }
  }, [assemblyArtifacts]);

  return (
    <Table>
      <TableBody>
        {assemblyArtifacts.sets.map((assemblyArtifactSet, index) => {
          const artifactSet = getArtifactSet(assemblyArtifactSet.uid);

          return (
            <TableRow className="hover:bg-inherit" key={artifactSet.uid}>
              {index === 0 && (
                <TableHead className="p-2 w-min text-right" rowSpan={assemblyArtifacts.sets.length}>Набор</TableHead>
              )}
              <TableCell className="p-2 min-w-42.5">
                <Badge
                  asChild
                  className="flex justify-start w-full text-balance whitespace-normal"
                  variant="secondary"
                >
                  <Link to={Paths.ArtifactSet(artifactSet.uid)}>
                    <img
                      alt={artifactSet.name}
                      className="shrink-0 size-8 rounded-md"
                      src={artifactSet[ArtifactPieceUidEnum.FlowerOfLife].image_src}
                    />
                    <span>
                      {artifactSet.name}
                      {artifactSet.uid === character.signature_artifact_set_uid && " (сигнатурное)"}
                    </span>
                  </Link>
                </Badge>
              </TableCell>
              {assemblyArtifactSet.percent !== undefined && (
                <TableCell
                  className={cn({
                    "text-green-500": assemblyArtifactSet.percent >= (setsMinPercent + (setsDiffPercent * 2)),
                    "text-yellow-500": assemblyArtifactSet.percent >= (setsMinPercent + setsDiffPercent) && assemblyArtifactSet.percent < (setsMinPercent + (setsDiffPercent * 2)),
                    "text-red-500": assemblyArtifactSet.percent < (setsMinPercent + setsDiffPercent),
                  })}
                >
                  {new Intl.NumberFormat(undefined, {
                    style: "percent",
                    minimumFractionDigits: 2,
                  }).format(assemblyArtifactSet.percent)}
                </TableCell>
              )}
              <TableCell
                className="text-balance whitespace-pre-line"
                colSpan={assemblyArtifactSet.percent === undefined ? 2 : 1}
              >
                {assemblyArtifactSet.description}
              </TableCell>
            </TableRow>
          );
        })}
        {(Object.keys(assemblyArtifacts.attributes) as (keyof typeof assemblyArtifacts.attributes)[]).map((assemblyArtifactAttributesKey) => {
          return assemblyArtifacts.attributes[assemblyArtifactAttributesKey].map((assemblyArtifactAttribute, index) => {
            const attribute = getAttribute(assemblyArtifactAttribute.uid);

            return (
              <TableRow
                className="hover:bg-inherit"
                key={`${assemblyArtifactAttributesKey}-${assemblyArtifactAttribute.uid}`}
              >
                {index === 0 && (
                  <TableHead
                    className="p-2 w-min text-right"
                    rowSpan={assemblyArtifacts.attributes[assemblyArtifactAttributesKey].length}
                  >
                    {assemblyArtifactAttributesKey === ArtifactPieceUidEnum.SandsOfEon && "Часы"}
                    {assemblyArtifactAttributesKey === ArtifactPieceUidEnum.GobletOfEonothem && "Кубок"}
                    {assemblyArtifactAttributesKey === ArtifactPieceUidEnum.CircletOfLogos && "Корона"}
                    {assemblyArtifactAttributesKey === "additional" && "Доп."}
                  </TableHead>
                )}
                <TableCell className="p-2 min-w-39.5">
                  <Badge
                    className="flex justify-start w-full text-balance whitespace-normal"
                    variant="secondary"
                  >
                    {attribute.abbreviation}
                  </Badge>
                </TableCell>
                {assemblyArtifactAttribute.percent !== undefined && (
                  <TableCell
                    className={cn({
                      "text-green-500": assemblyArtifactAttribute.percent >= 0.5,
                      "text-yellow-500": assemblyArtifactAttribute.percent >= 0.25 && assemblyArtifactAttribute.percent < 0.5,
                      "text-red-500": assemblyArtifactAttribute.percent < 0.25,
                    })}
                  >
                    {new Intl.NumberFormat(undefined, {
                      style: "percent",
                      minimumFractionDigits: 1,
                    }).format(assemblyArtifactAttribute.percent)}
                  </TableCell>
                )}
                <TableCell
                  className="text-balance whitespace-pre-line"
                  colSpan={assemblyArtifactAttribute.percent === undefined ? 2 : 1}
                >
                  {assemblyArtifactAttribute.description}
                </TableCell>
              </TableRow>
            );
          });
        })}
      </TableBody>
    </Table>
  );
}

function AssemblyWeapons({ assemblyWeapons, character }: AssemblyWeaponsProps) {
  if (Array.isArray(assemblyWeapons)) {
    return (
      <AssemblyWeaponsTable assemblyWeapons={assemblyWeapons} character={character} />
    );
  }

  const assemblyWeaponsEntries = Object.entries(assemblyWeapons);

  return (
    <Tabs defaultValue={assemblyWeaponsEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full h-auto min-h-9">
        {assemblyWeaponsEntries.map(([key]) => (
          <TabsTrigger key={key} value={key}>{key}</TabsTrigger>
        ))}
      </TabsList>
      {assemblyWeaponsEntries.map(([key, assemblyWeapons]) => (
        <TabsContent key={key} value={key}>
          <AssemblyWeaponsTable assemblyWeapons={assemblyWeapons} character={character} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function AssemblyWeaponsTable({ assemblyWeapons, character }: AssemblyWeaponsTableProps) {
  const [diffPercent, setDiffPercent] = useState(0);
  const [minPercent, setMinPercent] = useState(0);

  useEffect(() => {
    let maxPercent = -Infinity, minPercent = Infinity;

    assemblyWeapons.map((assemblyWeapon) => {
      if (assemblyWeapon.percent) {
        if (assemblyWeapon.percent > maxPercent) {
          maxPercent = assemblyWeapon.percent;
        }

        if (assemblyWeapon.percent < minPercent) {
          minPercent = assemblyWeapon.percent;
        }
      }
    });

    if (maxPercent !== -Infinity && minPercent !== Infinity) {
      setDiffPercent((maxPercent - minPercent) / 3);
      setMinPercent(minPercent);
    }
  }, [assemblyWeapons]);

  return (
    <Table className="sm:table-fixed">
      <TableBody>
        {assemblyWeapons.map((assemblyWeapon) => {
          const weapon = getWeapon(assemblyWeapon.uid);

          return (
            <TableRow
              className="hover:bg-inherit"
              key={
                assemblyWeapon.uid
                + (assemblyWeapon.refinement === undefined ? "" : `-r${assemblyWeapon.refinement}`)
                + (assemblyWeapon.postfix === undefined ? "" : `-${assemblyWeapon.postfix}`)
              }
            >
              <TableHead className="whitespace-normal">
                <div className="flex gap-2 items-center">
                  <img alt={weapon.name} className="shrink-0 size-10" src={weapon.image_src} />
                  <span className="py-2">
                    {weapon.name}
                    {assemblyWeapon.refinement !== undefined && ` R${assemblyWeapon.refinement}`}
                    {` [${weapon.quality}⭐]`}
                    {assemblyWeapon.uid === character.signature_weapon_uid && " (сигнатурное)"}
                    {assemblyWeapon.postfix !== undefined && (
                      <>
                        {" "}
                        <sub>{assemblyWeapon.postfix}</sub>
                      </>
                    )}
                  </span>
                </div>
              </TableHead>
              {assemblyWeapon.percent !== undefined && (
                <TableCell
                  className={cn("text-center", {
                    "text-green-500": assemblyWeapon.percent >= (minPercent + (diffPercent * 2)),
                    "text-yellow-500": assemblyWeapon.percent >= (minPercent + diffPercent) && assemblyWeapon.percent < (minPercent + (diffPercent * 2)),
                    "text-red-500": assemblyWeapon.percent < (minPercent + diffPercent),
                  })}
                >
                  {new Intl.NumberFormat(undefined, {
                    style: "percent",
                    minimumFractionDigits: 2,
                  }).format(assemblyWeapon.percent)}
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

function PriorityOfTalentLeveling({ priorityOfTalentLeveling }: PriorityOfTalentLevelingProps) {
  if (Array.isArray(priorityOfTalentLeveling)) {
    return (
      <PriorityOfTalentLevelingTable priorityOfTalentLeveling={priorityOfTalentLeveling} />
    );
  }

  const priorityOfTalentLevelingEntries = Object.entries(priorityOfTalentLeveling);

  return (
    <Tabs defaultValue={priorityOfTalentLevelingEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full h-auto min-h-9">
        {priorityOfTalentLevelingEntries.map(([key]) => (
          <TabsTrigger key={key} value={key}>{key}</TabsTrigger>
        ))}
      </TabsList>
      {priorityOfTalentLevelingEntries.map(([key, priorityOfTalentLeveling]) => (
        <TabsContent key={key} value={key}>
          <PriorityOfTalentLevelingTable priorityOfTalentLeveling={priorityOfTalentLeveling} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function PriorityOfTalentLevelingTable({ priorityOfTalentLeveling }: PriorityOfTalentLevelingTableProps) {
  return (
    <Table className="table-fixed">
      <TableBody>
        {priorityOfTalentLeveling.map((item) => {
          const talent = getTalent(item.uid);

          return (
            <TableRow className="hover:bg-inherit" key={item.uid}>
              <TableHead className="p-2 whitespace-normal">{talent.name}</TableHead>
              <TableCell className="p-2 text-center whitespace-pre-line md:whitespace-normal">
                {item.priority}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

function ReferencePoint({ referencePoint }: ReferencePointProps) {
  if (Array.isArray(referencePoint)) {
    return (
      <ReferencePointTable referencePoint={referencePoint} />
    );
  }

  const referencePointEntries = Object.entries(referencePoint);

  return (
    <Tabs defaultValue={referencePointEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full h-auto min-h-9">
        {referencePointEntries.map(([key]) => (
          <TabsTrigger className="whitespace-pre" key={key} value={key}>{key}</TabsTrigger>
        ))}
      </TabsList>
      {referencePointEntries.map(([key, referencePoint]) => (
        <TabsContent key={key} value={key}>
          <ReferencePointTable referencePoint={referencePoint} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function ReferencePointTable({ referencePoint }: ReferencePointTableProps) {
  return (
    <Table className="table-fixed">
      <TableBody>
        {referencePoint.map(([referencePointKey, referencePointValue], index) => (
          <TableRow className="hover:bg-inherit" key={index}>
            <TableHead className="text-left">{referencePointKey}</TableHead>
            <TableCell className="text-right">{referencePointValue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function Rotation({ rotation }: RotationProps) {
  if (typeof rotation === "string") {
    return (
      <p>{rotation}</p>
    );
  }

  return (
    <Table>
      <TableBody>
        {Object.entries(rotation).map(([rotationKey, rotationValue], index) => (
          <TableRow className="hover:bg-inherit" key={index}>
            <TableHead className="p-2 text-left">{rotationKey}</TableHead>
            <TableCell className="p-2 text-center text-pretty whitespace-normal">{rotationValue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function Squads({ squads }: SquadsProps) {
  return (
    <Table>
      <TableBody>
        {squads.general_template.map((squadsGeneralTemplateUnit, index) => (
          <TableRow className="hover:bg-inherit" key={index}>
            {index === 0 && (
              <TableHead rowSpan={squads.general_template.length}>Общий шаблон</TableHead>
            )}
            <TableCell>
              {Array.isArray(squadsGeneralTemplateUnit)
                ? (
                    <div className="flex flex-wrap gap-2" key={index + 1}>
                      {squadsGeneralTemplateUnit.map((squadsGeneralTemplateItem, index) => (
                        <SquadsItem key={index} {...squadsGeneralTemplateItem} />
                      ))}
                    </div>
                  )
                : (
                    <SquadsItem {...squadsGeneralTemplateUnit} />
                  )}
            </TableCell>
          </TableRow>
        ))}
        <TableRow className="hover:bg-inherit">
          <TableHead>Лучшие тиммейты</TableHead>
          <TableCell>
            <div className="flex flex-wrap gap-2">
              {squads.best_teammates.map((squadsBestTeammate, index) => (
                <SquadsItem key={index} {...squadsBestTeammate} />
              ))}
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function SquadsItem({ type, uid }: GuideCharacterSquadsItem) {
  switch (type) {
    case "character": {
      const character = getCharacter(uid);

      return (
        <Badge asChild variant="secondary">
          <Link to={Paths.Character(uid)}>
            <img alt={character.name} className="shrink-0 size-8 rounded-md" src={character.small_image_src} />
            <span>{character.name}</span>
          </Link>
        </Badge>
      );
    }
    case "element": {
      const element = getElement(uid);

      return (
        <Badge variant="secondary">
          <img alt={element.name} className="shrink-0 size-8 rounded-md" src={element.image_src} />
          <span>{`${element.name} герой`}</span>
        </Badge>
      );
    }
  }
}

export default function Character() {
  const {
    character, characterElement, characterGuide, characterRoles, characterWeaponType,
  } = useLoaderData<CharacterLoaderData>();

  return (
    <Container className="flex flex-col gap-2 md:gap-4">
      <Card className="items-center px-6 sm:flex-row">
        <div className="flex shrink-0 gap-6 items-center self-start sm:flex-col">
          <img
            alt={character.name}
            className="shrink-0 size-20 rounded-xl"
            src={character.small_image_src}
            style={{ backgroundColor: `var(${characterElement.color_var})` }}
          />
          <CardTitle>{character.name}</CardTitle>
        </div>
        <Table className="flex-1">
          <TableBody>
            <TableRow className="hover:bg-inherit">
              <TableHead className="p-2 text-right">Качество</TableHead>
              <TableCell className="p-2">
                <img alt={`${character.quality} Starts`} src={qualityImageSrc(character.quality)} />
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
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
            <TableRow className="hover:bg-inherit">
              <TableHead className="p-2 text-right">Элемент</TableHead>
              <TableCell className="p-2">
                <div className="flex gap-1 items-center">
                  <img
                    alt={characterElement.name}
                    className="shrink-0 size-5"
                    src={characterElement.image_src}
                  />
                  <span>{characterElement.name}</span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-inherit">
              <TableHead className="p-2 text-right">Роли</TableHead>
              <TableCell className="p-2">
                <div className="flex flex-wrap gap-2">
                  {characterRoles.map((characterRole, index) => (
                    <Tooltip key={character.roles_uid[index]}>
                      <TooltipTrigger asChild>
                        <Badge className="rounded-full">
                          <img
                            alt={characterRole.name}
                            className="shrink-0 size-5"
                            src={characterRole.icon_src}
                          />
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
      </Card>
      {characterGuide !== undefined && (
        <Collapsible defaultOpen asChild>
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
                  characterGuide.first_constellation_or_signature_weapon !== undefined
                  || characterGuide.key_constellations !== undefined
                  || characterGuide.required_level !== undefined
                ) && (
                  <Table className="table-fixed">
                    <TableBody
                      className={cn({
                        "[&_tr:last-child]:border-b": characterGuide.assembly_artifacts !== undefined
                          || characterGuide.assembly_weapons !== undefined
                          || characterGuide.priority_of_talent_leveling !== undefined
                          || characterGuide.reference_point !== undefined
                          || characterGuide.rotation !== undefined
                          || characterGuide.squads !== undefined
                          || characterGuide.video_sources !== undefined,
                      })}
                    >
                      {characterGuide?.key_constellations !== undefined && (
                        <TableRow className="hover:bg-inherit">
                          <TableHead className="p-2 text-right whitespace-normal">Ключевые созвездия</TableHead>
                          <TableCell className="p-2 whitespace-normal">
                            {characterGuide.key_constellations.join(", ")}
                          </TableCell>
                        </TableRow>
                      )}
                      {characterGuide?.first_constellation_or_signature_weapon !== undefined && (
                        <TableRow className="hover:bg-inherit">
                          <TableHead className="p-2 text-right whitespace-normal">
                            C1 или
                            Сигна?
                          </TableHead>
                          <TableCell className="p-2 whitespace-pre-line sm:whitespace-normal">
                            {characterGuide.first_constellation_or_signature_weapon}
                          </TableCell>
                        </TableRow>
                      )}
                      {characterGuide?.required_level !== undefined && (
                        <TableRow className="hover:bg-inherit">
                          <TableHead className="p-2 text-right whitespace-normal">
                            Требуемый
                            уровень
                          </TableHead>
                          <TableCell className="p-2 whitespace-normal">{characterGuide.required_level}</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                )}
                {(
                  characterGuide.assembly_artifacts !== undefined
                  || characterGuide.assembly_weapons !== undefined
                  || characterGuide.priority_of_talent_leveling !== undefined
                  || characterGuide.reference_point !== undefined
                  || characterGuide.rotation !== undefined
                  || characterGuide.squads !== undefined
                  || characterGuide.video_sources !== undefined
                ) && (
                  <Accordion className="w-full" type="multiple">
                    {characterGuide.rotation !== undefined && (
                      <AccordionItem value="rotation">
                        <AccordionTrigger>Ротация</AccordionTrigger>
                        <AccordionContent>
                          <Rotation rotation={characterGuide.rotation} />
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {characterGuide.priority_of_talent_leveling !== undefined && (
                      <AccordionItem value="priority_of_talent_leveling">
                        <AccordionTrigger>Приоритет прокачки талантов</AccordionTrigger>
                        <AccordionContent>
                          <PriorityOfTalentLeveling priorityOfTalentLeveling={characterGuide.priority_of_talent_leveling} />
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {characterGuide.squads !== undefined && (
                      <AccordionItem value="squads_general_template">
                        <AccordionTrigger>Отряды</AccordionTrigger>
                        <AccordionContent>
                          <Squads squads={characterGuide.squads} />
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {characterGuide.assembly_artifacts !== undefined && (
                      <AccordionItem value="assembly_artifacts">
                        <AccordionTrigger>Сборка: Артефакты</AccordionTrigger>
                        <AccordionContent>
                          <AssemblyArtifacts
                            assemblyArtifacts={characterGuide.assembly_artifacts}
                            character={character}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {characterGuide.assembly_weapons !== undefined && (
                      <AccordionItem value="assembly_weapons">
                        <AccordionTrigger>Сборка: Оружие</AccordionTrigger>
                        <AccordionContent>
                          <AssemblyWeapons assemblyWeapons={characterGuide.assembly_weapons} character={character} />
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {characterGuide.reference_point !== undefined && (
                      <AccordionItem value="reference_point">
                        <AccordionTrigger>Ориентир</AccordionTrigger>
                        <AccordionContent>
                          <ReferencePoint referencePoint={characterGuide.reference_point} />
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {characterGuide.video_sources !== undefined && (
                      <AccordionItem value="video_sources">
                        <AccordionTrigger>Видео-источники</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-inside list-disc">
                            {characterGuide.video_sources.map((videoSource, index) => (
                              <li key={index}>
                                <div className="inline-flex gap-2 items-center">
                                  <span>{videoSource.title}</span>
                                  {videoSource.vk_url !== undefined && (
                                    <Button asChild className="size-8" size="icon">
                                      <a href={videoSource.vk_url} target="_blank">
                                        <VK className="size-7" />
                                      </a>
                                    </Button>
                                  )}
                                  <Button asChild className="size-8" size="icon">
                                    <a href={videoSource.youtube_url} target="_blank">
                                      <Youtube className="size-7" />
                                    </a>
                                  </Button>
                                </div>
                              </li>
                            ))}
                          </ul>
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

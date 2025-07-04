import { ChevronDownIcon } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "@/components/container";
import Paths from "@/constants/paths";
import VK from "@/icons/VK";
import Youtube from "@/icons/Youtube";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArtifactPieceUidEnum } from "@/database/enums/artifact-pieces";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn, publicImageSrc } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  getArtifactSet, getAttribute, getCharacter, getCharacterRole, getElement, getGuideCharacter, getTalent, getWeapon,
  getWeaponType,
} from "@/database";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type {
  GuideCharacterAssemblyWeapons, GuideCharacterPriorityOfTalentLeveling, GuideCharacterReferencePoint,
  GuideCharacterSquadsItem,
} from "@/database/types/guide-characters";

type ArtifactAttributesRecommendationsProps = {
  artifactAttributesRecommendations: ArtifactRecommendationsProps["artifactRecommendations"]["attributes"];
};
type ArtifactRecommendationsProps = {
  artifactRecommendations: NonNullable<NonNullable<CharacterLoaderData["characterGuide"]>["artifact_recommendations"]>;
  character: CharacterLoaderData["character"];
};
type ArtifactSetsRecommendationsProps = {
  artifactSetsRecommendations: ArtifactRecommendationsProps["artifactRecommendations"]["sets"];
  character: ArtifactRecommendationsProps["character"];
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

function ArtifactAttributesRecommendations({ artifactAttributesRecommendations }: ArtifactAttributesRecommendationsProps) {
  const [hasDescription, setHasDescription] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);
  const [hasPercent, setHasPercent] = useState(false);
  const [hasUsePercent, setHasUsePercent] = useState(false);
  const artifactAttributesRecommendationsKeys = Object.keys(artifactAttributesRecommendations) as (keyof typeof artifactAttributesRecommendations)[];

  useEffect(() => {
    setHasDescription(artifactAttributesRecommendationsKeys.some((artifactAttributesRecommendationsKey) => {
      return artifactAttributesRecommendations[artifactAttributesRecommendationsKey].some((artifactAttributeRecommendations) => {
        return artifactAttributeRecommendations.description !== undefined;
      });
    }));
    setHasNotes(artifactAttributesRecommendationsKeys.some((artifactAttributesRecommendationsKey) => {
      return artifactAttributesRecommendations[artifactAttributesRecommendationsKey].some((artifactAttributeRecommendations) => {
        return artifactAttributeRecommendations.notes !== undefined;
      });
    }));
    setHasPercent(artifactAttributesRecommendationsKeys.some((artifactAttributesRecommendationsKey) => {
      return artifactAttributesRecommendations[artifactAttributesRecommendationsKey].some((artifactAttributeRecommendations) => {
        return artifactAttributeRecommendations.percent !== undefined;
      });
    }));
    setHasUsePercent(artifactAttributesRecommendationsKeys.some((artifactAttributesRecommendationsKey) => {
      return artifactAttributesRecommendations[artifactAttributesRecommendationsKey].some((artifactAttributeRecommendations) => {
        return artifactAttributeRecommendations.use_percent !== undefined;
      });
    }));
  }, [artifactAttributesRecommendations, artifactAttributesRecommendationsKeys]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead className="text-center">Характеристики</TableHead>
          {hasPercent && <TableHead />}
          {hasUsePercent && (
            <TableHead className="py-2 h-auto min-h-10 text-center whitespace-normal">Процент использования</TableHead>
          )}
          {hasDescription && <TableHead />}
          {hasNotes && <TableHead className="text-center">Заметки</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {artifactAttributesRecommendationsKeys.map((artifactAttributesRecommendationsKey) => {
          return artifactAttributesRecommendations[artifactAttributesRecommendationsKey].map((artifactAttributeRecommendations, index) => {
            const attribute = getAttribute(artifactAttributeRecommendations.uid);

            return (
              <TableRow
                className="hover:bg-inherit"
                key={`${artifactAttributesRecommendationsKey}-${artifactAttributeRecommendations.uid}`}
              >
                {index === 0 && (
                  <TableHead
                    className="p-2 w-18"
                    rowSpan={artifactAttributesRecommendations[artifactAttributesRecommendationsKey].length}
                  >
                    {artifactAttributesRecommendationsKey === ArtifactPieceUidEnum.SandsOfEon && "Часы"}
                    {artifactAttributesRecommendationsKey === ArtifactPieceUidEnum.GobletOfEonothem && "Кубок"}
                    {artifactAttributesRecommendationsKey === ArtifactPieceUidEnum.CircletOfLogos && "Корона"}
                    {artifactAttributesRecommendationsKey === "additional" && "Доп."}
                  </TableHead>
                )}
                <TableCell className="text-pretty whitespace-normal">
                  <Badge
                    className="flex justify-center w-full text-center text-pretty whitespace-normal"
                    variant="secondary"
                  >
                    {attribute.abbreviation || attribute.name}
                  </Badge>
                </TableCell>
                {hasPercent && (
                  <TableCell
                    className={cn(artifactAttributeRecommendations.percent !== undefined && {
                      "text-green-500": artifactAttributeRecommendations.percent >= 0.5,
                      "text-yellow-500": artifactAttributeRecommendations.percent >= 0.25 && artifactAttributeRecommendations.percent < 0.5,
                      "text-red-500": artifactAttributeRecommendations.percent < 0.25,
                    })}
                  >
                    {artifactAttributeRecommendations.percent !== undefined
                      ? new Intl.NumberFormat(undefined, {
                          style: "percent",
                          minimumFractionDigits: 1,
                        }).format(artifactAttributeRecommendations.percent)
                      : ""}
                  </TableCell>
                )}
                {hasUsePercent && (
                  <TableCell
                    className={cn(
                      "text-center",
                      artifactAttributeRecommendations.use_percent !== undefined && {
                        "text-green-500": artifactAttributeRecommendations.use_percent >= 0.5,
                        "text-yellow-500": artifactAttributeRecommendations.use_percent >= 0.25 && artifactAttributeRecommendations.use_percent < 0.5,
                        "text-red-500": artifactAttributeRecommendations.use_percent < 0.25,
                      },
                    )}
                  >
                    {artifactAttributeRecommendations.use_percent !== undefined
                      ? new Intl.NumberFormat(undefined, {
                          style: "percent",
                          minimumFractionDigits: 1,
                        }).format(artifactAttributeRecommendations.use_percent)
                      : ""}
                  </TableCell>
                )}
                {hasDescription && (
                  <TableCell className="text-pretty whitespace-normal">
                    {artifactAttributeRecommendations.description}
                  </TableCell>
                )}
                {hasNotes && (
                  <TableCell className="text-pretty whitespace-normal">
                    {artifactAttributeRecommendations.notes !== undefined && (
                      <ul className="ml-4 list-outside list-disc">
                        {artifactAttributeRecommendations.notes.map((note, index) => (
                          <li key={index}>{note}</li>
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

function ArtifactRecommendations({ artifactRecommendations, character }: ArtifactRecommendationsProps) {
  return (
    <div className="flex flex-col gap-4">
      <ArtifactSetsRecommendations artifactSetsRecommendations={artifactRecommendations.sets} character={character} />
      <ArtifactAttributesRecommendations artifactAttributesRecommendations={artifactRecommendations.attributes} />
    </div>
  );
}

function ArtifactSetsRecommendations({ artifactSetsRecommendations, character }: ArtifactSetsRecommendationsProps) {
  const [diffPercent, setDiffPercent] = useState(0);
  const [hasDescription, setHasDescription] = useState(false);
  const [hasIsBetter, setHasIsBetter] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);
  const [hasPercent, setHasPercent] = useState(false);
  const [minPercent, setMinPercent] = useState(0);

  useEffect(() => {
    const hasPercent = artifactSetsRecommendations.some((artifactSetRecommendations) => {
      return artifactSetRecommendations.percent !== undefined;
    });

    setHasDescription(artifactSetsRecommendations.some((artifactSetRecommendations) => {
      return artifactSetRecommendations.description !== undefined;
    }));
    setHasIsBetter(artifactSetsRecommendations.some((artifactSetRecommendations) => {
      return artifactSetRecommendations.is_better === true;
    }));
    setHasNotes(artifactSetsRecommendations.some((artifactSetRecommendations) => {
      return artifactSetRecommendations.notes !== undefined;
    }));
    setHasPercent(hasPercent);

    if (hasPercent) {
      let maxPercent = -Infinity, minPercent = Infinity;

      artifactSetsRecommendations.map((artifactSetRecommendations) => {
        if (artifactSetRecommendations.percent) {
          if (artifactSetRecommendations.percent > maxPercent) {
            maxPercent = artifactSetRecommendations.percent;
          }

          if (artifactSetRecommendations.percent < minPercent) {
            minPercent = artifactSetRecommendations.percent;
          }
        }
      });

      if (maxPercent !== -Infinity && minPercent !== Infinity) {
        setDiffPercent((maxPercent - minPercent) / 3);
        setMinPercent(minPercent);
      }
    }
  }, [artifactSetsRecommendations]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {hasIsBetter && <TableHead />}
          <TableHead className="text-center">Наборы</TableHead>
          {hasPercent && <TableHead />}
          {hasDescription && <TableHead />}
          {hasNotes && <TableHead className="text-center">Заметки</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {artifactSetsRecommendations.map((artifactSetRecommendations) => {
          const artifactSet = getArtifactSet(artifactSetRecommendations.uid);

          return (
            <TableRow className="hover:bg-inherit" key={artifactSet.uid}>
              {hasIsBetter && (
                <TableCell className="w-16">
                  {artifactSetRecommendations.is_better && (
                    <img
                      alt="Является лучшим выбором"
                      className="size-12 rounded-full"
                      src={publicImageSrc("better-logo-128x128.png")}
                    />
                  )}
                </TableCell>
              )}
              <TableCell className="text-pretty whitespace-normal sm:w-48">
                <Badge
                  asChild
                  className={cn(
                    "flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal",
                    "sm:flex-row sm:text-left",
                  )}
                  variant="secondary"
                >
                  <Link to={Paths.ArtifactSet(artifactSet.uid)}>
                    <img
                      alt={artifactSet.name}
                      className={cn(
                        "shrink-0 size-12 bg-[linear-gradient(180deg,#323947,#4a5366)] rounded-md rounded-br-2xl",
                      )}
                      src={artifactSet[ArtifactPieceUidEnum.FlowerOfLife].image_src}
                    />
                    <span>
                      {artifactSet.name}
                      {artifactSet.uid === character.signature_artifact_set_uid && " (сигнатурное)"}
                    </span>
                  </Link>
                </Badge>
              </TableCell>
              {hasPercent && (
                <TableCell
                  className={cn(artifactSetRecommendations.percent !== undefined && {
                    "text-green-500": artifactSetRecommendations.percent >= (minPercent + (diffPercent * 2)),
                    "text-yellow-500": artifactSetRecommendations.percent >= (minPercent + diffPercent) && artifactSetRecommendations.percent < (minPercent + (diffPercent * 2)),
                    "text-red-500": artifactSetRecommendations.percent < (minPercent + diffPercent),
                  })}
                >
                  {artifactSetRecommendations.percent !== undefined
                    ? new Intl.NumberFormat(undefined, {
                        style: "percent",
                        minimumFractionDigits: 2,
                      }).format(artifactSetRecommendations.percent)
                    : ""}
                </TableCell>
              )}
              {hasDescription && (
                <TableCell className="text-pretty whitespace-normal">
                  {artifactSetRecommendations.description}
                </TableCell>
              )}
              {hasNotes && (
                <TableCell className="text-pretty whitespace-normal">
                  {artifactSetRecommendations.notes !== undefined && (
                    <ul className="ml-4 list-outside list-disc">
                      {artifactSetRecommendations.notes.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  )}
                </TableCell>
              )}
            </TableRow>
          );
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
            <img
              alt={character.name}
              className="shrink-0 size-8 rounded-md"
              src={character.small_image_src}
            />
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
      <Breadcrumb>
        <BreadcrumbList className="gap-1 text-xs sm:gap-2">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={Paths.Root}>Главная</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={Paths.Characters}>Персонажи</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{character.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-x-3">
        <img
          alt={character.name}
          className={cn(
            "shrink-0 size-16 rounded-md rounded-br-2xl",
            character.quality === 4 && "bg-[linear-gradient(180deg,#5e5789,#9c75b7)]",
            character.quality === 5 && "bg-[linear-gradient(180deg,#945c2c,#b27330)]",
          )}
          src={character.small_image_src}
        />
        <div className="space-y-1">
          <div className="flex gap-x-1 items-center">
            <h1 className="text-3xl">{character.name}</h1>
            <img alt={characterElement.name} className="size-6" src={characterElement.image_src} />
          </div>
          <div className="flex gap-x-1">
            {Array.from({ length: character.quality }, (_, i) => i).map(index => (
              <img
                alt="star"
                className="size-3.5"
                key={index + 1}
                src={publicImageSrc("star-icon-28x28.png")}
              />
            ))}
          </div>
        </div>
      </div>
      <Card>
        <Table>
          <TableBody>
            <TableRow className="hover:bg-inherit">
              <TableHead className="p-2 text-right">Имя</TableHead>
              <TableCell className="p-2">{character.name}</TableCell>
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
        <Collapsible className="space-y-2 md:space-y-4" defaultOpen>
          <CollapsibleTrigger asChild>
            <Button className="flex justify-between w-full [&[data-state=open]>svg]:rotate-180">
              Рекомендации по оружию, артефактам и отрядам
              <ChevronDownIcon className="transition-transform duration-200" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent asChild>
            <Card className="gap-0">
              {(
                characterGuide.first_constellation_or_signature_weapon !== undefined
                || characterGuide.key_constellations !== undefined
                || characterGuide.required_level !== undefined
              ) && (
                <Table className="table-fixed">
                  <TableBody
                    className={cn({
                      "[&_tr:last-child]:border-b": characterGuide.artifact_recommendations !== undefined
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
                        <TableHead className="p-2 text-right whitespace-normal">
                          Рекомендации по ключевым созвездиям
                        </TableHead>
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
                          Рекомендации по
                          уровню
                        </TableHead>
                        <TableCell className="p-2 whitespace-normal">{characterGuide.required_level}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              )}
              {(
                characterGuide.artifact_recommendations !== undefined
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
                      <AccordionTrigger className="px-6">
                        Рекомендации по
                        ротации
                      </AccordionTrigger>
                      <AccordionContent className="px-6">
                        <Rotation rotation={characterGuide.rotation} />
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {characterGuide.priority_of_talent_leveling !== undefined && (
                    <AccordionItem value="priority_of_talent_leveling">
                      <AccordionTrigger className="px-6">
                        Рекомендации по возвышению
                        талантов
                      </AccordionTrigger>
                      <AccordionContent className="px-6">
                        <PriorityOfTalentLeveling priorityOfTalentLeveling={characterGuide.priority_of_talent_leveling} />
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {characterGuide.assembly_weapons !== undefined && (
                    <AccordionItem value="assembly_weapons">
                      <AccordionTrigger className="px-6">Рекомендации по оружию</AccordionTrigger>
                      <AccordionContent className="px-6">
                        <AssemblyWeapons
                          assemblyWeapons={characterGuide.assembly_weapons}
                          character={character}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {characterGuide.artifact_recommendations !== undefined && (
                    <AccordionItem value="artifact_recommendations">
                      <AccordionTrigger className="px-6">
                        Рекомендации по
                        артефактам
                      </AccordionTrigger>
                      <AccordionContent className="px-6">
                        <ArtifactRecommendations
                          artifactRecommendations={characterGuide.artifact_recommendations}
                          character={character}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {characterGuide.squads !== undefined && (
                    <AccordionItem value="squads_general_template">
                      <AccordionTrigger className="px-6">
                        Рекомендации по
                        отрядам
                      </AccordionTrigger>
                      <AccordionContent className="px-6">
                        <Squads squads={characterGuide.squads} />
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {characterGuide.reference_point !== undefined && (
                    <AccordionItem value="reference_point">
                      <AccordionTrigger className="px-6">Ориентир</AccordionTrigger>
                      <AccordionContent className="px-6">
                        <ReferencePoint referencePoint={characterGuide.reference_point} />
                      </AccordionContent>
                    </AccordionItem>
                  )}
                  {characterGuide.video_sources !== undefined && (
                    <AccordionItem value="video_sources">
                      <AccordionTrigger className="px-6">Видео-источники</AccordionTrigger>
                      <AccordionContent className="px-6">
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
            </Card>
          </CollapsibleContent>
        </Collapsible>
      )}
    </Container>
  );
}

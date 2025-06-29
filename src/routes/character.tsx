import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "@/components/container";
import Paths from "@/paths";
import { ArtifactTypeUidEnum } from "@/database/enums/artifact-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ElementUidEnum } from "@/database/enums/elements";
import {
  getArtifactSet, getAttribute, getCharacter, getCharacterRole, getElement, getGuideCharacter, getTalents, getWeapon,
  getWeaponType, qualityImageSrc,
} from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { GuideCharacterReferencePoint, GuideCharacterWeapons } from "@/database/types/guide-characters";

type ReferencePointProps = {
  items: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["reference_point"]>;
};
type ReferencePointTableProps = {
  items: GuideCharacterReferencePoint;
};
type SuitableArtifactsProps = {
  character: CharacterLoaderData["character"];
  guideArtifacts: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["artifacts"]>;
};
type SuitableWeaponsProps = {
  character: CharacterLoaderData["character"];
  guideWeapons: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["weapons"]>;
};
type SuitableWeaponsTableProps = {
  character: SuitableWeaponsProps["character"];
  guideWeapons: GuideCharacterWeapons;
};
type UpgradingTalentsProps = {
  guideTalents: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["talents"]>;
};

export type CharacterLoaderData = {
  character: Awaited<ReturnType<typeof getCharacter>>;
  characterElement: Awaited<ReturnType<typeof getElement>>;
  characterRoles: Awaited<ReturnType<typeof getCharacterRole>>[];
  characterWeaponType: Awaited<ReturnType<typeof getWeaponType>>;
  guideCharacter: Awaited<ReturnType<typeof getGuideCharacter>>;
};

const TableRowClassName = cn([
  "text-center first:[&>*]:first:rounded-tl-xl first:[&>*]:last:rounded-tr-xl last:[&>*]:first:rounded-bl-lg",
  "last:[&>*]:last:rounded-br-lg",
]);

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
          <TabsTrigger key={value} value={value}>{value}</TabsTrigger>
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
    <Table>
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
  const [diffPercent, setDiffPercent] = useState(0);
  const [minPercent, setMinPercent] = useState(0);

  useEffect(() => {
    let maxPercent = -Infinity, minPercent = Infinity;

    guideArtifacts.sets.map((guideArtifactSet) => {
      if (guideArtifactSet.percent) {
        if (guideArtifactSet.percent > maxPercent) {
          maxPercent = guideArtifactSet.percent;
        }

        if (guideArtifactSet.percent < minPercent) {
          minPercent = guideArtifactSet.percent;
        }
      }
    });

    if (maxPercent !== -Infinity && minPercent !== Infinity) {
      setDiffPercent((maxPercent - minPercent) / 3);
      setMinPercent(minPercent);
    }
  }, [guideArtifacts.sets]);

  return (
    <Table>
      <TableBody>
        {guideArtifacts.sets.map((guideArtifactSet, index) => {
          const artifactSet = getArtifactSet(guideArtifactSet.uid);

          return (
            <TableRow className={cn(TableRowClassName, "text-left")} key={guideArtifactSet.uid}>
              {index === 0 && (
                <TableHead rowSpan={guideArtifacts.sets.length}>Набор</TableHead>
              )}
              <TableCell className="relative">
                <div className="flex gap-2 items-center whitespace-normal">
                  <img
                    alt={artifactSet.name}
                    className="shrink-0 size-10"
                    src={artifactSet[ArtifactTypeUidEnum.FlowerOfLife].image_src}
                  />
                  <Link className="before:absolute before:inset-0" to={Paths.ArtifactSet(guideArtifactSet.uid)}>
                    {artifactSet.name}
                    {guideArtifactSet.uid === character.signature_artifact_set_uid && " (сигнатурное)"}
                  </Link>
                </div>
              </TableCell>
              {guideArtifactSet.percent !== undefined && (
                <TableCell
                  className={cn({
                    "text-green-500": guideArtifactSet.percent >= (minPercent + (diffPercent * 2)),
                    "text-yellow-500": guideArtifactSet.percent >= (minPercent + diffPercent) && guideArtifactSet.percent < (minPercent + (diffPercent * 2)),
                    "text-red-500": guideArtifactSet.percent < (minPercent + diffPercent),
                  })}
                >
                  {new Intl.NumberFormat(undefined, {
                    style: "percent",
                    minimumFractionDigits: 2,
                  }).format(guideArtifactSet.percent)}
                </TableCell>
              )}
              <TableCell
                className="whitespace-pre-line md:whitespace-normal"
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
                className={cn(TableRowClassName, "text-left")}
                key={`${guideArtifactAttributesKey}-${guideArtifactAttribute.uid}`}
              >
                {index === 0 && (
                  <TableHead
                    className="whitespace-normal"
                    rowSpan={guideArtifacts.attributes[guideArtifactAttributesKey].length}
                  >
                    {guideArtifactAttributesKey === ArtifactTypeUidEnum.SandsOfEon && "Часы"}
                    {guideArtifactAttributesKey === ArtifactTypeUidEnum.GobletOfEonothem && "Кубок"}
                    {guideArtifactAttributesKey === ArtifactTypeUidEnum.CircletOfLogos && "Корона"}
                    {guideArtifactAttributesKey === "additional" && "Доп."}
                  </TableHead>
                )}
                <TableCell className="whitespace-normal">
                  {attribute.name}
                </TableCell>
                <TableCell className="whitespace-pre-line" colSpan={2}>
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
    <Table>
      <TableBody>
        {guideWeapons.map((guideWeapon) => {
          const weapon = getWeapon(guideWeapon.uid);

          return (
            <TableRow
              className={cn(
                "text-center first:[&>*]:first:rounded-tl-xl first:[&>*]:last:rounded-tr-xl",
                "last:[&>*]:first:rounded-bl-lg last:[&>*]:last:rounded-br-lg",
              )}
              key={
                guideWeapon.uid
                + (guideWeapon.refinement === undefined ? "" : `-r${guideWeapon.refinement}`)
                + (guideWeapon.postfix === undefined ? "" : `-${guideWeapon.postfix}`)
              }
            >
              <TableHead className="flex gap-2 items-center whitespace-normal">
                <img alt={weapon.name} className="shrink-0 size-10" src={weapon.image_src} />
                <span>
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
              </TableHead>
              {guideWeapon.percent !== undefined && (
                <TableCell
                  className={cn({
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
    <Table>
      <TableBody>
        {(Object.entries(guideTalents) as [keyof typeof guideTalents, typeof guideTalents[keyof typeof guideTalents]][]).map(([guideTalentUid, guideTalent]) => (
          <TableRow
            className={cn(
              "text-center first:[&>*]:first:rounded-tl-xl first:[&>*]:last:rounded-tr-xl",
              "last:[&>*]:first:rounded-bl-lg last:[&>*]:last:rounded-br-lg",
            )}
            key={guideTalentUid}
          >
            <TableHead className="whitespace-normal">{talents[guideTalentUid].name}</TableHead>
            <TableCell className="whitespace-pre-line md:whitespace-nowrap">{guideTalent}</TableCell>
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
        <CardHeader>
          <CardTitle>{character.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-6 items-start">
          <img
            alt={character.name}
            className={cn("shrink-0 rounded-xl", {
              "bg-teal-500": character.element_uid === ElementUidEnum.Anemo,
              "bg-cyan-500": character.element_uid === ElementUidEnum.Cryo,
              "bg-purple-500": character.element_uid === ElementUidEnum.Electro,
              "bg-amber-500": character.element_uid === ElementUidEnum.Geo,
              "bg-blue-500": character.element_uid === ElementUidEnum.Hydro,
              "bg-red-500": character.element_uid === ElementUidEnum.Pyro,
            })}
            src={character.small_image_src}
          />
          <Table className="flex-1">
            <TableBody>
              <TableRow>
                <TableHead>Качество</TableHead>
                <TableCell>
                  <img alt={`${character.quality} Starts`} src={qualityImageSrc(character.quality)} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Оружие</TableHead>
                <TableCell>
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
                <TableHead>Элемент</TableHead>
                <TableCell>
                  <div className="flex gap-1 items-center">
                    <img alt={characterElement.name} className="shrink-0 size-5" src={characterElement.image_src} />
                    <span>{characterElement.name}</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Роли</TableHead>
                <TableCell>
                  {characterRoles.map((characterRole, index) => (
                    <div className="flex gap-1 items-center" key={character.roles_uid[index]}>
                      <img alt={characterRole.name} className="shrink-0 size-5" src={characterRole.icon_src} />
                      <span>{characterRole.name}</span>
                    </div>
                  ))}
                </TableCell>
              </TableRow>
              {guideCharacter?.required_level !== undefined && (
                <TableRow>
                  <TableHead>Требуемый уровень</TableHead>
                  <TableCell>{guideCharacter.required_level}</TableCell>
                </TableRow>
              )}
              {guideCharacter?.required_squad !== undefined && (
                <TableRow>
                  <TableHead>Требуемый отряд</TableHead>
                  <TableCell>{guideCharacter.required_squad}</TableCell>
                </TableRow>
              )}
              {guideCharacter?.key_constellations !== undefined && (
                <TableRow>
                  <TableHead>Ключевые созвездия</TableHead>
                  <TableCell>{guideCharacter.key_constellations.join(", ")}</TableCell>
                </TableRow>
              )}
              {guideCharacter?.first_constellation_or_signature_weapon !== undefined && (
                <TableRow>
                  <TableHead>C1 или Сигна?</TableHead>
                  <TableCell>{guideCharacter.first_constellation_or_signature_weapon}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {guideCharacter !== undefined && (
        <>
          {guideCharacter.talents !== undefined && (
            <Card>
              <CardHeader>
                <CardTitle>Прокачивание талантов</CardTitle>
              </CardHeader>
              <CardContent>
                <UpgradingTalents guideTalents={guideCharacter.talents} />
              </CardContent>
            </Card>
          )}
          {guideCharacter.weapons !== undefined && (
            <Card>
              <CardHeader>
                <CardTitle>Оружие</CardTitle>
              </CardHeader>
              <CardContent>
                <SuitableWeapons character={character} guideWeapons={guideCharacter.weapons} />
              </CardContent>
            </Card>
          )}
          {guideCharacter.artifacts !== undefined && (
            <Card>
              <CardHeader>
                <CardTitle>Артефакты</CardTitle>
              </CardHeader>
              <CardContent>
                <SuitableArtifacts character={character} guideArtifacts={guideCharacter.artifacts} />
              </CardContent>
            </Card>
          )}
          {guideCharacter.reference_point !== undefined && (
            <Card>
              <CardHeader>
                <CardTitle>Ориентир</CardTitle>
              </CardHeader>
              <CardContent>
                <ReferencePoint items={guideCharacter.reference_point} />
              </CardContent>
            </Card>
          )}
        </>
      )}
    </Container>
  );
}

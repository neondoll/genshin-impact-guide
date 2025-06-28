import { useLoaderData } from "react-router-dom";

import { ArtifactTypeUidEnum } from "@/database/artifact-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getArtifactSets } from "@/database/artifact-sets";
import { getAttributes } from "@/database/attributes";
import { getCharacter } from "@/database/characters";
import { getCharacterRole } from "@/database/character-roles";
import { ElementUidEnum, getElement } from "@/database/elements";
import { getGuideCharacter, type GuideCharacterWeapons } from "@/database/guide-characters";
import { getTalents, type TalentUid } from "@/database/talents";
import { getWeapons } from "@/database/weapons";
import { getWeaponType } from "@/database/weapon-types";
import { qualityImageSrc } from "@/database/qualities";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type SuitableArtifactsProps = {
  guideArtifacts: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["artifacts"]>;
};
type SuitableWeaponsProps = {
  guideWeapons: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["weapons"]>;
  signatureWeaponUid: CharacterLoaderData["character"]["signature_weapon_uid"];
};
type SuitableWeaponsTableProps = {
  guideWeapons: GuideCharacterWeapons;
  signatureWeaponUid: SuitableWeaponsProps["signatureWeaponUid"];
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

function SuitableArtifacts({ guideArtifacts }: SuitableArtifactsProps) {
  const artifactSets = getArtifactSets();
  const attributes = getAttributes();

  return (
    <Table>
      <TableBody>
        {guideArtifacts.sets.map((guideArtifactSet, index) => (
          <TableRow className={cn(TableRowClassName, "text-left")} key={guideArtifactSet.uid}>
            {index === 0 && (
              <TableHead rowSpan={guideArtifacts.sets.length}>Набор</TableHead>
            )}
            <TableCell className="flex gap-2 items-center whitespace-normal">
              <img
                alt={artifactSets[guideArtifactSet.uid].name}
                className="shrink-0 size-10"
                src={artifactSets[guideArtifactSet.uid][ArtifactTypeUidEnum.FlowerOfLife].image_src}
              />
              <span>{artifactSets[guideArtifactSet.uid].name}</span>
            </TableCell>
            <TableCell className="whitespace-pre-line md:whitespace-normal">{guideArtifactSet.description}</TableCell>
          </TableRow>
        ))}
        {guideArtifacts.attributes[ArtifactTypeUidEnum.SandsOfEon].map((guideArtifactAttribute, index) => (
          <TableRow className={cn(TableRowClassName, "text-left")} key={guideArtifactAttribute.uid}>
            {index === 0 && (
              <TableHead
                className="whitespace-normal"
                rowSpan={guideArtifacts.attributes[ArtifactTypeUidEnum.SandsOfEon].length}
              >
                Часы
              </TableHead>
            )}
            <TableCell className="whitespace-normal">{attributes[guideArtifactAttribute.uid].name}</TableCell>
            <TableCell className="whitespace-pre-line md:whitespace-normal">{guideArtifactAttribute.description}</TableCell>
          </TableRow>
        ))}
        {guideArtifacts.attributes[ArtifactTypeUidEnum.GobletOfEonothem].map((guideArtifactAttribute, index) => (
          <TableRow className={cn(TableRowClassName, "text-left")} key={guideArtifactAttribute.uid}>
            {index === 0 && (
              <TableHead
                className="whitespace-normal"
                rowSpan={guideArtifacts.attributes[ArtifactTypeUidEnum.GobletOfEonothem].length}
              >
                Кубок
              </TableHead>
            )}
            <TableCell className="whitespace-normal">{attributes[guideArtifactAttribute.uid].name}</TableCell>
            <TableCell className="whitespace-pre-line md:whitespace-normal">{guideArtifactAttribute.description}</TableCell>
          </TableRow>
        ))}
        {guideArtifacts.attributes[ArtifactTypeUidEnum.CircletOfLogos].map((guideArtifactAttribute, index) => (
          <TableRow className={cn(TableRowClassName, "text-left")} key={guideArtifactAttribute.uid}>
            {index === 0 && (
              <TableHead
                className="whitespace-normal"
                rowSpan={guideArtifacts.attributes[ArtifactTypeUidEnum.CircletOfLogos].length}
              >
                Корона
              </TableHead>
            )}
            <TableCell className="whitespace-normal">{attributes[guideArtifactAttribute.uid].name}</TableCell>
            <TableCell className="whitespace-pre-line md:whitespace-normal">{guideArtifactAttribute.description}</TableCell>
          </TableRow>
        ))}
        {guideArtifacts.attributes.additional.map((guideArtifactAttribute, index) => (
          <TableRow className={cn(TableRowClassName, "text-left")} key={guideArtifactAttribute.uid}>
            {index === 0 && (
              <TableHead className="whitespace-normal" rowSpan={guideArtifacts.attributes.additional.length}>
                Доп.
              </TableHead>
            )}
            <TableCell className="whitespace-normal">{attributes[guideArtifactAttribute.uid].name}</TableCell>
            <TableCell className="whitespace-pre-line">{guideArtifactAttribute.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function SuitableWeapons({ guideWeapons, signatureWeaponUid }: SuitableWeaponsProps) {
  if (Array.isArray(guideWeapons)) {
    return (
      <SuitableWeaponsTable guideWeapons={guideWeapons} signatureWeaponUid={signatureWeaponUid} />
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
          <SuitableWeaponsTable guideWeapons={guideWeapons} signatureWeaponUid={signatureWeaponUid} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function SuitableWeaponsTable({ guideWeapons, signatureWeaponUid }: SuitableWeaponsTableProps) {
  const weapons = getWeapons();

  return (
    <Table>
      <TableBody>
        {guideWeapons.map(guideWeapon => (
          <TableRow
            className={cn(
              "text-center first:[&>*]:first:rounded-tl-xl first:[&>*]:last:rounded-tr-xl",
              "last:[&>*]:first:rounded-bl-lg last:[&>*]:last:rounded-br-lg",
            )}
            key={guideWeapon.uid + (guideWeapon.refinement === undefined ? "" : `-r${guideWeapon.refinement}`)}
          >
            <TableHead className="flex gap-2 items-center whitespace-normal">
              <img
                alt={weapons[guideWeapon.uid].name}
                className="shrink-0 size-10"
                src={weapons[guideWeapon.uid].small_image_src}
              />
              <span>
                {weapons[guideWeapon.uid].name}
                {guideWeapon.uid === signatureWeaponUid && " (сигна)"}
                {guideWeapon.refinement !== undefined && ` R${guideWeapon.refinement}`}
              </span>
            </TableHead>
            {guideWeapon.percent !== undefined && (
              <TableCell
                className={cn({
                  "text-green-500": guideWeapon.percent > 1,
                  "text-yellow-500": guideWeapon.percent >= 0.99 && guideWeapon.percent <= 1,
                  "text-red-500": guideWeapon.percent < 0.99,
                })}
              >
                {new Intl.NumberFormat(undefined, {
                  style: "percent",
                  minimumFractionDigits: 1,
                }).format(guideWeapon.percent)}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function UpgradingTalents({ guideTalents }: UpgradingTalentsProps) {
  const talents = getTalents();

  return (
    <Table>
      <TableBody>
        {(Object.entries(guideTalents) as [TalentUid, string][]).map(([guideTalentUid, guideTalent]) => (
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
    <div className="container flex flex-col gap-2 px-4 py-4 mx-auto md:gap-4 md:py-6 lg:px-6">
      <Card>
        <CardContent className="flex gap-6 items-start">
          <img
            alt={character.name}
            className={cn("shrink-0 rounded-xl", {
              "bg-red-500": character.element_uid === ElementUidEnum.Pyro,
              "bg-purple-500": character.element_uid === ElementUidEnum.Electro,
            })}
            src={character.small_image_src}
          />
          <div className="flex-1">
            <h1 className="text-base">{character.name}</h1>
            <Table>
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
                      <img
                        alt={characterElement.name}
                        className="shrink-0 size-5"
                        src={characterElement.image_src}
                      />
                      <span>{characterElement.name}</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>Роли</TableHead>
                  <TableCell>
                    {characterRoles.map((characterRole, index) => (
                      <div className="flex gap-1 items-center" key={character.roles_uid[index]}>
                        <img
                          alt={characterRole.name}
                          className="shrink-0 size-5"
                          src={characterRole.icon_src}
                        />
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
                {guideCharacter?.first_constellation_or_signature_weapon !== undefined && (
                  <TableRow>
                    <TableHead>C1 или Сигна?</TableHead>
                    <TableCell>{guideCharacter.first_constellation_or_signature_weapon}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
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
                <SuitableWeapons
                  guideWeapons={guideCharacter.weapons}
                  signatureWeaponUid={character.signature_weapon_uid}
                />
              </CardContent>
            </Card>
          )}
          {guideCharacter.artifacts !== undefined && (
            <Card>
              <CardHeader>
                <CardTitle>Артефакты</CardTitle>
              </CardHeader>
              <CardContent>
                <SuitableArtifacts guideArtifacts={guideCharacter.artifacts} />
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}

import { useLoaderData } from "react-router-dom";

import { ArtifactTypeUidEnum } from "@/database/artifact-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getArtifactSets } from "@/database/artifact-sets";
import { getAttributes } from "@/database/attributes";
import { getCharacter } from "@/database/characters";
import { getGuideCharacter, type GuideCharacterWeapons } from "@/database/guide-characters";
import { getTalents, type TalentUid } from "@/database/talents";
import { getWeapons } from "@/database/weapons";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CharacterLoaderData = {
  character: Awaited<ReturnType<typeof getCharacter>>;
  guideCharacter: Awaited<ReturnType<typeof getGuideCharacter>>;
  talents: Awaited<ReturnType<typeof getTalents>>;
  weapons: Awaited<ReturnType<typeof getWeapons>>;
};
type CharacterSuitableArtifactsProps = {
  guideArtifacts: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["artifacts"]>;
};
type CharacterSuitableWeaponsProps = {
  guideWeapons: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["weapons"]>;
  signatureWeaponUid: CharacterLoaderData["character"]["signature_weapon_uid"];
  weapons: CharacterLoaderData["weapons"];
};
type CharacterSuitableWeaponsTableProps = {
  guideWeapons: GuideCharacterWeapons;
  signatureWeaponUid: CharacterLoaderData["character"]["signature_weapon_uid"];
  weapons: CharacterLoaderData["weapons"];
};
type CharacterUpgradingTalentsProps = {
  guideTalents: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["talents"]>;
  talents: CharacterLoaderData["talents"];
};

const TableRowClassName = cn([
  "text-center first:[&>*]:first:rounded-tl-xl first:[&>*]:last:rounded-tr-xl last:[&>*]:first:rounded-bl-lg",
  "last:[&>*]:last:rounded-br-lg",
]);

function CharacterSuitableArtifacts({ guideArtifacts }: CharacterSuitableArtifactsProps) {
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
            <TableCell className="whitespace-pre-line md:whitespace-normal">{guideArtifactAttribute.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function CharacterSuitableWeapons({ guideWeapons, signatureWeaponUid, weapons }: CharacterSuitableWeaponsProps) {
  if (Array.isArray(guideWeapons)) {
    return (
      <CharacterSuitableWeaponsTable
        guideWeapons={guideWeapons}
        signatureWeaponUid={signatureWeaponUid}
        weapons={weapons}
      />
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
          <CharacterSuitableWeaponsTable
            guideWeapons={guideWeapons}
            signatureWeaponUid={signatureWeaponUid}
            weapons={weapons}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}

function CharacterSuitableWeaponsTable({
  guideWeapons,
  signatureWeaponUid,
  weapons,
}: CharacterSuitableWeaponsTableProps) {
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

function CharacterUpgradingTalents({ guideTalents, talents }: CharacterUpgradingTalentsProps) {
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

/* eslint-disable-next-line react-refresh/only-export-components */
export async function loader({ params }) {
  const character = await getCharacter(params.characterUid);
  const guideCharacter = await getGuideCharacter(params.characterUid);
  const talents = await getTalents();
  const weapons = await getWeapons();

  return { character, guideCharacter, talents, weapons } as CharacterLoaderData;
}

export default function Character() {
  const { character, guideCharacter, talents, weapons } = useLoaderData<CharacterLoaderData>();

  return (
    <div className="container flex flex-col gap-2 px-4 py-4 mx-auto md:gap-4 md:py-6 lg:px-6">
      <h1 className="text-base">{character.name}</h1>
      {guideCharacter !== undefined && (
        <>
          {guideCharacter.level !== undefined && (
            <Card>
              <CardHeader>
                <CardTitle>Характеристики</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow
                      className={cn(
                        "text-center first:[&>*]:first:rounded-tl-xl first:[&>*]:last:rounded-tr-xl",
                        "last:[&>*]:first:rounded-bl-lg last:[&>*]:last:rounded-br-lg",
                      )}
                    >
                      <TableHead>Требуемый уровень</TableHead>
                      <TableCell>{guideCharacter.level}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
          {guideCharacter.weapons !== undefined && (
            <Card>
              <CardHeader>
                <CardTitle>Оружие</CardTitle>
              </CardHeader>
              <CardContent>
                <CharacterSuitableWeapons
                  guideWeapons={guideCharacter.weapons}
                  signatureWeaponUid={character.signature_weapon_uid}
                  weapons={weapons}
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
                <CharacterSuitableArtifacts guideArtifacts={guideCharacter.artifacts} />
              </CardContent>
            </Card>
          )}
          {guideCharacter.talents !== undefined && (
            <Card>
              <CardHeader>
                <CardTitle>Прокачивание талантов</CardTitle>
              </CardHeader>
              <CardContent>
                <CharacterUpgradingTalents guideTalents={guideCharacter.talents} talents={talents} />
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}

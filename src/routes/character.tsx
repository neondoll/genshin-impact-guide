import { useLoaderData } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getCharacter } from "@/database/characters";
import { getGuideCharacter } from "@/database/guide-characters";
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

function SuitableWeapons({ guideWeapons, signatureWeaponUid, weapons }: {
  guideWeapons: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["weapons"]>;
  signatureWeaponUid: CharacterLoaderData["character"]["signature_weapon_uid"];
  weapons: CharacterLoaderData["weapons"];
}) {
  const suitableWeapons = Object.entries(guideWeapons);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Оружие</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={suitableWeapons[0][0]}>
          <TabsList>
            {suitableWeapons.map(([value]) => (
              <TabsTrigger key={value} value={value}>{value}</TabsTrigger>
            ))}
          </TabsList>
          {suitableWeapons.map(([value, guideWeapons]) => (
            <TabsContent key={value} value={value}>
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
                      <TableHead>
                        {weapons[guideWeapon.uid].name}
                        {guideWeapon.uid === signatureWeaponUid && " (сигна)"}
                        {guideWeapon.refinement !== undefined && ` R${guideWeapon.refinement}`}
                      </TableHead>
                      {guideWeapon.percent !== undefined && (
                        <TableCell>
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
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}

function UpgradingTalents({ guideTalents, talents }: {
  guideTalents: NonNullable<NonNullable<CharacterLoaderData["guideCharacter"]>["talents"]>;
  talents: CharacterLoaderData["talents"];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Прокачивание талантов</CardTitle>
      </CardHeader>
      <CardContent>
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
                <TableHead>{talents[guideTalentUid].name}</TableHead>
                <TableCell>{guideTalent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
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
          {guideCharacter.talents !== undefined && (
            <UpgradingTalents guideTalents={guideCharacter.talents} talents={talents} />
          )}
          {guideCharacter.weapons !== undefined && (
            <SuitableWeapons
              guideWeapons={guideCharacter.weapons}
              signatureWeaponUid={character.signature_weapon_uid}
              weapons={weapons}
            />
          )}
        </>
      )}
    </div>
  );
}

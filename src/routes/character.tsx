import { useLoaderData } from "react-router-dom";

import { getCharacter } from "@/database/characters";
import { getTalents, type TalentUid } from "@/database/talents";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card.tsx";
import { cn } from "@/lib/utils.ts";

type CharacterLoaderData = {
  character: Awaited<ReturnType<typeof getCharacter>>;
  talents: Awaited<ReturnType<typeof getTalents>>;
};

/* eslint-disable-next-line react-refresh/only-export-components */
export async function loader({ params }) {
  const character = await getCharacter(params.characterUid);
  const talents = await getTalents();

  return { character, talents } as CharacterLoaderData;
}

export default function Character() {
  const { character, talents } = useLoaderData<CharacterLoaderData>();
  const characterUpgradingTalents = character.upgrading_talents !== undefined
    ? (Object.entries(character.upgrading_talents) as [TalentUid, string][])
    : [];

  return (
    <div className="container flex flex-col gap-2 px-4 py-4 mx-auto md:gap-4 md:py-6 lg:px-6">
      <h1 className="text-base">{character.name}</h1>
      {characterUpgradingTalents.length > 0 && (
        <Card className="py-0">
          <Table>
            <TableBody>
              {characterUpgradingTalents.map(([upgradingTalentUid, upgradingTalent], index) => (
                <TableRow key={upgradingTalentUid}>
                  {index === 0 && (
                    <TableHead className="text-center rounded-l-xl border-r" rowSpan={characterUpgradingTalents.length}>
                      Прокачивание талантов
                    </TableHead>
                  )}
                  <TableHead className="border-r">{talents[upgradingTalentUid].name}</TableHead>
                  <TableCell
                    className={cn({
                      "rounded-tr-xl": index === 0,
                      "rounded-br-lg": index === characterUpgradingTalents.length - 1,
                    })}
                  >
                    {upgradingTalent}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  );
}

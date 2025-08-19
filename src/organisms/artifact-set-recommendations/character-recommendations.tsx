import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import type { CharacterRecommendationsProps } from "./types";
import type { TCharacterKey } from "@/database/characters/types";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import { cn, publicImageSrc } from "@/lib/utils";
import { getCharacter } from "@/database/characters";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Paths from "@/constants/paths";

function CharacterBadge({ characterKey }: { characterKey: TCharacterKey }) {
  const [character, setCharacter] = useState<Awaited<ReturnType<typeof getCharacter>>>();

  useEffect(() => {
    getCharacter(characterKey).then(setCharacter);
  }, [characterKey]);

  return character !== undefined && (
    <Badge
      asChild
      className={cn(
        "flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal sm:flex-row",
        "sm:text-left",
      )}
      variant="secondary"
    >
      <Link to={Paths.Character.to(character.key)}>
        <img
          alt={character.name}
          className={cn("shrink-0 size-12 rounded-md rounded-br-2xl", backgroundClassByRarity(character.rarity))}
          src={character.image_src}
        />
        <span children={character.name} />
      </Link>
    </Badge>
  );
}

export default function CharacterRecommendations({ recommendations }: CharacterRecommendationsProps) {
  const [hasIsBetter, setHasIsBetter] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);

  useEffect(() => {
    setHasIsBetter(recommendations.some((recommendation) => {
      return recommendation.is_better === true;
    }));
    setHasNotes(recommendations.some((recommendation) => {
      return recommendation.notes !== undefined;
    }));
  }, [recommendations]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {hasIsBetter && <TableHead />}
          <TableHead children="Персонажи" className="text-center" />
          {hasNotes && <TableHead children="Заметки" className="text-center" />}
        </TableRow>
      </TableHeader>
      <TableBody>
        {recommendations.map(recommendation => (
          <TableRow className="hover:bg-inherit" key={recommendation.key}>
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
            <TableCell className="text-pretty whitespace-normal sm:min-w-[166px]">
              <CharacterBadge characterKey={recommendation.key} />
            </TableCell>
            {hasNotes && (
              <TableCell className="text-pretty whitespace-pre-line">
                {recommendation.notes !== undefined && (
                  Array.isArray(recommendation.notes)
                    ? (
                        <ul className="ml-4 list-outside list-disc">
                          {recommendation.notes.map((note, index) => (
                            <li dangerouslySetInnerHTML={{ __html: note }} key={index + 1} />
                          ))}
                        </ul>
                      )
                    : (
                        <span dangerouslySetInnerHTML={{ __html: recommendation.notes }} />
                      )
                )}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

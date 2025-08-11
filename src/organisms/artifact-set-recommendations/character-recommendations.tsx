import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Paths from "@/constants/paths";
import { backgroundClassByRarity } from "@/lib/rarity";
import { Badge } from "@/components/ui/badge";
import { cn, publicImageSrc } from "@/lib/utils";
import { getCharacter, sortCharacters } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { ArtifactSetCharacterRecommendation } from "@/database/types/artifact-set-recommendations";
import type { CharacterRecommendationsProps } from "./types";

export default function CharacterRecommendations({ recommendations }: CharacterRecommendationsProps) {
  const [characterRecommendations, setCharacterRecommendations] = useState<{
    character: ReturnType<typeof getCharacter>;
    recommendation: ArtifactSetCharacterRecommendation;
  }[]>([]);
  const [hasIsBetter, setHasIsBetter] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);

  useEffect(() => {
    setCharacterRecommendations(recommendations.map((recommendation) => {
      return { character: getCharacter(recommendation.key), recommendation };
    }).sort((a, b) => {
      return sortCharacters(a.character, b.character);
    }));
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
        {characterRecommendations.map(item => (
          <TableRow className="hover:bg-inherit" key={item.character.key}>
            {hasIsBetter && (
              <TableCell className="w-16">
                {item.recommendation.is_better && (
                  <img
                    alt="Является лучшим выбором"
                    className="size-12 rounded-full"
                    src={publicImageSrc("better-logo-128x128.png")}
                  />
                )}
              </TableCell>
            )}
            <TableCell className="text-pretty whitespace-normal sm:min-w-[166px]">
              <Badge
                asChild
                className={cn(
                  "flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal",
                  "sm:flex-row sm:text-left",
                )}
                variant="secondary"
              >
                <Link to={Paths.Character.to(item.character.key)}>
                  <img
                    alt={item.character.name}
                    className={cn(
                      "shrink-0 size-12 rounded-md rounded-br-2xl",
                      backgroundClassByRarity(item.character.rarity),
                    )}
                    src={item.character.image_src}
                  />
                  <span children={item.character.name} />
                </Link>
              </Badge>
            </TableCell>
            {hasNotes && (
              <TableCell className="text-pretty whitespace-pre-line">
                {item.recommendation.notes !== undefined && (Array.isArray(item.recommendation.notes)
                  ? (
                      <ul className="ml-4 list-outside list-disc">
                        {item.recommendation.notes.map((note, index) => (
                          <li dangerouslySetInnerHTML={{ __html: note }} key={index + 1} />
                        ))}
                      </ul>
                    )
                  : (
                      <span dangerouslySetInnerHTML={{ __html: item.recommendation.notes }} />
                    ))}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

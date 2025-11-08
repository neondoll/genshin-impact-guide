import { useEffect, useState } from "react";

import type { CharacterRecommendationsProps } from "./types";
import { charactersAdapter } from "@/features/characters/slice";
import { publicImageSrc } from "@/lib/utils";
import { selectCharacterById } from "@/features/characters/selectors";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CharacterBadge from "../badges/character-badge";

export default function CharacterRecommendations(props: CharacterRecommendationsProps) {
  const [hasIsBetter, setHasIsBetter] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);
  const [recommendations, setRecommendations] = useState<CharacterRecommendationsProps["recommendations"]>([]);

  useEffect(() => {
    setHasIsBetter(props.recommendations.some((recommendation) => {
      return recommendation.is_better === true;
    }));
    setHasNotes(props.recommendations.some((recommendation) => {
      return recommendation.notes !== undefined;
    }));
    setRecommendations(
      props.recommendations
        .map((recommendation) => {
          return { character: selectCharacterById(recommendation.id), recommendation };
        })
        .sort((a, b) => {
          if (!charactersAdapter.sortComparer || !a.character || !b.character) return 0;

          return charactersAdapter.sortComparer(a.character, b.character);
        })
        .map((model) => model.recommendation),
    );
  }, [props.recommendations]);

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
        {recommendations.map((recommendation) => {
          const character = selectCharacterById(recommendation.id);

          return (
            <TableRow className="hover:bg-inherit" key={recommendation.id}>
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
                {character && (
                  <CharacterBadge
                    characterId={character.id}
                    characterImageSrc={character.image_src}
                    characterRarity={character.rarity}
                    characterTitle={character.title}
                  />
                )}
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
          );
        })}
      </TableBody>
    </Table>
  );
}

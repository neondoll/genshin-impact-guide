import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Paths from "@/constants/paths";
import { ArtifactPieceUidEnum } from "@/database/enums/artifact-piece";
import { Badge } from "@/components/ui/badge";
import { cn, numberFormatPercent, publicImageSrc } from "@/lib/utils";
import { getArtifactSet } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { ArtifactSetRecommendationsProps } from "./types";
import type { ArtifactSetUid } from "@/database/types/artifact-set.ts";

function ArtifactSetBage({ artifactSetUid, isSignature }: { artifactSetUid: ArtifactSetUid; isSignature: boolean }) {
  const artifactSet = getArtifactSet(artifactSetUid);

  return (
    <Badge
      asChild
      className={cn(
        "flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal sm:flex-row",
        "sm:text-left",
      )}
      variant="secondary"
    >
      <Link to={Paths.ArtifactSet.to(artifactSet.uid)}>
        <img
          alt={artifactSet.name}
          className="shrink-0 size-12 bg-[linear-gradient(180deg,#323947,#4a5366)] rounded-md rounded-br-2xl"
          src={artifactSet[ArtifactPieceUidEnum.FlowerOfLife].image_src}
        />
        <span>
          {artifactSet.name}
          {isSignature && " (сигнатурное)"}
        </span>
      </Link>
    </Badge>
  );
}

export default function ArtifactSetRecommendations({ character, recommendations }: ArtifactSetRecommendationsProps) {
  const [diffPercent, setDiffPercent] = useState(0);
  const [hasDescription, setHasDescription] = useState(false);
  const [hasIsBetter, setHasIsBetter] = useState(false);
  const [hasNotes, setHasNotes] = useState(false);
  const [hasPercent, setHasPercent] = useState(false);
  const [minPercent, setMinPercent] = useState(0);

  useEffect(() => {
    const hasPercent = recommendations.some((recommendation) => {
      return recommendation.percent !== undefined;
    });

    setHasDescription(recommendations.some((recommendation) => {
      return recommendation.description !== undefined;
    }));
    setHasIsBetter(recommendations.some((recommendation) => {
      return recommendation.is_better === true;
    }));
    setHasNotes(recommendations.some((recommendation) => {
      return recommendation.notes !== undefined;
    }));
    setHasPercent(hasPercent);

    if (hasPercent) {
      let maxPercent = -Infinity, minPercent = Infinity;

      recommendations.map((recommendation) => {
        if (recommendation.percent) {
          if (recommendation.percent > maxPercent) {
            maxPercent = recommendation.percent;
          }

          if (recommendation.percent < minPercent) {
            minPercent = recommendation.percent;
          }
        }
      });

      if (maxPercent !== -Infinity && minPercent !== Infinity) {
        setDiffPercent((maxPercent - minPercent) / 3);
        setMinPercent(minPercent);
      }
    }
  }, [recommendations]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {hasIsBetter && <TableHead />}
          <TableHead children="Наборы" className="text-center" />
          {hasPercent && <TableHead />}
          {hasDescription && <TableHead />}
          {hasNotes && <TableHead children="Заметки" className="text-center" />}
        </TableRow>
      </TableHeader>
      <TableBody>
        {recommendations.map(recommendation => (
          <TableRow
            className="hover:bg-inherit"
            key={"uid" in recommendation ? recommendation.uid : recommendation.uids.join("+")}
          >
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
            <TableCell className="text-pretty whitespace-normal sm:w-48">
              {"uid" in recommendation
                ? (
                    <ArtifactSetBage
                      artifactSetUid={recommendation.uid}
                      isSignature={recommendation.uid === character.signature_artifact_set_uid}
                    />
                  )
                : (
                    <div className="flex flex-col gap-2">
                      {recommendation.uids.map(uid => (
                        <ArtifactSetBage
                          artifactSetUid={uid}
                          isSignature={uid === character.signature_artifact_set_uid}
                        />
                      ))}
                    </div>
                  )}
            </TableCell>
            {hasPercent && (
              <TableCell
                children={recommendation.percent !== undefined ? numberFormatPercent(recommendation.percent, 2) : ""}
                className={cn(recommendation.percent !== undefined && {
                  "text-green-500": recommendation.percent >= (minPercent + (diffPercent * 2)),
                  "text-yellow-500": recommendation.percent >= (minPercent + diffPercent) && recommendation.percent < (minPercent + (diffPercent * 2)),
                  "text-red-500": recommendation.percent < (minPercent + diffPercent),
                })}
              />
            )}
            {hasDescription && (
              <TableCell children={recommendation.description} className="text-pretty whitespace-normal" />
            )}
            {hasNotes && (
              <TableCell className="text-pretty whitespace-normal">
                {recommendation.notes !== undefined && (
                  <ul className="ml-4 list-outside list-disc">
                    {recommendation.notes.map((note, index) => (
                      <li children={note} key={index} />
                    ))}
                  </ul>
                )}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

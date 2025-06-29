import { Link, useLoaderData } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/paths";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  getArtifactSet, getArtifactSetCharactersUid, getArtifactTypes, getCharacter, qualityImageSrc,
} from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";

export type ArtifactSetLoaderData = {
  artifactSet: Awaited<ReturnType<typeof getArtifactSet>>;
  artifactSetCharactersUid: Awaited<ReturnType<typeof getArtifactSetCharactersUid>>;
  artifactTypes: Awaited<ReturnType<typeof getArtifactTypes>>;
};

export default function ArtifactSet() {
  const { artifactSet, artifactSetCharactersUid, artifactTypes } = useLoaderData<ArtifactSetLoaderData>();

  return (
    <Container className="flex flex-col gap-2 md:gap-4">
      <Card>
        <CardHeader>
          <CardTitle>{artifactSet.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableHead>Качество</TableHead>
                <TableCell>
                  <div className="flex gap-1 items-center">
                    {artifactSet.qualities.map((quality, index) => (
                      <>
                        {index !== 0 && "|"}
                        <img
                          alt={`${quality} Starts`}
                          className="shrink-0"
                          key={quality}
                          src={qualityImageSrc(quality)}
                        />
                      </>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
              {(Object.entries(artifactTypes) as [keyof typeof artifactTypes, typeof artifactTypes[keyof typeof artifactTypes]][]).map(([artifactTypeUid, artifactType]) => (
                <TableRow key={artifactTypeUid}>
                  <TableHead>{artifactType.name}</TableHead>
                  <TableCell className="py-0">
                    <div className="flex gap-2 items-center">
                      <img
                        alt={artifactSet[artifactTypeUid].name}
                        className="shrink-0 size-10"
                        src={artifactSet[artifactTypeUid].image_src}
                      />
                      <span>{artifactSet[artifactTypeUid].name}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableHead>На кого собирают</TableHead>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    {artifactSetCharactersUid.map((characterUid) => {
                      const character = getCharacter(characterUid);

                      return (
                        <div
                          className={cn(
                            "relative flex flex-col rounded-xl border shadow-sm transition-shadow",
                            "has-focus-visible:ring-3 has-focus-visible:ring-ring/50",
                          )}
                          key={characterUid}
                        >
                          <img
                            alt={character.name}
                            className="shrink-0 size-23 bg-linear-to-br from-muted to-muted-foreground rounded-t-xl"
                            src={character.small_image_src}
                          />
                          <Link
                            className={cn(
                              "inline-flex flex-1 justify-center items-center p-1 text-xs text-center",
                              "text-card-foreground bg-card rounded-b-xl outline-none before:absolute before:inset-0",
                            )}
                            to={Paths.Character(characterUid)}
                          >
                            {character.name}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Container>
  );
}

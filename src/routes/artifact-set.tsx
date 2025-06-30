import { Link, useLoaderData } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/paths";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <CardTitle className="text-balance">{artifactSet.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow className="hover:bg-inherit">
                <TableHead className="p-2 text-balance whitespace-normal">Качество</TableHead>
                <TableCell className="p-2 min-w-48.5">
                  <div className="flex flex-wrap gap-2 items-center">
                    {artifactSet.qualities.map(quality => (
                      <Badge key={quality} variant="secondary">
                        <img alt={`${quality} Starts`} className="shrink-0 rounded-md" src={qualityImageSrc(quality)} />
                      </Badge>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
              {(Object.entries(artifactTypes) as [keyof typeof artifactTypes, typeof artifactTypes[keyof typeof artifactTypes]][]).map(([artifactTypeUid, artifactType]) => (
                <TableRow className="hover:bg-inherit" key={artifactTypeUid}>
                  <TableHead className="p-2 text-balance whitespace-normal">{artifactType.name}</TableHead>
                  <TableCell className="p-2 min-w-48.5">
                    <Badge className="text-balance whitespace-normal" variant="secondary">
                      <img
                        alt={artifactSet[artifactTypeUid].name}
                        className="shrink-0 size-8 rounded-md"
                        src={artifactSet[artifactTypeUid].image_src}
                      />
                      <span>{artifactSet[artifactTypeUid].name}</span>
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="hover:bg-inherit">
                <TableHead className="p-2 text-balance whitespace-normal">На кого собирают</TableHead>
                <TableCell className="p-2 min-w-48.5">
                  <div className="flex flex-wrap gap-2 items-center">
                    {artifactSetCharactersUid.map((characterUid) => {
                      const character = getCharacter(characterUid);

                      return (
                        <Badge asChild className="text-balance whitespace-normal" key={characterUid} variant="secondary">
                          <Link to={Paths.Character(characterUid)}>
                            <img
                              alt={character.name}
                              className="shrink-0 size-8 rounded-md"
                              src={character.small_image_src}
                            />
                            <span>{character.name}</span>
                          </Link>
                        </Badge>
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

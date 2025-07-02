import { Link } from "react-router-dom";

import Container from "@/components/container";
import Paths from "@/paths";
import { getArtifactSets, getCharacters, getElements, getRegions, getWeapons, getWeaponTypes } from "@/database";
import { publicImageSrc } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card.tsx";

export type RootLoaderData = {
  artifactSets: Awaited<ReturnType<typeof getArtifactSets>>;
  characters: Awaited<ReturnType<typeof getCharacters>>;
  elements: Awaited<ReturnType<typeof getElements>>;
  regions: Awaited<ReturnType<typeof getRegions>>;
  weapons: Awaited<ReturnType<typeof getWeapons>>;
  weaponTypes: Awaited<ReturnType<typeof getWeaponTypes>>;
};

export default function Root() {
  return (
    <Container>
      <Card>
        <Table>
          <TableBody>
            <TableRow className="relative">
              <TableCell className="w-25">
                <img alt="Персонажи" src={publicImageSrc("characters-logo-85x84.png")} />
              </TableCell>
              <TableCell>
                <Link className="before:absolute before:inset-0" to={Paths.Characters}>Персонажи</Link>
              </TableCell>
            </TableRow>
            <TableRow className="relative">
              <TableCell className="w-25">
                <img alt="Оружие" src={publicImageSrc("weapons-logo-85x84.png")} />
              </TableCell>
              <TableCell>
                <Link className="before:absolute before:inset-0" to={Paths.Weapons}>Оружие</Link>
              </TableCell>
            </TableRow>
            <TableRow className="relative">
              <TableCell className="w-25">
                <img alt="Артефакты" src={publicImageSrc("artifacts-logo-85x84.png")} />
              </TableCell>
              <TableCell>
                <Link className="before:absolute before:inset-0" to={Paths.ArtifactSets}>Артефакты</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
}

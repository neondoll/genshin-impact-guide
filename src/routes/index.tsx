import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/container";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import MenuItems from "@/constants/menu-items";

export default function Index() {
  return (
    <Container>
      <Card>
        <Table>
          <TableBody>
            {MenuItems.map((item) => (
              <TableRow className="relative" key={item.title}>
                <TableCell className="size-20">
                  <img alt={item.title} className="object-cover object-center size-full" src={item.image_src} />
                </TableCell>
                <TableCell>
                  <Link children={item.title} className="before:absolute before:inset-0" to={item.to} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
}

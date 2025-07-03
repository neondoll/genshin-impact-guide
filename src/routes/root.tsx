import { Link } from "react-router-dom";

import Container from "@/components/container";
import MenuItems from "@/constants/menu-items";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Root() {
  return (
    <Container>
      <Card>
        <Table>
          <TableBody>
            {MenuItems.map(item => (
              <TableRow className="relative" key={item.title}>
                <TableCell className="w-20">
                  <img alt={item.title} src={item.image_src} />
                </TableCell>
                <TableCell>
                  <Link className="before:absolute before:inset-0" to={item.to}>{item.title}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
}

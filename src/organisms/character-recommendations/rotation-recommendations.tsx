import type { RotationRecommendationsProps } from "./types";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";

export default function RotationRecommendations({ recommendations }: RotationRecommendationsProps) {
  if (typeof recommendations === "string") {
    return <p children={recommendations} />;
  }

  return (
    <Table>
      <TableBody>
        {Object.entries(recommendations).map(([recommendationKey, recommendation], index) => (
          <TableRow className="hover:bg-inherit" key={index}>
            <TableHead children={recommendationKey} className="p-2 text-left" />
            <TableCell children={recommendation} className="p-2 text-center text-pretty whitespace-normal" />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

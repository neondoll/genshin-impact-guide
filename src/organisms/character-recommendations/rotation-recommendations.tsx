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
            <TableHead className="p-2 text-left" dangerouslySetInnerHTML={{ __html: recommendationKey }} />
            <TableCell
              className="p-2 text-center text-pretty whitespace-normal"
              dangerouslySetInnerHTML={{ __html: recommendation }}
            />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

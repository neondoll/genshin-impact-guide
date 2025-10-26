import type { RotationRecommendationsProps } from "./types";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";

export default function RotationRecommendations({ recommendations }: RotationRecommendationsProps) {
  if (typeof recommendations === "string") {
    return <p dangerouslySetInnerHTML={{ __html: recommendations }} />;
  }
  if (Array.isArray(recommendations)) {
    return (
      <div className="flex gap-2 justify-evenly">
        {recommendations.map((recommendation, index) => (
          <>
            {index !== 0 && " > "}
            <p className="flex-1 leading-[1.25] text-center text-balance" dangerouslySetInnerHTML={{ __html: recommendation }} key={index} />
          </>
        ))}
      </div>
    );
  }

  return (
    <Table>
      <TableBody>
        {Object.entries(recommendations).map(([recommendationKey, recommendationValue], index) => (
          <TableRow className="hover:bg-inherit" key={index}>
            <TableHead
              className="p-2 text-left text-pretty whitespace-normal"
              dangerouslySetInnerHTML={{ __html: recommendationKey }}
            />
            {typeof recommendationValue === "string"
              ? (
                  <TableCell
                    className="p-2 text-center text-pretty whitespace-normal"
                    dangerouslySetInnerHTML={{ __html: recommendationValue }}
                  />
                )
              : recommendationValue.map((recommendation, index) => (
                  <TableCell
                    className="p-2 text-center text-pretty whitespace-normal"
                    dangerouslySetInnerHTML={{ __html: recommendation }}
                    key={index}
                  />
                ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

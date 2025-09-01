import type { CharacterReferencePointRecommendations } from "@/features/characters-recommendations/types";
import type { ReferencePointRecommendationsProps } from "./types";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ReferencePointRecommendationsTable({ recommendations }: {
  recommendations: CharacterReferencePointRecommendations;
}) {
  return (
    <Table className="table-fixed">
      <TableBody>
        {recommendations.map(([recommendationKey, recommendation], index) => (
          <TableRow className="hover:bg-inherit" key={index}>
            <TableHead children={recommendationKey} className="text-left" />
            <TableCell children={recommendation} className="text-right" />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function ReferencePointRecommendations({ recommendations }: ReferencePointRecommendationsProps) {
  if (Array.isArray(recommendations)) {
    return (
      <ReferencePointRecommendationsTable recommendations={recommendations} />
    );
  }

  const recommendationsEntries = Object.entries(recommendations);

  return (
    <Tabs defaultValue={recommendationsEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full h-auto min-h-9">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger className="whitespace-pre" dangerouslySetInnerHTML={{ __html: key }} key={key} value={key} />
        ))}
      </TabsList>
      {recommendationsEntries.map(([key, recommendations]) => (
        <TabsContent key={key} value={key}>
          <ReferencePointRecommendationsTable recommendations={recommendations} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

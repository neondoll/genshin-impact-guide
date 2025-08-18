import { getTalent } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { TalentLevelingRecommendationsProps, TalentLevelingRecommendationsTableProps } from "./types";

function TalentLevelingRecommendationsTable({ recommendations }: TalentLevelingRecommendationsTableProps) {
  return (
    <Table className="table-fixed">
      <TableBody>
        {recommendations.map(async (recommendation) => {
          const talent = await getTalent(recommendation.key);

          return (
            <TableRow className="hover:bg-inherit" key={recommendation.key}>
              <TableHead children={talent.name} className="p-2 whitespace-normal" />
              <TableCell
                children={recommendation.priority}
                className="p-2 text-center whitespace-pre-line md:whitespace-normal"
              />
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default function TalentLevelingRecommendations({ recommendations }: TalentLevelingRecommendationsProps) {
  if (Array.isArray(recommendations)) {
    return (
      <TalentLevelingRecommendationsTable recommendations={recommendations} />
    );
  }

  const recommendationsEntries = Object.entries(recommendations);

  return (
    <Tabs defaultValue={recommendationsEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full h-auto min-h-9">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger children={key} key={key} value={key} />
        ))}
      </TabsList>
      {recommendationsEntries.map(([key, recommendations]) => (
        <TabsContent key={key} value={key}>
          <TalentLevelingRecommendationsTable recommendations={recommendations} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

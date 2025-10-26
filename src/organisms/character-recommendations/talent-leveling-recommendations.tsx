import type { CharacterTalentLevelingRecommendation } from "@/types/character-recommendations";
import type { TalentLevelingRecommendationsProps } from "./types";
import { selectTalentById } from "@/features/talents/selectors";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TalentLevelingRecommendationsTable({ recommendations }: {
  recommendations: CharacterTalentLevelingRecommendation[];
}) {
  return (
    <Table className="table-fixed">
      <TableBody>
        {recommendations.map((recommendation) => {
          const talent = selectTalentById(recommendation.id);

          return (
            <TableRow className="hover:bg-inherit" key={talent.id}>
              <TableHead children={talent.name} className="p-2 whitespace-normal" />
              <TableCell children={recommendation.priority} className="p-2 text-center whitespace-normal" />
              <TableCell children={recommendation.reference_level} className="p-2 text-center whitespace-normal" />
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

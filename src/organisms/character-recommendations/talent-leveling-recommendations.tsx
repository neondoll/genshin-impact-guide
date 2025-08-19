import { useEffect, useState } from "react";

import type { ICharacterTalentLevelingRecommendation } from "@/database/characters-recommendations/types";
import type { TalentLevelingRecommendationsProps } from "./types";
import { getTalent } from "@/database/talents";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TalentLevelingRecommendationsTable({ recommendations }: {
  recommendations: ICharacterTalentLevelingRecommendation[];
}) {
  return (
    <Table className="table-fixed">
      <TableBody>
        {recommendations.map(recommendation => (
          <TalentLevelingRecommendationsTableRow key={recommendation.key} recommendation={recommendation} />
        ))}
      </TableBody>
    </Table>
  );
}

function TalentLevelingRecommendationsTableRow({ recommendation }: {
  recommendation: ICharacterTalentLevelingRecommendation;
}) {
  const [talent, setTalent] = useState<Awaited<ReturnType<typeof getTalent>>>();

  useEffect(() => {
    getTalent(recommendation.key).then(setTalent);
  }, [recommendation]);

  return talent !== undefined && (
    <TableRow className="hover:bg-inherit">
      <TableHead children={talent.name} className="p-2 whitespace-normal" />
      <TableCell
        children={recommendation.priority}
        className="p-2 text-center whitespace-pre-line md:whitespace-normal"
      />
    </TableRow>
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

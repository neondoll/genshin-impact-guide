import type {
  CharacterSquadItemRecommendation as TypeItem,
  CharacterSquadRecommendations as Type,
} from "@/types/character-recommendations";
import type { SquadRecommendationsProps } from "./types";
import { Badge } from "@/components/ui/badge";
import { CharacterSquadRecommendations as Class } from "@/classes/character-recommendations";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CharacterBadge from "../badges/character-badge";
import ElementCharacterBadge from "@/features/elements/element-character-badge";

function SquadRecommendationsItem({ item }: { item: TypeItem }) {
  switch (item.type) {
    case "character": {
      return <CharacterBadge characterId={item.id} />;
    }
    case "element": {
      return <ElementCharacterBadge elementId={item.id} />;
    }
    case "other": {
      return (
        <Badge
          className="flex flex-col gap-2.5 justify-start p-2 w-full text-center text-pretty whitespace-normal sm:flex-row sm:text-left"
          variant="secondary"
        >
          <span children={item.title} />
        </Badge>
      );
    }
  }
}

function SquadRecommendationsTable({ recommendations }: { recommendations: Type }) {
  return (
    <Table>
      <TableBody>
        {recommendations.general_template.map((generalTemplateUnit, index) => (
          <TableRow className="hover:bg-inherit" key={index}>
            {index === 0 && (
              <TableHead rowSpan={recommendations.general_template.length}>Общий шаблон</TableHead>
            )}
            <TableCell>
              {Array.isArray(generalTemplateUnit)
                ? (
                    <div className="flex flex-wrap gap-2" key={index + 1}>
                      {generalTemplateUnit.map((generalTemplateItem, index) => (
                        <SquadRecommendationsItem item={generalTemplateItem} key={index} />
                      ))}
                    </div>
                  )
                : (
                    <SquadRecommendationsItem item={generalTemplateUnit} />
                  )}
            </TableCell>
          </TableRow>
        ))}
        {Array.isArray(recommendations.best_teammates)
          ? (
              <TableRow className="hover:bg-inherit">
                <TableHead>Лучшие тиммейты</TableHead>
                <TableCell>
                  <div className="flex flex-wrap gap-2">
                    {recommendations.best_teammates.map((bestTeammate, index) => (
                      <SquadRecommendationsItem item={bestTeammate} key={index} />
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            )
          : Object.entries(recommendations.best_teammates).map(([key, bestTeammates], index) => (
              <TableRow className="hover:bg-inherit" key={key}>
                {index === 0 && (
                  <TableHead rowSpan={Object.entries(recommendations.best_teammates).length}>Лучшие тиммейты</TableHead>
                )}
                <TableHead dangerouslySetInnerHTML={{ __html: key }} />
                <TableCell>
                  <div className="flex flex-wrap gap-2">
                    {bestTeammates.map((bestTeammate, index) => (
                      <SquadRecommendationsItem item={bestTeammate} key={index} />
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}

export default function SquadRecommendations({ recommendations }: SquadRecommendationsProps) {
  if (recommendations instanceof Class) {
    return (
      <SquadRecommendationsTable recommendations={recommendations} />
    );
  }

  const recommendationsEntries = Object.entries(recommendations);

  return (
    <Tabs defaultValue={recommendationsEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full h-auto min-h-9">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger dangerouslySetInnerHTML={{ __html: key }} key={key} value={key} />
        ))}
      </TabsList>
      {recommendationsEntries.map(([key, recommendations]) => (
        <TabsContent key={key} value={key}>
          <SquadRecommendationsTable recommendations={recommendations} />
        </TabsContent>
      ))}
    </Tabs>
  );
}

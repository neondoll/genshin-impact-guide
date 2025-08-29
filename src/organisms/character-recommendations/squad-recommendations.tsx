import type { CharacterSquadItemRecommendation } from "@/features/characters-recommendations/types";
import type { SquadRecommendationsProps } from "./types";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import CharacterBadge from "@/features/characters/character-badge";
import ElementCharacterBadge from "@/features/elements/element-character-badge";

function SquadRecommendationsItem({ item }: { item: CharacterSquadItemRecommendation }) {
  switch (item.type) {
    case "character": {
      return <CharacterBadge characterId={item.id} />;
    }
    case "element": {
      return <ElementCharacterBadge elementId={item.id} />;
    }
  }
}

export default function SquadRecommendations({ recommendations }: SquadRecommendationsProps) {
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
                <TableHead>{key}</TableHead>
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

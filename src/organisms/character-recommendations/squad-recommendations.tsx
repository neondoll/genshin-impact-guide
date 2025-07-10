import { Link } from "react-router-dom";

import Paths from "@/constants/paths";
import { Badge } from "@/components/ui/badge";
import { getCharacter, getElement } from "@/database";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { SquadRecommendationsItemProps, SquadRecommendationsProps } from "./types";

function SquadRecommendationsItem({ type, uid }: SquadRecommendationsItemProps) {
  switch (type) {
    case "character": {
      const character = getCharacter(uid);

      return (
        <Badge asChild variant="secondary">
          <Link to={Paths.Character(uid)}>
            <img alt={character.name} className="shrink-0 size-8 rounded-md" src={character.image_src} />
            <span children={character.name} />
          </Link>
        </Badge>
      );
    }
    case "element": {
      const element = getElement(uid);

      return (
        <Badge variant="secondary">
          <img alt={element.name} className="shrink-0 size-8 rounded-md" src={element.image_src} />
          <span children={`${element.name} герой`} />
        </Badge>
      );
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
                        <SquadRecommendationsItem key={index} {...generalTemplateItem} />
                      ))}
                    </div>
                  )
                : (
                    <SquadRecommendationsItem {...generalTemplateUnit} />
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
                      <SquadRecommendationsItem key={index} {...bestTeammate} />
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
                      <SquadRecommendationsItem key={index} {...bestTeammate} />
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}

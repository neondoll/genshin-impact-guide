import { ChevronDownIcon } from "lucide-react";

import type { CharacterRecommendationsProps } from "./types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { selectVideoSourcesByIds } from "@/features/video-sources/selectors";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import ArtifactRecommendations from "./artifact-recommendations";
import ReferencePointRecommendations from "./reference-point-recommendations";
import RotationRecommendations from "./rotation-recommendations";
import SquadRecommendations from "./squad-recommendations";
import TalentLevelingRecommendations from "./talent-leveling-recommendations";
import VideoSources from "../video-sources";
import WeaponRecommendations from "./weapon-recommendations";

export default function CharacterRecommendations({
  recommendations,
}: CharacterRecommendationsProps) {
  const showAccordion
    = recommendations.artifacts !== undefined
      || recommendations.reference_point !== undefined
      || recommendations.rotation !== undefined
      || recommendations.squads !== undefined
      || recommendations.talent_leveling !== undefined
      || recommendations.video_source_ids !== undefined
      || recommendations.weapons !== undefined;

  const showTable
    = recommendations.first_constellation_or_signature_weapon !== undefined
      || recommendations.key_constellations !== undefined
      || recommendations.required_level !== undefined;

  return (
    (showAccordion || showTable) && (
      <Collapsible className="space-y-2 md:space-y-4" defaultOpen>
        <CollapsibleTrigger asChild>
          <Button className="flex justify-between w-full [&[data-state=open]>svg]:rotate-180">
            Рекомендации по оружию, артефактам и отрядам
            <ChevronDownIcon className="transition-transform duration-200" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent asChild>
          <Card className="gap-0">
            {showTable && (
              <Table className="table-fixed">
                <TableBody
                  className={cn({
                    "[&_tr:last-child]:border-b": showAccordion,
                  })}
                >
                  {recommendations.key_constellations !== undefined && (
                    <TableRow className="hover:bg-inherit">
                      <TableHead
                        children="Рекомендации по ключевым созвездиям"
                        className="p-2 text-right whitespace-normal"
                      />
                      <TableCell
                        children={recommendations.key_constellations.join(", ")}
                        className="p-2 whitespace-normal"
                      />
                    </TableRow>
                  )}
                  {recommendations.first_constellation_or_signature_weapon
                    !== undefined && (
                    <TableRow className="hover:bg-inherit">
                      <TableHead
                        children="C1 или Сигна?"
                        className="p-2 text-right whitespace-normal"
                      />
                      <TableCell
                        children={
                          recommendations.first_constellation_or_signature_weapon
                        }
                        className="p-2 whitespace-pre-line sm:whitespace-normal"
                      />
                    </TableRow>
                  )}
                  {recommendations.required_level !== undefined && (
                    <TableRow className="hover:bg-inherit">
                      <TableHead
                        children="Рекомендации по уровню"
                        className="p-2 text-right whitespace-normal"
                      />
                      <TableCell
                        children={recommendations.required_level}
                        className="p-2 whitespace-normal"
                      />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
            {showAccordion && (
              <Accordion className="w-full" type="multiple">
                {recommendations.rotation !== undefined && (
                  <AccordionItem value="rotation">
                    <AccordionTrigger
                      children="Рекомендации по ротации"
                      className="px-6"
                    />
                    <AccordionContent className="px-6">
                      <RotationRecommendations
                        recommendations={recommendations.rotation}
                      />
                    </AccordionContent>
                  </AccordionItem>
                )}
                {recommendations.talent_leveling !== undefined && (
                  <AccordionItem value="talent_leveling">
                    <AccordionTrigger
                      children="Рекомендации по возвышению талантов"
                      className="px-6"
                    />
                    <AccordionContent className="px-6">
                      <TalentLevelingRecommendations
                        recommendations={recommendations.talent_leveling}
                      />
                    </AccordionContent>
                  </AccordionItem>
                )}
                {recommendations.weapons !== undefined && (
                  <AccordionItem value="weapons">
                    <AccordionTrigger
                      children="Рекомендации по оружию"
                      className="px-6"
                    />
                    <AccordionContent className="px-6">
                      <WeaponRecommendations
                        recommendations={recommendations.weapons}
                      />
                    </AccordionContent>
                  </AccordionItem>
                )}
                {recommendations.artifacts !== undefined && (
                  <AccordionItem value="artifacts">
                    <AccordionTrigger className="px-6">
                      Рекомендации по артефактам
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <ArtifactRecommendations
                        recommendations={recommendations.artifacts}
                      />
                    </AccordionContent>
                  </AccordionItem>
                )}
                {recommendations.squads !== undefined && (
                  <AccordionItem value="squads">
                    <AccordionTrigger className="px-6">
                      Рекомендации по отрядам
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <SquadRecommendations
                        recommendations={recommendations.squads}
                      />
                    </AccordionContent>
                  </AccordionItem>
                )}
                {recommendations.reference_point !== undefined && (
                  <AccordionItem value="reference_point">
                    <AccordionTrigger className="px-6">
                      Ориентир
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <ReferencePointRecommendations
                        recommendations={recommendations.reference_point}
                      />
                    </AccordionContent>
                  </AccordionItem>
                )}
                {recommendations.video_source_ids !== undefined && (
                  <AccordionItem value="video_sources">
                    <AccordionTrigger className="px-6">
                      Видео-источники
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <VideoSources
                        items={selectVideoSourcesByIds(
                          recommendations.video_source_ids
                        )}
                      />
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            )}
          </Card>
        </CollapsibleContent>
      </Collapsible>
    )
  );
}

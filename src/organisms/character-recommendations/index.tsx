import ArtifactRecommendations from "./artifact-recommendations";
import ReferencePointRecommendations from "./reference-point-recommendations";
import RotationRecommendations from "./rotation-recommendations";
import SquadRecommendations from "./squad-recommendations";
import TalentLevelingRecommendations from "./talent-leveling-recommendations";
import VideoSources from "./video-sources";
import WeaponRecommendations from "./weapon-recommendations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import type { CharacterRecommendationsProps } from "./types";

export default function CharacterRecommendations({ character, recommendations }: CharacterRecommendationsProps) {
  const showAccordion = recommendations.artifacts !== undefined || recommendations.reference_point !== undefined || recommendations.rotation !== undefined || recommendations.squads !== undefined || recommendations.talent_leveling !== undefined || recommendations.video_sources !== undefined || recommendations.weapons !== undefined;
  const showTable = recommendations.first_constellation_or_signature_weapon !== undefined || recommendations.key_constellations !== undefined || recommendations.required_level !== undefined;

  return (
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
              <TableBody className={cn({ "[&_tr:last-child]:border-b": showAccordion })}>
                {recommendations.key_constellations !== undefined && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead className="p-2 text-right whitespace-normal">
                      Рекомендации по ключевым созвездиям
                    </TableHead>
                    <TableCell className="p-2 whitespace-normal">
                      {recommendations.key_constellations.join(", ")}
                    </TableCell>
                  </TableRow>
                )}
                {recommendations.first_constellation_or_signature_weapon !== undefined && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead className="p-2 text-right whitespace-normal">
                      C1 или Сигна?
                    </TableHead>
                    <TableCell className="p-2 whitespace-pre-line sm:whitespace-normal">
                      {recommendations.first_constellation_or_signature_weapon}
                    </TableCell>
                  </TableRow>
                )}
                {recommendations.required_level !== undefined && (
                  <TableRow className="hover:bg-inherit">
                    <TableHead className="p-2 text-right whitespace-normal">
                      Рекомендации по уровню
                    </TableHead>
                    <TableCell className="p-2 whitespace-normal">
                      {recommendations.required_level}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
          {showAccordion && (
            <Accordion className="w-full" type="multiple">
              {recommendations.rotation !== undefined && (
                <AccordionItem value="rotation">
                  <AccordionTrigger className="px-6">
                    Рекомендации по ротации
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <RotationRecommendations recommendations={recommendations.rotation} />
                  </AccordionContent>
                </AccordionItem>
              )}
              {recommendations.talent_leveling !== undefined && (
                <AccordionItem value="talent_leveling">
                  <AccordionTrigger className="px-6">
                    Рекомендации по возвышению талантов
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <TalentLevelingRecommendations recommendations={recommendations.talent_leveling} />
                  </AccordionContent>
                </AccordionItem>
              )}
              {recommendations.weapons !== undefined && (
                <AccordionItem value="weapons">
                  <AccordionTrigger className="px-6">
                    Рекомендации по оружию
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <WeaponRecommendations character={character} recommendations={recommendations.weapons} />
                  </AccordionContent>
                </AccordionItem>
              )}
              {recommendations.artifacts !== undefined && (
                <AccordionItem value="artifacts">
                  <AccordionTrigger className="px-6">
                    Рекомендации по артефактам
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <ArtifactRecommendations character={character} recommendations={recommendations.artifacts} />
                  </AccordionContent>
                </AccordionItem>
              )}
              {recommendations.squads !== undefined && (
                <AccordionItem value="squads">
                  <AccordionTrigger className="px-6">
                    Рекомендации по отрядам
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <SquadRecommendations recommendations={recommendations.squads} />
                  </AccordionContent>
                </AccordionItem>
              )}
              {recommendations.reference_point !== undefined && (
                <AccordionItem value="reference_point">
                  <AccordionTrigger className="px-6">
                    Ориентир
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <ReferencePointRecommendations recommendations={recommendations.reference_point} />
                  </AccordionContent>
                </AccordionItem>
              )}
              {recommendations.video_sources !== undefined && (
                <AccordionItem value="video_sources">
                  <AccordionTrigger className="px-6">
                    Видео-источники
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <VideoSources items={recommendations.video_sources} />
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          )}
        </Card>
      </CollapsibleContent>
    </Collapsible>
  );
}

import { ChevronDownIcon } from "lucide-react";

import type { ArtifactSetRecommendationsProps } from "./types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { selectVideoSourcesByIds } from "@/features/video-sources/selectors";
import CharacterRecommendations from "./character-recommendations";
import PreferredStatsRecommendations from "./preferred-stats-recommendations";
import VideoSources from "../video-sources";

export default function ArtifactSetRecommendations({ recommendations }: ArtifactSetRecommendationsProps) {
  const showAccordion = recommendations.characters !== undefined || recommendations.preferred_stats !== undefined || recommendations.video_source_ids !== undefined;

  return (
    <Collapsible className="space-y-2 md:space-y-4" defaultOpen>
      <CollapsibleTrigger asChild>
        <Button className="flex justify-between w-full [&[data-state=open]>svg]:rotate-180">
          Рекомендации
          <ChevronDownIcon className="transition-transform duration-200" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent asChild>
        <Card className="gap-0">
          {showAccordion && (
            <Accordion className="w-full" type="multiple">
              {recommendations.characters !== undefined && (
                <AccordionItem value="characters">
                  <AccordionTrigger className="px-6">
                    Рекомендации по персонажам
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <CharacterRecommendations recommendations={recommendations.characters} />
                  </AccordionContent>
                </AccordionItem>
              )}
              {recommendations.preferred_stats !== undefined && (
                <AccordionItem value="preferred_stats">
                  <AccordionTrigger className="px-6">
                    Рекомендации по предпочтительным характеристикам
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <PreferredStatsRecommendations recommendations={recommendations.preferred_stats} />
                  </AccordionContent>
                </AccordionItem>
              )}
              {recommendations.video_source_ids !== undefined && (
                <AccordionItem value="video_sources">
                  <AccordionTrigger className="px-6">
                    Видео-источники
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <VideoSources items={selectVideoSourcesByIds(recommendations.video_source_ids)} />
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

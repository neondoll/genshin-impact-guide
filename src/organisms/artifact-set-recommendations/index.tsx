import { ChevronDownIcon } from "lucide-react";

import CharacterRecommendations from "./character-recommendations";
import PreferredAttributesRecommendations from "./preferred-attributes-recommendations";
import VideoSources from "../video-sources";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { ArtifactSetRecommendationsProps } from "./types";

export default function ArtifactSetRecommendations({ recommendations }: ArtifactSetRecommendationsProps) {
  const showAccordion = recommendations.characters !== undefined || recommendations.preferred_attributes !== undefined || recommendations.video_sources !== undefined;

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
              {recommendations.preferred_attributes !== undefined && (
                <AccordionItem value="preferred_attributes">
                  <AccordionTrigger className="px-6">
                    Рекомендации по предпочтительным характеристикам
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <PreferredAttributesRecommendations recommendations={recommendations.preferred_attributes} />
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

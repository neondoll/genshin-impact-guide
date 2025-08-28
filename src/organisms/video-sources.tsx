import type { VideoSource } from "@/features/video-sources/types";
import { Button } from "@/components/ui/button";
import VK from "@/icons/VK";
import Youtube from "@/icons/Youtube";

export default function VideoSources({ items }: { items: VideoSource[] }) {
  return (
    <ul className="list-inside list-disc">
      {items.map((item, index) => (
        <li key={index}>
          <div className="inline-flex gap-2 items-center">
            <span children={item.title} />
            {item.vk_url !== undefined && (
              <Button asChild className="size-8" size="icon">
                <a href={item.vk_url} target="_blank">
                  <VK className="size-7" />
                </a>
              </Button>
            )}
            {item.youtube_url !== undefined && (
              <Button asChild className="size-8" size="icon">
                <a href={item.youtube_url} target="_blank">
                  <Youtube className="size-7" />
                </a>
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

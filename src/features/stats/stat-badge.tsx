import type { StatId } from "./types";
import { Badge } from "@/components/ui/badge";
import { selectStatById } from "./selectors";

export default function StatBadge({ statId }: { statId: StatId }) {
  const stat = selectStatById(statId);

  return (
    <Badge
      children={stat.name}
      className="flex justify-center w-full text-center text-pretty whitespace-normal"
      variant="secondary"
    />
  );
}

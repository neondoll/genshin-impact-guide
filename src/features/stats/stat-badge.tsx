import type { TStatKey } from "@/database/stats/types";
import { Badge } from "@/components/ui/badge";
import { selectStatById } from "./statsSelectors";

export default function StatBadge({ statKey }: { statKey: TStatKey }) {
  const stat = selectStatById(statKey);

  return stat && (
    <Badge
      children={stat.name}
      className="flex justify-center w-full text-center text-pretty whitespace-normal"
      variant="secondary"
    />
  );
}

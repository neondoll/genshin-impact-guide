import type { Stat } from "@/types/stat";
import { Badge } from "@/components/ui/badge";

export default function StatBadge({ statName }: { statName: Stat["name"] }) {
  return (
    <Badge children={statName} className="text-center text-pretty whitespace-normal" variant="secondary" />
  );
}

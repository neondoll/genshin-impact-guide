import { publicImageSrc } from "@/lib/utils";

export default function IsBetter({ value }: { value: boolean }) {
  return value && (
    <img
      alt="Является лучшим выбором"
      className="size-12 rounded-full"
      src={publicImageSrc("better-logo-128x128.png")}
    />
  );
}

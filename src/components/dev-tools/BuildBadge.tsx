import { useBuildInfo } from "@/utils/build-info";

export const BuildBadge = () => {
  const { mode, version } = useBuildInfo();

  if (mode === "production") return null;

  return (
    <div className="fixed bottom-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs z-50">
      {`${mode} v${version}`}
    </div>
  );
};

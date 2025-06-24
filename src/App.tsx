import characters from "@/database/characters.ts";
import regions from "@/database/regions.ts";
import { cn } from "@/lib/utils.ts";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import "./App.css";

const TabClassName = cn([
  "inline-flex flex-1 gap-1.5 justify-center items-center px-2 py-1 h-[calc(100%-1px)] text-sm font-medium",
  "text-neutral-950 whitespace-nowrap rounded-md border border-transparent transition-[color,box-shadow]",
  "focus-visible:border-neutral-400 focus-visible:outline-1 focus-visible:outline-neutral-400 focus-visible:ring-3",
  "focus-visible:ring-neutral-400/50 disabled:opacity-50 disabled:pointer-events-none data-selected:bg-white",
  "data-selected:shadow-sm [&_svg]:shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
  "dark:text-neutral-400 dark:focus-visible:border-neutral-500 dark:focus-visible:outline-neutral-500",
  "dark:focus-visible:ring-neutral-500/50 dark:data-selected:text-neutral-50 dark:data-selected:bg-white/4.5",
  "dark:data-selected:border-white/15",
]);
const TabGroupClassName = "flex flex-col gap-2";
const TabListClassName = cn([
  "inline-flex justify-center items-center p-[3px] w-fit h-9 rounded-lg text-neutral-500 bg-neutral-100",
  "dark:text-neutral-400 dark:bg-neutral-800",
]);
const TabPanelClassName = "outline-none";
const TabPanelsClassName = "flex-1";

function App() {
  return (
    <div className="container p-10 mx-auto">
      <TabGroup className={TabGroupClassName}>
        <TabList className={TabListClassName}>
          <Tab className={TabClassName}>Персонажи</Tab>
          <Tab className={TabClassName}>Регионы</Tab>
        </TabList>
        <TabPanels className={TabPanelsClassName}>
          <TabPanel className={TabPanelClassName}>
            <ul className="grid grid-cols-[repeat(auto-fill,calc(var(--spacing)*27.5))] gap-2 justify-center">
              {Object.entries(characters).map(([key, character]) => (
                <li className="flex flex-col p-0.5 h-37.5 rounded-sm" key={key}>
                  {/* from-[rgba(18,18,18,0.5)] to-[rgb(102,102,102)] */}
                  <img
                    alt={character.name}
                    className="shrink-0 size-26.5 bg-linear-to-br from-neutral-900/50 to-neutral-500 rounded-t-sm"
                    draggable={false}
                    src={character.small_image_src}
                  />
                  {/* bg-[rgba(17,17,17,0.75)] */}
                  <p className="inline-flex flex-1 justify-center items-center text-white bg-neutral-950/75 rounded-b-sm">
                    {character.name}
                  </p>
                </li>
              ))}
            </ul>
          </TabPanel>
          <TabPanel className={TabPanelClassName}>
            <ul className="list-inside list-disc">
              {Object.entries(regions).map(([key, region]) => (
                <li key={key}>{region.name}</li>
              ))}
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default App;

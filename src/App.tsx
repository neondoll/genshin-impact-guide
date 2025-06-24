import characters from "@/database/characters.ts";
import regions from "@/database/regions.ts";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";

import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container px-10 py-4 mx-auto">
        <ModeToggle />
      </div>
      <div className="container p-10 mx-auto">
        <Tabs defaultValue="characters">
          <TabsList>
            <TabsTrigger value="characters">Персонажи</TabsTrigger>
            <TabsTrigger value="regions">Регионы</TabsTrigger>
          </TabsList>
          <TabsContent value="characters">
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
          </TabsContent>
          <TabsContent value="regions">
            <ul className="list-inside list-disc">
              {Object.entries(regions).map(([key, region]) => (
                <li key={key}>{region.name}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </ThemeProvider>
  );
}

export default App;

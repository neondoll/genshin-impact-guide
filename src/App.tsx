import characters from "@/database/characters.ts";
import regions from "@/database/regions.ts";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";

import "./App.css";
import { cn } from "@/lib/utils.ts";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="flex items-center h-12 border-b">
        <div className="container flex gap-1 items-center px-4 mx-auto lg:gap-2 lg:px-6">
          <h2 className="text-base font-medium">
            <span className="font-(family-name:--font-genshin-drip)">Genshin Impact</span>
            {" "}
            Гайд
          </h2>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
      </header>
      <main>
        <div className="container px-4 py-4 mx-auto md:py-6 lg:px-6">
          <Tabs className="md:gap-4" defaultValue="characters">
            <TabsList>
              <TabsTrigger value="characters">Персонажи</TabsTrigger>
              <TabsTrigger value="regions">Регионы</TabsTrigger>
            </TabsList>
            <TabsContent value="characters">
              <ul className="grid grid-cols-[repeat(auto-fill,calc(var(--spacing)*27))] gap-2 justify-center md:gap-4">
                {Object.entries(characters).map(([key, character]) => (
                  <li
                    className={cn(
                      "relative flex flex-col h-37 rounded-xl border shadow-sm transition-shadow",
                      "has-focus-visible:ring-3 has-focus-visible:ring-ring/50",
                    )}
                    key={key}
                  >
                    <img
                      alt={character.name}
                      className="shrink-0 w-full h-auto bg-linear-to-br from-muted to-muted-foreground rounded-t-xl"
                      draggable={false}
                      src={character.small_image_src}
                    />
                    <a
                      className={cn(
                        "inline-flex flex-1 justify-center items-center text-sm text-center text-card-foreground",
                        "bg-card rounded-b-xl outline-none before:absolute before:inset-0",
                      )}
                      href="#"
                    >
                      {character.name}
                    </a>
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
      </main>
    </ThemeProvider>
  );
}

export default App;

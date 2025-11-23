import { ThemeProvider } from "../ThemeProvider";
import { Button } from "@/components/ui/button";

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-8 space-y-4">
        <h3 className="text-lg font-semibold">Theme Provider Example</h3>
        <p className="text-muted-foreground">
          Toggle between light and dark modes to see the theme change.
        </p>
        <Button>Sample Button</Button>
      </div>
    </ThemeProvider>
  );
}

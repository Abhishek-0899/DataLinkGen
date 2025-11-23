import Navigation from "../Navigation";
import { ThemeProvider } from "../ThemeProvider";

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-24 px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Navigation Component</h2>
            <p className="text-muted-foreground">
              Fixed navigation with backdrop blur, theme toggle, and mobile menu
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

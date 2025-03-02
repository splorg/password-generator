import { Toaster } from "react-hot-toast";
import { Github } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { PasswordForm } from "./components/password-form";
import { ThemeProvider } from "./lib/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { ExternalLink } from "./components/external-link";

import "./index.css";

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="password-generator-theme">
      <main className="px-4 py-10 w-screen h-screen">
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl">Password Generator</CardTitle>
            <ThemeToggle />
          </CardHeader>
          <CardContent>
            <PasswordForm />
          </CardContent>
        </Card>
        <div className="flex items-center justify-center mt-4 gap-1">
          <ExternalLink to="https://github.com/splorg/password-generator" label="Source" icon={<Github className="w-4 h-4" />} />
        </div>
      </main>
      <Toaster
        position="bottom-right"
      />
    </ThemeProvider>
  );
}

export default App;

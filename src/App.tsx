import { Toaster } from "react-hot-toast";

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { PasswordForm } from "./components/password-form";
import { ThemeProvider } from "./lib/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

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
      </main>
      <Toaster
        position="bottom-right"
      />
    </ThemeProvider>
  );
}

export default App;

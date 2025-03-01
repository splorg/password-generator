import { Toaster } from "react-hot-toast";

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { PasswordForm } from "./components/password-form";

import "./index.css";

export function App() {
  return (
    <>
      <main className="px-4 py-10 w-screen h-screen">
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Password Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <PasswordForm />
          </CardContent>
        </Card>
      </main>
      <Toaster
        position="bottom-right"
      />
    </>
  );
}

export default App;

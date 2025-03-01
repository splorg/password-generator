import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { Switch } from "@/components/ui/switch";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4" />
      <Switch 
        checked={theme !== "light"} 
        onCheckedChange={(checked) => {
          setTheme(checked ? "dark" : "light");
        }}
      />
      <Moon className="h-4 w-4" />
    </div>
  );
} 
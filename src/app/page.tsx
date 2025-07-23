import HomePage from "@/pages/HomePage";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

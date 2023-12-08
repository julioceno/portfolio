import { makeAutoObservable } from "mobx";

type ThemeType = "dark" | "light";

class ThemeStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  theme: ThemeType = "light";
  setDarkMode(theme: ThemeType) {
    this.theme = theme;
    this.setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  getDarkModeByStorage() {
    const theme = localStorage.getItem("theme") as ThemeType | undefined;

    if (!theme) {
      // Setar o que vem do navegador
      const isDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      const defaultTheme = isDarkMode ? "dark" : "light";

      this.setTheme(defaultTheme);
      return localStorage.setItem("theme", defaultTheme);
    }

    this.theme = theme;
    this.setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  setTheme(theme: ThemeType) {
    const html = document.querySelector("html")!;

    if (theme === "dark") {
      return html.classList.add("dark");
    }

    return html.classList.remove("dark");
  }
}

const themeStore = new ThemeStore();

export { themeStore };

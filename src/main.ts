import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-400-italic.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/bricolage-grotesque/latin-500.css";
import "@fontsource/bricolage-grotesque/latin-600.css";
import "@fontsource/bricolage-grotesque/latin-700.css";
import "../assets/css/style.css";

export type SiteLanguage = "fr" | "en";

const LANGUAGE_STORAGE_KEY = "rosas-site-language";

export function currentLanguage(): SiteLanguage {
  return document.documentElement.classList.contains("lang-fr") ? "fr" : "en";
}

export function applyLanguage(language: SiteLanguage, persist = true): void {
  const html = document.documentElement;
  html.classList.toggle("lang-fr", language === "fr");
  html.classList.toggle("lang-en", language === "en");
  html.lang = language;

  const button = document.getElementById("langBtn");
  if (button) {
    button.hidden = false;
    button.textContent = language === "fr" ? "EN" : "FR";
    button.setAttribute("aria-label", language === "fr" ? "Switch to English" : "Passer en français");
  }

  if (persist) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Le stockage peut être indisponible en navigation privée.
    }
  }
  document.dispatchEvent(new CustomEvent<SiteLanguage>("site:language", { detail: language }));
}

function initializeLanguage(): void {
  let language: SiteLanguage = "en";
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === "fr" || saved === "en") language = saved;
  } catch {
    // L'anglais reste la langue par défaut.
  }
  applyLanguage(language, false);
}

initializeLanguage();
document.getElementById("langBtn")?.addEventListener("click", () => {
  applyLanguage(currentLanguage() === "en" ? "fr" : "en");
});

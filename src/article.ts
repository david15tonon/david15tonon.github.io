import "./main";

const root = document.querySelector<HTMLElement>("[data-article]");
if (root) {
  const codeBlocks = root.querySelectorAll<HTMLPreElement>("pre");
  if (codeBlocks.length) {
    void (async () => {
      const { default: Prism } = await import("prismjs");
      await import("prismjs/components/prism-clike");
      await import("prismjs/themes/prism-tomorrow.css");
      Prism.languages.minizinc = Prism.languages.extend("clike", {
        keyword: /\b(?:array|annotation|bool|constraint|enum|float|function|include|int|maximize|minimize|of|output|predicate|set|solve|string|var)\b/,
        builtin: /\b(?:alldifferent|show|sum)\b/,
      });
      Prism.highlightAllUnder(root);
    })();
  }
  codeBlocks.forEach((pre) => {
    pre.classList.add("code-block");
    const button = document.createElement("button");
    button.className = "copy-code";
    button.type = "button";
    const french = () => document.documentElement.lang === "fr";
    const label = () => { button.textContent = french() ? "Copier" : "Copy"; };
    label();
    document.addEventListener("site:language", label);
    const status = document.createElement("span");
    status.className = "sr-only";
    status.setAttribute("role", "status");
    pre.tabIndex = 0;
    button.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.textContent ?? "";
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = french() ? "Copié !" : "Copied!";
        status.textContent = button.textContent;
      } catch {
        status.textContent = french() ? "Copie impossible. Sélectionnez le code pour le copier." : "Unable to copy. Select the code to copy it.";
        button.textContent = french() ? "Réessayer" : "Try again";
      }
      window.setTimeout(label, 1600);
    });
    pre.append(button, status);
  });

  if (root.textContent?.includes("$")) {
    void Promise.all([
      import("katex/contrib/auto-render"),
      import("katex/dist/katex.min.css"),
    ]).then(([{ default: renderMathInElement }]) => {
      renderMathInElement(root, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
        ],
        throwOnError: false,
      });
    });
  }
}

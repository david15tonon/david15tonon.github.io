import "./main";

const params = new URLSearchParams(location.search);
const requested = params.get("post") ?? "";
const isBlog = location.pathname.includes("/blog/");
// Map an old query-string slug to its current `AAAA-MM-JJ-slug` directory, e.g.
// { "minizinc-modeling": "2026-08-10-minizinc-modeling" }. Leave empty when no
// historical URL needs to be preserved; an unmapped slug is used as-is.
const aliases: Record<string, string> = isBlog ? {} : {};
const slug = aliases[requested] ?? requested;
if (/^[a-z0-9-]+$/.test(slug)) {
  location.replace(`/pages/${isBlog ? "blog" : "news"}/articles/${slug}/`);
}

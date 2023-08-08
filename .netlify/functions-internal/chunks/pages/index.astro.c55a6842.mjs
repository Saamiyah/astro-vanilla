import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.13965cd5.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead()}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/saamiyah/Projects/component-library/astro-vanilla/fast-filament/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { article, articleType } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card astro-DOHJNAO5">
  <a${addAttribute(`/${articleType}/${article.id}`, "href")} class="astro-DOHJNAO5">
    <img${addAttribute(article.imageUrl, "src")} class="img astro-DOHJNAO5">
  </a>
  <h2 class="astro-DOHJNAO5">${article.title}</h2>
  <p class="astro-DOHJNAO5">${article.summary}</p>
</div>`;
}, "/Users/saamiyah/Projects/component-library/astro-vanilla/fast-filament/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const articleResponse = await fetch(
    "https://api.spaceflightnewsapi.net/v3/articles"
  );
  const reportResponse = await fetch(
    "https://api.spaceflightnewsapi.net/v3/reports"
  );
  const articleData = await articleResponse.json();
  const reportData = await reportResponse.json();
  const articles = articleData.slice(0, 11);
  const reports = reportData.slice(0, 20);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro News", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="astro-J7PV25F6">
    <h1 class="astro-J7PV25F6">*ASTRONEWS*</h1>

    <div class="container astro-J7PV25F6">
      <div class="astro-J7PV25F6">
        <p class="astro-J7PV25F6">Latest articles</p>
      </div>
      <div class="article-container astro-J7PV25F6">
        ${articles.map((article) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "article": article, "articleType": "article", "class": "astro-J7PV25F6" })}`)}
      </div>
      <div class="report astro-J7PV25F6">
        <p class="astro-J7PV25F6">Reports</p>
      </div>
      <div class="article-container astro-J7PV25F6">
        ${reports.map((report) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "article": report, "articleType": "report", "class": "astro-J7PV25F6" })}`)}
      </div>
    </div>
  </main>
` })}`;
}, "/Users/saamiyah/Projects/component-library/astro-vanilla/fast-filament/src/pages/index.astro", void 0);

const $$file = "/Users/saamiyah/Projects/component-library/astro-vanilla/fast-filament/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

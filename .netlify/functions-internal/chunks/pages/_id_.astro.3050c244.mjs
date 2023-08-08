import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../astro.13965cd5.mjs';
import 'html-escaper';
/* empty css                          *//* empty css                          */
const $$Astro$1 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  const articleResponse = await fetch(
    `https://api.spaceflightnewsapi.net/v3/articles/${id}`
  );
  const articleData = await articleResponse.json();
  return renderTemplate`${maybeRenderHead()}<div class="wrapper astro-3IJNS5KM">
  <h1 class="astro-3IJNS5KM">${articleData.title}</h1>
  <h2 class="astro-3IJNS5KM">${articleData.newsSite}</h2>
  <div class="content astro-3IJNS5KM">
    <img${addAttribute(articleData.imageUrl, "src")} class="img astro-3IJNS5KM">
    <div class="summary-container astro-3IJNS5KM">
      <p class="astro-3IJNS5KM">${articleData.summary}</p>
    </div>
  </div>
</div>`;
}, "/Users/saamiyah/Projects/component-library/astro-vanilla/fast-filament/src/pages/article/[id].astro", void 0);

const $$file$1 = "/Users/saamiyah/Projects/component-library/astro-vanilla/fast-filament/src/pages/article/[id].astro";
const $$url$1 = "/article/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const res = await fetch(`https://api.spaceflightnewsapi.net/v3/reports/${id}`);
  const reports = await res.json();
  return renderTemplate`${maybeRenderHead()}<div class="wrapper astro-MZFL6KOU">
  <h1 class="astro-MZFL6KOU">${reports.title}</h1>
  <h2 class="astro-MZFL6KOU">${reports.newsSite}</h2>
  <div class="content astro-MZFL6KOU">
    <img${addAttribute(reports.imageUrl, "src")} class="img astro-MZFL6KOU">
    <div class="summary-container astro-MZFL6KOU">
      <p class="astro-MZFL6KOU">${reports.summary}</p>
    </div>
  </div>
</div>`;
}, "/Users/saamiyah/Projects/component-library/astro-vanilla/fast-filament/src/pages/report/[id].astro", void 0);

const $$file = "/Users/saamiyah/Projects/component-library/astro-vanilla/fast-filament/src/pages/report/[id].astro";
const $$url = "/report/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_$1 as _, _id_ as a };

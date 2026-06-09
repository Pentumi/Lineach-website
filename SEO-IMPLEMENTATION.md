# Lineach.com SEO & AI Optimization Implementation (2026)

## What Was Done

### Technical SEO (Best-in-Class Baseline)
- Added `robots.txt` with sitemap reference.
- Created comprehensive `sitemap.xml` covering all main pages.
- Created `llms.txt` — plain-text file specifically for AI crawlers and LLMs (emerging AEO/GEO best practice).
- Updated `site.webmanifest` with accurate name, description, and theme.
- Fixed and standardized:
  - Title tags (keyword + location + brand)
  - Meta descriptions (compelling, <160 chars, location-rich)
  - Canonical URLs (correct self-referential)
  - Open Graph + Twitter cards
  - Author, robots, manifest links

### AI / Generative Engine Optimization (AEO/GEO)
- **Heavy use of JSON-LD structured data** (highest-impact for AI citation per 2025-2026 research):
  - Organization + LocalBusiness (with geo, areaServed, contactPoint, knowsAbout)
  - Multiple Service entries
  - FAQPage schema on homepage (proven high citation rate for ChatGPT, Perplexity, Google AI Overviews, etc.)
  - Service catalog / ItemList on services page
  - ContactPage + LocalBusiness on contact
- Visible, human-readable **FAQ section** on homepage that exactly matches the FAQPage schema (critical for both users and AI to quote the same answers).
- Content restructured with direct answers first, question-based headings, lists, and clear entity signals (certifications, materials, locations, experience).
- Added `llms.txt` with concise, factual summary of capabilities, locations, and contact for AI systems.

### On-Page & Local SEO
- Consistent NAP (Name, Address, Phone) everywhere: Lineach Construction Limited, Ardnamullan / Clonard, Co Meath, +353 87 919 9059, dean@lineach.com.
- Location targeting: Ireland, Dublin, Cork, Waterford, Meath, Limerick, Shannon, nationwide.
- Service keywords: process piping, high purity piping, utility piping, orbital welding, ASME IX, EN287, pharma piping, etc.
- Internal linking improvements and clear CTAs.
- Added trust signals (years, projects, compliance, warranty) in schema and content.

### Pages Updated
- `/` (index.html) — Primary homepage with full schema + visible FAQ
- `/about/`
- `/services/`
- `/contact/`
- `/piping-services.html` (dedicated service page)
- Supporting: manifest, robots, sitemap, llms.txt

### Bonus
- The `cleaningservices/` sub-site already had decent schema + FAQ (kept and noted as complementary offering).

## Remaining / Recommended Next Steps (High Impact)

1. **Deploy these files** to replace or update the current live site (current live lineach.com appears to be the older labour supply / cleaning / traffic management version — much thinner content).
2. **Real images**: Replace all placeholder images with high-quality project photos, team, welding, installed piping. Add descriptive alt text on every `<img>`.
3. **Google Business Profile**: Claim/optimize GBP for "Lineach Construction" or "Lineach Piping" in Meath / Ireland. Add services, photos, posts, reviews. This is often the #1 local ranking factor for contractors.
4. **Reviews & E-E-A-T**: Collect and display real client testimonials/reviews (with schema if possible). Add case studies with photos and results.
5. **Content expansion** (for both traditional SEO and AI):
   - Dedicated project/case study pages
   - Blog or resources on "high purity piping best practices", "ASME welding for pharma", "hot tap procedures", etc.
   - Industry-specific landing pages (Pharma Piping Ireland, etc.)
6. **Form handling**: Replace placeholder Formspree IDs with real working forms (Netlify, Formspree, or custom).
7. **Performance**: The current Bootstrap CDN approach is decent. Consider adding critical CSS inlining or image optimization on hosting (Cloudflare, Netlify, etc.).
8. **Backlinks & PR**: Target Irish construction directories, supplier listings, LinkedIn, trade associations.
9. **Monitoring**: Set up Google Search Console + Bing Webmaster Tools immediately after deploy. Track impressions for target keywords.
10. **Optional advanced**:
    - Add BreadcrumbList schema on sub-pages.
    - Consider HowTo schema for specific processes (e.g. "How we perform orbital welding").
    - Track AI mentions (Perplexity, ChatGPT, Gemini) over time.

## Notes on Positioning
The source files in this folder represent a **high-value technical positioning** (process/high-purity piping + certified welding) that is significantly more differentiated than generic labour supply. The live site at the time of review was the broader "Integrated Construction Services / Labour Supply" version. Deploying the improved piping-focused site should improve lead quality.

All changes follow 2025-2026 best practices for both classic Google SEO and AI/answer engine visibility (structured data + clear factual answers + entity clarity).

Contact for questions on these changes: dean@lineach.com | +353 87 919 9059

Last updated: June 2026
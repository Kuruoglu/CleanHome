AGENT Instructions – CleanHome Next.js Migration
Purpose

This document defines the high‑level goals, constraints and guidelines for an AI agent tasked with migrating the existing CleanHome junk removal website from a static HTML/CSS implementation to a modern Next.js codebase. The resulting application must preserve the current look and feel, be easy to extend with new pages and features, and follow best practices for search engine optimisation (SEO) and accessibility. These instructions are intended for an autonomous AI developer responsible for generating the initial project skeleton and code.

Objectives

Port the existing design to Next.js – replicate the current CleanHome website (hero, services, pricing, testimonials, FAQ, contact, etc.) using Next.js components and pages. The UI should retain the current colour palette (blue #1B5FFF, green #17B26A, neutrals) and typography (Inter) while supporting dark or light themes if desired.

Enable scalability – structure the project so that new pages can be added easily (e.g. services, pricing, commercial, blog/[slug]). Separate layout components from page content, use reusable components for cards, buttons and forms, and adopt file system routing conventions of Next.js.

Maximise SEO – ensure each page has a unique <title> and meta description, use Open Graph and Twitter Card tags, add structured data (JSON‑LD) for LocalBusiness where appropriate, generate sitemap.xml and robots.txt, and optimise page load times. Use semantic HTML elements and add alt text to all images.

Ensure accessibility – follow WCAG guidelines: labelled form inputs, proper heading hierarchy, focus‑visible styles, skip‑links, ARIA where necessary, and high colour contrast. The site must be usable with keyboard navigation and screen readers.

Use modern Next.js features – use the latest stable version of Next.js (v14 or newer) with the app router, Server Components, next/font for custom fonts, and TypeScript. Prefer static generation (static or ISR) for public pages and server actions for forms.

Host and deploy – prepare the project for deployment to Vercel or another modern platform. External API keys (e.g. for Leaflet or Google Maps) should be read from environment variables.

Project Setup

Initialize a new Next.js project: Use npx create-next-app@latest with --typescript and --app flags. Do not use the pages router. Select eslint and prettier to enforce code quality.

Install dependencies:

next@latest and react/react-dom (included by create‑next‑app)

@next/font/google for Inter font import

classnames for conditional class names (optional)

next-seo for simpler meta tag management

next-sitemap to automatically generate sitemap.xml and robots.txt

leaflet and react-leaflet for the interactive service area map (using dynamic imports on client only)

Optional: a component library like @headlessui/react for accessible UI components, but keep overall bundle size low.

File structure (using app router):

/app/layout.tsx – global layout component that imports fonts (Inter) and defines common <html> and <body> structure. Include <header>, <footer> and <nav> as separate components.

/app/page.tsx – the home page (hero, value props, services preview, pricing preview, testimonials, FAQ, blog preview, contact form). Split large sections into subcomponents in /components.

/app/services/page.tsx – detailed services page. Additional pages like /app/pricing/page.tsx, /app/commercial/page.tsx follow the same pattern.

/app/blog/[slug]/page.tsx – dynamic blog article pages. Use getStaticProps / generateStaticParams to fetch posts from local markdown or an external CMS.

/components/* – reusable presentational components (Button, Card, ContactForm, Map, PricingTile, ReviewCard, etc.). Avoid business logic in these components.

/lib/* – utility functions (e.g. SEO helpers, JSON‑LD generation, API wrappers).

/public – static assets such as the CleanHome logo SVG and images used in the hero and sections. Include the removal-before-after.png and other assets provided.

Styling:

Use CSS Modules or Tailwind CSS for styling (choose one approach and be consistent). The current design uses custom colours; define them in a Tailwind config or module variables.

Import the Inter font using next/font/google in layout.tsx and apply via a CSS custom property or class.

Create a global CSS reset and base styles (e.g. set box-sizing: border-box, define CSS variables for colours, spacing and border radii).

Navigation:

Implement accessible navigation with a Header component that includes a responsive menu (hamburger on mobile) and CTA button.

Use <Link> from next/link for internal navigation; avoid full page reloads.

Highlight the active link using CSS classes.

SEO Considerations

Meta tags:

Use the built‑in metadata export or the next-seo library to define a title, description, canonical URL, openGraph and twitter fields for each page. Titles should reflect the page content (e.g. “CleanHome – Professional Junk Removal Services in Minnesota”).

For the home page, emphasise location (e.g. “Minnesota junk removal”) and value props (fast, eco‑friendly, licensed).

Provide concise meta descriptions (150–160 characters) summarising each page.

Structured data:

Add LocalBusiness JSON‑LD schema on the home page using <script type="application/ld+json">. Include organisation name, description, telephone, contact email, opening hours, and service area. Use the polygon coordinates provided to define the service area if supported.

Use Article schema on blog posts (title, description, published date, author, image).

Sitemap and robots:

Configure next-sitemap.js to generate sitemap.xml and robots.txt automatically. Define the site URL via an environment variable (e.g. NEXT_PUBLIC_SITE_URL). Exclude draft or private pages.

Accessibility and semantics:

Use semantic tags (<main>, <header>, <nav>, <section>, <article>, <footer>) with appropriate aria-label attributes.

All images must have descriptive alt attributes; decorative images should have alt="" and role="presentation".

Use proper heading hierarchy (<h1> followed by <h2>, <h3>, …) and avoid skipping levels.

Ensure interactive elements (buttons, links) have visible focus states. Use @tailwindcss/forms or manual styles.

Implement a skip link at the top of the page to allow keyboard users to jump to the main content.

Performance:

Optimise images using <Image> from next/image for automatic resizing and compression.

Use loading="lazy" for below‑the‑fold images and the Leaflet map (dynamically import react-leaflet only on the client side).

Minimise CSS and JavaScript bundle sizes; leverage tree shaking and code splitting by keeping pages and components small.

Building the Application

Layout: In /app/layout.tsx, wrap children with providers (if needed) and include the <Header>, <Footer>, and <SkipLink> components. Set HTML attributes (lang="en", dir="ltr") and apply the Inter font class to <body>.

Page Components:

/app/page.tsx (Home) should import and assemble section components in order: Hero, ValueProps, Services, HowItWorks, PricingSummary, Testimonials, FAQ, BlogPreview, Contact. Each component should accept props to make them reusable.

Each subpage (e.g. /app/services/page.tsx) should start with an <h1> heading that matches the nav link and provide detailed content. Use SEO metadata via the metadata export.

Create a [slug]/page.tsx dynamic route for blog posts. Use generateStaticParams and generateMetadata to fetch markdown or API data.

Reusable Components: Build small, focused components for cards, pricing tiles, review/testimonial cards, buttons, forms, icons. Accept className props for custom styling. Keep them presentation‑only; they should not contain data fetching or heavy logic.

Interactive Map: Create a Map component that uses react-leaflet and is dynamically imported ('use client' directive and next/dynamic). Accept coordinates as props and draw a polygon for the service area. Disable scroll wheel zoom to prevent interference with page scrolling. Provide fallback markup for server rendering (e.g. a static image or loading placeholder).

Contact Form: Implement a controlled form component with accessibility in mind. Use labels for all inputs and indicate required fields. Show inline error messages if inputs are invalid. On submit, call an API route (/api/contact) that sends an email or stores the message. Use Server Actions (experimental) or Edge Functions to handle server logic securely.

Blog System: If blog posts are static, store them as .md or .mdx files in /content/blog. Use a library like gray-matter to parse front matter. For a dynamic CMS (e.g. Contentful, Sanity), use getStaticProps with revalidation. Ensure each post has unique metadata and slug.

Coding Standards & Practices

Use TypeScript everywhere. Define types for props and shared data structures. Enable strict mode in tsconfig.json.

Adhere to the Airbnb or Standard JavaScript style guide via ESLint. Use Prettier for consistent formatting. Avoid any type.

Organise imports: external dependencies first, absolute imports (e.g. @/components/...), then relative imports.

Write components as functional components with named exports. Avoid default exports unless necessary.

Document functions and complex logic with comments or JSDoc.

Deployment & Environment

Add a .env.example file documenting required environment variables (e.g. NEXT_PUBLIC_SITE_URL, MAPBOX_API_KEY). Do not commit real secrets.

Configure next.config.js with images domains if external images are used. Set output: 'standalone' to enable serverless deployment.

Use npm run build to generate production assets; test locally with npm run start before deploying.

Deploy to Vercel or another hosting provider with automatic CI. After deployment, verify that robots.txt and sitemap.xml are accessible and that Lighthouse scores for performance, accessibility and SEO are 90+.

Final Deliverables

A fully functional Next.js project in the /project directory of this repository, ready to run with npm install and npm run dev.

Documentation (README.md) describing how to run, build and deploy the project, how to add new pages, and how to customise SEO settings.

This AGENT.md file as part of the repository, clearly outlining the instructions for the AI agent.

Notes

When writing code, pay attention to the Next.js Documentation
 and Google’s SEO Starter Guide
. Prioritise official sources when referencing techniques.

Keep performance and accessibility in mind at every stage – they directly impact SEO. Use Lighthouse or Web Vitals to measure impact.

If third‑party scripts (e.g. analytics) are required, load them with next/script and mark them as defer or lazyOnload to avoid blocking rendering.

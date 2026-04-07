# 🚀 Nirav's Portfolio — The Kinetic Interface

A high-performance, single-page professional portfolio built with dynamic aesthetics, 3D elements, and modern architectures.

## ✨ Features
- **Dynamic 3D Hero:** Custom WebGL elements that perform cleanly on both desktop and mobile devices.
- **CMS Controlled:** No hardcoded data. 100% of text and projects are fetched from Sanity CMS.
- **Glassmorphism & Kinetic UI:** Advanced Framer Motion animations with "Gaming/E-Sports" inspired design aesthetics.
- **Mobile-First:** Fully responsive and touch-friendly interface.
- **Ask About Nirav:** AI custom chatbot placeholder implementation integrated into the UI.

## 🛠 Tech Stack
- **Next.js 14+ (App Router):** Fast, React server component capabilities, and performance optimizations.
- **TypeScript:** For strict type safety and cleaner project structuring.
- **Tailwind CSS 4:** Quick, utility-first styling bound by direct design tokens.
- **Sanity CMS (Headless):** Manage all content remotely without deployments.
- **Framer Motion:** Handling complex interaction animations and layout transitions.
- **React Three Fiber / Three.js:** Running the lightweight geometric Hero scene.

## 📂 Folder Structure
\`\`\`
src/
├── app/                        # Next.js App Router (pages and API)
├── components/                 # Reusable React components
│   ├── layout/                 # Navbars, footers, etc.
│   └── sections/               # The building blocks for the single page (Hero, About, Projects)
├── features/                   # Standalone feature modules (e.g., project layouts, Chatbot setup)
├── three/                      # 3D geometries and canvas logic
├── hooks/                      # Custom React hooks
├── services/                   # All Sanity fetches (GROQ)
├── lib/                        # Sanity client init
└── constants/                  # Constant definitions
sanity/
└── schemas/                    # Sanity document blueprints
\`\`\`

## 🚀 Local Setup

1. **Clone & Install:**
   \`\`\`bash
   git clone <repo>
   cd portoflio
   npm install
   \`\`\`

2. **Environment Variables:**
   Create a \`.env.local\` file with the following variables:
   \`\`\`env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token
   OPENAI_API_KEY=your_openai_or_anthropic_api
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
   \`\`\`

3. **Run Development Server:**
   \`\`\`bash
   npm run dev
   \`\`\`
   Access the server at \`http://localhost:3000\`.

## 🗄️ Sanity Setup
The project schemas are located within the `sanity/schemas` folder.
1. Initiate a separate Sanity Studio project.
2. In the sanity directory on studio, import the schemas and place them inside the `schemaTypes/index.ts`.
3. Fill data and publish!

## ✏️ How to Add New Content
Simply log in to the Sanity Studio dashboard online and add a new entry to the respective model (e.g., Projects, Experience). Because Next.js handles data fetches directly from Sanity, your local or deployed app will instantly update!

## 🚀 Vercel Deployment
1. Import your Github repository on Vercel Dashboard.
2. Provide standard Next.js build setup (automatically assigned by Vercel usually).
3. Under Environment Variables, copy the contents of your `.env.local`.
4. Deploy!

## 🔮 Future Improvements
- **Blog Section:** Introduce MDX rendering for articles to expand on thoughts/tutorials.
- **Dark/Light Theme Toggle:** The whole schema assumes dark mode—this feature will establish an inverted equivalent.
- **Multilingual Support (i18n):** Translating the interface for global outreach.
- **Project Details Pages:** Dynamic `/projects/[slug]` route generation for deeply documented cases.
- **Testimonials Section:** Sanity schema and section to boast referrals.

import type { ProjectMeta } from "@/components/ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import Monetox0 from "@/assets/Monetox0.png";
import Monetox1 from "@/assets/Monetox1.png";
import Monetox2 from "@/assets/Monetox2.png";
import Monetox3 from "@/assets/Monetox3.png";
import Monetox4 from "@/assets/Monetox4.png";
import Monetox5 from "@/assets/Monetox5.png";
import tsc0 from "@/assets/tsc0.png";
import tsc1 from "@/assets/tsc1.png";
import tsc2 from "@/assets/tsc2.png";
import tsc3 from "@/assets/tsc3.png";
import tsc4 from "@/assets/tsc4.png";
import tsc5 from "@/assets/tsc5.png";
import tsc6 from "@/assets/tsc6.png";

import bunq0 from "@/assets/bunq0.png";
import bunq1 from "@/assets/bunq1.png";
import bunq2 from "@/assets/bunq2.png";
import bunq3 from "@/assets/bunq3.png";
import bunq4 from "@/assets/bunq4.png";
import bunq5 from "@/assets/bunq5.png";
import bunq6 from "@/assets/bunq6.png";
import bunq7 from "@/assets/bunq7.png";
import bunq8 from "@/assets/bunq8.png";
import bunq9 from "@/assets/bunq9.png";
import bunq10 from "@/assets/bunq10.png";
import bunq11 from "@/assets/bunq11.png";
import bunq12 from "@/assets/bunq12.png";

import ucn0 from "@/assets/ucn0.png";
import ucn1 from "@/assets/ucn1.png";
import ucn2 from "@/assets/ucn2.png";
import ucn3 from "@/assets/ucn3.png";

import howzie0 from "@/assets/howzie0.png";
import howzie1 from "@/assets/howzie1.png";

import gc0 from "@/assets/gc0.png";
import gc1 from "@/assets/gc1.png";
import gc2 from "@/assets/gc2.png";
import gc3 from "@/assets/gc3.png";
import gc4 from "@/assets/gc4.png";
import gc5 from "@/assets/gc5.png";

import fst0 from "@/assets/fst0.png";
import fst1 from "@/assets/fst1.png";


export const projects: ProjectMeta[] = [
  {
    slug: "MonetoX",
    title: "MonetoX",
    summary:
      "Reimagining everyday banking for a modern, mobile-first audience.",
    description:
      "A complete redesign of a retail banking app focused on clarity, trust, and speed of common tasks.",
    thumbnail: Monetox1,
    gallery: [Monetox0, Monetox3, Monetox2, Monetox4, Monetox5],
    year: "2025",
    category: "Mobile · Fintech",
    role: "Product Designer",
    duration: "1 month",
    tools: ["Figma", "Principle", "Maze", "Notion"],
    problem:
      "Existing customers found core actions—transfers, bill pay, and balance checks—buried under layers of navigation. Engagement on the home screen had dropped 22% year over year.",
    research:
      "We interviewed 18 customers across age groups and ran a diary study over two weeks. Repeating themes: anxiety around hidden fees, a desire for a calmer visual tone, and frustration with switching between accounts.",
    decisions: [
      {
        title: "A single, focused home",
        body: "We collapsed three tabs into one canvas with progressive disclosure—balances first, intent second, history on demand.",
      },
      {
        title: "Quiet typography, loud hierarchy",
        body: "Numbers became the loudest element. Labels stepped back so customers could parse their finances at a glance.",
      },
      {
        title: "Trust through consistency",
        body: "A single component system across web and mobile gave the brand a calmer, more dependable feel.",
      },
    ],
    outcome:
      "After a phased rollout, weekly active users grew 31% and time-to-transfer dropped from 47s to 19s. The new system shipped to 2.4M customers.",
    metrics: [
      { label: "WAU growth", value: "+31%" },
      { label: "Time to transfer", value: "−60%" },
      { label: "App store rating", value: "4.8" },
    ],
  },
  {
    slug: "Design Exploration",
    title: "Design Exploration",
    summary:
      "Exploring app design if founders wanted to build something for themselves, not the market.",
    description:
      "Exploring app design if founders wanted to build something for themselves, not the market.",
    thumbnail: tsc4,
    gallery: [tsc0, tsc1, tsc2, tsc3, tsc5, tsc6],
    year: "2024",
    category: "Mobile · Tech",
    role: "Product Designer",
    duration: "2 Months",
    tools: ["Figma", "Lottie", "Dovetail"],
    problem:
      "Users were dropping off in week two. The product surfaced too much data and too few next steps, leaving people feeling judged rather than supported.",
    research:
      "We ran 12 longitudinal interviews and analyzed 30,000 sessions. Patterns showed a strong preference for short, encouraging nudges over dashboards full of charts.",
    decisions: [
      {
        title: "From dashboards to rituals",
        body: "We replaced the data-heavy home with a single ‘today’ card—one suggestion, one action, one celebration.",
      },
      {
        title: "Tone as interface",
        body: "Microcopy was rewritten in collaboration with a behavioral therapist to feel supportive, never clinical.",
      },
    ],
    outcome:
      "Day-14 retention rose from 19% to 38%. Net Promoter Score climbed 22 points and the team adopted the ritual model across two adjacent products.",
    metrics: [
      { label: "D14 retention", value: "+100%" },
      { label: "NPS", value: "+22" },
      { label: "Daily streaks", value: "2.1×" },
    ],
  },
  {
    slug: "Bunq Labs",
    title: "Bunq Labs",
    summary: "Exploring design directions for bunq's new branding",
    description:
      "Exploring design directions for bunq's new branding",
    thumbnail: bunq0,
    gallery: [bunq1, bunq2, bunq3, bunq4, bunq5, bunq6, bunq7, bunq8, bunq9, bunq10, bunq11, bunq12],
    year: "2025",
    category: "Web · Branding",
    role: "Product Designer",
    duration: "2 months",
    tools: ["Figma", "Storybook", "Linear"],
    problem:
      "Operators stitched dashboards from a dozen sources every Monday. The product was powerful but cognitively expensive, with no clear answer to ‘what changed?’",
    research:
      "Shadowing six teams revealed that the first question every Monday was always the same: what moved last week, and why. The product never answered it directly.",
    decisions: [
      {
        title: "Lead with the story",
        body: "Every dashboard now opens with a generated narrative—what moved, by how much, and what likely caused it.",
      },
      {
        title: "Charts as supporting actors",
        body: "Visualizations were reduced in chrome and given consistent scales so comparison felt instant.",
      },
    ],
    outcome:
      "Time-to-insight dropped from 11 minutes to under 3. Customer expansion revenue tied to the analytics module grew 18%.",
    metrics: [
      { label: "Time to insight", value: "−73%" },
      { label: "Expansion ARR", value: "+18%" },
      { label: "Weekly opens", value: "3.4×" },
    ],
  },
  {
    slug: "UConnekt",
    title: "UConnekt",
    summary: "An editorial storefront for a small-batch ceramics studio.",
    description:
      "A Inhouse platform for finding and expanding connections between universities and companies.",
    thumbnail: ucn0,
    gallery: [ucn1, ucn2, ucn3],
    year: "2025",
    category: "App · Social",
    role: "Product & Brand Designer",
    duration: "3 months",
    tools: ["Figma", "Shopify", "Webflow"],
    problem:
      "The previous template-driven shop flattened a richly tactile catalog into thumbnails and price tags, hurting both perceived value and conversion.",
    research:
      "We compared 40 craft-led brands and ran preference tests with a small panel of repeat customers. Photography, pace, and whitespace were the strongest signals of quality.",
    decisions: [
      {
        title: "An editorial grid",
        body: "Product pages were rebuilt as long-form essays—context first, materials next, purchase last.",
      },
      {
        title: "A restrained palette",
        body: "We removed competing accent colors so each piece could carry its own tone.",
      },
    ],
    outcome:
      "Average order value rose 41% and the studio sold out of two seasonal collections within a week of launch.",
    metrics: [
      { label: "AOV", value: "+41%" },
      { label: "Conversion", value: "+23%" },
      { label: "Sell-through", value: "100%" },
    ],
  },

  {
    slug: "Howzie App",
    title: "Howzie App",
    summary: "A small App design exploration for a howzie app.",
    description:
      "A small App design exploration for a howzie app.",
    thumbnail: howzie0,
    gallery: [howzie1, howzie0],
    year: "2025",
    category: "App · Game",
    role: "Product Designer",
    duration: "1 months",
    tools: ["Figma", "Shopify", "Webflow"],
    problem:
      "The previous template-driven shop flattened a richly tactile catalog into thumbnails and price tags, hurting both perceived value and conversion.",
    research:
      "We compared 40 craft-led brands and ran preference tests with a small panel of repeat customers. Photography, pace, and whitespace were the strongest signals of quality.",
    decisions: [
      {
        title: "An editorial grid",
        body: "Product pages were rebuilt as long-form essays—context first, materials next, purchase last.",
      },
      {
        title: "A restrained palette",
        body: "We removed competing accent colors so each piece could carry its own tone.",
      },
    ],
    outcome:
      "Average order value rose 41% and the studio sold out of two seasonal collections within a week of launch.",
    metrics: [
      { label: "AOV", value: "+41%" },
      { label: "Conversion", value: "+23%" },
      { label: "Sell-through", value: "100%" },
    ],
  },

  {
    slug: "Garuda Capitals",
    title: "Garuda Capitals",
    summary: "Website and Branding for a fintech startup focused on lending.",
    description:
      "Website and Branding for a fintech startup focused on lending.",
    thumbnail: gc0,
    gallery: [gc1, gc2, gc3, gc4, gc5],
    year: "2025",
    category: "Web · fintech",
    role: "Product & Brand Designer",
    duration: "3 months",
    tools: ["Figma", "Shopify", "Webflow"],
    problem:
      "The previous template-driven shop flattened a richly tactile catalog into thumbnails and price tags, hurting both perceived value and conversion.",
    research:
      "We compared 40 craft-led brands and ran preference tests with a small panel of repeat customers. Photography, pace, and whitespace were the strongest signals of quality.",
    decisions: [
      {
        title: "An editorial grid",
        body: "Product pages were rebuilt as long-form essays—context first, materials next, purchase last.",
      },
      {
        title: "A restrained palette",
        body: "We removed competing accent colors so each piece could carry its own tone.",
      },
    ],
    outcome:
      "Average order value rose 41% and the studio sold out of two seasonal collections within a week of launch.",
    metrics: [
      { label: "AOV", value: "+41%" },
      { label: "Conversion", value: "+23%" },
      { label: "Sell-through", value: "100%" },
    ],
  },

  {
    slug: "FSTRK",
    title: "FSTRK",
    summary: "App design exploration for a fast delivery service.",
    description:
      "App design exploration for a fast delivery service.",
    thumbnail: fst0,
    gallery: [fst1, fst0],
    year: "2025",
    category: "App · Uber",
    role: "Product Designer",
    duration: "3 months",
    tools: ["Figma", "Shopify", "Webflow"],
    problem:
      "The previous template-driven shop flattened a richly tactile catalog into thumbnails and price tags, hurting both perceived value and conversion.",
    research:
      "We compared 40 craft-led brands and ran preference tests with a small panel of repeat customers. Photography, pace, and whitespace were the strongest signals of quality.",
    decisions: [
      {
        title: "An editorial grid",
        body: "Product pages were rebuilt as long-form essays—context first, materials next, purchase last.",
      },
      {
        title: "A restrained palette",
        body: "We removed competing accent colors so each piece could carry its own tone.",
      },
    ],
    outcome:
      "Average order value rose 41% and the studio sold out of two seasonal collections within a week of launch.",
    metrics: [
      { label: "AOV", value: "+41%" },
      { label: "Conversion", value: "+23%" },
      { label: "Sell-through", value: "100%" },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

import { MarketingLayout } from '#components/layouts';

import {
  CapabilitiesSection,
  ContactSection,
  FaqSection,
  FeaturedWork,
  HeroSection,
  PricingSection,
  ProcessSection,
  ProofSection,
  ServiceTicker,
} from './components';

import type { FC } from 'react';

/** primary site navigation items rendered in the header */
const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
] as const;

/** services rendered as chips beneath the hero */
const SERVICES = [
  'Launch films',
  'Founder reels',
  'Product explainers',
  'Paid social cutdowns',
  'Customer proof',
] as const;

/** stats rendered inside the proof section */
const PROOF_STATS = [
  { value: '42', label: 'launches shipped in 2025' },
  { value: '3.8x', label: 'median lift in qualified demo requests' },
  { value: '9 days', label: 'average concept-to-live timeline' },
] as const;

/** featured project rows rendered inside the work section */
const WORK = [
  {
    client: 'Northstar Robotics',
    scope: 'Series B launch system',
    result: '12,400 demo views from the launch microsite in week one.',
  },
  {
    client: 'Ledgerly',
    scope: 'Founder narrative and paid social edits',
    result: '31 percent lower acquisition cost across the first campaign.',
  },
  {
    client: 'Tandem Health',
    scope: 'Customer film and sales-room assets',
    result:
      'Enterprise sales team adopted the film in 84 percent of late-stage rooms.',
  },
] as const;

/** capability cards rendered inside the services section */
const CAPABILITIES = [
  {
    title: 'Narrative strategy',
    body: 'Positioning workshops, launch messaging, interview arcs, and the creative spine for every asset.',
    image: {
      src: '/images/acme-service-narrative-strategy.jpg',
      alt: 'Warm editorial strategy desk with launch messaging cards and interview materials',
    },
  },
  {
    title: 'Production sprint',
    body: 'Remote or on-site shoots, motion systems, sound design, captions, and edit rooms built for fast approvals.',
    image: {
      src: '/images/acme-service-production-sprint.jpg',
      alt: 'Compact production kit with camera, light, storyboard frames, and color swatches',
    },
  },
  {
    title: 'Distribution kit',
    body: 'Landing sections, sales-room modules, paid-social ratios, thumbnails, hooks, and launch-day sequencing.',
    image: {
      src: '/images/acme-service-distribution-kit.jpg',
      alt: 'Organized launch distribution kit with thumbnail frames and campaign planning materials',
    },
  },
] as const;

/** process step rows rendered inside the process section */
const PROCESS = [
  {
    phase: '01',
    title: 'Find the sharp edge',
    body: 'A 90-minute strategy session turns product truth, customer tension, and launch goals into a working creative brief.',
  },
  {
    phase: '02',
    title: 'Build the launch room',
    body: 'Scripts, shot lists, storyboard frames, landing content, and distribution specs are assembled before production starts.',
  },
  {
    phase: '03',
    title: 'Cut, test, release',
    body: 'First cuts arrive in 48 hours, then we test hooks, refine the edit stack, and package every final asset.',
  },
] as const;

/** plan cards rendered inside the pricing section */
const PRICING = [
  {
    name: 'Launch Sprint',
    price: '$18k',
    detail:
      'A focused launch film with paid-social cutdowns and a compact landing section.',
  },
  {
    name: 'Campaign Room',
    price: '$36k',
    detail:
      'A six-week creative room for product launches, customer proof, and founder-led distribution.',
    featured: true,
  },
  {
    name: 'Embedded Studio',
    price: '$12k/mo',
    detail:
      'A recurring content partner for product, sales, and growth teams shipping every month.',
  },
] as const;

/** FAQ items rendered inside the questions section */
const FAQS = [
  {
    question: 'Do you only work with software companies?',
    answer:
      'Most ACME projects are B2B software, robotics, climate, health, or finance launches where the product needs a credible story fast.',
  },
  {
    question: 'Can you work with existing footage?',
    answer:
      'Yes. Roughly half of our projects begin with founder calls, customer interviews, screen recordings, and event footage your team already has.',
  },
  {
    question: 'What does the first week look like?',
    answer:
      'We lock the brief, interview priority voices, define the visual system, and deliver a production plan with exact asset outputs.',
  },
] as const;

/**
 * renders the full ACME marketing landing page composition
 *
 * top-level page composition that wires the static marketing data above
 * into each section component. the marketing layout supplies the skip
 * link, primary nav, and footer so this page focuses on section ordering
 * @returns the rendered ACME landing page
 */
const Page: FC = () => {
  return (
    <MarketingLayout navItems={NAV_ITEMS}>
      <HeroSection />
      <ServiceTicker services={SERVICES} />
      <ProofSection stats={PROOF_STATS} />
      <FeaturedWork work={WORK} />
      <CapabilitiesSection capabilities={CAPABILITIES} />
      <ProcessSection process={PROCESS} />
      <PricingSection pricing={PRICING} />
      <FaqSection faqs={FAQS} />
      <ContactSection />
    </MarketingLayout>
  );
};

export default Page;

import { expect } from 'storybook/test';

import { CapabilitiesSection } from './CapabilitiesSection';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/CapabilitiesSection',
  component: CapabilitiesSection,
  tags: ['autodocs'],
} satisfies Meta<typeof CapabilitiesSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    capabilities: [
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
    ],
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /one studio/i }),
    ).toBeVisible();
    await expect(
      canvas.getByRole('heading', { name: 'Narrative strategy' }),
    ).toBeVisible();
    await expect(
      canvas.getByRole('img', { name: /strategy desk/i }),
    ).toBeVisible();
  },
};

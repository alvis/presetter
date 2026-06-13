import { expect } from 'storybook/test';

import { PricingSection } from './PricingSection';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/PricingSection',
  component: PricingSection,
  tags: ['autodocs'],
} satisfies Meta<typeof PricingSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pricing: [
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
    ],
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /clear scopes/i }),
    ).toBeVisible();
    await expect(canvas.getByText('$36k')).toBeVisible();
    await expect(canvas.getByText('Most requested')).toBeVisible();
  },
};

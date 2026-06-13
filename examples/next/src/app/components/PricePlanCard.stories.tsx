import { expect } from 'storybook/test';

import { PricePlanCard } from './PricePlanCard';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/PricePlanCard',
  component: PricePlanCard,
  tags: ['autodocs'],
} satisfies Meta<typeof PricePlanCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Featured: Story = {
  args: {
    detail:
      'A six-week creative room for product launches, customer proof, and founder-led distribution.',
    featured: true,
    name: 'Campaign Room',
    price: '$36k',
  },
  render: (args) => (
    <div className="block w-full max-w-105 p-8">
      <PricePlanCard {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Most requested')).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /start with campaign room/i }),
    ).toHaveAttribute('href', '#contact');
  },
};

import { expect } from 'storybook/test';

import { ServiceTicker } from './ServiceTicker';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/ServiceTicker',
  component: ServiceTicker,
  tags: ['autodocs'],
} satisfies Meta<typeof ServiceTicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    services: [
      'Launch films',
      'Founder reels',
      'Product explainers',
      'Paid social cutdowns',
      'Customer proof',
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Launch films')).toBeVisible();
    await expect(canvas.getByText('Customer proof')).toBeVisible();
  },
};

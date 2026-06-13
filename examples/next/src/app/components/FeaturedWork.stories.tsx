import { expect } from 'storybook/test';

import { FeaturedWork } from './FeaturedWork';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/FeaturedWork',
  component: FeaturedWork,
  tags: ['autodocs'],
} satisfies Meta<typeof FeaturedWork>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    work: [
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
    ],
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /launch systems/i }),
    ).toBeVisible();
    await expect(canvas.getByText('Northstar Robotics')).toBeVisible();
  },
};

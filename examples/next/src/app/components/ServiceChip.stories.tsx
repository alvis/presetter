import { expect } from 'storybook/test';

import { ServiceChip } from './ServiceChip';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/ServiceChip',
  component: ServiceChip,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Pair: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-start w-full max-w-180 p-8">
      <ServiceChip>Launch films</ServiceChip>
      <ServiceChip>Paid social cutdowns</ServiceChip>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Launch films')).toBeVisible();
    await expect(canvas.getByText('Paid social cutdowns')).toBeVisible();
  },
};

import { expect } from 'storybook/test';

import { BrandLockup } from './BrandLockup';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Primitives/BrandLockup',
  component: BrandLockup,
  tags: ['autodocs'],
} satisfies Meta<typeof BrandLockup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-start w-full max-w-180 p-8">
      <BrandLockup />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /acme inc home/i }),
    ).toBeVisible();
    await expect(canvas.getByText('A')).toBeVisible();
  },
};

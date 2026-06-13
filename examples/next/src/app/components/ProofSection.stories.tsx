import { expect } from 'storybook/test';

import { ProofSection } from './ProofSection';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/ProofSection',
  component: ProofSection,
  tags: ['autodocs'],
} satisfies Meta<typeof ProofSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: [
      { value: '42', label: 'launches shipped in 2025' },
      { value: '3.8x', label: 'median lift in qualified demo requests' },
      { value: '9 days', label: 'average concept-to-live timeline' },
    ],
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /creative that earns/i }),
    ).toBeVisible();
    await expect(canvas.getByText('3.8x')).toBeVisible();
  },
};

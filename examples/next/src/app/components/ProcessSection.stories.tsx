import { expect } from 'storybook/test';

import { ProcessSection } from './ProcessSection';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/ProcessSection',
  component: ProcessSection,
  tags: ['autodocs'],
} satisfies Meta<typeof ProcessSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    process: [
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
    ],
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /keeps decisions moving/i }),
    ).toBeVisible();
    await expect(canvas.getByText('03')).toBeVisible();
  },
};

import { expect } from 'storybook/test';

import { ProcessStep } from './ProcessStep';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/ProcessStep',
  component: ProcessStep,
  tags: ['autodocs'],
} satisfies Meta<typeof ProcessStep>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    body: 'A 90-minute strategy session turns product truth, customer tension, and launch goals into a working creative brief.',
    phase: '01',
    title: 'Find the sharp edge',
  },
  render: (args) => (
    <ol className="grid gap-5 w-full max-w-180 p-8 m-0 list-none">
      <ProcessStep {...args} />
    </ol>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('01')).toBeVisible();
    await expect(
      canvas.getByRole('heading', { name: /find the sharp edge/i }),
    ).toBeVisible();
  },
};

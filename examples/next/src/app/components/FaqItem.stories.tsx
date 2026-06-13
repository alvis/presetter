import { expect } from 'storybook/test';

import { FaqItem } from './FaqItem';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/FaqItem',
  component: FaqItem,
  tags: ['autodocs'],
} satisfies Meta<typeof FaqItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    answer:
      'Yes. Roughly half of our projects begin with founder calls, customer interviews, screen recordings, and event footage your team already has.',
    question: 'Can you work with existing footage?',
  },
  render: (args) => (
    <div className="grid gap-3 w-full max-w-260 p-8">
      <FaqItem {...args} />
    </div>
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByText('Can you work with existing footage?'),
    );
    await expect(
      canvas.getByText(/roughly half of our projects/i),
    ).toBeVisible();
  },
};

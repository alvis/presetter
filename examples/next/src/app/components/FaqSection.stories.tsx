import { expect } from 'storybook/test';

import { FaqSection } from './FaqSection';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/FaqSection',
  component: FaqSection,
  tags: ['autodocs'],
} satisfies Meta<typeof FaqSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    faqs: [
      {
        question: 'Do you only work with software companies?',
        answer:
          'Most ACME projects are B2B software, robotics, climate, health, or finance launches where the product needs a credible story fast.',
      },
      {
        question: 'Can you work with existing footage?',
        answer:
          'Yes. Roughly half of our projects begin with founder calls, customer interviews, screen recordings, and event footage your team already has.',
      },
    ],
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByText('Can you work with existing footage?'),
    );
    await expect(
      canvas.getByText(/roughly half of our projects/i),
    ).toBeVisible();
  },
};

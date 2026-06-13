import { expect } from 'storybook/test';

import { CapabilityCard } from './CapabilityCard';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/CapabilityCard',
  component: CapabilityCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CapabilityCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Featured: Story = {
  args: {
    body: 'Positioning workshops, launch messaging, interview arcs, and the creative spine for every asset.',
    featured: true,
    image: {
      src: '/images/acme-service-narrative-strategy.jpg',
      alt: 'Warm editorial strategy desk with launch messaging cards and interview materials',
    },
    title: 'Narrative strategy',
  },
  render: (args) => (
    <div className="block w-full max-w-105 p-8">
      <CapabilityCard {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /narrative strategy/i }),
    ).toBeVisible();
    await expect(canvas.getByText(/positioning workshops/i)).toBeVisible();
    await expect(
      canvas.getByRole('img', { name: /strategy desk/i }),
    ).toBeVisible();
  },
};

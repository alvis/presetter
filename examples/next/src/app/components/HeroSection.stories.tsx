import { expect } from 'storybook/test';

import { HeroSection } from './HeroSection';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/HeroSection',
  component: HeroSection,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <main className="page-shell-grid relative min-h-svh overflow-hidden px-4 pb-12 sm:px-6 lg:px-16">
      <HeroSection />
    </main>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent(
      /next launch/i,
    );
    await expect(
      canvas.getByRole('link', { name: /watch the workreel/i }),
    ).toBeVisible();
    await expect(canvas.getByAltText(/cinematic launch-room/i)).toBeVisible();
  },
};

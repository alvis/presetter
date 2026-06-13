import { expect } from 'storybook/test';

import { SiteNav } from './SiteNav';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Composites/SiteNav',
  component: SiteNav,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof SiteNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navItems: [
      { label: 'Work', href: '#work' },
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  render: (args) => (
    <main className="page-shell-grid relative min-h-svh overflow-hidden px-4 pb-12 sm:px-6 lg:px-16">
      <SiteNav {...args} />
    </main>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('navigation', { name: /primary navigation/i }),
    ).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /pricing/i }),
    ).toHaveAttribute('href', '#pricing');
  },
};

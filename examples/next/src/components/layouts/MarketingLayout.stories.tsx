import { classnames } from '#classnames';

import { expect } from 'storybook/test';

import { MarketingLayout } from './MarketingLayout';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Layouts/MarketingLayout',
  component: MarketingLayout,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof MarketingLayout>;

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
    children: (
      <section
        aria-labelledby="layout-demo-title"
        className={classnames(
          'w-full max-w-[1120px] mx-auto',
          '[padding-block:clamp(var(--spacing)*16,8vw,var(--spacing)*24)]',
        )}>
        <h1
          className="font-display text-ink text-7xl leading-none"
          id="layout-demo-title">
          Marketing layout shell
        </h1>
        <p className="mt-4 text-ink-soft leading-[1.58]">
          The skip link, primary nav, and footer are rendered by the layout.
          Page content slots into this section via `children`.
        </p>
      </section>
    ),
  },
  render: (args) => (
    <MarketingLayout navItems={args.navItems}>{args.children}</MarketingLayout>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /skip to main content/i }),
    ).toHaveAttribute('href', '#main-content');
    await expect(
      canvas.getByRole('navigation', { name: /primary navigation/i }),
    ).toBeVisible();
    await expect(canvas.getByRole('contentinfo')).toBeVisible();
  },
};

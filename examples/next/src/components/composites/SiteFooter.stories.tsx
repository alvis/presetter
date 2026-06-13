import { expect, within } from 'storybook/test';

import { SiteFooter } from './SiteFooter';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Composites/SiteFooter',
  component: SiteFooter,
  tags: ['autodocs'],
} satisfies Meta<typeof SiteFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

const FOOTER_LINK_PATTERN = /^(Work|Services|Process|Pricing|Contact)$/i;
const LEGAL_LINK_PATTERN = /^(Privacy|Terms)$/i;
const MIN_FOOTER_LINKS = 4;

export const Default: Story = {
  play: async ({ canvas }) => {
    const footer = canvas.getByRole('contentinfo');
    await expect(footer).toBeVisible();

    await expect(
      canvas.getByRole('link', { name: /hello@acme\.example/i }),
    ).toBeVisible();

    const footerNav = canvas.getByRole('navigation', {
      name: /footer navigation/i,
    });
    const navLinks = within(footerNav).getAllByRole('link', {
      name: FOOTER_LINK_PATTERN,
    });
    await expect(navLinks.length).toBeGreaterThanOrEqual(MIN_FOOTER_LINKS);

    const legalNav = canvas.getByRole('navigation', { name: /legal/i });
    const legalLinks = within(legalNav).getAllByRole('link', {
      name: LEGAL_LINK_PATTERN,
    });
    await expect(legalLinks).toHaveLength(2);

    const currentYear = new Date().getFullYear().toString();
    await expect(
      canvas.getByText(new RegExp(`©\\s*${currentYear}\\s*ACME Inc`, 'i')),
    ).toBeVisible();
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('contentinfo')).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /hello@acme\.example/i }),
    ).toBeVisible();

    const footerNav = canvas.getByRole('navigation', {
      name: /footer navigation/i,
    });
    const navLinks = within(footerNav).getAllByRole('link', {
      name: FOOTER_LINK_PATTERN,
    });
    await expect(navLinks.length).toBeGreaterThanOrEqual(MIN_FOOTER_LINKS);

    const legalNav = canvas.getByRole('navigation', { name: /legal/i });
    const legalLinks = within(legalNav).getAllByRole('link', {
      name: LEGAL_LINK_PATTERN,
    });
    await expect(legalLinks).toHaveLength(2);
  },
};

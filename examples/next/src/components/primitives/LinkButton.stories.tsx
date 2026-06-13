import { expect } from 'storybook/test';

import { LinkButton } from './LinkButton';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Primitives/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-start w-full max-w-180 p-8">
      <LinkButton href="#work">Watch the workreel</LinkButton>
      <LinkButton href="#pricing" variant="secondary">
        View launch packages
      </LinkButton>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /watch the workreel/i }),
    ).toHaveAttribute('href', '#work');
    await expect(
      canvas.getByRole('link', { name: /view launch packages/i }),
    ).toBeVisible();
  },
};

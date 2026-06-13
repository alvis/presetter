import { expect } from 'storybook/test';

import { SectionHeading } from './SectionHeading';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Primitives/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
} satisfies Meta<typeof SectionHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: 'Services',
    title: 'One studio for the story, the shoot, and the sell.',
  },
  render: (args) => (
    <div className="block w-full max-w-260 p-8">
      <SectionHeading {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Services')).toBeVisible();
    await expect(canvas.getByRole('heading', { level: 2 })).toHaveTextContent(
      /one studio/i,
    );
  },
};

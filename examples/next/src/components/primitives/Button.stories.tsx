import { expect, fn } from 'storybook/test';

import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj;
type ButtonArgs = {
  onClick: () => void;
};

export const Variants: Story = {
  args: {
    onClick: fn(),
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-start w-full max-w-180 p-8">
      <Button onClick={(args as ButtonArgs).onClick}>
        Schedule studio time
      </Button>
      <Button variant="secondary">Compare packages</Button>
      <Button disabled>Unavailable</Button>
    </div>
  ),
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(
      canvas.getByRole('button', { name: /schedule studio time/i }),
    );
    await expect((args as ButtonArgs).onClick).toHaveBeenCalled();
    await expect(
      canvas.getByRole('button', { name: /unavailable/i }),
    ).toBeDisabled();
  },
};

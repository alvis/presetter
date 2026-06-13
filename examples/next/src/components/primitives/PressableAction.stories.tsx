import { expect, fn } from 'storybook/test';

import { PressableAction } from './PressableAction';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Primitives/PressableAction',
  component: PressableAction,
  tags: ['autodocs'],
} satisfies Meta<typeof PressableAction>;

export default meta;

type Story = StoryObj<typeof meta>;
type PressableArgs = {
  onClick: () => void;
};

export const ButtonForm: Story = {
  args: {
    children: 'Press me',
    onClick: fn(),
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-start w-full max-w-180 p-8">
      <PressableAction
        className="px-6 rounded-md bg-ink text-paper font-bold shadow-crisp"
        onClick={(args as PressableArgs).onClick}>
        {args.children}
      </PressableAction>
    </div>
  ),
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /press me/i }));
    await expect((args as PressableArgs).onClick).toHaveBeenCalled();
  },
};

export const AnchorForm: Story = {
  args: {
    children: 'Open work',
    href: '#work',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-start w-full max-w-180 p-8">
      <PressableAction
        className="px-6 rounded-md bg-ink text-paper font-bold shadow-crisp"
        href={args.href}>
        {args.children}
      </PressableAction>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('link', { name: /open work/i }),
    ).toHaveAttribute('href', '#work');
  },
};

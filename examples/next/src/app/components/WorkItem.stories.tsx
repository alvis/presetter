import { expect } from 'storybook/test';

import { WorkItem } from './WorkItem';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/WorkItem',
  component: WorkItem,
  tags: ['autodocs'],
} satisfies Meta<typeof WorkItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    client: 'Northstar Robotics',
    result: '12,400 demo views from the launch microsite in week one.',
    scope: 'Series B launch system',
  },
  render: (args) => (
    <div className="block w-full max-w-260 p-8">
      <WorkItem {...args} />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Northstar Robotics')).toBeVisible();
    await expect(
      canvas.getByRole('link', { name: /discuss work like/i }),
    ).toHaveAttribute('href', '#contact');
  },
};

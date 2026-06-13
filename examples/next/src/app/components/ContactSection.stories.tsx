import { expect } from 'storybook/test';

import { ContactSection } from './ContactSection';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/ContactSection',
  component: ContactSection,
  tags: ['autodocs'],
} satisfies Meta<typeof ContactSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText('Name'), 'Rae Chen');
    await userEvent.type(
      canvas.getByLabelText('Work email'),
      'rae@example.com',
    );
    await userEvent.type(
      canvas.getByLabelText('Launch goal'),
      'Product launch film in July',
    );
    await userEvent.click(
      canvas.getByRole('button', { name: /send the launch brief/i }),
    );
    await expect(canvas.getByText(/brief received/i)).toBeVisible();
  },
};

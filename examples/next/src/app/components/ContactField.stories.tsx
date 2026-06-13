import { expect } from 'storybook/test';

import { ContactField } from './ContactField';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Landing/ContactField',
  component: ContactField,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Email: Story = {
  render: () => (
    <form className="grid gap-4 w-full max-w-105 p-5 rounded-lg bg-surface-on-paper shadow-crisp">
      <ContactField htmlFor="contact-field-email" label="Work email">
        <input required id="contact-field-email" name="email" type="email" />
      </ContactField>
    </form>
  ),
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText('Work email');
    await userEvent.type(input, 'rae@example.com');
    await expect(input).toHaveValue('rae@example.com');
  },
};

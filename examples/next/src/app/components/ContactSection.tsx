'use client';

import { useState } from 'react';

import { Button } from '#components/primitives';

import { ContactField } from './ContactField';

import type { ChangeEvent, FC } from 'react';

/** shape of the launch-brief contact form state */
type ContactFormState = {
  /** work email of the requester */
  readonly email: string;
  /** launch goal description supplied by the requester */
  readonly goal: string;
  /** requester name */
  readonly name: string;
};

/** dom-level change event fired by the form's input and textarea fields */
type FieldChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

/** initial form values rendered on first mount */
const INITIAL_FORM_STATE: ContactFormState = {
  email: '',
  goal: '',
  name: '',
};

/**
 * renders the launch-brief contact section with name, email, and goal fields
 *
 * hosts a small controlled form that captures a launch brief. submission is
 * intercepted client-side and flips a `status` flag so a confirmation
 * message can replace the default helper copy
 * @returns the rendered contact section
 */
export const ContactSection: FC = () => {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  /**
   * merges the most recent field edit into the form state
   * @param event change event from the controlled input or textarea
   */
  const handleFieldChange = (event: FieldChangeEvent): void => {
    const { name, value } = event.currentTarget;
    setForm((current) => ({
      ...current,
      [name as keyof ContactFormState]: value,
    }));
  };

  return (
    <section
      aria-labelledby="contact-title"
      className={
        'w-full max-w-[1120px] mx-auto ' +
        '[padding-block:clamp(var(--spacing)*16,8vw,var(--spacing)*24)] ' +
        'max-[620px]:[padding-block:calc(var(--spacing)*16)] ' +
        'grid grid-cols-[0.9fr_1fr] gap-8 items-start rounded-xl text-paper ' +
        '[padding:clamp(var(--spacing)*10,7vw,var(--spacing)*20)] ' +
        '[background:linear-gradient(145deg,var(--color-ink),var(--color-moss)),var(--color-ink)] ' +
        'max-[900px]:grid-cols-1 ' +
        'max-[620px]:p-6'
      }
      id="contact">
      <div>
        <p
          className={
            'mt-0 mb-4 font-black uppercase tracking-[0.08em] ' +
            'text-eyebrow text-moss ' +
            'max-[620px]:max-w-[30ch] max-[620px]:text-base ' +
            'max-[620px]:leading-[1.45] max-[620px]:tracking-[0.06em] ' +
            '!text-paper'
          }>
          Start here
        </p>
        <h2
          className={
            'mb-0 font-display text-paper leading-[1.05] [text-wrap:balance] ' +
            'text-9xl ' +
            'max-[620px]:text-4xl max-[620px]:leading-[1.04]'
          }
          id="contact-title">
          Bring the messy launch plan. Leave with the sharp one.
        </h2>
        <p
          className={
            'mb-0 text-paper text-base leading-[1.58] [text-wrap:pretty]'
          }>
          Tell us the launch date, the audience, and the asset gap. ACME replies
          within one business day with a practical recommendation.
        </p>
      </div>
      <form
        aria-describedby="contact-form-note"
        aria-label="Launch brief"
        className={
          'grid gap-4 p-5 rounded-lg ' +
          'bg-surface-on-paper text-ink shadow-crisp'
        }
        onSubmit={(event) => {
          event.preventDefault();
          setStatus('sent');
        }}>
        <ContactField htmlFor="contact-name" label="Name">
          <input
            required
            autoComplete="name"
            id="contact-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleFieldChange}
          />
        </ContactField>
        <ContactField htmlFor="contact-email" label="Work email">
          <input
            required
            autoComplete="email"
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleFieldChange}
          />
        </ContactField>
        <ContactField htmlFor="contact-goal" label="Launch goal">
          <textarea
            required
            className="resize-y"
            id="contact-goal"
            name="goal"
            placeholder="Example: Series A announcement, product demo, customer proof"
            rows={4}
            value={form.goal}
            onChange={handleFieldChange}
          />
        </ContactField>
        <Button type="submit">Send the launch brief</Button>
        <p
          className="m-0 text-moss text-base font-bold"
          id="contact-form-note"
          role="status">
          {status === 'sent'
            ? 'Brief received. ACME will reply within one business day.'
            : 'No retainers required before the first scope call.'}
        </p>
      </form>
    </section>
  );
};

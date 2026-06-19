import { classnames } from '#classnames';
import { LinkButton } from '#components/primitives';

import type { FC } from 'react';

/**
 * renders the marketing hero band with copy column and artwork figure
 *
 * lays the headline copy and dual CTAs above an artwork figure that uses
 * the `hero-art-mask` helper from `globals.css` for its radial-gradient
 * mask and float animation. the figure becomes static on mobile where the
 * mask animation would be distracting
 * @returns the rendered hero section
 */
export const HeroSection: FC = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className={classnames(
        'grid grid-cols-1 grid-rows-[auto_auto] gap-8',
        'w-full max-w-[1220px] mx-auto',
        'min-h-[calc(100svh-112px)]',
        '[padding-top:clamp(var(--spacing)*12,8vw,var(--spacing)*24)]',
        'max-[620px]:min-h-0 max-[620px]:min-w-0 max-[620px]:pt-12',
      )}>
      <div
        className={classnames(
          'relative z-[1] w-full max-w-[920px]',
          '[margin-left:clamp(0px,4vw,var(--spacing)*16)]',
          'max-[900px]:ml-0',
          'max-[620px]:w-full max-[620px]:min-w-0',
        )}>
        <p
          className={classnames(
            'mt-0 mb-4 font-black uppercase tracking-[0.08em]',
            'text-eyebrow text-moss',
            'max-[620px]:max-w-[30ch] max-[620px]:text-base',
            'max-[620px]:leading-[1.45] max-[620px]:tracking-[0.06em]',
          )}
          id="about">
          Short-form creative studio for ambitious teams
        </p>
        <h1
          className={classnames(
            'mt-0 mb-0 font-display font-black text-ink leading-none',
            '[text-wrap:balance]',
            'text-display',
            'max-[620px]:max-w-full max-[620px]:[overflow-wrap:break-word]',
            'max-[620px]:text-7xl max-[620px]:leading-[1.02]',
          )}
          id="hero-title">
          Make the market remember your
          <span
            className={classnames(
              'block w-max mt-2 leading-none',
              'font-display italic font-medium text-coral text-[0.66em]',
              'max-[620px]:w-auto',
            )}>
            next launch
          </span>
        </h1>
        <p
          className={classnames(
            'max-w-[690px] mt-6 mb-0',
            'text-ink-soft text-2xl font-regular leading-[1.55]',
            '[text-wrap:pretty]',
            'max-[620px]:max-w-full max-[620px]:text-md',
          )}>
          ACME Inc turns product launches, founder stories, and customer proof
          into cinematic pages and social cuts built to travel across sales,
          growth, and investor channels.
        </p>
        <div
          className={classnames(
            'flex flex-wrap justify-start items-center gap-3 mt-8',
            'max-[620px]:flex-col max-[620px]:items-stretch',
            'max-[620px]:flex-nowrap',
            'max-[620px]:px-3',
          )}>
          <LinkButton href="#work">Watch the workreel</LinkButton>
          <LinkButton href="#pricing" variant="secondary">
            View launch packages
          </LinkButton>
        </div>
      </div>

      <figure
        aria-label="ACME launch landscape"
        className={classnames(
          'relative self-end w-full max-w-[1040px] mx-auto overflow-hidden',
          'max-[620px]:w-full max-[620px]:mt-6',
        )}>
        {/* plain img keeps Storybook/Vitest and the app render path aligned here */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Cinematic launch-room landscape fading into a pale sky background"
          className={classnames(
            'relative z-[1] block w-full h-auto',
            '[filter:drop-shadow(0_34px_50px_var(--color-shadow-art))]',
            'hero-art-mask',
            'max-[620px]:animate-none',
          )}
          height="904"
          src="/images/acme-hero-landscape.png"
          width="1740"
        />
        <figcaption
          className={classnames(
            'flex flex-wrap justify-center gap-y-3 gap-x-5',
            'w-full max-w-[760px] mx-auto mt-5 px-5 py-4 rounded-lg',
            'bg-surface-on-paper-veil text-ink-soft font-medium shadow-soft',
            'max-[620px]:w-[min(88vw,440px)] max-[620px]:mt-4',
          )}>
          <strong className="text-ink">48-hour first cut</strong>
          <span>Now booking June and July launch rooms</span>
        </figcaption>
      </figure>
    </section>
  );
};

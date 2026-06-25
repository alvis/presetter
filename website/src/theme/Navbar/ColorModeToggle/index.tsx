/* eslint better-tailwindcss/no-unknown-classes: off */

import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import IconDarkMode from '@theme/Icon/DarkMode';
import IconLightMode from '@theme/Icon/LightMode';

import clsx from 'clsx';

import { useEffect, useMemo, useState } from 'react';

import MobileSearchButton from './MobileSearchButton';
import styles from './styles.module.css';

import type React from 'react';

/**
 * Swizzled Navbar/ColorModeToggle.
 *
 * On desktop (≥997px) this renders the original light/dark toggle.
 * On mobile (≤996px) it renders a compact DocSearch trigger in the same
 * slot, because the inline navbar search container is hidden at hamburger-menu
 * widths to avoid overlapping the toggle. Each half of the component is
 * CSS-gated by its own media query to avoid
 * JS-driven viewport hooks and the SSR hydration mismatches they cause.
 */

export type NavbarColorModeToggleProps = {
  className?: string;
};

/**
 * Builds the localized phrase used in color-mode labels.
 * @param colorMode Active color mode returned by Docusaurus.
 * @returns Localized label for the current color mode.
 */
function getModeLabel(colorMode: 'light' | 'dark'): string {
  if (colorMode === 'dark') {
    return translate({
      id: 'theme.colorToggle.modeLabel.dark',
      message: 'dark mode',
      description: 'Label for the dark color mode',
    });
  }

  return translate({
    id: 'theme.colorToggle.modeLabel.light',
    message: 'light mode',
    description: 'Label for the light color mode',
  });
}

export default function NavbarColorModeToggle({
  className,
}: NavbarColorModeToggleProps): React.ReactNode {
  const { disableSwitch } = useThemeConfig().colorMode;
  const { colorMode, setColorMode } = useColorMode();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const currentColorMode = colorMode === 'dark' ? 'dark' : 'light';
  const nextColorMode = currentColorMode === 'dark' ? 'light' : 'dark';

  const label = useMemo(() => {
    if (!hydrated) {
      return translate({
        id: 'theme.colorToggle.ariaLabel.pending',
        message: 'Toggle color mode',
        description: 'ARIA label for the color mode toggle before hydration',
      });
    }

    return translate(
      {
        id: 'theme.colorToggle.ariaLabel.explicit',
        message: 'Switch to {nextMode} (currently {currentMode})',
        description:
          'ARIA label for the color mode toggle when the current color mode is known',
      },
      {
        nextMode: getModeLabel(nextColorMode),
        currentMode: getModeLabel(currentColorMode),
      },
    );
  }, [currentColorMode, hydrated, nextColorMode]);

  if (disableSwitch) {
    return null;
  }

  return (
    <div
      className={clsx(className, styles.toggle, 'presetter-color-mode-toggle')}>
      {/* Mobile: DocSearch trigger (≤996px). Hidden on desktop via its own CSS. */}
      <MobileSearchButton />

      {/* Desktop: original color-mode toggle (≥997px). Hidden on mobile. */}
      <button
        aria-label={label}
        className={clsx(
          'clean-btn',
          styles.toggleButton,
          'presetter-color-mode-toggle__button',
          !hydrated && styles.toggleButtonDisabled,
        )}
        disabled={!hydrated}
        title={
          hydrated
            ? translate(
                {
                  id: 'theme.colorToggle.title.explicit',
                  message: 'Switch to {nextMode}',
                  description:
                    'Tooltip for the explicit light/dark color mode toggle',
                },
                {
                  nextMode: getModeLabel(nextColorMode),
                },
              )
            : label
        }
        type="button"
        onClick={() => setColorMode(nextColorMode)}>
        <IconLightMode
          aria-hidden
          className={clsx(styles.toggleIcon, styles.lightToggleIcon)}
        />
        <IconDarkMode
          aria-hidden
          className={clsx(styles.toggleIcon, styles.darkToggleIcon)}
        />
      </button>
    </div>
  );
}

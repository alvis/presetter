import CopyButton from './CopyButton';

import type { ReactNode } from 'react';

/** quick-start command offered in the homepage hero and the site footer */
const INSTALL_COMMAND = 'npx presetter use @presetter/preset-esm';

/** classes for each part of the install box, so every caller keeps its own look */
export interface InstallCommandClassNames {
  /** class for the box around the command and its copy button */
  readonly root?: string;
  /** class for the scrollable command text */
  readonly command?: string;
  /** class for the leading `$` prompt */
  readonly prompt?: string;
  /** class for the copy button */
  readonly copy?: string;
}

/** props for {@link InstallCommand} */
export interface InstallCommandProps {
  /** classes for each part of the install box */
  readonly classNames: InstallCommandClassNames;
}

/**
 * renders the quick-start install command with a copy button
 * @param props component props
 * @param props.classNames classes for each part of the install box
 * @returns the install box
 */
export default function InstallCommand({
  classNames,
}: InstallCommandProps): ReactNode {
  return (
    <div className={classNames.root}>
      <span className={classNames.command} translate="no">
        <span className={classNames.prompt}>$</span> {INSTALL_COMMAND}
      </span>
      <CopyButton
        className={classNames.copy}
        label="Copy install command"
        text={INSTALL_COMMAND}
      />
    </div>
  );
}

import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDateTimeFormat } from '@docusaurus/theme-common/internal';
import Translate from '@docusaurus/Translate';

import type { Props } from '@theme/LastUpdated';
import type { ReactNode } from 'react';

type LastUpdatedDateProps = {
  lastUpdatedAt: number;
};

/**
 * Renders the localized last-modified date fragment.
 * @param props Date fragment properties.
 * @returns Localized date fragment.
 */
function LastUpdatedDate(props: LastUpdatedDateProps): ReactNode {
  const { lastUpdatedAt } = props;

  const atDate = new Date(lastUpdatedAt);

  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });

  const formattedLastUpdatedAt = dateTimeFormat.format(atDate);

  return (
    <Translate
      description="The words used to describe on which date a page has been last updated"
      id="theme.lastUpdated.atDate"
      values={{
        date: (
          <b>
            <time dateTime={atDate.toISOString()} itemProp="dateModified">
              {formattedLastUpdatedAt}
            </time>
          </b>
        ),
      }}>
      {' on {date}'}
    </Translate>
  );
}

type LastUpdatedAuthorProps = {
  lastUpdatedBy: string;
};

/**
 * Renders the localized last-updated author fragment.
 * @param props Author fragment properties.
 * @returns Localized author fragment.
 */
function LastUpdatedAuthor(props: LastUpdatedAuthorProps): ReactNode {
  const { lastUpdatedBy } = props;

  const user =
    lastUpdatedBy === 'Alvis HT Tang' ? (
      <b>
        <a
          href="https://x.com/alvvst"
          rel="noopener noreferrer"
          target="_blank">
          Alvis
        </a>
      </b>
    ) : (
      <b>{lastUpdatedBy}</b>
    );

  return (
    <Translate
      description="The words used to describe by who the page has been last updated"
      id="theme.lastUpdated.byUser"
      values={{ user }}>
      {' by {user}'}
    </Translate>
  );
}

export default function LastUpdatedDetails({
  lastUpdatedAt,
  lastUpdatedBy,
}: Props): ReactNode {
  return (
    <span className={ThemeClassNames.common.lastUpdated}>
      <Translate
        description="The sentence used to display when a page has been last updated, and by who"
        id="theme.lastUpdated.lastUpdatedAtBy"
        values={{
          atDate: lastUpdatedAt ? (
            <LastUpdatedDate lastUpdatedAt={lastUpdatedAt} />
          ) : (
            ''
          ),
          byUser: lastUpdatedBy ? (
            <LastUpdatedAuthor lastUpdatedBy={lastUpdatedBy} />
          ) : (
            ''
          ),
        }}>
        {'Last updated{atDate}{byUser}'}
      </Translate>
      {process.env.NODE_ENV === 'development' && (
        <div>
          <small> (Simulated during dev for better perf)</small>
        </div>
      )}
    </span>
  );
}

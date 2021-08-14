/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Tests on config generation
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import configure from '#index';

const mockLoadYAML = jest.fn(async (_template: string) => ({ yaml: true }));
const mockLoadText = jest.fn(async (_template: string) => 'text');
jest.mock('#utilities', () => ({
  _esModule: true,
  ...jest.requireActual('#utilities'),
  createLinker: jest.fn(() => ({
    json: async (template: string) => {
      await mockLoadYAML(template);
      return template;
    },
    list: async (template: string) => {
      await mockLoadText(template);
      return template;
    },
    text: async (template: string) => {
      await mockLoadText(template);
      return template;
    },
  })),
  loadYAML: jest.fn().mockImplementation((template) => mockLoadYAML(template)),
  loadText: jest.fn().mockImplementation((template) => mockLoadText(template)),
}));

describe('fn:configure', () => {
  beforeEach(jest.clearAllMocks);
  const target = { name: 'project', root: '/path/to/project' };

  it('export preset configuration', async () => {
    const expected = {
      links: {
        '.babelrc.json': 'babelrc',
        '.eslintrc.json': 'eslintrc',
        '.jestrc.json': 'jestrc',
        '.lintstagedrc.json': 'lintstagedrc',
        '.npmignore': 'npmignore',
        '.prettierrc.json': 'prettierrc',
        'tsconfig.build.json': 'tsconfig.build',
        'tsconfig.json': 'tsconfig',
      },
      scripts: {
        yaml: true,
      },
    };

    expect(await configure({ target, config: {} })).toEqual(expected);
  });

  it('ignore specified files', async () => {
    expect(
      await configure({
        config: {
          ignores: [
            '.babelrc.json',
            '.eslintrc.json',
            '.jestrc.json',
            '.lintstagedrc.json',
            '.npmignore',
            '.prettierrc.json',
            'tsconfig.build.json',
          ],
        },
        target,
      }),
    ).toEqual({
      links: { 'tsconfig.json': 'tsconfig' },
      scripts: { yaml: true },
    });
  });
});

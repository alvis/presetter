import { loadFile } from '../../io';
import { merge } from '../../template';
import { prefixDisplay } from '../../utilities';

import Debug from './debugger';

import type {
  PresetContent,
  PresetContext,
  PresetDefinition,
  PresetNode,
  Variables,
} from 'presetter-types';

/**
 * loads a potentially dynamic content
 * @param _ collection of arguments
 * @param _.content content to be loaded
 * @param _.current the current content
 * @param _.variables the variables to use during resolution
 * @param _.context the context in which the content is being resolved
 * @returns a promise that resolves to the RESOLVED content
 */
export async function resolveContent<T>(_: {
  content?: PresetContent<T>;
  current?: T | null;
  variables?: Variables;
  context: PresetContext;
}): Promise<T | null | undefined> {
  const { content, current, variables = {}, context } = _;

  // if content is a function, call it with the current content and context
  if (content instanceof Function) {
    return content(current, { ...context, variables });
  }

  // if content is a string, load the file content
  const resolvedContent =
    typeof content === 'string' ? (loadFile(content, variables) as T) : content;

  // merge the current content with the RESOLVED content
  return merge(current, resolvedContent) as T | null | undefined;
}

/**
 * resolves the content of a node within a preset
 * @template T the type of the content to be resolved
 * @param _ collection of arguments
 * @param _.name the name of the preset being resolved
 * @param _.node the node to resolve
 * @param _.context the context in which the node is being resolved
 * @param _.initial an optional initial value to start the resolution with
 * @param _.variables an optional record of variables to use during resolution
 * @param _.select a function to select the content definition from the preset definition
 * @returns a promise that resolves to the RESOLVED content of the node, which can be of type `T`, `null`, or `undefined`
 */
export async function resolveNodeContent<T>(_: {
  name: string;
  node: PresetNode;
  context: PresetContext;
  initial?: T | null;
  variables?: Variables;
  select: (definition: PresetDefinition) => PresetContent<T> | undefined;
}): Promise<T | null | undefined> {
  const { name, node, context, initial, variables, select } = _;
  const { definition, nodes } = node;
  const debug = Debug.extend(name).extend(node.definition.id);

  debug(`INCOMING (${name})\n${prefixDisplay('└─ ', initial)}`);

  const current = await nodes.reduce(
    async (merged, node) =>
      resolveNodeContent({ ..._, node, initial: await merged }),
    initial as Promise<T | null | undefined>,
  );

  // select the content from the definition
  const content = select(definition);

  debug(
    `COMBINING (${name})\n${prefixDisplay('└─ ', current)}\n${prefixDisplay('└─ ', content)}`,
  );

  // resolve dynamic content
  const out = await resolveContent<T>({ content, current, variables, context });

  debug(`RETURNING (${name})\n${prefixDisplay('└─ ', out)}`);

  return out;
}

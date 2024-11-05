import { resolveContext, resolveTemplate } from '../content';
import { unlinkFiles } from '../io';
import { getContext } from './context';
import { getPresetGraph } from './graph';
import { getDestinationMap } from './mapping';

/**
 * uninstall the preset from the current project root
 */
export async function unsetPreset(): Promise<void> {
  const context = await getContext();
  const graph = await getPresetGraph(context);
  const resolvedContext = await resolveContext({ graph, context });
  const content = await resolveTemplate({ graph, context: resolvedContext });
  const configurationLink = await getDestinationMap(content, resolvedContext);

  unlinkFiles(context.target.root, configurationLink);
}

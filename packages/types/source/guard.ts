import type { PresetContent } from './content';
import type { Preset, PresetDefinition, PresetGenerator } from './preset';

/**
 * a type guard utility for forming a preset
 * @param id name of the preset
 * @param preset a preset definition or generator
 * @returns a preset object with the provided name
 */
export function preset(
  id: string,
  preset: Omit<PresetDefinition, 'id'> | PresetGenerator,
): Preset {
  return preset instanceof Function
    ? Object.assign(preset, { id })
    : { ...preset, id };
}

/**
 * a utility for defining a preset asset
 * @param asset a preset content or generator function
 * @returns a preset content object
 */
export function asset<T = any>(asset: PresetContent<T>): PresetContent<T> {
  return asset;
}

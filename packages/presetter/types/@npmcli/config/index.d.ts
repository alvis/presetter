export default class Config {
  constructor(options: {
    definitions: Record<string, unknown>;
    npmPath: string;
    flatten: (
      config: Record<string, string>,
      flattenedConfig: Record<string, string>,
    ) => void;
  });

  public get(key: string): string;
  public get flat(): Record<string, string>;
  public load(): Promise<void>;
}

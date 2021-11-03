/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Definitions for @npmcli/arborist
 * @see       https://github.com/npm/arborist
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

export type DependencyType =
  | 'dev'
  | 'optional'
  | 'peer'
  | 'peerOptional'
  | 'prod';
type ErrorCode = 'DETACHED' | 'MISSING' | 'PEER LOCAL' | 'INVALID';

export class ArboristNode {
  constructor(options: {
    children: ArboristNode['children'];
    dev?: boolean;
    devOptional?: boolean;
    dummy?: boolean;
    error: ArboristNode['error'];
    extraneous?: boolean;
    fsChildren: ArboristNode['fsChildren'];
    fsParent: ArboristNode['fsParent'];
    global?: boolean;
    hasShrinkwrap?: boolean;
    integrity: ArboristNode['integrity'];
    legacyPeerDeps?: boolean;
    linksIn?: ArboristLink[];
    name: ArboristNode['name'];
    meta: ArboristNode['meta'];
    optional?: boolean;
    parent: ArboristNode['parent'];
    path: ArboristNode['path'];
    peer?: boolean;
    realpath: ArboristNode['realpath'];
    resolved: ArboristNode['resolved'];
    root: ArboristNode['root'];
    sourceReference?: ArboristNode;
  });

  public children: Map<string, ArboristNode>;
  public dev: boolean;
  public devOptional: boolean;
  public edgesIn: Set<ArboristEdge>;
  public edgesOut: Map<string, ArboristEdge>;
  public errors: ErrorCode[];
  public extraneous: boolean;
  public location: string;
  public name: string | null;
  public optional: boolean;
  public path: string;
  public peer: boolean;
  public realpath: string;

  public get isLink(): false;
  public get isRoot(): boolean;
  public get isTop(): boolean;
  public get meta(): Shrinkwrap;
  public set meta(meta: Shrinkwrap);
  public get package(): Record<string, unknown>;
  public set package(pkg: Record<string, unknown>): void;
  public get parent(): ArboristNode | null;
  public set parent(parent: ArboristNode): void;
  public get root(): ArboristNode;
  public set root(root: ArboristNode): void;
  public get top(): ArboristNode;

  public resolve(name: string): ArboristNode | null;
}
export class ArboristLink extends ArboristNode {
  constructor(
    options: { target: ArboristNode } & ConstructorParameters<
      typeof ArboristNode
    >[0],
  );
  public get children(): Map<string, never>;
  public get isLink(): true;
  public get target(): ArboristNode;
}

class ArboristEdge {
  constructor(options: {
    accept?: ArboristEdge['accept'];
    from: ArboristEdge['from'];
    name: ArboristEdge['name'];
    spec: ArboristEdge['spec'];
    type: ArboristEdge['type'];
  });

  public get error(): ErrorCode | null;
  public get from(): string;
  public get name(): string;
  public get spec(): string;
  public get to(): string;
  public get type(): DependencyType;
  public get valid(): boolean;

  public reload(hard?: boolean): void;
}

export class Arborist {
  constructor(options?: {
    path?: string;
    registry?: string;
    workspacesEnabled?: boolean;
  });

  public loadActual(): Promise<ArboristNode>;
  public loadVirtual(): Promise<ArboristNode>;
  public buildIdealTree(options?: {
    rm?: string[];
    add?: string[];
    saveType?: DependencyType | null;
    saveBundle?: boolean;
    update?: boolean | { all?: boolean; names?: string[] };
    prune?: boolean;
    preferDedupe?: boolean;
    legacyBundling?: boolean;
  }): Promise<ArboristNode>;
  public reify(
    options?: {
      omit?: string[];
      save?: boolean;
    } & Parameters<Arborist['buildIdealTree']>[0],
  ): Promise<ArboristNode>;
}

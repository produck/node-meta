/** A glob pattern as written in the source, for example `*.png`. */
export interface Glob {
  pattern: string;
  weight: number | null;
  caseSensitive: boolean;
}

/** A magic match node. `matchList` holds nested matches. */
export interface Match {
  type: string | null;
  value: string | null;
  offset: string | null;
  mask: string | null;
  matchList: Match[];
}

/** A magic rule: every match must hold for the rule to apply. */
export interface Magic {
  priority: number | null;
  matchList: Match[];
}

/** A tree match node. `matchList` holds nested matches. */
export interface TreeMatch {
  type: string | null;
  path: string | null;
  matchCase: boolean;
  matchList: TreeMatch[];
}

/** A treemagic rule: every tree match must hold for the rule to apply. */
export interface TreeMagic {
  priority: number | null;
  delete: boolean;
  treeMatchList: TreeMatch[];
}

/** An XML root element signature. */
export interface RootXml {
  type: string | null;
  namespaceURI: string | null;
  localName: string | null;
}

export interface RecordModule {
  mediaType: string;
  commentList: string[];
  acronym: string | null;
  expandedAcronym: string | null;
  genericIconName: string | null;
  aliasList: (string | null)[];
  subClassOfList: (string | null)[];
  globList: Glob[];
  globPatternList: string[];
  magicList: Magic[];
  treeMagicList: TreeMagic[];
  rootXmlList: RootXml[];
}

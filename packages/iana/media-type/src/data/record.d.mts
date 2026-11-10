/** A cross reference recorded by IANA for a media type. */
export interface Xref {
  /** Reference kind, for example `rfc`, `person` or `uri`. */
  type: string;

  /** Reference target, for example `rfc6838` or a URI. */
  data: string;
}

/** Top-level media type, for example `application`. */
export declare const type: string;

/** Subtype without the top-level prefix, for example `json`. */
export declare const subtype: string;

/** Registration name as written in the registry. */
export declare const name: string;

/** Cross references recorded by IANA. */
export declare const xrefList: Xref[];

/** Registration date, only present on records that carry one. */
export declare const date: string | null;

/** Last update date, only present on records that carry one. */
export declare const updated: string | null;

/** The media type this record describes. */
export const mediaType = 'application/x-godot-scene';

export const commentList = ['Godot Engine scene'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.scn',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.tscn',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.escn',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '[gd_scene ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

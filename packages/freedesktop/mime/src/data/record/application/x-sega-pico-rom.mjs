/** The media type this record describes. */
export const mediaType = 'application/x-sega-pico-rom';

export const commentList = ['Sega Pico ROM'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'application-x-executable';
export const aliasList = [];
export const subClassOfList = [];
export const globList = [
  {
    pattern: '*.md',
    weight: 10,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: 'SEGA PICO',
        offset: '256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'SEGATOYS PICO',
        offset: '256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'SEGA TOYS PICO',
        offset: '256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'SAMSUNG PICO',
        offset: '256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'IMA IKUNOUJYUKU',
        offset: '256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'IMA IKUNOJYUKU',
        offset: '256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'SEGA IAC',
        offset: '256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

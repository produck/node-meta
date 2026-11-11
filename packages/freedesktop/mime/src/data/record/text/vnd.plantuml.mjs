/** The media type this record describes. */
export const mediaType = 'text/vnd.plantuml';

export const commentList = ['PlantUML Diagram'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.puml',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 30,
    matchList: [
      {
        type: 'string',
        value: '@startuml',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startjson',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startyaml',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startebnf',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startregex',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startnwdiag',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startsalt',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startditaa',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startgantt',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startchronology',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startmindmap',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startwbs',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startchen',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startchart',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '@startfiles',
        offset: '0:128',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

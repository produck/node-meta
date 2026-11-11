/** The media type this record describes. */
export const mediaType = 'text/x-vala';

export const commentList = ['Vala source code'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/plain', 'application/x-executable'];
export const globList = [
  {
    pattern: '*.vala',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.vapi',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 10,
    matchList: [
      {
        type: 'string',
        value: '#!/bin/vala',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/bin/vala',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/bin/env vala',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/bin/env -S vala',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/bin/env vala',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/bin/env -S vala',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '//',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/*',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'class',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'interface',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'struct',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'namespace',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'using',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

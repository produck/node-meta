/** The media type this record describes. */
export const mediaType = 'text/javascript';

export const commentList = ['JavaScript program'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [
  'application/x-javascript',
  'application/javascript',
  'text/jscript',
];
export const subClassOfList = ['application/typescript', 'text/jsx'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '#!/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /usr/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/local/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/local/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /usr/local/bin/gjs',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/env gjs',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.cjs';
const glob1 = '*.js';
const glob2 = '*.jsm';
const glob3 = '*.mjs';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob2,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob3,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1, glob2, glob3];

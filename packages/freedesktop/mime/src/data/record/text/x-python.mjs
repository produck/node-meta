/** The media type this record describes. */
export const mediaType = 'text/x-python';

export const commentList = ['Python script'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['application/x-executable', 'text/x-cython'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '#!/bin/python',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /bin/python',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /bin/python',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/bin/python',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/bin/python',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /usr/bin/python',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/local/bin/python',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/local/bin/python',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /usr/local/bin/python',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/env python',
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
const glob0 = '*.py';
const glob1 = '*.wsgi';

export const globList = [
  {
    pattern: glob0,
    weight: 60,
    caseSensitive: false,
  },
  {
    pattern: glob1,
    weight: 60,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0, glob1];

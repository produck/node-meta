/** The media type this record describes. */
export const mediaType = 'text/x-python3';

export const commentList = ['Python 3 script'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = [];
export const subClassOfList = ['text/x-python'];
export const globList = [
  {
    pattern: '*.py',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.py3',
    weight: 60,
    caseSensitive: false,
  },
  {
    pattern: '*.pyi',
    weight: 60,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '#!/bin/python3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /bin/python3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /bin/python3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/bin/python3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/bin/python3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /usr/bin/python3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/local/bin/python3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/local/bin/python3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /usr/local/bin/python3',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/env python3',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

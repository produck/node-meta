/** The media type this record describes. */
export const mediaType = 'text/x-python2';

export const commentList = ['Python 2 script'];
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
    pattern: '*.py2',
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
        value: '#!/bin/python2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /bin/python2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /bin/python2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/bin/python2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/bin/python2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /usr/bin/python2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!/usr/local/bin/python2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#! /usr/local/bin/python2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'eval \\"exec /usr/local/bin/python2',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/env python2',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

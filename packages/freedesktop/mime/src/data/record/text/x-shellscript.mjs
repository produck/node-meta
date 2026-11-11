/** The media type this record describes. */
export const mediaType = 'text/x-shellscript';

export const commentList = ['Shell script'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = ['application/x-shellscript', 'text/x-sh'];
export const subClassOfList = ['application/x-executable'];
export const globList = [
  {
    pattern: '*.sh',
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
        value: '# This is a shell archive',
        offset: '10',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '#!',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: '/bin/bash',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/zsh',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/sh',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/ksh',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/dash',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/env sh',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/env bash',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/env zsh',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/env ksh',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '/bin/env dash',
            offset: '2:16',
            mask: null,
            matchList: [],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** The media type this record describes. */
export const mediaType = 'message/rfc822';

export const commentList = ['Email message'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'emblem-mail';
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.eml',
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
        value: '#! rnews',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Content-Type:',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Forward to',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'From:',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'N#! rnews',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Pipe to',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Received:',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Relay-Version:',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Return-Path:',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Return-path:',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'Subject: ',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'To:',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

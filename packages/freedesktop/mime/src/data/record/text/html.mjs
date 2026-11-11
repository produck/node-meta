/** The media type this record describes. */
export const mediaType = 'text/html';

export const commentList = ['HTML document'];
export const acronym = 'HTML';
export const expandedAcronym = 'HyperText Markup Language';
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.html',
    weight: 80,
    caseSensitive: false,
  },
  {
    pattern: '*.htm',
    weight: 80,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '<!DOCTYPE HTML',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<!doctype html',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<!DOCTYPE html',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<HEAD',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<head',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<HTML',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<html',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<SCRIPT',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<script',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<BODY',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<body',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<h1',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<H1',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<!doctype HTML',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: 40,
    matchList: [
      {
        type: 'string',
        value: '<!--',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<TITLE',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '<title',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

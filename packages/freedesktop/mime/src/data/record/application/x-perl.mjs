/** The media type this record describes. */
export const mediaType = 'application/x-perl';

export const commentList = ['Perl script'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = ['text/x-perl'];
export const subClassOfList = ['application/x-executable', 'text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'eval \\"exec /usr/local/bin/perl',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/perl',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '/bin/env perl',
        offset: '2:16',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'use Test::',
        offset: '0:256',
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
        value: 'use strict',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'use warnings',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'use diagnostics',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n=pod',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n=head1 NAME',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n=head1 DESCRIPTION',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'BEGIN {',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.pl';
const glob1 = '*.PL';
const glob2 = '*.pm';
const glob3 = '*.al';
const glob4 = '*.perl';
const glob5 = '*.pod';
const glob6 = '*.t';

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
  {
    pattern: glob4,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob5,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob6,
    weight: 10,
    caseSensitive: false,
  },
];

export const globPatternList = [
  glob0,
  glob1,
  glob2,
  glob3,
  glob4,
  glob5,
  glob6,
];

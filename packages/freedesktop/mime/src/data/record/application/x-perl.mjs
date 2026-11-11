/** The media type this record describes. */
export const mediaType = 'application/x-perl';

export const commentList = ['Perl script'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'text-x-script';
export const aliasList = ['text/x-perl'];
export const subClassOfList = ['application/x-executable', 'text/plain'];
export const globList = [
  {
    pattern: '*.pl',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.PL',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pm',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.al',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.perl',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.pod',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.t',
    weight: 10,
    caseSensitive: false,
  },
];
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

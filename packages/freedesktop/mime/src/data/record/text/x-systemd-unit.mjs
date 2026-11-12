/** The media type this record describes. */
export const mediaType = 'text/x-systemd-unit';

export const commentList = ['Systemd unit file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '\\n[Unit]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n[Install]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n[Automount]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n[Mount]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n[Path]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n[Scope]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n[Service]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n[Slice]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n[Socket]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n[Swap]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\n[Timer]\\n',
        offset: '0:256',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Unit]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Install]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Automount]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Mount]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Path]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Scope]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Service]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Slice]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Socket]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Swap]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '[Timer]\\n',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** About glob */
const glob0 = '*.automount';
const glob1 = '*.device';
const glob2 = '*.mount';
const glob3 = '*.path';
const glob4 = '*.scope';
const glob5 = '*.service';
const glob6 = '*.slice';
const glob7 = '*.socket';
const glob8 = '*.swap';
const glob9 = '*.target';
const glob10 = '*.timer';

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
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob7,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob8,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob9,
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: glob10,
    weight: null,
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
  glob7,
  glob8,
  glob9,
  glob10,
];

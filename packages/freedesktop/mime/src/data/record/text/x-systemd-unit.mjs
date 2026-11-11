/** The media type this record describes. */
export const mediaType = 'text/x-systemd-unit';

export const commentList = ['Systemd unit file'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.automount',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.device',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.mount',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.path',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.scope',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.service',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.slice',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.socket',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.swap',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.target',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.timer',
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

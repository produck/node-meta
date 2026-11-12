/** The media type this record describes. */
export const mediaType = 'text/x-ssh-public-key';

export const commentList = ['OpenSSH public key'];
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
        value: 'ssh-ed25519 ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'sk-ssh-ed25519@openssh.com ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ecdsa-sha2-nistp521 ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ecdsa-sha2-nistp384 ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ecdsa-sha2-nistp256 ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'sk-ecdsa-sha2-nistp256@openssh.com ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ssh-rsa ',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'ssh-dss ',
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
const glob0 = '*.pub';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];

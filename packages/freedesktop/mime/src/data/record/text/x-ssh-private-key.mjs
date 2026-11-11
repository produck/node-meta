/** The media type this record describes. */
export const mediaType = 'text/x-ssh-private-key';

export const commentList = ['OpenSSH private key'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: '-----BEGIN OPENSSH PRIVATE KEY-----',
        offset: '0',
        mask: null,
        matchList: [],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

/** The media type this record describes. */
export const mediaType = 'application/msword';

export const commentList = ['Word document'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'x-office-document';
export const aliasList = [
  'application/vnd.ms-word',
  'application/x-msword',
  'zz-application/zz-winassoc-doc',
];
export const subClassOfList = ['application/x-ole-storage'];
export const magicList = [
  {
    priority: 60,
    matchList: [
      {
        type: 'string',
        value: '\\xd0\\xcf\\x11\\xe0\\xa1\\xb1\\x1a\\xe1',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value:
              '\\x00\\x09\\x02\\x00\\x00\\x00\\x00\\x00\\x00\\xc0\\x46\\x00\\x00\\x00\\x00\\x00',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value:
              '\\x06\\x09\\x02\\x00\\x00\\x00\\x00\\x00\\x00\\xc0\\x46\\x00\\x00\\x00\\x00\\x00',
            offset: '592:8192',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '\\xa\\x0\\x0\\x0MSWordDoc\\x0',
            offset: '2080:2140',
            mask: null,
            matchList: [],
          },
          {
            type: 'string',
            value: '\\xec\\xa5\\x00\\x00',
            offset: '512',
            mask: '0xffff00fe',
            matchList: [],
          },
          {
            type: 'string',
            value: 'Microsoft Word document data',
            offset: '2112',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: '\\x31\\xbe\\x00\\x00\\x00\\xab\\x00\\x00\\x00\\x00\\x00\\x00',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'little16',
            value: '0',
            offset: '96',
            mask: null,
            matchList: [],
          },
        ],
      },
      {
        type: 'string',
        value: 'PO^Q`',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\376\\067\\0\\043',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: '\\333\\245-\\0\\0\\0',
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
const glob0 = '*.doc';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];

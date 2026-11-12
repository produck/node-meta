/** The media type this record describes. */
export const mediaType = 'application/vnd.stardivision.mail';

export const commentList = ['StarMail 5 email'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = 'emblem-mail';
export const aliasList = [];
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
              '\\xe0\\xc4\\x4c\\xc2\\xdf\\x73\\x1b\\x10\\x80\\x4c\\xfd\\xfd\\xfd\\xfd\\xfd\\xfd',
            offset: '592:8192',
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

/** About glob */
const glob0 = '*.sdm';

export const globList = [
  {
    pattern: glob0,
    weight: null,
    caseSensitive: false,
  },
];

export const globPatternList = [glob0];

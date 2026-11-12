/** The media type this record describes. */
export const mediaType = 'x-content/ostree-repository';

export const commentList = ['OSTree software updates'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = [];
export const magicList = [];
export const treeMagicList = [
  {
    priority: null,
    delete: false,
    treeMatchList: [
      {
        type: 'directory',
        path: '.ostree',
        matchCase: true,
        matchList: [],
      },
      {
        type: 'directory',
        path: 'ostree/repo',
        matchCase: true,
        matchList: [],
      },
      {
        type: 'directory',
        path: 'var/lib/flatpak/repo',
        matchCase: true,
        matchList: [],
      },
    ],
  },
];
export const rootXmlList = [];

export const globList = [];

export const globPatternList = [];

/** The media type this record describes. */
export const mediaType = 'text/x-editorconfig';

export const commentList = ['EditorConfig coding style'];
export const acronym = null;
export const expandedAcronym = null;
export const genericIconName = null;
export const aliasList = [];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '.editorconfig',
    weight: null,
    caseSensitive: false,
  },
];
export const magicList = [
  {
    priority: 20,
    matchList: [
      {
        type: 'string',
        value: '\\n[',
        offset: '0:1024',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: ']\\n',
            offset: '3:1024',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: '\\nindent_style =',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\nindent_style=',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\nindent_size =',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\nindent_size=',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\ntrim_trailing_whitespace =',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\ntrim_trailing_whitespace=',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\ninsert_final_newline =',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\ninsert_final_newline=',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\nend_of_line =',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\nend_of_line=',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
            ],
          },
          {
            type: 'string',
            value: ']\\r\\n',
            offset: '4:1024',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: '\\r\\nindent_style =',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\nindent_style=',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\nindent_size =',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\nindent_size=',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\ntrim_trailing_whitespace =',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\ntrim_trailing_whitespace=',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\ninsert_final_newline =',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\ninsert_final_newline=',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\nend_of_line =',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\nend_of_line=',
                offset: '4:1024',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
      {
        type: 'string',
        value: '[',
        offset: '0',
        mask: null,
        matchList: [
          {
            type: 'string',
            value: ']\\n',
            offset: '2:1024',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: '\\nindent_style =',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\nindent_style=',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\nindent_size =',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\nindent_size=',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\ntrim_trailing_whitespace =',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\ntrim_trailing_whitespace=',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\ninsert_final_newline =',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\ninsert_final_newline=',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\nend_of_line =',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\nend_of_line=',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
            ],
          },
          {
            type: 'string',
            value: ']\\r\\n',
            offset: '2:1024',
            mask: null,
            matchList: [
              {
                type: 'string',
                value: '\\r\\nindent_style =',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\nindent_style=',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\nindent_size =',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\nindent_size=',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\ntrim_trailing_whitespace =',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\ntrim_trailing_whitespace=',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\ninsert_final_newline =',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\ninsert_final_newline=',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\nend_of_line =',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
              {
                type: 'string',
                value: '\\r\\nend_of_line=',
                offset: '3:1024',
                mask: null,
                matchList: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
export const treeMagicList = [];
export const rootXmlList = [];

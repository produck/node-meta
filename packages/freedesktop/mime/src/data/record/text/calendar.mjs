/** The media type this record describes. */
export const mediaType = 'text/calendar';

export const commentList = ['VCS/ICS calendar'];
export const acronym = 'VCS/ICS';
export const expandedAcronym = 'vCalendar/iCalendar';
export const genericIconName = 'x-office-calendar';
export const aliasList = ['text/x-vcalendar', 'application/ics'];
export const subClassOfList = ['text/plain'];
export const magicList = [
  {
    priority: null,
    matchList: [
      {
        type: 'string',
        value: 'BEGIN:VCALENDAR',
        offset: '0',
        mask: null,
        matchList: [],
      },
      {
        type: 'string',
        value: 'begin:vcalendar',
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
const glob0 = '*.vcs';
const glob1 = '*.ics';
const glob2 = '*.ifb';
const glob3 = '*.icalendar';

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
];

export const globPatternList = [glob0, glob1, glob2, glob3];

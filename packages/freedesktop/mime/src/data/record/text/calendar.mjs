/** The media type this record describes. */
export const mediaType = 'text/calendar';

export const commentList = ['VCS/ICS calendar'];
export const acronym = 'VCS/ICS';
export const expandedAcronym = 'vCalendar/iCalendar';
export const genericIconName = 'x-office-calendar';
export const aliasList = ['text/x-vcalendar', 'application/ics'];
export const subClassOfList = ['text/plain'];
export const globList = [
  {
    pattern: '*.vcs',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ics',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.ifb',
    weight: null,
    caseSensitive: false,
  },
  {
    pattern: '*.icalendar',
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

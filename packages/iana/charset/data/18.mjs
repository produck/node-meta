export const description =
  'Standardized by OSF, UNIX International, and UNIX Systems\nLaboratories Pacific.  Uses ISO 2022 rules to select\ncode set 0: US-ASCII (a single 7-bit byte set)\ncode set 1: JIS X0208-1990 (a double 8-bit byte set)\nrestricted to A0-FF in both bytes\ncode set 2: Half Width Katakana (a single 7-bit byte set)\nrequiring SS2 as the character prefix\ncode set 3: JIS X0212-1990 (a double 7-bit byte set)\nrestricted to A0-FF in both bytes\nrequiring SS3 as the character prefix';

export const xrefList = [];

export default {
  name: 'Extended_UNIX_Code_Packed_Format_for_Japanese',
  mibEnum: 18,
  preferredAlias: 'EUC-JP',
  aliasList: ['csEUCPkdFmtJapanese', 'EUC-JP'],
  date: null,
};

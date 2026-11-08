export const description =
  'Used in Japan.  Each character is 2 octets.\ncode set 0: US-ASCII (a single 7-bit byte set)\n1st byte = 00\n2nd byte = 20-7E\ncode set 1: JIS X0208-1990 (a double 7-bit byte set)\nrestricted  to A0-FF in both bytes\ncode set 2: Half Width Katakana (a single 7-bit byte set)\n1st byte = 00\n2nd byte = A0-FF\ncode set 3: JIS X0212-1990 (a double 7-bit byte set)\nrestricted to A0-FF in\nthe first byte\nand 21-7E in the second byte';

export const xrefList = [];

export const name = 'Extended_UNIX_Code_Fixed_Width_for_Japanese';

export const mibEnum = 19;

export const preferredAlias = null;

export const aliasList = ['csEUCFixWidJapanese'];

export const date = null;

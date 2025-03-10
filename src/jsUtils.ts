export const ifUndefined = <T>(
  source: undefined | null | T,
  defaultValue: T,
): T => source ?? defaultValue;

export const convertToJSON = (data?: string | any | null) =>
  data && typeof data === 'string' && data.length > 0 ? JSON.parse(data) : data;

export const cleanseJSObject = (data?: any | null) =>
  JSON.parse(JSON.stringify(data));

export const isArrowUpKeyPress = (key: string) => key === 'ArrowUp';
export const isArrowDownKeyPress = (key: string) => key === 'ArrowDown';
export const isEnterKeyPress = (key: string) => key === 'Enter';
export const isEscapeKeyPress = (key: string) => key === 'Escape';
export const isShiftKeyPress = (key: string) => key === 'Shift';

export const safeParseInt = (text?: string | number | null) => {
  if (text === undefined || text === null) {
    return 0;
  }

  // Parse number to integer
  // This will correct errors that recipes may introduce, e.g.
  // by sending a String instead of an integer
  const parsedNumber = Number.parseInt(text.toString(), 10);
  const adjustedNumber = Number.isNaN(parsedNumber) ? 0 : parsedNumber;
  return Math.max(adjustedNumber, 0);
};

interface IAcceleratorString {
  keyCombo: string;
  index: number;
  prefix?: string;
  suffix?: string;
  maxIndex?: number;
}
export const acceleratorString = ({
  index,
  keyCombo,
  prefix = '(',
  suffix = ')',
  maxIndex = 9,
}: IAcceleratorString) =>
  index <= maxIndex ? `${prefix}${keyCombo}+${index % 10}${suffix}` : '';

export const removeNewLines = (input: string): string =>
  input.replaceAll(/\r?\n|\r/g, '');

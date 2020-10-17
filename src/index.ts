import regexpes from './config/regexpes';

export function isbot(userAgent: string): boolean {
  const allRegexpString = regexpes.map(r => `(${r})`).join('|');
  const regexp = new RegExp(allRegexpString);
  return regexp.test(userAgent);
}

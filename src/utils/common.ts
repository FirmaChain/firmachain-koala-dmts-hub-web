import { FirmaUtil } from '@firmachain/firma-js';

export const createTextEllipsis = (value: string | undefined, startPoint: number, endPoint: number) => {
  if (value === undefined) return '';
  let length = value.length;
  if (length > 12)
    return value.substring(0, startPoint) + '...' + value.substring(value.length - endPoint, value.length);
  return value;
};

export const convertNumber = (value: string | number | undefined) => {
  if (isNaN(Number(value))) return 0;

  return Number(value);
};

export const convertToFctString = (uFctAmount: string) => {
  return FirmaUtil.getFCTStringFromUFCTStr(uFctAmount);
};

export const stringToSeed = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash) % 100000;
};

export const copyToClipboard = (textToCopy: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(textToCopy);
    } else {
      let textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      textArea.style.position = 'absolute';
      textArea.style.opacity = '0';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      return new Promise((res: any, rej: any) => {
        document.execCommand('copy') ? res() : rej();
        textArea.remove();
      });
    }
  } catch (error) {}
};

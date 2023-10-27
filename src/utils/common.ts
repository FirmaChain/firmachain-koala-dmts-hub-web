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

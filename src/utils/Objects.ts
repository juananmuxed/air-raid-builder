/* eslint-disable @typescript-eslint/no-explicit-any */
export function mapArraysInObject<T extends Record<string, any>>(obj?: T, valueId = 'id') {
  if (!obj) return {};
  const _obj: Record<string, unknown> = { ...obj };
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      _obj[key] = obj[key]
        .filter((val: any) => valueId in val)
        .map((val: any) => val.id);
    }
  });
  return _obj;
}

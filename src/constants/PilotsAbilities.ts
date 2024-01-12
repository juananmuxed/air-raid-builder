export enum PILOTS_ABILITIES {
  ROOKIE,
  REGULAR,
  VETERAN,
}

export const PILOTS = (
  Object.keys(PILOTS_ABILITIES).filter((value) => Number.isNaN(Number(value))) as (keyof typeof PILOTS_ABILITIES)[]
);

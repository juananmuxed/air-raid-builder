import { Nation } from './Nations';
import { Year } from './Years';

export type NationYear = {
  id: number;
  nationId: number;
  nation: Nation;
  years: Year[];
}

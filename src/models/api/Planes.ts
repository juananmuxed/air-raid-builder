import { AircraftClass } from './AircraftClasses';
import { Cost } from './Costs';
import { Nation } from './Nations';
import { SpecialAbility } from './SpecialAbilities';
import { Stat } from './Stats';
import { Year } from './Years';

export type Plane = {
  id: number;
  designation: string;
  nickname: string;
  nationId: number;
  nation: Nation;
  costId: number;
  cost: Cost;
  aircraftClassId: number;
  class: AircraftClass;
  statZeroId: number;
  statZero: Stat;
  statOneId: number;
  statOne: Stat;
  statTwoId: number;
  statTwo: Stat;
  statThreeId: number;
  statThree: Stat;
  years?: Year[];
  specialAbilities?: SpecialAbility[];
  specialAbilitiesVeteran?: SpecialAbility[];
}

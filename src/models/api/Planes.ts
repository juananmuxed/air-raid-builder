import { AircraftClass } from './AircraftClasses';
import { Cost } from './Costs';
import { NationYear } from './NationYears';
import { SpecialAbility } from './SpecialAbilities';
import { Stat } from './Stats';

export type Plane = {
  id: number;
  designation: string;
  nickname: string;
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
  specialAbilities?: SpecialAbility[];
  specialAbilitiesVeteran?: SpecialAbility[];
  nationYears?: NationYear[];
}

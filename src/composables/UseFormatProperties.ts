import { Cost } from 'src/models/api/Costs';
import { NationYear } from 'src/models/api/NationYears';
import { Plane, UnitPlane } from 'src/models/api/Planes';
import { SpecialAbility } from 'src/models/api/SpecialAbilities';
import { Stat } from 'src/models/api/Stats';

import { PILOTS_ABILITIES } from 'src/constants/PilotsAbilities';
import { t } from 'src/plugins/I18n';

export const useFormatProperties = () => {
  const setMinMax = (min?: number, max?: number) => {
    if (min === max) return max?.toString() || '-';
    return `${min}-${max}`;
  };

  const setSeparator = (items: Array<string | number | undefined>, separator = '/') => {
    if (items.length === 0) return '-';
    return items.filter((item) => item !== undefined).join(separator);
  };

  const splitSeparator = (itemsString: string, separator = '/') => {
    return itemsString.split(separator);
  };

  const setCosts = (cost?: Cost) => {
    return !cost ? '' : setSeparator([cost.rookie, cost.regular, cost.veteran]);
  };

  const setAgility = (stat?: Stat) => (!stat ? '' : setSeparator([stat.agilityRegular || '-', stat.agilityMaximum || '-']));

  const setManeuverRookie = (stat: Stat) => setSeparator([stat.maneuverRookieRegular || '-', stat.maneuverRookieMaximum || '-']);

  const setManeuverRegular = (stat: Stat) => setSeparator([stat.maneuverRegularRegular || '-', stat.maneuverRegularMaximum || '-']);

  const setManeuverVeteran = (stat: Stat) => setSeparator([stat.maneuverVeteranRegular || '-', stat.maneuverVeteranMaximum || '-']);

  const setManeuver = (stat?: Stat, pilot?: PILOTS_ABILITIES) => {
    if (!stat) return '';
    let maneuver = '';
    switch (pilot) {
      case PILOTS_ABILITIES.ROOKIE:
        maneuver = setManeuverRookie(stat);
        break;
      case PILOTS_ABILITIES.REGULAR:
        maneuver = setManeuverRegular(stat);
        break;
      case PILOTS_ABILITIES.VETERAN:
        maneuver = setManeuverVeteran(stat);
        break;
      default:
        break;
    }
    return maneuver;
  };

  const setSpeed = (stat?: Stat) => {
    if (!stat) return '';
    return setSeparator([
      setMinMax(stat.speedMinRegular, stat.speedMaxRegular),
      setMinMax(stat.speedMinMaximum, stat.speedMaxMaximum)]);
  };

  const setStatsLabel = (stat?: Stat) => {
    if (!stat) return '';
    return setSeparator([
      setSpeed(stat),
      setAgility(stat),
      stat.firepower || '-',
      setManeuverRookie(stat),
      setManeuverRegular(stat),
      setManeuverVeteran(stat),
    ], '|');
  };

  const setCompletePlaneName = (plane?: Plane) => {
    if (!plane) return '';
    return `${plane.designation}${plane.nickname ? ` "${plane.nickname}"` : ''}`;
  };

  const setYears = (nationYear?: NationYear) => {
    if (!nationYear) return '';
    return setSeparator(nationYear.years.map((year) => year.year));
  };

  const setNationYearLabel = (nationYear?: NationYear) => {
    if (!nationYear) return '';
    return setSeparator([
      nationYear.nation.name,
      setYears(nationYear),
    ], ':');
  };

  const setAbilityName = (ability?: SpecialAbility) => {
    if (!ability) return '';
    return `${ability.name}${(ability.valueNumber || ability.valueString) ? ` (${ability.valueNumber || ability.valueString})` : ''}`;
  };

  const setPilot = (plane?: UnitPlane) => {
    if (!plane) return '';
    return PILOTS_ABILITIES[plane.pilot];
  };

  const getUnitCost = (unit: UnitPlane) => {
    let cost = 0;
    switch (unit.pilot) {
      case PILOTS_ABILITIES.ROOKIE:
        cost = unit.cost.rookie;
        break;
      case PILOTS_ABILITIES.REGULAR:
        cost = unit.cost.regular;
        break;
      case PILOTS_ABILITIES.VETERAN:
        cost = unit.cost.veteran;
        break;
      default:
        cost = 0;
        break;
    }
    return cost;
  };

  const getPilotColor = (unit: UnitPlane) => {
    if (unit.pilot === PILOTS_ABILITIES.ROOKIE) return 'pilot_rookie';
    if (unit.pilot === PILOTS_ABILITIES.VETERAN) return 'pilot_veteran';
    return '';
  };

  const getWoundColor = (unit: UnitPlane, wound?: number) => {
    if (!wound) return 'wound_destroyed';
    if (wound === 1) {
      if (unit.statTwo) return 'wound_yellow';
      return 'wound_red';
    }
    if (wound === 2) return !unit.statTwo ? 'wound_destroyed' : 'wound_red';
    return '';
  };

  const setTranslateSpecialAbility = (ability: SpecialAbility, addValue = true) => {
    let name = t(`pages.lists.data.specialAbilities.${ability.name}`);
    const description = t(`pages.lists.data.specialAbilities.descriptions.${ability.name}`);
    if (ability.valueNumber && addValue) {
      name = `${name} (${ability.valueNumber})`;
    }
    if (ability.valueString && addValue) {
      name = `${name} (${ability.valueString})`;
    }
    return { name, description };
  };

  return {
    setSeparator,
    splitSeparator,
    setCosts,
    setSpeed,
    setAgility,
    setManeuverRookie,
    setManeuverRegular,
    setManeuverVeteran,
    setManeuver,
    setStatsLabel,
    setCompletePlaneName,
    setYears,
    setNationYearLabel,
    setAbilityName,
    setPilot,
    getUnitCost,
    getPilotColor,
    getWoundColor,
    setTranslateSpecialAbility,
  };
};

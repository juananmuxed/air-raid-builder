import { Cost } from 'src/models/api/Costs';
import { NationYear } from 'src/models/api/NationYears';
import { Plane } from 'src/models/api/Planes';
import { SpecialAbility } from 'src/models/api/SpecialAbilities';
import { Stat } from 'src/models/api/Stats';

export const useFormatProperties = () => {
  const setMinMax = (min: number, max: number) => {
    if (min === max) return max.toString();
    return `${min}-${max}`;
  };

  const setSeparator = (items: Array<string | number>, separator = '/') => {
    return items.join(separator);
  };

  const setCosts = (cost?: Cost) => {
    return !cost ? '' : setSeparator([cost.rookie, cost.regular, cost.veteran]);
  };

  const setAgility = (stat: Stat) => setSeparator([stat.agilityRegular, stat.agilityMaximum]);

  const setManeuverRookie = (stat: Stat) => setSeparator([stat.maneuverRookieRegular, stat.maneuverRookieMaximum]);

  const setManeuverRegular = (stat: Stat) => setSeparator([stat.maneuverRegularRegular, stat.maneuverRegularMaximum]);

  const setManeuverVeteran = (stat: Stat) => setSeparator([stat.maneuverVeteranRegular, stat.maneuverVeteranMaximum]);

  const setSpeed = (stat: Stat) => {
    return setSeparator([
      setMinMax(stat.speedMinRegular, stat.speedMaxRegular),
      setMinMax(stat.speedMinMaximum, stat.speedMaxMaximum)]);
  };

  const setStatsLabel = (stat?: Stat) => {
    if (!stat) return '';
    return setSeparator([
      setSpeed(stat),
      setAgility(stat),
      stat.firepower,
      setManeuverRookie(stat),
      setManeuverRegular(stat),
      setManeuverVeteran(stat),
    ], '|');
  };

  const setCompletePlaneName = (plane?: Plane) => {
    if (!plane) return '';
    return `${plane.designation}${plane.nickname ? `"${plane.nickname}"` : ''}`;
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

  return {
    setCosts,
    setSpeed,
    setAgility,
    setManeuverRookie,
    setManeuverRegular,
    setManeuverVeteran,
    setStatsLabel,
    setCompletePlaneName,
    setYears,
    setNationYearLabel,
    setAbilityName,
  };
};

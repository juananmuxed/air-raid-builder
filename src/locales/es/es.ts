import menu from './menu.json';
import success from './success.json';
import warnings from './warnings.json';
import errors from './errors.json';
import rules from './rules.json';
import titles from './common/titles.json';
import messages from './common/messages.json';
import labels from './common/labels.json';
import buttons from './common/buttons.json';
import texts from './common/texts.json';
import home from './pages/home.json';
import about from './pages/about.json';
import config from './pages/config.json';
import lists from './pages/lists.json';
import nations from './database/nations.json';

export default {
  menu,
  success,
  warnings,
  errors,
  rules,
  common: {
    titles,
    messages,
    labels,
    buttons,
    texts,
  },
  pages: {
    home,
    about,
    config,
    lists,
  },
  database: {
    nations,
  },
};

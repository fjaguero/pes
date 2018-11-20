import commonModules from '../../../common/modules';
import defaultRouter from './defaultRouter';
import i18n from './i18n';
import counter from './counter';
import post from './post';
import user from './user';
import pageNotFound from './pageNotFound';
import chat from './chat';
import './favicon';

import ClientModule from './ClientModule';

export default new ClientModule(commonModules, defaultRouter, post, counter, chat, user, i18n, pageNotFound);

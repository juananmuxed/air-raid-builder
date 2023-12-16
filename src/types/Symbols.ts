import { InjectionKey } from 'vue';

import { GenericView } from 'src/components/common/GenericView';

export const GenericViewKey: InjectionKey<GenericView<Record<string, unknown>>> = Symbol('_GenericView');

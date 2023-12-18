import { SpecialAbility } from 'src/models/api/SpecialAbilities';
import { Pagination } from 'src/models/fetch/Pagination';

import { clientApi } from 'src/plugins/Axios';

const controller = 'specialAbilities';

export class SpecialAbilitiesApi {
  async getSpecialAbilities() {
    return clientApi.getListClient<SpecialAbility>(controller, '');
  }

  async createSpecialAbility(specialAbility: SpecialAbility) {
    return clientApi.postClient<SpecialAbility>(controller, '', specialAbility);
  }

  async updateSpecialAbility(specialAbility: SpecialAbility) {
    return clientApi.putClient<SpecialAbility>(controller, '', specialAbility);
  }

  async deleteSpecialAbility(specialAbility: SpecialAbility) {
    return clientApi.deleteClient<SpecialAbility>(controller, '', specialAbility);
  }

  async getSpecialAbilitiesPaginated(pagination: Pagination) {
    return clientApi.getListPaginatedClient<SpecialAbility, Pagination>(controller, 'admin', pagination);
  }

  async postSpecialAbilitiesBulk(file: File) {
    return clientApi.postMultiPartClient(controller, 'bulk', { file });
  }
}

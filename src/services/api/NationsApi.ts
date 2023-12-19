import { Nation } from 'src/models/api/Nations';
import { Pagination } from 'src/models/fetch/Pagination';

import { clientApi } from 'src/plugins/Axios';

const controller = 'nations';

export class NationsApi {
  async getNations() {
    return clientApi.getListClient<Nation>(controller, '');
  }

  async createNation(nation: Nation) {
    return clientApi.postClient<Nation>(controller, '', nation);
  }

  async updateNation(nation: Nation) {
    return clientApi.putClient<Nation>(controller, '', nation);
  }

  async deleteNation(nation: Nation) {
    return clientApi.deleteClient<Nation>(controller, '', nation);
  }

  async getNationsPaginated(pagination: Pagination) {
    return clientApi.getListPaginatedClient<Nation, Pagination>(controller, 'admin', pagination);
  }

  async postNationsBulk(file: File) {
    return clientApi.postMultiPartClient(controller, 'bulk', { file });
  }
}

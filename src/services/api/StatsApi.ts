import { Stat } from 'src/models/api/Stats';
import { Pagination } from 'src/models/fetch/Pagination';

import { clientApi } from 'src/plugins/Axios';

const controller = 'stats';

export class StatsApi {
  async getStats() {
    return clientApi.getListClient<Stat>(controller, '');
  }

  async createStat(stat: Stat) {
    return clientApi.postClient<Stat>(controller, '', stat);
  }

  async updateStat(stat: Stat) {
    return clientApi.putClient<Stat>(controller, '', stat);
  }

  async deleteStat(stat: Stat) {
    return clientApi.deleteClient<Stat>(controller, '', stat);
  }

  async getStatsPaginated(pagination: Pagination) {
    return clientApi.getListPaginatedClient<Stat, Pagination>(controller, 'admin', pagination);
  }

  async postStatsBulk(file: File) {
    return clientApi.postMultiPartClient(controller, 'bulk', { file });
  }
}

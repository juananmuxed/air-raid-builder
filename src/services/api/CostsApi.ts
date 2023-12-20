import { Cost } from 'src/models/api/Costs';
import { Pagination } from 'src/models/fetch/Pagination';

import { clientApi } from 'src/plugins/Axios';

const controller = 'costs';

export class CostsApi {
  async getCosts() {
    return clientApi.getListClient<Cost>(controller, '');
  }

  async createCost(cost: Cost) {
    return clientApi.postClient<Cost>(controller, '', cost);
  }

  async updateCost(cost: Cost) {
    return clientApi.putClient<Cost>(controller, '', cost);
  }

  async deleteCost(cost: Cost) {
    return clientApi.deleteClient<Cost>(controller, '', cost);
  }

  async getCostsPaginated(pagination: Pagination) {
    return clientApi.getListPaginatedClient<Cost, Pagination>(controller, 'admin', pagination);
  }

  async postCostsBulk(file: File) {
    return clientApi.postMultiPartClient(controller, 'bulk', { file });
  }
}

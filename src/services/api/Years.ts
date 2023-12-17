import { Year } from 'src/models/api/Years';
import { Pagination } from 'src/models/fetch/Pagination';

import { clientApi } from 'src/plugins/Axios';

const controller = 'years';

export class YearsApi {
  async getYears() {
    return clientApi.getListClient<Year>(controller, '');
  }

  async createYear(year: Year) {
    return clientApi.postClient<Year>(controller, '', year);
  }

  async updateYear(year: Year) {
    return clientApi.putClient<Year>(controller, '', year);
  }

  async deleteYear(year: Year) {
    return clientApi.deleteClient<Year>(controller, '', year);
  }

  async getYearsPaginated(pagination: Pagination) {
    return clientApi.getListPaginatedClient<Year, Pagination>(controller, 'admin', pagination);
  }

  async postYearsBulk(file: File) {
    return clientApi.postMultiPartClient(controller, 'bulk', { file });
  }
}

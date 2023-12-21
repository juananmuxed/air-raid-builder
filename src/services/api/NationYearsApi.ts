import { NationYear } from 'src/models/api/NationYears';
import { Pagination } from 'src/models/fetch/Pagination';

import { clientApi } from 'src/plugins/Axios';

const controller = 'nationYears';

export class NationYearsApi {
  async getNationYears() {
    return clientApi.getListClient<NationYear>(controller, '');
  }

  async createNationYear(nationYear: NationYear) {
    return clientApi.postClient<NationYear>(controller, '', nationYear);
  }

  async updateNationYear(nationYear: NationYear) {
    return clientApi.putClient<NationYear>(controller, '', nationYear);
  }

  async deleteNationYear(nationYear: NationYear) {
    return clientApi.deleteClient<NationYear>(controller, '', nationYear);
  }

  async getNationYearsPaginated(pagination: Pagination) {
    return clientApi.getListPaginatedClient<NationYear, Pagination>(controller, 'admin', pagination);
  }

  async postNationYearsBulk(file: File) {
    return clientApi.postMultiPartClient(controller, 'bulk', { file });
  }
}

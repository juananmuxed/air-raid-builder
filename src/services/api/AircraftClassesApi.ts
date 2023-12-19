import { AircraftClass } from 'src/models/api/AircraftClasses';
import { Pagination } from 'src/models/fetch/Pagination';

import { clientApi } from 'src/plugins/Axios';

const controller = 'aircraftClasses';

export class AircraftClassesApi {
  async getAircraftClasses() {
    return clientApi.getListClient<AircraftClass>(controller, '');
  }

  async createAircraftClass(aircraftClass: AircraftClass) {
    return clientApi.postClient<AircraftClass>(controller, '', aircraftClass);
  }

  async updateAircraftClass(aircraftClass: AircraftClass) {
    return clientApi.putClient<AircraftClass>(controller, '', aircraftClass);
  }

  async deleteAircraftClass(aircraftClass: AircraftClass) {
    return clientApi.deleteClient<AircraftClass>(controller, '', aircraftClass);
  }

  async getAircraftClassesPaginated(pagination: Pagination) {
    return clientApi.getListPaginatedClient<AircraftClass, Pagination>(controller, 'admin', pagination);
  }

  async postAircraftClassesBulk(file: File) {
    return clientApi.postMultiPartClient(controller, 'bulk', { file });
  }
}

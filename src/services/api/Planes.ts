import { Plane } from 'src/models/api/Planes';
import { Pagination } from 'src/models/fetch/Pagination';

import { clientApi } from 'src/plugins/Axios';

const controller = 'planes';

export class PlanesApi {
  async getPlanes() {
    return clientApi.getListClient<Plane>(controller, '');
  }

  async createPlane(plane: Plane) {
    return clientApi.postClient<Plane>(controller, '', plane);
  }

  async updatePlane(plane: Plane) {
    return clientApi.putClient<Plane>(controller, '', plane);
  }

  async deletePlane(plane: Plane) {
    return clientApi.deleteClient<Plane>(controller, '', plane);
  }

  async getPlanesPaginated(pagination: Pagination) {
    return clientApi.getListPaginatedClient<Plane, Pagination>(controller, 'admin', pagination);
  }

  async postPlanesBulk(file: File) {
    return clientApi.postMultiPartClient(controller, 'bulk', { file });
  }
}

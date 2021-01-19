import {helloDb} from '../../database/hello/mock';

export class HelloMockModel {
  private helloDb = helloDb;

  async getAll() {
    return await this.helloDb;
  }

  async getById(id: number) {
    return await this.helloDb.find(el => el.id === id);
  }
}

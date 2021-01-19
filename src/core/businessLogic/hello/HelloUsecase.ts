import {HelloMockModel} from '../../persisence/hello/HelloMockModel';

export class HelloUsecase {
  private helloModel = new HelloMockModel();

  async sendHello(message: string = '') {
    if (message === 'kitty') {
      return await this.helloModel.getById(1);
    } else if (message === 'pickachu') {
      return await this.helloModel.getById(2);
    } else {
      return await this.helloModel.getAll();
    }
  }
}

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get, param} from '@loopback/rest';
import {helloPresenter} from '../core/presenter/hello/HelloPresenter';

const usecase = helloPresenter.getHelloUsecase();
export class HelloController {
  private helloUsecase = usecase;

  @get('/hello/{id}')
  async hello(
    @param.path.number('id') id: number,
    @param.query.string('message') message: string,
  ): Promise<any> {
    const response = await this.helloUsecase.sendHello(message);
    return response;
  }
}

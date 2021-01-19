import {HelloUsecase} from '../../businessLogic/hello/HelloUsecase';

class HelloPresenter {
  constructor() {}

  getHelloUsecase() {
    console.log('Exctue---------');
    return new HelloUsecase();
  }
}

export const helloPresenter = new HelloPresenter();

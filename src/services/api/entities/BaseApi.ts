import { AxiosResponse } from 'axios';

import { HttpActions } from '../HttpActions';
import { Storage } from '../storage';
import { Converter } from '../types';

class BaseApi {
  protected actions: HttpActions;

  protected storage: Storage;

  constructor(actions: HttpActions, storage: Storage) {
    this.actions = actions;
    this.storage = storage;
  }

  protected setHeaders() {
    return {};
  }

  protected static handleResponse<ResponseData, Result>(
    response: AxiosResponse,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    converter?: Converter<ResponseData, Result> | null,
  ): Result {
    return response.data;
  }
}

export { BaseApi };

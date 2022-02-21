import { CONFIG } from 'core/config';

import { HttpActions } from './HttpActions';
import { Socket } from './sockets';
import { Storage } from './storage';

class Api {
  private actions: HttpActions;

  public socket: Socket;

  private headers = {};

  constructor(public storage: Storage) {
    this.actions = new HttpActions(CONFIG.baseUrl, this.headers);
    this.socket = new Socket();
  }
}

export { Api };

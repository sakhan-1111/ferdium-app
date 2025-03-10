import { ipcRenderer } from 'electron';
import { observable } from 'mobx';

const debug = require('../../preload-safe-debug')('Ferdium:feature:basicAuth');

interface IAuthInfo {
  host: string;
  port: number;
}
interface IDefaultState {
  isModalVisible: boolean;
  service: null;
  authInfo: IAuthInfo | null;
}

const defaultState: IDefaultState = {
  isModalVisible: true,
  service: null,
  authInfo: null,
};

export const state = observable(defaultState);

export const resetState = () => {
  Object.assign(state, defaultState);
};

export const sendCredentials = (user: any, password: any) => {
  debug('Sending credentials to main', user, password);

  ipcRenderer.send('feature-basic-auth-credentials', {
    user,
    password,
  });
};

export const cancelLogin = () => {
  debug('Cancel basic auth event');

  ipcRenderer.send('feature-basic-auth-cancel');
};

import { makeAutoObservable } from 'mobx'
import React from 'react';

class LoginStore {
  account: string = '';
  password: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setAccount = (account: string) => {
    this.account = account;
  }
  setPassword = (password: string) => {
    this.password = password;
  }
  deleteAccount = () => {
    this.account = '';
    this.password = '';
  }
}

export const Stores = {
  loginStore: new LoginStore(),
}

export const StoresContext = React.createContext(Stores);
export const useStores = () => React.useContext(StoresContext);

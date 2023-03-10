export const loginModel = {
  namespace: 'login',
  state: {
    account: '',
    password: '',
  },
  reducers: {
    saveAccount(state, {payload}) {
      return {...state, account: payload.account}
    },
    savePassword(state, {payload}) {
      return {...state, password: payload.password}
    },
    deleteState(state, {payload}) {
      return {
        account: '',
        password: '',    
      }
    }
  },
  effects: {
    *logout({}, {put}) {
      yield put({
        type: 'deleteState'
      });
    }
  },
};

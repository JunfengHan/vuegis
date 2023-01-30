import { defineStore } from 'pinia'

interface stateModel {
  userInfo: UserInfo,
  taskList: []
}

interface UserInfo {
  id: String,
  name?: String,
}

interface statePath {
  path: String
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): stateModel => ({
    userInfo: {
      id: '',
      name: '',
    },
    taskList: []
  }),
  getters: {
    getUserInfo: state => state.userInfo
  },
  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    }
  }
})

export const useRouterPath = defineStore({
  id: 'activePath',
  state: (): statePath => ({
    path: 'heartQuery', // 默认路由
  }),
  getters: {
    getActivePath: state => state.path
  },
  actions: {
    setActivePath(path: String) {
      this.path = path
    }
  }
})

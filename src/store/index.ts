import { defineStore } from 'pinia'

interface stateModel {
  userInfo: UserInfo,
  taskList: []
}

interface UserInfo {
  id: String,
  name?: String,
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

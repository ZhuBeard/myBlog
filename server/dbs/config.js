export default {
  dbs: 'mongodb://www.insgalary.cn/:27017/blog',
  redis: {
    get host() {
      return 'www.insgalary.cn'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '276019280@qq.com'
    },
    get pass() {
      return 'qneqhauxvvvybgbc'
    },
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}

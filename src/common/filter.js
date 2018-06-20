export default {
  install (Vue, options) {
    Vue.filter('reverse', (value) => {
      return value.split('').reverse().join('')
    })
  }
}

export default {
  install (Vue, options) {
    Vue.directive('showtext', {
      inserted: (el, binding) => {
        el.onfocus = () => {
          window.ttt = el
          if (!el.parentNode.lastElementChild.hasAttribute('type')) {
            el.parentNode.lastElementChild.remove()
          }
        }
        el.onblur = () => {
          let $text = document.createElement('div')
          $text.innerHTML = el.value
          setTimeout(() => {
            el.parentNode.append($text)
          }, 100)
        }
      }
    })
  }
}

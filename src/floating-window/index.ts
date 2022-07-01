import { createApp } from 'vue'
import Window from './Window.vue'

const init = document.createElement('div')
init.id = 'injected-floating-window'
document.getElementsByTagName('html')[0].appendChild(init)

const app = createApp(Window)
const vm = app.mount('#injected-floating-window')

window.onmouseup = function (event) {
  const selection = window.getSelection()
  const content = selection!.toString().trim()
  const target = event.target;

  (vm.$data as any).selectedContent = content

  if ((target! as any).id !== 'floating-icon' && content) {
    (vm.$data as any).coord = getCoord({
      x: event.clientX,
      y: event.clientY
    }, { x: 10, y: 0 })
  }
}

type Point = {x: number, y: number}
function getCoord (base: Point, offset: Point) {
  return {
    x: base.x + offset.x + document.documentElement.scrollLeft + document.body.scrollLeft,
    y: base.y + offset.y + document.documentElement.scrollTop + document.body.scrollTop
  }
}

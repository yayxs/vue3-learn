// function effect(){
//   document.body.innerText = 'effect' // 设置body 的文本内容
// }

let val = 1

function effect1() {
  val = 2
}

const obj = { text: 'is obj' } // 响应式数据

function effect() {
  document.body.innerText = obj.text // 设置body 的文本内容
}

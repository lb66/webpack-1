import x from './x.js'
import png from '../image/b.png'
console.log(x, png)

const div = document.getElementById('app')
div.innerHTML = `<img src="${png}">`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
  const promise = import('./lazy.js')
  promise.then((module) => {
    const fn = module.default
    fn()
  })
}
div.appendChild(button)
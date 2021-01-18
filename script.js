const injectStyle = src => {
  const tag = document.createElement('style')
  tag.innerHTML = src
  document.head.appendChild(tag)
}

injectStyle(`
  .rickgrid {
    display: grid;
    position: fixed;
    grid-template-columns: 4;
    grid-template-rows: 4;
    align-items: stretch;
    justify-content: stretch;
  }
`)

const grid = document.createElement('div')
grid.classList.add('rickgrid')
document.body.appendChild(grid)

for (let i = 0; i < 16; i++) {
  const iframe = document.createElement('iframe')
  iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
  grid.appendChild(iframe)
}

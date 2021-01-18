const injectStyle = src => {
  const tag = document.createElement('style')
  tag.innerHTML = src
  document.head.appendChild(tag)
}

injectStyle(`
  .rickgrid {
    display: grid;
    position: fixed;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .rickgrid iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`)

const grid = document.createElement('div')
grid.classList.add('rickgrid')
document.body.appendChild(grid)

for (let i = 0; i < 16; i++) {
  const iframe = document.createElement('iframe')
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  iframe.allowfullscreen = true
  iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
  grid.appendChild(iframe)
}

// 优化后的代码
const dockContainer = document.querySelector('.dock')
const dockItems = Array.from(document.querySelectorAll('.dock-item'))


const SCALES = {
  default: 1,
  hover: 2.5,
  neighbor: 2
}

const MARGINS = {
  default: '10px',
  expanded: '40px'
}

const updateDockItem = (item, scale, margin) => {
  item.style.transform = `scale(${scale})`
  item.style.margin = `0 ${margin}`
}

const updateDockItems = () => {
  dockItems.forEach(item => {
    const scale = item.isHovered ? SCALES.hover :
      item.isNeighbor ? SCALES.neighbor :
        SCALES.default

    const margin = (item.isHovered || item.isNeighbor) ?
      MARGINS.expanded :
      MARGINS.default

    updateDockItem(item, scale, margin)
  })
}

const handleMouseMove = (hoveredItem) => {
  const hoveredIndex = dockItems.indexOf(hoveredItem)

  dockItems.forEach((item, index) => {
    item.isHovered = item === hoveredItem
    item.isNeighbor = Math.abs(index - hoveredIndex) === 1
  })

  updateDockItems()
}

const resetDock = () => {
  dockItems.forEach(item => {
    item.isHovered = false
    item.isNeighbor = false
  })
  updateDockItems()
}

dockItems.forEach(item => {
  item.addEventListener('mousemove', () => handleMouseMove(item))
})

dockContainer[0].addEventListener('mouseleave', resetDock)
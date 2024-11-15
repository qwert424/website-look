// 底部状态栏 函数
import Style from "../assets/scss/footerComp.module.scss";

// 优化后的代码

// 伸缩比例
const SCALES = {
  default: 1,
  hover: 2.5,
  neighbor: 2
}

// margin
const MARGINS = {
  default: '10px',
  expanded: '30px'
}

// 偏移
const updateDockItem = (item, scale, margin) => {
  item.style.transform = `scale(${scale})`
  item.style.margin = `0 ${margin}`
}

const updateDockItems = (dockItems) => {
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

// 出来鼠标事件
const handleMouseMove = (hoveredItem, dockItems) => {
  const hoveredIndex = dockItems.indexOf(hoveredItem)

  dockItems.forEach((item, index) => {
    item.isHovered = item === hoveredItem
    item.isNeighbor = Math.abs(index - hoveredIndex) === 1
  })

  updateDockItems(dockItems)
}

// 重置状态
const resetDock = (dockItems) => {
  dockItems.forEach(item => {
    item.isHovered = false
    item.isNeighbor = false
  })
  updateDockItems(dockItems)
}

// 初始化函数
export const initFooterComp = () => {
  const dockContainer = document.querySelector(`.${Style['dock']}`)
  const dockItems = Array.from(document.querySelectorAll(`.${Style['dock-item']}`))
  dockItems.forEach((item, index, Self) => {
    item.addEventListener('mousemove', () => handleMouseMove(item, Self))
  })
  dockContainer.addEventListener('mouseleave', () => resetDock(dockItems))
}

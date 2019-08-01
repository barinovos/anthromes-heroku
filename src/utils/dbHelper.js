import api from './api'
import { calcSizeWithZoom } from './calcZoom'

export const getCanvasItems = db => {
  const images = db.images
  return db.sections
    .filter(s => Boolean(s.canvas))
    .map(({ id, imageIds, canvas }) => ({
      id,
      url: api.getImageUrl(images.find(im => im.id === imageIds[imageIds.length - 1]).filePath),
      ...canvas,
    }))
}

export const getSectionById = (db, sectionId) => db.sections.find(s => s.id === sectionId)

export const calcInitialScroll = db => {
  const mapped = db.sections.filter(s => Boolean(s.canvas)).map(s => s.canvas)
  if (!mapped || !mapped.length) return { top: 0, left: 0 }
  const xMin = mapped.map(data => data.x).sort()[0]
  const yMin = mapped.map(data => data.y).sort()[0]
  return { left: xMin, top: yMin, behavior: 'smooth' }
}

export const calcScrollToSection = (canvas, zoom) => {
  return { left: calcSizeWithZoom(canvas.x, zoom), top: calcSizeWithZoom(canvas.y, zoom), behavior: 'smooth' }
}

export const calcCanvasSize = (sections, zoom) => {
  const mapped = sections.filter(s => Boolean(s.canvas)).map(s => s.canvas)
  if (!mapped || !mapped.length) return { height: '100%', width: '100%' }
  const widths = mapped
    .map(data => calcSizeWithZoom(data.x, zoom) + calcSizeWithZoom(data.width, zoom))
    .sort()
    .reverse()
  const heights = mapped
    .map(data => calcSizeWithZoom(data.y, zoom) + calcSizeWithZoom(data.height, zoom))
    .sort()
    .reverse()
  return { height: heights[0] * 1.1 + 'px', width: widths[0] * 1.1 + 'px'}
}

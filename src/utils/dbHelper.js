import api from './api'

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
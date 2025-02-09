import { LazyImageLoadController } from './packages/lazy-load.js'
import { ModalController } from './packages/modal.js'

document.addEventListener('DOMContentLoaded', async () => {
  new LazyImageLoadController({
    imageSelector: '.lazy-image',
    rootMargin: '400px 0px',
    threshold: 0.1,
    filterStyle: 'blur(5px)',
    maxConcurrentLoads: 3,
  })
})

document.addEventListener('DOMContentLoaded', async () => {
  new ModalController(
    [
      {
        id: 'mobile-menu',
        toggleElements: ['#mobile-menu-button'],
        openElements: [],
        contentElement: '#mobile-menu',
        closeElements: ['.mobile-link'],
        containers: ['#mobile-menu'],
      },
    ],
    {
      outsideClickClose: true,
      escapeClose: true,
      preserveModalHistory: true,
      attributes: {
        stateAttribute: 'data-state',
        values: {
          open: 'open',
          preserved: 'open',
          hidden: 'closed',
        },
      },
      scrollLock: {
        enabled: true,
        styles: {
          hidden: {
            overflow: 'hidden',
            position: 'fixed',
            width: '100%',
          },
          visible: {
            overflow: 'auto',
            position: 'static',
            width: 'auto',
          },
        },
      },
    },
  )
})

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'

document
  .querySelectorAll<HTMLDivElement>('div[data-widget]')
  .forEach(async (div) => {
    if (!div.dataset.widgetConfigSrc) return

    const res = await fetch(div.dataset.widgetConfigSrc)
    const config = await res.json()

    createRoot(div).render(
      <StrictMode>
        <App config={config} />
      </StrictMode>
    )
  })

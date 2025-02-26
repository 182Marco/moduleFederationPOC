import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App, { AppConfig } from './App.tsx'
import './css/index.scss'

document
  .querySelectorAll<HTMLDivElement>('div[data-widget]')
  .forEach(async (div) => {
    const configScript = div.querySelector<HTMLScriptElement>(
      'script[type="text/json"]'
    )

    if (!configScript) return

    let json
    if (configScript.src) {
      const res = await fetch(configScript.src)
      json = await res.json()
    } else if (configScript.innerText) {
      json = JSON.parse(configScript.innerText)
    } else return

    const config = new AppConfig(json.text, json.showSmall)

    createRoot(div).render(
      <StrictMode>
        <App config={config} />
      </StrictMode>
    )
  })

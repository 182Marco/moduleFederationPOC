import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App, { AppConfig } from './App.tsx'

document
  .querySelectorAll<HTMLDivElement>('div[data-widget]')
  .forEach(async (div) => {
    const configScript = div.querySelector<HTMLScriptElement>(
      'script[type="text/json"]'
    )

    if (!configScript) return

    let config: AppConfig

    if (configScript.src) {
      const res = await fetch(configScript.src)
      const json = await res.json()
      config = new AppConfig(json.text, json.showSmall)
    } else if (configScript.innerText)
      config = JSON.parse(configScript.innerText)
    else return

    createRoot(div).render(
      <StrictMode>
        <App config={config} />
      </StrictMode>
    )
  })

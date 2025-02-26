import './App.scss'

export class AppConfig {
  public constructor(public text: string, public showSmall = true) {}
}

function App({ config }: { config: AppConfig }) {
  return (
    <>
      <div className="nd-widget">
        <p>{config.text}</p>
        {config.showSmall && <small>Developed by ND</small>}
      </div>
    </>
  )
}

export default App

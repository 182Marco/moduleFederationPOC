import './App.scss'

type AppProps = {
  config: {
    text: string
  }
}

function App({ config }: AppProps) {
  return (
    <>
      <div className="nd-widget">{config.text}</div>
    </>
  )
}

export default App

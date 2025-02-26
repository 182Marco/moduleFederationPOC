import Subtitle from './Subtitle'

export class AppConfig {
  public constructor(public text: string, public showSmall = true) {}
}

export default function App({ config }: { config: AppConfig }) {
  return (
    <div className="nd-widget">
      <p>{config.text}</p>
      {config.showSmall && <Subtitle text="Developed by ND" />}
    </div>
  )
}

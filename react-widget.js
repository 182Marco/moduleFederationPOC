const styleUrl = '/react-app/dist/react-widget.css'
const scriptUrl = 'react-app/dist/react-widget.js'

const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = styleUrl

const script = document.createElement('script')
script.type = 'module'
script.src = scriptUrl

document.head.append(link)
document.body.append(script)

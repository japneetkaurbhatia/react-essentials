import ButtonCounter from './components/buttonCounter'
import MouseHoverCounter from './components/MouseHoverCounter'

function counter() {
  return (
    <div>
        <h1>counter</h1>
        <ButtonCounter name="mnop" />
        <MouseHoverCounter name="mnop" />
    </div>
  )
}

export default counter
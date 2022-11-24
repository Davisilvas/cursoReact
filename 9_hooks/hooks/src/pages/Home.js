import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'

const Home = () => {
  return (
    <div>
      {/* useState */}
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
    </div>
  )
}

export default Home

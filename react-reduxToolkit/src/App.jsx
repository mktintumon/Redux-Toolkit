import './App.css'
import { CakeView } from './features/cakes/CakeView'
import { IcecreamView } from './features/icecreams/IcecreamView'
import { UserView } from './features/user/UserView'

function App() {

  return (
    <>
      <div className="App">
          <CakeView/>
          <IcecreamView/>
          <UserView/>
      </div>
    </>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import { Provider } from 'react-redux'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart foods={[]} />
      </BrowserRouter>
    </Provider>
  )
}

export default App

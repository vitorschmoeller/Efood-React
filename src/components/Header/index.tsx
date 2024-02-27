import { HeaderLog, Titulo, Img } from './styles'
import hero from '../../assets/fundo.png'
import logo from '../../assets/logoEfood.png'

const Header = () => {
  return (
    <div>
      <HeaderLog style={{ backgroundImage: `url(${hero})` }}>
        <Img src={logo} alt="logo" />
        <Titulo>
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </Titulo>
      </HeaderLog>
    </div>
  )
}

export default Header

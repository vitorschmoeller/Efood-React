import { Card, Titulo, ContainerText, Span, Button, P, Infos } from './styles'
import Tag from '../Tag'
import { Link } from 'react-router-dom'
import star from '../../assets/estrela.png'

export type Props = {
  infos: string[]
  image: string
  title: string
  review: string
  description: string
}

const Product = ({ description, image, infos, review, title }: Props) => {
  return (
    <>
      <Card>
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
        <img src={image} alt={title} />
        <ContainerText>
          <Titulo>{title}</Titulo>
          <Span>
            {review}
            <div>
              <img src={star} alt="estrela" />
            </div>
          </Span>
        </ContainerText>

        <P>{description}</P>
        <Link to="/saibamais">
          <Button type="button">Saiba mais</Button>
        </Link>
      </Card>
    </>
  )
}

export default Product

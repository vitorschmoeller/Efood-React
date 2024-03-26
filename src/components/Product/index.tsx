import { Card, Titulo, ContainerText, Span, Button, P, Infos } from './styles'
import Tag from '../Tag'
import { Link } from 'react-router-dom'
import star from '../../assets/estrela.png'

export type Props = {
  infos: string
  image: string
  title: string
  review: string
  description: string
  id: number
}

const Product = ({ description, image, infos, review, title, id }: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 272) {
      return description.slice(0, 268) + '...'
    }
    return description
  }

  return (
    <>
      <Card>
        <Infos>
          {/* {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))} */}
          <Tag>{infos}</Tag>
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

        <P>{getDescricao(description)}</P>
        <Link to={`${id}`}>
          <Button type="button">Saiba mais</Button>
        </Link>
      </Card>
    </>
  )
}

export default Product

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Tag from '../Tag'
import star from '../../assets/estrela.png'

import * as S from './styles'

export type Props = {
  infos: string
  image: string
  title: string
  review: string
  description: string
  id: number
}

const Product = ({ description, image, infos, review, title, id }: Props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getDescricao = (description: string) => {
    if (description.length > 272) {
      return description.slice(0, 268) + '...'
    }
    return description
  }

  return (
    <>
      <S.Card>
        {isMobile ? (
          <>
            <S.Infos>
              {/* {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))} */}
              <Tag>{infos}</Tag>
            </S.Infos>
            <img src={image} alt={title} />
            <S.ContainerText>
              <S.Span>
                {review}
                <div>
                  <img src={star} alt="estrela" />
                </div>
                <S.Titulo>{title}</S.Titulo>
              </S.Span>
              <Link to={`${id}`}>
                <S.Button type="button">Saiba mais</S.Button>
              </Link>
            </S.ContainerText>
          </>
        ) : (
          <>
            <S.Infos>
              {/* {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))} */}
              <Tag>{infos}</Tag>
            </S.Infos>
            <img src={image} alt={title} />
            <S.ContainerText>
              <S.Titulo>{title}</S.Titulo>
              <S.Span>
                {review}
                <div>
                  <img src={star} alt="estrela" />
                </div>
              </S.Span>
            </S.ContainerText>

            <S.P>{getDescricao(description)}</S.P>
            <Link to={`${id}`}>
              <S.Button type="button">Saiba mais</S.Button>
            </Link>
          </>
        )}
      </S.Card>
    </>
  )
}

export default Product

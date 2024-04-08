import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Button'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styled'
import { parseToBrl } from '../../utils'

const Cart = () => {
  const dispatch = useDispatch()
  const [cart, setCart] = useState(true)
  const [adressData, setAdressData] = useState(false)
  const [paymentData, setPaymentData] = useState(false)
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)
  //purchase ação/requisição/função para fazer o post
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const somaCarrinho = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      }
      return 0
    }, 0)
  }

  const form = useFormik({
    //No initialValues passamos o campos que iremos ter no formulario
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      CEP: '',
      houseNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    //agrupamento de validação
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      CEP: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'O campo precisa ter o formato XXXXX-XXX')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),

      cardOwner: Yup.string().when((values, schema) =>
        paymentData ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string()
        .matches(
          /^\d{4} \d{4} \d{4} \d{4}$/,
          'O campo precisa ter o formato 9999 9999 9999 9999'
        )
        .when((values, schema) =>
          paymentData ? schema.required('O campo é obrigatório') : schema
        ),
      cardCode: Yup.string()
        .matches(/^\d{3}$/, 'Número incorreto')
        .when((values, schema) =>
          paymentData ? schema.required('O campo é obrigatório') : schema
        ),
      expireMonth: Yup.string()
        .matches(/^\d{2}$/, 'Exemplo: 07')
        .when((values, schema) =>
          paymentData ? schema.required('O campo é obrigatório') : schema
        ),
      expireYear: Yup.string()
        .matches(/^\d{2}$/, 'Exemplo: 25')
        .when((values, schema) =>
          paymentData ? schema.required('O campo é obrigatório') : schema
        )
    }),
    onSubmit: (values) => {
      //Através do purchase passamos as propriedades que serão preenchidas pelo determinado campo
      purchase({
        delivery: {
          receiver: values.fullName,
          adress: {
            description: values.adress,
            city: values.city,
            zipCode: values.CEP,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const emptyCart = () => {
    if (items.length == 0) {
      dispatch(close())
    } else {
      setAdressData(true)
      setCart(false)
    }
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    //in verica se uma propriedade existe em um objeto
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message

    return ''
  }
  const checkError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [dispatch, isSuccess])

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(close())} />
      {items.length > 0 || isSuccess ? (
        <>
          {isSuccess && data ? (
            <S.Aside asidePadding="padding" colortext="white">
              <h3>Pedido realizado - {data.orderId}</h3>
              <br />

              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br />
                <br /> Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição. <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </S.Aside>
          ) : (
            <>
              <S.Aside colortext="pink" className={cart ? '' : 'is-closed'}>
                <S.List>
                  {items.map((food) => (
                    <S.ListItem key={food.id}>
                      <img src={food.foto} alt="" />
                      <div>
                        <h3>{food.nome}</h3>
                        <span>{parseToBrl(food.preco)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => dispatch(remove(food.id))}
                      />
                    </S.ListItem>
                  ))}
                </S.List>
                <S.ValorContainer>
                  <span>Valor total</span>
                  <span>{parseToBrl(somaCarrinho())} </span>
                </S.ValorContainer>
                <Button type="button" onClick={() => emptyCart()}>
                  Continuar com a entrega
                </Button>
              </S.Aside>
              <S.Aside
                colortext="white"
                className={adressData ? '' : 'is-closed'}
              >
                <form onSubmit={form.handleSubmit}>
                  <S.Container>
                    <S.Title>Entrega</S.Title>
                    <S.InputGroup>
                      <label htmlFor="fullName">Quem irá receber</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('fullName', form.errors.fullName)}
                      </small>
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="adress">Endereço</label>
                      <input
                        id="adress"
                        type="text"
                        name="adress"
                        value={form.values.adress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('adress', form.errors.adress)}
                      </small>
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('city', form.errors.city)}</small>
                    </S.InputGroup>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="CEP">CEP</label>
                        <InputMask
                          id="CEP"
                          type="text"
                          name="CEP"
                          value={form.values.CEP}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="99999-999"
                        />
                        <small>{getErrorMessage('CEP', form.errors.CEP)}</small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="houseNumber">Número</label>
                        <input
                          id="houseNumber"
                          name="houseNumber"
                          value={form.values.houseNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          type="text"
                        />
                        <small>
                          {getErrorMessage(
                            'houseNumber',
                            form.errors.houseNumber
                          )}
                        </small>
                      </S.InputGroup>
                    </S.Row>
                    <S.InputGroup>
                      <label htmlFor="complement">Complemento(opcional)</label>
                      <input
                        id="complement"
                        type="text"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('complement', form.errors.complement)}
                      </small>
                    </S.InputGroup>
                  </S.Container>
                  <Button
                    type="button"
                    onClick={() => {
                      setAdressData(false)
                      setPaymentData(true)
                    }}
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    onClick={() => {
                      setCart(true)
                      setAdressData(false)
                    }}
                    type="button"
                  >
                    Voltar para o Carrinho
                  </Button>
                </form>
              </S.Aside>
              <S.Aside
                className={paymentData ? '' : 'is-closed'}
                colortext="white"
              >
                <form onSubmit={form.handleSubmit}>
                  <S.Container>
                    <S.Title>
                      Pagamento - Valor a pagar {parseToBrl(somaCarrinho())}
                    </S.Title>
                    <S.InputGroup>
                      <label htmlFor="cardOwner">Nome no cartão</label>
                      <input
                        id="cardOwner"
                        type="text"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardOwner', form.errors.cardOwner)}
                      </small>
                    </S.InputGroup>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          id="cardNumber"
                          type="text"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="9999 9999 9999 9999"
                        />
                        <small>
                          {getErrorMessage(
                            'cardNumber',
                            form.errors.cardNumber
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          id="cardCode"
                          type="text"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="999"
                        />
                        <small>
                          {getErrorMessage('cardCode', form.errors.cardCode)}
                        </small>
                      </S.InputGroup>
                    </S.Row>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="expireMonth">Mês de vencimento</label>
                        <InputMask
                          id="expireMonth"
                          type="text"
                          name="expireMonth"
                          value={form.values.expireMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="99"
                        />
                        <small>
                          {getErrorMessage(
                            'expireMonth',
                            form.errors.expireMonth
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="expireYear">Ano de vencimento</label>
                        <InputMask
                          id="expireYear"
                          type="text"
                          name="expireYear"
                          value={form.values.expireYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="99"
                        />
                        <small>
                          {getErrorMessage(
                            'expireYear',
                            form.errors.expireYear
                          )}
                        </small>
                      </S.InputGroup>
                    </S.Row>
                  </S.Container>
                  <Button
                    type="submit"
                    onClick={() => {
                      setAdressData(false)
                      setPaymentData(true)
                    }}
                    disabled={isLoading}
                  >
                    {isLoading
                      ? 'Finalizando compra...'
                      : 'Finalizar pagamento'}
                  </Button>
                  <Button
                    onClick={() => {
                      setAdressData(true)
                      setPaymentData(false)
                    }}
                    type="button"
                  >
                    Voltar para a edição de endereço
                  </Button>
                </form>
              </S.Aside>
            </>
          )}
        </>
      ) : (
        <>
          <S.Aside colortext="pink" className={cart ? '' : 'is-closed'}>
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra
            </p>
          </S.Aside>
        </>
      )}
    </S.CartContainer>
  )
}

export default Cart

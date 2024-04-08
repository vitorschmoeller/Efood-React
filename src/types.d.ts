declare interface Prato {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Food = {
  id: number
  titulo: string
  tipo: string
  destacado?: boolean
  avaliacao: string
  descricao: string
  capa: string
  cardapio?: Prato[]
}

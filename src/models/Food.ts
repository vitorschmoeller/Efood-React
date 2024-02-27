class Food {
  infos: string[]
  image: string
  title: string
  review: string
  description: string
  id: number
  constructor(
    id: number,
    infos: string[],
    image: string,
    title: string,
    review: string,
    description: string
  ) {
    this.id = id
    this.infos = infos
    this.image = image
    this.title = title
    this.review = review
    this.description = description
  }
}

export default Food

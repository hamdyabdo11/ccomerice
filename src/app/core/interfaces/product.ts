export interface product {

  title: string
  price: number
  imageCover: string
  category: Category
  ratingsAverage: number
  _id:number;
}



export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}



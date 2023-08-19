export interface IsignUp {
  name: string,
  email: string,
  password: string
}
export interface IsignIn {
  email: string,
  password: string
}
export interface IPackage {
  id: number,
  name: string,
  duration: string,
  days: number,
  locations: string,
  image: string,
  packageId: undefined | number,
  title: string,
  details: string,
  video: string,
  price: number,
  itinerary: IItinerary[],
  gallery: IGallery[]
}
export interface IItinerary {
  id: number,
  title: string,
  details: string
}
export interface IGallery {
  id: number,
  img: string
}
export interface IFavorites {
  id: number | undefined,
  /*name: string,
  duration: string,
  locations: string,
  image: string,
  packageId: number,*/
  name: string,
  duration: string,
  days: number,
  locations: string,
  image: string,
  packageId: number,
  title: string,
  details: string,
  video: string,
  price: number,
  itinerary: IItinerary[],
  gallery: IGallery[],

  userId: number
}
export interface IOrder {
  userName: string,
  userId: string,
  email: string,
  destination: string,
  id: number | undefined,
  address: string,
  contact: string,
  date: number,
  strength: number,
  packageType: string,
  packagePrice: number,
  status: string,
  orderDate: string
  //packagePriceWithGST: number
}

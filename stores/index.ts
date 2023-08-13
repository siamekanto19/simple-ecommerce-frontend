import { ProductEntity } from '@/gql/generated/graphql'
import { proxy } from 'valtio'
import { nanoid } from 'nanoid'

type LayoutProxy = {
  cartOpen: boolean
}

type CartProxy = {
  lineItems: ProductEntity[]
  totalPrice: number
}

export const layoutStore = proxy<LayoutProxy>({
  cartOpen: false,
})

export const cartStore = proxy<CartProxy>({
  lineItems: [],
  totalPrice: 0,
})

export const openCart = () => {
  layoutStore.cartOpen = true
}

export const closeCart = () => {
  layoutStore.cartOpen = false
}

export const addProductToCart = (product: ProductEntity) => {
  const modifiedProduct = { ...product, id: nanoid() }
  cartStore.lineItems = [...cartStore.lineItems, modifiedProduct]
  for (const product of cartStore.lineItems) {
    if (product.attributes?.price) {
      cartStore.totalPrice = cartStore.totalPrice + product.attributes.price
    }
  }
}

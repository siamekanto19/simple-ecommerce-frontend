import { cartStore, closeCart, layoutStore } from '@/stores'
import { Box, Drawer, Flex, Title, Text } from '@mantine/core'
import React from 'react'
import { useSnapshot } from 'valtio'
import StrapiMedia from './StrapiMedia'
import { UploadFileEntityResponse } from '@/gql/generated/graphql'

const Cart = () => {
  const { cartOpen } = useSnapshot(layoutStore)
  const { lineItems, totalPrice } = useSnapshot(cartStore)
  return (
    <Drawer padding="lg" withCloseButton={false} size="md" position="right" opened={cartOpen} onClose={closeCart}>
      <div className="flex flex-col gap-5">
        {lineItems.map((item) => (
          <div className="grid grid-flow-row grid-cols-4 gap-4">
            <div className="col-span-1">
              <StrapiMedia className="!w-20 !h-20 rounded-xl" media={item.attributes?.image as UploadFileEntityResponse} />
            </div>
            <Box className="col-span-3">
              <Title order={4}>{item.attributes?.name}</Title>
              <Text className="font-medium text-sm">${item.attributes?.price}</Text>
            </Box>
          </div>
        ))}
      </div>
      {lineItems.length > 0 && (
        <div className="flex items-center justify-between mt-10">
          <Title order={4}>Subtotal</Title>
          <Title order={4}>${totalPrice.toPrecision(4)}</Title>
        </div>
      )}
    </Drawer>
  )
}

export default Cart

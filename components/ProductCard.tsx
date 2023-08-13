import { ProductEntity } from '@/gql/generated/graphql'
import React, { FC, useState } from 'react'
import { Flex, Title, Text, Modal, Button, Box } from '@mantine/core'
import StrapiMedia from './StrapiMedia'
import Markdown from 'markdown-to-jsx'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { addProductToCart } from '@/stores'

type Props = {
  product: ProductEntity
}

const ProductCard: FC<Props> = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const addToCart = () => {
    setModalOpen(false)
    toast.success(`${product.attributes?.name} has been added to your cart`)
    addProductToCart(product)
  }

  return (
    <React.Fragment>
      <motion.div onClick={() => setModalOpen(true)} whileTap={{ scale: 0.98 }}>
        <Flex className="cursor-pointer" direction="column" gap="xs">
          <StrapiMedia className="rounded-xl" media={product.attributes?.image} />
          <Title lineClamp={1} order={4}>
            {product.attributes?.name}
          </Title>
          <Title order={4}>${product.attributes?.price}</Title>
          <Text size="sm" lineClamp={2}>
            <Markdown>{product.attributes?.description ?? ''}</Markdown>
          </Text>
        </Flex>
      </motion.div>
      <Modal centered overlayProps={{ blur: 75 }} padding={0} radius="lg" opened={modalOpen} onClose={() => setModalOpen(false)} size="md" withCloseButton={false}>
        <StrapiMedia className="!h-72" media={product.attributes?.image} />
        <Box p="lg">
          <Title order={2} align="center">
            {product.attributes?.name}
          </Title>
          <Text size="sm" align="center" mt="lg">
            <Markdown>{product.attributes?.description ?? ''}</Markdown>
          </Text>
        </Box>
        <button onClick={addToCart} className="w-full cursor-pointer h-12 text-white bg-blue-600 hover:bg-blue-700 text-base font-medium grid place-items-center">
          Add To Cart (${product.attributes?.price})
        </button>
      </Modal>
    </React.Fragment>
  )
}

export default ProductCard

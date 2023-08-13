import HeaderGradient from '@/components/HeaderGradient'
import React from 'react'
import { Title, Container, Paper } from '@mantine/core'
import { GetServerSideProps, NextPage } from 'next'
import { apollo } from './_app'
import { PRODUCTS_QUERY } from '@/gql/queries'
import { ProductEntity } from '@/gql/generated/graphql'
import ProductCard from '@/components/ProductCard'

type Props = {
  products: ProductEntity[]
}

const IndexPage: NextPage<Props> = ({ products }) => {
  return (
    <React.Fragment>
      <HeaderGradient>
        <Title className="!font-sans" color="white" order={1}>
          Simple Ecommerce Demo
        </Title>
      </HeaderGradient>
      <Container>
        <Paper p="xl" className="-mt-12 min-h-[30rem] grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-8" radius="lg" shadow="md" color="white">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apollo.query({
    query: PRODUCTS_QUERY,
    fetchPolicy: 'no-cache',
  })

  return { props: { products: data.products?.data } }
}

export default IndexPage

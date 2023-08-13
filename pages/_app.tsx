import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Cart from '@/components/Cart'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const apollo = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apollo}>
      <MantineProvider withNormalizeCSS withGlobalStyles theme={{ primaryColor: 'lime', fontFamily: inter.style.fontFamily }}>
        <Toaster />
        <Component {...pageProps} />
        <Cart />
      </MantineProvider>
    </ApolloProvider>
  )
}

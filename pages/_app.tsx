import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp

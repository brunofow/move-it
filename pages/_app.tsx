import '../styles/global.css'

import '../styles/global.css'
import type { AppProps } from 'next/app';

import { ChallengesProvider } from '../contexts/ChallengeContext'


function MyApp({Component, pageProps}: AppProps) {
  return (
    
      <Component {...pageProps} />
    
  )
}

export default MyApp
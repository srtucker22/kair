// import { HomeScreen } from 'app/features/home/screen'
import {LandingScreen} from 'app/features/signin/LandingScreen';
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <LandingScreen />
    </>
  )
}

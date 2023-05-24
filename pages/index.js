import Head from 'next/head';
import Body from '../components/body';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Body/>
      </div>

    </div>
  )
}

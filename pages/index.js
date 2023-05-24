import Head from 'next/head';
import Body from '../components/body';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Password Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Body/>
      </div>

    </div>
  )
}

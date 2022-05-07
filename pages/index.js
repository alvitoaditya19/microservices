import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>BWAMICRO</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Saya Halaman UtaAAAAma</h1>
        <Link href="/random">
        <a>Bring me to ramdom page</a>
      </Link>
      </main>
    </div>
  )
}

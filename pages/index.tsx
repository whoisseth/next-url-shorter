import Navbar from '../components/Navbar'
import Head from 'next/head'
import Hero from '../components/Hero'
import Main from '../components/Main'
function index() {
  return (
    <>
      <Head>
        <title></title>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com/"> */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <Hero />
      <Main />

    </>
  )
}

export default index

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>michiSpotlight</title>
        <link rel="icon" href="/Saly-19.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.Head}>work in progress.</h1>
        <img className={styles.image} src="/Saly-19.png" />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
           {' '}
          <img src="/michi-logo.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}

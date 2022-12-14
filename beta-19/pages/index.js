import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'       
import { eventList } from '../backend/eventList'


export default function Home() {

  console.log(eventList)

  return (
    <div className={styles.container}>
      <Head>
        <title>Quest for Fest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Quest for Fest</a>
        </h1>

        <Link href="/auth" className='m-20'>Sign Up/ Log In</Link>
        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p> */}
                                                                            
        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Create Events</h2>
            <p>Create custom events with details like date, time and venue.</p>
          </a>

          <a href="" className={styles.card}>
            <h2>View Past Events</h2>
            <p>See Past Events and their highlights including key sub-events</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Earn Rewards</h2>
            <p>Earn points and win rewards by referring your friends to events.</p>
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Browse Category wise</h2>
            <p>
              Find category wise upcoming events and register.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

        <span className='m-10'>Team name: OK Bye</span>
        <ul>
          <li>Nandita Tomar</li>
          <li>Unnati Bhatia</li>
          <li>Ishan Jain</li>
          <li>Sanjeev Kumar</li>
        </ul>
        

        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}

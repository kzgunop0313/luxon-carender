import { DateTime } from 'luxon'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home = () => {
  const date = DateTime.local();
  const [today, setToday] = useState(date);
  const startOfMonth = today.startOf('month');
  const endOfMonth = today.endOf('month');
  const monthLength = endOfMonth.day - startOfMonth.day;

  const test: DateTime[] = Array(monthLength).fill(0);
  const str = test.map((_, i) => (
    test[i] = startOfMonth.plus({days: i})
  ))
  //test[0] = startOfMonth.plus({days: 1});
  console.log(test);

  const arr = Array(3).fill(0);
  console.log(arr);

  const dateUp = () => {
    setToday(today.plus({months: 1}));
  }

  const dateDown = () => {
    setToday(today.minus({months: 1}));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <button onClick={dateUp}>+</button>
      {today.month}月
      <button onClick={dateDown}>+</button>
        
        {str.map((tes, i) => (
          <div key={i}>
            {tes.day}
          </div>
        ))}
        

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

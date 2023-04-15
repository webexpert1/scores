import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import 'react-circular-progressbar/dist/styles.css';
import CircleText from './CircleText'
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('/data.json');
      setData(response);
      console.log(response)
    })()
  }, []);
  return (
    <div>
      <CircleText percentage={60} text="Canceled`" strokeWidth={10} color="#00ff00" />
    </div>
  )
}

export default Home

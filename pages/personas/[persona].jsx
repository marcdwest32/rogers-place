import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { Container, Col, Row } from 'reactstrap'

const persona = ({ persona, image }) => {
  return (
    <Container>
      <Head>
        <title>Roger's Place</title>
        <link rel='icon' href='../images/roger.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <main className={styles.img}>
        <img src={image} alt='' />
        <div className={styles.roger}>
          <h2>{persona}</h2>
        </div>
      </main>
    </Container>
  )
}

export async function getStaticPaths() {
  return { fallback: true, paths: [{ params: { persona: '' } }] }
}

export async function getStaticProps({ params }) {
  console.log(params)
  const persona = params.persona
  const image = `../images/personas/${persona.replace(/\s+/g, '')}.png`

  return { props: { persona, image } }
}

export default persona

import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { Container, Col, Row } from 'reactstrap'

const Home = ({ personas }) => {
  const randomPersona = () => {
    let persona = personas[Math.floor(Math.random() * personas.length)]
    persona === roger ? randomPersona() : setRoger(persona)
  }
  const [roger, setRoger] = useState('Roger Smith')

  return (
    <Container className={styles.container}>
      <Head>
        <title>Roger's Place</title>
        <link rel='icon' href='images/roger.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <main className={styles.main}>
        <h1>
          Welcome to <a onClick={() => randomPersona()}>Roger's Place!</a>
        </h1>
        <Row xs='2' className={styles.persona}>
          <Link href={`/personas/${roger}`} passHref>
            <h2>{roger}</h2>
          </Link>
        </Row>
        <a className={styles.description} onClick={() => randomPersona()}>
          Get changed!
        </a>
      </main>
    </Container>
  )
}

export async function getStaticProps() {
  const personas = [
    'Mrs. Nussbaum',
    'Detective Sam Spade',
    'Chinese Delivery Guy',
    'Dr. Jordan Edilstein',
    'Professor Baxter',
    'Roger Epstein',
    'Krispy Kreme McDonalds',
    'Bill Cutler',
    'Jacob',
    'Kevin Bacon',
    'Maurice Barnes',
    'Horse Renoir',
    'Betty Bea Getty McClanahan',
    'Braf Zachland',
    'Tearjerker',
    'Oscar Gold',
    'Cousin Phil',
    'Clip Clop',
    'Parker Peters',
    'Laura Vanderbooben',
    'Luke Fondleberg',
    'Scotch Bingington',
    'Sholanda Dykes',
    'Sidney Huffman',
    'The Phantom of the Telethon',
    'Mr. Mustachos',
    'Freddy Underwood',
    'Charles Logan',
    'Roy Rogers McFreely',
    'Tommy Calhoun',
    'Dimitri Garabedian',
    'Captain François Dubonais',
    'Lucius Mayweather',
    'Uncle Roger',
    'Herschel Herschbaum',
    'Ernest Schlumple',
    'Morris Buttermaker',
    'Emmy-Lou Sugarbean',
    'Warren Beanstalk',
    'General Juanito Pequeño',
    'Caitlyn Miracle Smith',
    'Colton Lancington',
    'MC Raw G',
    'Dr. Raphael Penguin',
    'Jeannie Gold',
    'Valik',
    'Abby Road',
    'Tanqueray',
    'Fantasia Lopez',
    'Uncle Cosworth',
    'Ira Seagull',
    'Chex LeMeneux',
    'Clive Trotter',
    'Applebee McFridays',
    'Winfry',
    'Sweeps McCullough',
    'Uncle Kappy',
    'Martin Sugar',
    'Dr. Lawrence Feldman',
    'Bob Danelou',
    'Pete Pendelman',
    'Reaganomics Lamborghini',
    'The Tender Vigilante',
    'Warren Beanstalk',
    'Irwin Beyer, Junior',
    'Cleshawn Montegue',
    'Hubert LaGrange',
    'Subject B13',
    'Ace Chapman',
    'Bing Cooper',
    'Josh Bycel',
    'Jenny Fromdabloc',
    'Cuss Mustard',
    'Calypso Banana Puffy-Sleeves',
    'Dan Ansom Handsome',
    'Roland Chang',
    'Greater Chimdale County Man',
    'Mr. Vanderhill',
    'Elisha Wilkner',
    'Demitri Krotchliknioff',
    'Sgt. Pepper',
    'Dr. Gerald Ya Ya',
    'Luis Valdez',
    'Ricky Spanish',
    'Abigail Lemonparty',
    'Tom Yabo',
    'The Prince of Mardi Gras',
    'Twill Ongenbone',
    'Max Jets',
    'Jerry Jets',
    'Greek Carmen Miranda',
    "Israel Kamakawiwo'ole",
    'Skyler Montesori',
    'Madelyn Carpal-Tunnel',
    'Ruby Zeldastein',
    'Kevin Ramage',
    'Madame Buttercup',
    'Genevive Vavance',
    'JoJo Keen Wa',
    'Lazlo Morphine',
    'LeVar Crush',
    'Arbuckle T. Boone',
    'Roslyn Jenkins',
    'Dom Fikowski',
    'Frankie Carconi',
    'Burt Jarvis',
    'Jeffery Neiderhoff',
    'Mr. Stan-Dan Deliver',
    'Blossom Russo',
    'Clifton',
    'Samantha kingsbury',
    'Meredith Fields',
    'Cecilia Takaroos',
    'Raider Dave',
    'Brother Jenkins',
    'Buck Wetnap',
    'Criss-Cross Applesauce',
    'Billy Jesusworth',
    'Ace Crouton',
    'Chuck Deptula',
    'Tasha Flunchen',
    'Ragi-Baba',
    'Rusty Butafolio',
    'Tato Monticello',
    'Rafferty Westmore as Denver Dallas',
    'Patrice Mixhole as Lucy Washington Bocce',
    'Patrick Brian David Michael Green-Howard as Kit Kittering',
    'Kay Pardo-Simcard as Lt. Faruza Furtsies',
    'Twanderlust Lumpkin',
    'Frank Trueblue',
    'Mario Vincent San Gervase',
    'Yeager Chillax',
    'Marmalade',
    'Tawney Luxardo',
    "Christine Lucy L'amour",
    'Barry Weiss',
    '"South Dakota Slim" AKA Justin Delano Hemingway',
    'Dudley Dingleberry',
    'Schmanta Claus',
    'Mr. Taffarelli',
    'Syngent St. John',
    'Dylan Ramage',
    'H.J. Rimmens',
    'Glad Handz',
    'Mrs. Weinsteinopolis',
    'W. Willard Wartz',
    'Clum Bizzelskottom',
    'Tammy Twopiece',
    'Cordilia Buttersnatch',
    'Branson McNair',
    'Jackie Kanken',
    'Quentin Poundridge',
    'Nacho Bartoromo',
    'Johnny Lasagna',
    'Wheelie Peddalaton',
    'Schwinn Chafecrotch',
    'John Goodhorse',
    'Gina Lavetti',
    'Hipster Dennis',
    'Lacey Krinklehoel',
    'Dr. Buttblast',
    'Frenchus Mallmank',
    'Yuckov McGruder',
    'El Narco',
    'Hazel Bazels',
    'Dr. F. Lance Shoeman',
    'Chantilly DeBois',
    'Pete Van Smash',
    'Becky Tenderharts',
    'Lou Bobbitdu',
    'Rufus P. Melonballer',
    'Hibachi Liberace',
    'Staples McFoldsalot',
  ]
  return {
    props: { personas },
  }
}

export default Home

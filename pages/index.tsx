//Componentes Next
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Componentes MUI
import { AppBar, Box, Toolbar, Grid } from '@mui/material';
import { Typography, Container } from '@mui/material'

//Meus Componentes
import Comic from '../components/comic';
import MalverAPI from './api/apiMarvelComic'

export async function getStaticProps() {
  const res = await  MalverAPI()
	.then( res => res.data.data)
	.catch(err => console.log(`\n\nNão foi possivel se conectar a MarvelAPI: ${err}`))

	const comics = await res.results
  return {
    props: {
      comics,
    },
  }
}

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Marvel Comics</title>
        <meta name="descrição" content="plataforma ficticia de vendas da Marvel Comics" />
        <link rel="icon" href="/favicon.png" />
      </Head>

			<Box sx={{ flexGrow: 1 }}>
				<AppBar sx={{ position: 'relative', backgroundColor: '#202020' }}>
					<Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<Image
							src="/marvel-logo.png"
							alt="Marvel Comics Logo"
							width={130}
							height={52}
						/>
					</Toolbar>
				</AppBar>
			</Box>

			<main className={styles.main}>
			<Container maxWidth="lg">
				<Grid item xs={12}>
					<Typography
						variant="h4"
						noWrap
						align='center'
						component="div"
						sx={{mb: 2, fontSize: { xs: '1.7rem', md: '2rem' }}}
					>
						Comics em Destaques
					</Typography>
					<Grid container justifyContent="center" spacing={4}>
						{props.comics.map((value) => (
							<Grid key={value.id} item>
								<Comic
									title={value.title}
									creators={value.creators.items}
									description={value.description}
									img={`${value.thumbnail.path}.${value.thumbnail.extension}`}
									id={value.id}
								/>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Container>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://github.com/EdsonAlencar"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by Edson Alencar
				</a>
			</footer>
		</div>
  )
}

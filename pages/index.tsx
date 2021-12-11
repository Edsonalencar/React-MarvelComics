//Componentes Next
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Componentes MUI
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Grid } from '@mui/material';
import { InputBase, Typography, Container } from '@mui/material'

//Meus Componentes
import Comic from '../components/comic';
import MalverAPI from './api/apiMarvelComic'

  const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  }));

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
				<AppBar className={styles.appBar}>
					<Toolbar className={styles.toolBar}>
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
						className={styles.title}
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

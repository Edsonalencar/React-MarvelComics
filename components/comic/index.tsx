import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography  } from '@mui/material';
import styles from './comic.module.css';
import Modal from '../modal';

export default function Comic(props) {
	const [count, setCount] = useState(1);

  return (
		<>
			<Card className={styles.CardComic} onClick={() => setCount(count + 1)}>
				<CardMedia
					component="img"
					image={props.img}
					alt="green iguana"
					className={styles.midia}
				/>
				<CardContent sx={{ marginLeft: -2 }}>
						<Typography
							variant="h6"
							component="div"
							noWrap
							className={styles.titlecomic}
						>
							{props.title}
						</Typography>
						<Typography
							variant="body2"
							noWrap
							color="text.secondary"
							className={styles.authorcomic}
						>
						{props.creators.map( res => `${res.name} `)}
						</Typography>
						<Typography
							variant="body2"
							className={styles.readme}
						>
							Click Para Ver Mais
						</Typography>
					</CardContent>
			</Card>
			<Modal
				open={count}
				ComicID={props.id}
				img={props.img}
				title={props.title}
				description={props.description}
				creators={props.creators}
			/>
		</>
  );
}

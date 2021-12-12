import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography  } from '@mui/material';
import styles from './comic.module.css';
import Modal from '../modal';
import { StyleRounded } from '@mui/icons-material';

export default function Comic(props) {
	const [count, setCount] = useState(1);

  return (
		<>
			<Card
				sx={{height: '364px', width: '200px', boxShadow: 'none'}}
				className={styles.CardComic}
				onClick={() => setCount(count + 1)}
			>
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
							sx={{ fontSize: '13px', fontWeight: '600' }}
						>
						{props.creators.map( res => `${res.name}, `)}
						</Typography>
						<Typography
							variant="body2"
							sx={{ mt: 1, color: '#3f3f3f' }}
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

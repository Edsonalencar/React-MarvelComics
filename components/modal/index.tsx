import { useState, useEffect, Fragment } from 'react';
import { Modal, Typography, Button, Box } from '@mui/material';
import { Card, Grid, CardContent, CardMedia } from '@mui/material';

	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 800,
		bgcolor: 'background.paper',
		border: 0,
		boxShadow: 24,
		py: 2,
		px: 2,
	};

	function ChildModal(props) {
		const [open, setOpen] = useState(false);
		const handleOpen = () => {
			setOpen(true);
		};
		const handleClose = () => {
			setOpen(false);
		};

		return (
			<Fragment>
				<Button onClick={handleOpen}>Receber Comics</Button>
				<Modal
					hideBackdrop
					open={open}
					onClose={handleClose}
					aria-labelledby="child-modal-title"
					aria-describedby="child-modal-description"
				>
					<Box sx={{ ...style, width: 1000, height: 600}}>
						<h2 id="child-modal-title">Text in a child modal</h2>
						<p id="child-modal-description">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>
						<Button onClick={handleClose}>Close Child Modal</Button>
					</Box>
				</Modal>
			</Fragment>
		);
	}

	export default function NestedModal(props) {
		const [open, setOpen] = useState(false);
		const handleClose = () => setOpen(false);

		useEffect(() => {
			if(props.open == 1) { setOpen(false) }
			else { setOpen(true) }
		}, [props.open]);

		const checkDescription = () => {
			if( props.description == "" ){ return `Não há Descrição Disponivel`}
			else { return props.description}
		}

		const checkCreators = (res, index) => {
			if( res.name == "" || res.name == null ){ return `Não há Criadores Disponiveis`}
			else { return `${res.name}, ` }
		}

		return (
			<div>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="parent-modal-title"
					aria-describedby="parent-modal-description"
				>
					<Card sx={style}>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<CardMedia
									component="img"
									height="360"
									image={props.img}
									alt="green iguana"
								/>
							</Grid>
							<Grid item xs={8}>
								<Typography sx={{ fontSize: 25, fontWeight: 600 }} align='center' gutterBottom={true}>
									{props.title}
								</Typography>
								<Typography variant="inherit" paragraph={true}>
									{checkDescription()}
								</Typography>
								<Typography variant="body2">
									Criadores: {props.creators.map((res, index) => checkCreators(res, index))}
								</Typography>
								<br />
								<ChildModal />
							</Grid>
						</Grid>
					</Card>
				</Modal>
			</div>
		);
	}

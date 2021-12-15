import { useState, useEffect, Fragment } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import { Modal, Typography, Button, Box } from '@mui/material';
import { Grid, CardMedia, Dialog, DialogActions } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	bgcolor: '#ececec',
	border: '2px solid #202020',
	boxShadow: 24,
	py: 2,
	px: 2,
};

function ChildModal(props) {

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
		getLocation()
	};
	const handleClose = () => {
		setOpen(false);
	};

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyCRSVjpq6vguCQHbnn8NYdVFKeSklnIsns"
	})

	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);

	const center = {
		lat,
		lng,
	}

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(pos => {
				setLat(pos.coords.latitude);
				setLng(pos.coords.longitude);
			});
		}
		console.log(center)
	}

	return (
		<Fragment>
			<Button onClick={handleOpen} color='warning'>
				Receber Comic
			</Button>
			<Modal
				hideBackdrop
				open={open}
				onClose={handleClose}
				aria-labelledby="child-modal-title"
				aria-describedby="child-modal-description"
			>
				<Box sx={{ ...style, height: '90%', py: 0, px: 0,}}>
					{
						isLoaded ? (
							<GoogleMap
								mapContainerStyle={{width: '100%', height: '100%'}}
								center={center}
								zoom={13}
							>
								<Marker position={center}/>
							</GoogleMap>
						) : <></>
					}
					<Button onClick={handleClose} sx={{position: 'absolute', top: '5px', color: 'white'}}>
						<CancelIcon fontSize="large" />
					</Button>
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
				<Dialog
					open={open}
					onClose={handleClose}
					scroll={'body'}
				>
					<Button onClick={handleClose} sx={{position: 'absolute', top: '5px', right: '0', color: 'white'}}>
						<CloseOutlinedIcon fontSize="large" color='error'/>
					</Button>
					<Grid container spacing={0}>
							<Grid item xs={12}>
								<CardMedia
									component="img"
									height="360"
									image={props.img}
									alt="green iguana"
								/>
							</Grid>
							<Grid item xs={12}>
								<Typography sx={{ fontSize: 25, fontWeight: 600, mb: 2, p: 2 }} align='center' gutterBottom={true}>
									{props.title}
								</Typography>
								<Typography variant="inherit" paragraph={true} sx={{ textAlign: 'justify', p: 2 }}>
									{ checkDescription() }
								</Typography>
								<Typography variant="body2" sx={{ p: 2 }}>
									Criadores: {props.creators.map((res, index) => checkCreators(res, index))}
								</Typography>
							</Grid>
						</Grid>
					<DialogActions>
          	<ChildModal />
        	</DialogActions>
				</Dialog>
			</div>
		);
	}

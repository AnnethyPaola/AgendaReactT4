import React, { useState} from 'react';

function Mostrar(){
	const [contactos, setContactos] = useState([])

	const obtenerContactos = () => {
		fetch('http://www.raydelto.org/agenda.php')
		.then(response => response.json())
		.then(data => setContactos(data))
	}

	const ListarContactos = () => {
		obtenerContactos()

		return(
			<div  className="table-responsive container">
			<div className="alert alert-primary" role="alert">
			<h3>Contactos guardados en la agenda: {contactos.length}</h3>
			</div>
			
			<table className="table table-hover table-bordered " >
			<thead className="bg-primary">
			<tr> 
			<th><img src="https://img.icons8.com/windows/32/000000/contacts.png"/> </th>
			<th>Nombre </th> 
			<th>Apellido </th> 
			<th>Telefono </th> 
			</tr>
			</thead>
			{contactos.map(contacto => <tbody><tr key={contacto.telefono}><td>{<img src="https://img.icons8.com/windows/32/000000/contacts.png"/>}</td><td>{contacto.nombre}</td><td>{contacto.apellido}</td><td>{contacto.telefono}</td></tr></tbody>)}
			</table >
			</div>

			)
	}

	return(
		<div >
		{ListarContactos()}
		</div>
		)
	}

	
	export default Mostrar;
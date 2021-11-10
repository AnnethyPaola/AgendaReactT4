	import React from 'react';
	import {useState} from 'react';
	import swal from 'sweetalert';

	const Agregar = () => {
		const [nombre, setNombre] = useState('');
		const [apellido, setApellido] = useState('');
		const [telefono, setTelefono] = useState('');
		const [cargar, setCargar] = useState(false);

		const handleSubmit = (e) =>{
			e.preventDefault();
			const contacto = {nombre, apellido, telefono};


      setCargar(true);

			fetch('http://www.raydelto.org/agenda.php', {
				method: 'POST',
				body: JSON.stringify(contacto)
			}).then(() => {
				swal("Felicidades", "El contacto se ha agregado correctamente!", "success");
				setNombre('')
				setApellido('')
				setTelefono('')
				setCargar(false); 
			})
		}

		return(
	     <div className="container card form-group ">
	      <h2>Nuevo Contacto  </h2>
	        <form onSubmit={handleSubmit}>
		<label >Nombre</label>
		<input className="form-control" type="text"  required="" value={nombre} onChange={(e) => setNombre(e.target.value)} />
		<label>Apellido</label>
		<input className="form-control"  type="text" required value={apellido} onChange={(e) => setApellido(e.target.value)} />
		<label>Telefono</label>
	  <input className="form-control" type="text" required value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        
	   {! cargar && <button className="btn btn-primary mt-2 mb-2" >Agregar contacto</button>  } 
	   { cargar && <button disabled className="btn btn-success mt-2  mb-2">Agregando contacto...</button>} 

	</form>

	     </div>
			)
	}

	export default Agregar
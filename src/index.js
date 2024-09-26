import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

import { Saludar, Otro } from "./Saludar.jsx";
import { Tarea } from "./Tarea.jsx";
import { Boton } from "./Boton.jsx";
import { Form } from "./Form.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Tarea tar={false} />
		<Boton />
		<input
			onChange={(evento) => {
				console.log(evento.target.value);
			}}
		/>
		<Saludar />
		<Otro />
		<Form />
        <button className="send" onClick={ () => {
                console.log('Datos guardados correctamente')
            }}>Enviar</button>
	</>
);
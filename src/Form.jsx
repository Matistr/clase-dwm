export function Form() {
	return (
		<div>
			<form>
				<label>Nombre:</label>
				<input type="text" />
                <br />
				<label>Apellido:</label>
				<input type="text" />
                <br />
				<label>Sexo:</label>
				<div>
					<input type="radio" name="sex"/>Masculino
					<input type="radio" name="sex" />Femenino
                    <input type="radio" name="sex" />Otro
				</div>
                <label htmlFor="">Direccion:</label>
                <input type="text"/>
			</form>
		</div>
	);
}

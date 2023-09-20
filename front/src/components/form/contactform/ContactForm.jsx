import { TextField } from "@mui/material";


export default function ContactForm () {
return (
<>
<h1>Contacto</h1>
<TextField 
id="nombre-apellidos" 
label="Nombre y apellidos:" 
variant="outlined" 
style={{ width: '75%' }}
helperText="Campo obligatorio"
/>


<TextField
id= "email"
label="Email"
type="email"
variant="outlined"
fullWidth
helperText="Campo obligatorio"
/>

<TextField 
id="telephone" 
label="Teléfono" 
variant="outlined"
fullWidth
helperText="Campo obligatorio" 
/>

</>

);

}




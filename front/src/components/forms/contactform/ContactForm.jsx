import React from "react";
import { TextField } from "@mui/material";

const labelStyle = { color: "#4A148C" };


export default function ContactForm () {
return (
<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>  
<h1 style={{ color: "#4A148C" }}>Contacto</h1>  


<TextField 
id="nombre-apellidos" 
label="Nombre y apellidos:" 
variant="outlined" 
style={{ width: '65%' }}
helperText="Campo obligatorio"
InputLabelProps={{ style: labelStyle }}
/>


<TextField
id= "email"
label="Email"
type="email"
variant="outlined"
style={{ width: '65%' }}
helperText="Campo obligatorio"
InputLabelProps={{ style: labelStyle }}
/>

<TextField 
id="telephone" 
label="Teléfono" 
variant="outlined"
style={{ width: '65%' }}
helperText="Campo obligatorio" 
InputLabelProps={{ style: labelStyle }}
/>

<TextField 
id="Comentarios" 
label="Comentarios" 
variant="outlined"
style={{ width: '65%' }}
InputLabelProps={{ style: labelStyle }}

/>
</div>


);

}


// import { Box, Button, TextField } from "@mui/material";
// import { useState } from "react";

// export default function Contact () {
//     const [email,setEmail] = useState ("");
//     const [error,setError ] = useState ({
//         emailError: false,
//         messaage: "",
//     });

//     const validateEmail = (email) => {
//         const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//         return regex.test(email);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault ();
//         if (validateEmail (email)) {
//         setError ({error:false,
//         messaage: "",
//     });
               
//         console.log ("Email correcto");
// } else {setError ({
//     error: true,
//     messaage: "Formato de e-mail incorrecto",

// });
// }
//     };

//     return (
//         <>
//         <h1>Contacto</h1>
//         <Box 
//         component="form" 
//         onSubmit={handleSubmit}
//         >

//         < TextField
//         id="email"
//         label="Email"
//         type="email"
//         variant="outlined"
//         fullWidth
//         required
//         error={error.error}
//         helperText={error.messaage}
        
//         value={email}
//         onChange={(e) => setEmail (e.target.value)}
//         />
//                 <Button 
//                     type="submit" 
//                     variant="outlined"
//                     sx={{ mt:2 }}
//                 >
//                     ENVIAR 
//                 </Button>
//             </Box>
//         </>
//     );
// }


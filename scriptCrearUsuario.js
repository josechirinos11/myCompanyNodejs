<script>
    const muestra = () => {
        console.log('creando');
    }

    import { gql } from 'graphql-request';

    // Define la función para manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el envío del formulario
        const nombre = document.querySelector('input[name="nombre"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        // Define tu consulta GraphQL
        const mutation = gql`
            mutation CrearUsuario($email: String!, $password: String!, $nombre: String!) {
                crearUsuario(nombre: $nombre, email: $email, password: $password) {
                   
                }
            }
        `;



        console.log(email);
        console.log(password);
      

        // Parámetros para la consulta
        const variables = { email, password };

        try {
            // Realiza la solicitud GraphQL
            const data = await graphQLClient.request(mutation, variables);
            console.log('Usuario creado:', data.crearUsuario);
        } catch (error) {
            console.error('Error al crear el usuario:', error.errors);
        }
    };

    // Agrega un event listener al formulario para manejar el envío
    document.getElementById('miFormulario').addEventListener('submit', handleSubmit);
</script>



//------------------------------------------------------------------------------------------------------------
// en el archivo  usuariocontrolers
//------------------------------------------------------------------------------------------------------------



try {
    // Obtener los datos del formulario de la solicitud POST
    const { email, password } = req.body;

    // Aquí puedes usar el modelo de usuario para crear una nueva instancia de usuario en la base de datos
    // Por ejemplo, utilizando Mongoose:
    
   
    try {

        const nuevoUsuario = new Usuario({ email, password });
        await nuevoUsuario.save();
       
    } catch (error) {
        console.log('error desde node________:  ',error);
    }
    // Si la creación de la cuenta fue exitosa, puedes redirigir al usuario a alguna otra página
    // También puedes pasar variables adicionales a la plantilla de Handlebars
    res.render('homeUsuario', {
        nombrePagina: 'MyCompany',
        tagline: 'Encuentra y Pública Trabajos para Desarrolladores Web',
        menu: false,
        barraIzquierda: false,
        barraDerecha: false,
        authenticacion: false,
        inicioSesion: true,
        crearCuenta: true,
        barra: true,
        boton: true
    });

} catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la creación de la cuenta
    console.error('Error al crear la cuenta de usuario:', error);
    // Puedes renderizar una página de error o redirigir a alguna otra página
   // res.redirect('/error');
}



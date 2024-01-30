import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {

  //Para escribir expresiones de react en un return ej:<h1>{console.log(nombre)}</h1>
  //JSON.stringify( newMessage ) para que muestre como un string
  //<code /> para ver el objeto de forma mas clara
  //Una promesa es un objeto
  //Los Proptypes ofrece una manera de verificar dinamicamente las props de nuestros componentes
  //DefaultProps: establecer un valor por default a las propiedades que no fueron definidas en la creacion del componente
  
  return( 
    <>
    <h1>{ title }</h1>
    <h3>{subtitle}</h3>
    <code>{JSON.stringify( saludar() )}</code>
    <p>Soy un subtitulo</p>
    </>
  )
}
 
const saludar = () => {
  const newMessage = {
    message:'Marcos Larrea',
    title: 'San Lorenzo - Paraguay'
};
  return(newMessage)
}
 
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay subtitulo'
}
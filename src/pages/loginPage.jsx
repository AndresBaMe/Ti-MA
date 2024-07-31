import React from 'react';
import '../Styles/LoginStyle.css'; // Asegúrate de crear y vincular este archivo CSS
import loginImage from '../images/loginIMG.png'; // Ruta a la imagen que tienes
import logoImage from '../images/Logo.png'; // Ruta a la imagen que tienes

const Login = () => {
  return (

    <div className="login-container">
      <div className="login-header">
        <img src={loginImage} alt="Login Illustration" className="login-image" />
      </div>
      <form className="login-form">
      <img src={logoImage} alt="Login Illustration" className="login-image" />
        <input type="text" placeholder="Usuario..." className="login-input" />
        <input type="password" placeholder="Contraseña..." className="login-input" />
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;

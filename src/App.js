import React, { Component } from 'react';
import logo from './logo.svg';
import border from './images/header.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <header className="App-header">
          <div id="leftcol">
            	<h1 id="logo"><a href="?"><span1>DAC</span1> <span2>System</span2></a></h1>
                <div id="mainnav">
                	<ul>
                    	<li><a href="?"><span> <span3>=></span3> Home</span></a></li>
                        <li><a href="?"><span> <span3>=></span3> Teachers</span></a></li>
                        <li><a href="?"><span> <span3>=></span3> Students</span></a></li>
                        <li><a href="?"><span> <span3>=></span3> Subjects</span></a></li>
                        <li><a href="?"><span> <span3>=></span3> Classrooms</span></a></li>
                        <li><a href="?"><span> <span3>=></span3> Contacts</span></a></li>
                    </ul>
                </div>
            </div>
            <div id="rightcol">
              <img id="border" src={border}/>
                <div id="content">
                  <br></br>
                	 <h2>Bienvenido al sitio web de DAC</h2>
                  <br></br>
                    <strong>Descripcion:</strong>
                    <br></br>
                    <br></br>
                    <p>Brindaremos un servicio tecnológico el cual apoya de manera proactiva tanto a los docentes como a los
                      alumnos en el sistema de registro de asistencias a clases.</p>
                    <p>El sistema registrará y almacenera información relevante de la institución: alumnos, docentes, carreras,
                      materias de las mismas y aulas. Con toda la información recolectada será posible mantener actualizado
                      el estado de la situación que incluirá calificaciones y asistencias de los alumnos de forma sistemática a
                      través de un lector biométrico de huellas dactilares. </p>
                </div>
                <div id="footer">
                    <div id="copyright">
                    	Digital Attendance Control &nbsp;|&nbsp; Company
                    </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default App;

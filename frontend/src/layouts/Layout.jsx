import { Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/App.css'
import Footer from '../components/Footer';

export default function Layout() {

  //actualizar el titulo de la pagina
  document.title= `Prueba PHP`

  return (
    <div className="d-flex flex-column vh-100">
        <div id="page-content">
            <div className="container">
                <Outlet />
            </div>
        </div>
        <Footer />
    </div>
  )
}

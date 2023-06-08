import { FaSistrix } from "react-icons/fa";
import { consultHumidity, getCitys } from "../api/city";
import { useEffect, useState } from "react";
import { getIp } from "../helper";
import WeatherMap from "../components/WeatherMap";
import { Link } from "react-router-dom";

export default function App() {

  const [ responseCitys, setResponseCitys ] = useState([])
  const [ response, setResponse ] = useState([])
  const [ citys, setCitys ] = useState([])
  const [ city, setCity ] = useState(null)
  const [ ip, setIP ] = useState('');
  const [ visible, setVisible ] = useState(false)
  const [ info, setInfo ] = useState({})

  useEffect(() => {
    getCitys(setResponseCitys)
    getIp(setIP)
  }, [])

  useEffect(() => {
    setCitys(responseCitys.data)
  }, [responseCitys])

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    //array de info
    const datos = {
      city: city,
      ip: ip
    }
    consultHumidity(datos, setResponse, setVisible)
  }

  useEffect(() => {
    setInfo(response.data)
  }, [response])

  useEffect(() => {
    const estado = city == '' ? false : true
    if(!estado) {
      setVisible(false)
    }
  }, [city])

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-8 col-md-10 col-12 text-center mt-5">
        
        <h4 className="mb-2">Prueba de PHP</h4>
        <p>Selecciona una ciudad, para poder visualizar la humedad actual.</p>
        <Link to={'/records'}>Ver Historial</Link>

        <form className="mt-4" onSubmit={hanldeSubmit}>
          <div className="input-group mb-3">
            <select className="form-select" onChange={(e) => setCity(e.target.value)} required>
              <option value="">- Seleccione una Ciudad -</option>
              {citys?.map((opcion, index) => (
                <option key={index} value={opcion.id}>
                  {opcion.name}
                </option>
              ))}
            </select>
            <button className="btn btn-primary" type="submit"><FaSistrix /></button>
          </div>
        </form>

        {visible && info && (
          <div className="mt-5 w-100">
            <WeatherMap city={info} />
          </div>
        )}
        
      </div>

    </div>
  )
}
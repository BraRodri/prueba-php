import clienteAxios from "../config/axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const getCitys = async (setResponseCitys) => {
    try {
        const { data } = await clienteAxios('/api/city/all');
        setResponseCitys(data);
    } catch (error) {
        console.log(error);
    }
}

export const consultHumidity = async (datos, setResponse, setVisible) => {
    try {
        MySwal.fire({
            icon: 'info',
            title: '¡Buscando!',
            text: "Espere por favor...",
            timerProgressBar: true,
            allowOutsideClick: false, //false
            didOpen: () => {
                MySwal.showLoading()
            },
        })
        const { data } = await clienteAxios.post('/api/city/consult/humidity', datos)
        setResponse(data);
        MySwal.close()
        setVisible(true)
    } catch (error) {
        console.log(error);
    }
}
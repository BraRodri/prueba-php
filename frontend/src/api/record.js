import clienteAxios from "../config/axios";
import moment from "moment";

export const getRecords = async (setRecords) => {
    try {
        const { data } = await clienteAxios(`/api/records/${moment().format('YYYY-MM-DD')}/${moment().format('YYYY-MM-DD')}`);
        setRecords(data.data);
    } catch (error) {
        console.log(error);
    }
}
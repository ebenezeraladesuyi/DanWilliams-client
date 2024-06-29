import { iUnveiling} from "../types/Interface";
import axios from "axios";

export const url = import.meta.env.VITE_APP_API_URL
 

// register attendee
export const registerAttendee = async (data : iUnveiling) => {
    return await axios.post(`${url}/unveiling/registerunveiling`, data)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
}


// get all users newletter
// export const getAllRegistered = async (data : iSubscribe) => {
//     return await axios.post(`${url}/unveiling/allregisteredunveiling`, data)
//     .then((res) => {
//         return res.data
//     })
//     .catch((err)=> {
//         return err
//     })
// }
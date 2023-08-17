import axios from "axios";


export const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        return res.data
      }

import axios from "axios";

export const TherapiesService = ()=> {

    const urnTherapies = 'api/therapies';

    const getAll = () => {
      const res = axios.get(urnTherapies);
      return res;
    }

    const createTherapy = (data) => {
        const res = axios.post(urnTherapies, data, {
            withCredentials: true,
            headers: {
              "Accept": "application/json",
              "Content-Type": "multipart/form-data",
            },
          });
        return res;
    };

    return {
        getAll,
        createTherapy,
    }
}
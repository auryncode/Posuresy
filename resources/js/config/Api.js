import axios from "axios";

export const getProvinsi = async (url, apiKey) => {
    const res = await axios.get(`${url}/provinsi`, {
        params: {
            api_key: apiKey,
        },
    });
    return res.data.value;
};

export const getKabupaten = async (url, apiKey, id) => {
    const res = await axios.get(`${url}/kabupaten`, {
        params: {
            api_key: apiKey,
            id_provinsi: id,
        },
    });
    return res.data.value;
};
export const getKecamatan = async (url, apiKey, id) => {
    const res = await axios.get(`${url}/kecamatan`, {
        params: {
            api_key: apiKey,
            id_kabupaten: id,
        },
    });
    return res.data.value;
};

export const getKelurahan = async (url, apiKey, id) => {
    const res = await axios.get(`${url}/kelurahan`, {
        params: {
            api_key: apiKey,
            id_kecamatan: id,
        },
    });
    return res.data.value;
};

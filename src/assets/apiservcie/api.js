import axios from "axios"

const clientAuth = "PIz-n_SVQBDLr9v20M3dwpJl8aikYV5K8zH-pJWnYqw";

export const requestData = async () => {
const { data } = await axios.get(`https://api.unsplash.com/`, {
    params: {
        key: clientAuth,
    }
});
return data
}

export const requestQuery = async (query) => {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?q=${query}`,
      {
        params: {
          key: clientAuth,
        },
      }
    );
    return data
}
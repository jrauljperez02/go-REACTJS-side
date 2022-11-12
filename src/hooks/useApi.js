// useApi.js
import { useEffect, useState } from "react"

const useApi = (request) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    fetch(request.url, {
        method: request.method,
        headers: {
            Accept: 'application/json',
            'Authorization' : `Bearer ${request.access}`,
        },
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      setLoading(false)
      setData(json)
    })
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data }
};

export default useApi;
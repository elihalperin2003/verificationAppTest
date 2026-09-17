import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const fetchReq = async (url: string, init) => {
    const res = await fetch(url, init);
    const data = await res.json();
    return data;
  };
  return { fetchReq };
};

export default useFetch;

import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = <T>(initValue?: T) => {
  const dataUrl = "http://localhost:3500/exerciseDay";
  const [data, setData] = useState<T | undefined>(initValue);

  useEffect(() => {
    const func = async () => {
      try {
        const response = await axios.get<T>(dataUrl);
        setData(response.data);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    func();
  }, [dataUrl]);

  return { data };
};

export default useAxiosFetch;

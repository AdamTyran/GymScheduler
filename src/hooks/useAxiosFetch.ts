import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = <T>(dataUrl: string, initValue?: T) => {
  const [data, setData] = useState<T | undefined>(initValue);

  useEffect(() => {
    const func = async () => {
      try {
        const response = await axios.get<T>(dataUrl);
        setData(response.data);
        console.log(response.data);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    func();
  }, [dataUrl]);

  return { data };
};

export default useAxiosFetch;

import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = <T>(dataUrl: string, initValue?: T) => {
  const [data, setData] = useState<T | undefined>(initValue);

  useEffect(() => {
    const func = async () => {
      try {
        const response = await axios.get<T>(dataUrl);
        setData(response.data);
      } catch (err: any) {
        alert(err.message);
      }
    };
    func();
  }, [data, dataUrl]);

  return { data };
};

export default useAxiosFetch;

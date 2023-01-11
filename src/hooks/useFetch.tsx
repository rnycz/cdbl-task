import { useState } from "react";
import { FetchData } from "../assets/types";

export const useFetch = (url: string) => {
  const [data, setData] = useState<FetchData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | any>();

  const makeApiCall = async (): Promise<void> => {
    try {
      const response: Response = await fetch(url);
      const json: FetchData = await response.json();
      setError("");
      setData(json);
      if (response.status === 404) {
        setError("Not Found");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, makeApiCall };
};

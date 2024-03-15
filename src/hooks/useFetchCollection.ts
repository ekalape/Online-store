import { useEffect, useState } from 'react';

import { IProductData } from '../interfaces/index';

const useFetchCollection = () => {
  const [data, setData] = useState<IProductData[]>([]);
  const [isError, setIsError] = useState("");

  const getCollection = async () => {

    let arr: IProductData[] = [];
    try {
      const res = await fetch('https://dummyjson.com/products');
      const json = await res.json();

      arr = json.products;
      setData(arr);

    } catch (e) {
      setIsError("Something wrong happened, please try again");
    }

  };
  useEffect(() => {
    getCollection();
  }, []);

  return { data, isError };
};

export default useFetchCollection;

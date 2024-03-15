import { useEffect, useState } from 'react';

import { IProductData } from '../interfaces/index';

const useFetchProductItem = (id: string) => {
  const [data, setData] = useState<IProductData | null>(null);
  const getProductItem = async () => {

    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await res.json();

      setData(json);
    } catch (e) {
      console.log(e);
    }

  };
  useEffect(() => {
    getProductItem();
  }, []);

  return { data };
};

export default useFetchProductItem;
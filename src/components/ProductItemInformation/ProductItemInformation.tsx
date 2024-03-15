import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductItemInformation.scss';
import Loader from '../Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useFetchProductItem from '../../hooks/useFetchProductItem';
import { setStoreProduct } from '../../redux/slices/productSlice';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductItemInformation: FC = () => {
  const { id } = useParams();
  const { data } = useFetchProductItem(id || '');
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setStoreProduct({
        product: data,
      }),
    );
  }, [dispatch, data]);

  useEffect(() => {
    if (data) setShowInfo(true);
    console.log('data', data);
  }, [data]);

  return !showInfo ? (
    <Loader />
  ) : (
    <div className='item-information__wrapper'>
      {data && <ProductInfo product={data} />}
    </div>
  );
};

export default ProductItemInformation;

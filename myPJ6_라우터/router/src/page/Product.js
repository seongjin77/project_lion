import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
    let [query, setQuery] = useSearchParams();
    console.log('query입니다',query.get('num'));
  return (
    <div>product 입니다</div>
  )
}

export default Product
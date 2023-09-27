import React from 'react';
import { LoaderPosition } from './Loader.styled';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => (
  <LoaderPosition>
    <TailSpin
      height="80"
      width="80"
      color="#3f51b5"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoaderPosition>
);

export default Loader;

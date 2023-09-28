import React from 'react';
import { LoaderPosition } from './Loader.styled';
import { Grid } from 'react-loader-spinner';

const Loader = () => (
  <LoaderPosition>
    <Grid
      height="80"
      width="80"
      color="#3f51b5"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoaderPosition>
);

export default Loader;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type AppBaseProps = {
  Child: React.FC;
};

const useStyles = makeStyles((thema) => ({}));

export const AppBase: React.FC<AppBaseProps> = ({ Child }) => {
  return (
    <div>
      <Child></Child>
    </div>
  );
};

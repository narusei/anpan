import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React from 'react';

type CustumIconProps = React.HTMLProps<SvgIconProps>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MilkIcon = (props: CustumIconProps): JSX.Element => {
  return (
    <SvgIcon>
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
      >
        <g>
          <path d="M362.928,118.452L322.17,54.654h7.549c11.716,0,21.204-9.489,21.204-21.205V21.204C350.923,9.496,341.435,0,329.719,0h-73.71h-73.727c-11.7,0-21.188,9.496-21.188,21.204V33.45c0,11.716,9.488,21.205,21.188,21.205h7.566l-40.758,63.797c-16.588,25.957-25.404,56.121-25.404,86.926V441.88c0,38.722,31.398,70.12,70.137,70.12h124.373c38.739,0,70.12-31.398,70.12-70.12V205.377C388.315,174.572,379.517,144.408,362.928,118.452z M348.054,441.88c0,16.46-13.399,29.852-29.86,29.852H193.822c-16.461,0-29.86-13.392-29.86-29.852V218.36c77.237-14.81,112.449,42.248,184.092,38.306V441.88z"></path>
        </g>
      </svg>
    </SvgIcon>
  );
};

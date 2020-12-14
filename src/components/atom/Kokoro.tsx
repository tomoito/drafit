import { Typography } from '@material-ui/core';
import React from 'react';
import { Img } from 'react-image';
import classes from './Kokoro.module.css';

type PROPS_KOKORO_INFO ={
  id:number,
  name:string
  img:string
}

const Kokoro:React.FC<PROPS_KOKORO_INFO> = (props) => {
  const { id, name, img } = props;
  return (
    <div>
      <Img className={classes.btncirclestitch} src={img} />
      <Typography>
        {id}
        {name}
      </Typography>
    </div>
  );
};

export default Kokoro;

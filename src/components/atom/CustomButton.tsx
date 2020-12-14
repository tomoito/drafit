import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

type PROPS_BUTTON_COLOR = {
  themeColor: string;
  color:string;
}

type PROPS_CUSTOMBUTTON ={
  themeColor:string,
  handleChangeBase:(e:string)=>void;
  dispShow:string;
}

const useStyles = makeStyles({
  button: {
    background: (props:PROPS_BUTTON_COLOR) => props.color,
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: '0 5px',
    fontSize: 50,
    fontColor: 'black',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // background: (props:PROPS_BUTTON_COLOR) => props.color,
  },
});

const CustomButton: React.FC<PROPS_CUSTOMBUTTON> = ({ themeColor, handleChangeBase, dispShow }) => {
  const [color, setColor] = useState(themeColor);
  const handleChange = () => {
    setColor(color === themeColor ? 'silver' : themeColor);
    handleChangeBase(themeColor);
  };

  const classes = useStyles({ themeColor, color });
  return (
    <div>
      <Button className={classes.button} onClick={handleChange}>{dispShow}</Button>
    </div>
  );
};

export default CustomButton;

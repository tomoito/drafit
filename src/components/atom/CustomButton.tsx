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
}

const useStyles = makeStyles({
  button: {
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: (props:PROPS_BUTTON_COLOR) => props.themeColor,
    background: (props:PROPS_BUTTON_COLOR) => props.color,
  },
});

const CustomButton: React.FC<PROPS_CUSTOMBUTTON> = ({ themeColor, handleChangeBase }) => {
  const [color, setColor] = useState(themeColor);
  const handleChange = () => {
    setColor(color === themeColor ? 'silver' : themeColor);
    handleChangeBase(themeColor);
  };

  const classes = useStyles({ themeColor, color });
  return (
    <div>
      <Button className={classes.button} onClick={handleChange}>青色</Button>
    </div>
  );
};

export default CustomButton;

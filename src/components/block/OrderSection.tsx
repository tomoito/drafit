import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['HP', 'MP', '攻撃力', '防御力', '攻撃魔力', '回復魔力'];

const OrderSection:React.FC = () => {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e:string | null) => {// eslint-disable-line
    // alert(e);
  };

  return (

    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}
      <br />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {// eslint-disable-line
          setValue(newValue);
          handleChange(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 250 }}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
    </div>
  );
};

export default OrderSection;

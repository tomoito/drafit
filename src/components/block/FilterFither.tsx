import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  pickFigher,
  filterChange,
} from 'feature/DraqWalkSlice';
import { AppDispatch } from 'app/store';

const FilterFither:React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const pushme = async (num:number) => {
    await dispatch(pickFigher(num));
    await dispatch(filterChange());
  };
  return (
    <div>
      <Button onClick={() => pushme(1)} variant="outlined" color="primary">
        バトルマスター
      </Button>
      <Button onClick={() => pushme(2)} variant="outlined" color="primary">
        レンジャー
      </Button>
      <Button onClick={() => pushme(3)} variant="outlined" color="primary">
        賢者
      </Button>
      <Button onClick={() => pushme(4)} variant="outlined" color="primary">
        魔法戦士
      </Button>
      <Button onClick={() => pushme(5)} variant="outlined" color="primary">
        スーパースター
      </Button>
      {' '}

    </div>
  );
};

export default FilterFither;

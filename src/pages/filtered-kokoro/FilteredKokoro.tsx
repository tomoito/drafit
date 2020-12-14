import {
  Grid,
} from '@material-ui/core';
import React from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  filterdData, dragSet, selectKokoroSoubi, filteredSoubiData, dragSetSoubi,
} from 'feature/DraqWalkSlice';
import { AppDispatch } from 'app/store';
import { useDispatch, useSelector } from 'react-redux';

// import Dummy from '../../testdata/Dummy.json';
import Kokoro from '../../components/atom/Kokoro';

type RESULT_KOKORO ={
  id:number,
  色:string,
  name:string,
  hp:number,
  mp:number,
  攻撃力:number,
  img:string,
  スキル斬撃:number,
  メラ斬撃:number,
  メラ耐性:number,
  フィルター:string[],
}

type RESULT_SOUBI ={
  id: number,
  name:string,
  hp:number,
  mp:number,
  攻撃力:number,
  img:string,
  メラ斬撃:number,
  メラ耐性:number,
  フィルター:string[]
}

const FilteredKokoro:React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const DoraList = useSelector(filterdData);
  const SoubiList = useSelector(filteredSoubiData);

  const KokoroSoubi = useSelector(selectKokoroSoubi);

  const handlerClick = (props:RESULT_KOKORO) => {
    // const propsAlfa:kokoroAdd = {
    //   id: txt,
    //   kokoroAdd: props,
    // };
    // await dispatch(reduceKokoro(propsAlfa));
    // await dispatch(filterType(propsAlfa));
    console.log(props);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onDragStart = async (props:RESULT_KOKORO) => {
    // e.stopPropagation();
    // e.preventDefault();
    await dispatch(dragSet(props));
  };

  const onDragStartSoubi = async (props:RESULT_SOUBI) => {
    // e.stopPropagation();
    // e.preventDefault();
    await dispatch(dragSetSoubi(props));
  };

  return (
    <div>
      {KokoroSoubi === 0 && ( // こころ装備を表示する

      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {
          DoraList.map((props:RESULT_KOKORO) => (
            <div key={props.id} onDragOver={onDragOver} onDragStart={() => onDragStart(props)}>
              <Grid item key={props.id} onClick={() => handlerClick(props)}>
                <Kokoro {...props} />
              </Grid>
            </div>
          ))
        }
        </Grid>
      </Grid>
      )}
      {KokoroSoubi === 1 && ( // 装備を表示する
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {
          SoubiList.map((props:RESULT_SOUBI) => (
            <div key={props.id} onDragOver={onDragOver} onDragStart={() => onDragStartSoubi(props)}>
              <Grid item key={props.id}>
                <Kokoro {...props} />
              </Grid>
            </div>
          ))
        }
          </Grid>
        </Grid>
      )}

    </div>
  );
};

export default FilteredKokoro;

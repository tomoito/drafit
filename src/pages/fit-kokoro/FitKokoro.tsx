import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import {
  selectDoraList, dragStatus, reduceKokoro, filterType, selectKokoroSoubi, selectSoubiData, dragStatusSoubi, filterTypeSoubi, reduceSoubi,
} from 'feature/DraqWalkSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'app/store';
import 'react-tabs/style/react-tabs.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Kokoro from '../../components/atom/Kokoro';
import TabKind from './TabKind';

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

type kokoroAdd ={
  id:number
  kokoroAdd:RESULT_KOKORO
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

type soubiAdd={
  id:number
  soubi:RESULT_SOUBI,
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: any) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div>
      {value === index && (
      <div>{children}</div>
      )}
    </div>
  );
}

const FitKokoro:React.FC = () => {
  const DoraList = useSelector(selectDoraList);
  const dragItem = useSelector(dragStatus);
  const dragItemSoubi = useSelector(dragStatusSoubi);

  const KokoroSoubi = useSelector(selectKokoroSoubi);

  const SoubiList = useSelector(selectSoubiData);

  const dispatch: AppDispatch = useDispatch();

  const onDroptest = async (e: number) => {
    const propsAlfa:kokoroAdd = {
      id: e,
      kokoroAdd: dragItem,
    };
    await dispatch(reduceKokoro(propsAlfa));
    await dispatch(filterType(propsAlfa));
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onDroptestSoubi = async (e: number) => {
    const propsAlfa:soubiAdd = {
      id: e,
      soubi: dragItemSoubi,
    };

    await dispatch(reduceSoubi(propsAlfa));
    await dispatch(filterTypeSoubi(propsAlfa));
  };

  return (
    <>

      {/* <TabKind /> */}
      {/*
      <TabPanel value={KokoroSoubi} index={0}>
        Item One
      </TabPanel>

      <TabPanel value={KokoroSoubi} index={1}>
        Item two
      </TabPanel>

      <TabPanel value={KokoroSoubi} index={1}>
        Item threeee!!!
      </TabPanel> */}
      <div>
        {KokoroSoubi === 0 && ( // こころ装備を表示する
        <div>
          <Grid item xs={12}>

            <Grid container justify="center" spacing={2}>
              <Grid item>
                <div onDragOver={onDragOver} onDrop={() => onDroptest(1)}>
                  {
      DoraList.length > 0
        ? <Kokoro id={DoraList[0].kokoroAdd.id} name={DoraList[0].kokoroAdd.name} img={DoraList[0].kokoroAdd.img} />
        : <Kokoro id={0} name="blank" img="" />
    }
                </div>
              </Grid>
              <Grid item>
                <div onDragOver={onDragOver} onDrop={() => onDroptest(2)}>
                  {
      DoraList.length > 1
        ? <Kokoro id={DoraList[1].kokoroAdd.id} name={DoraList[1].kokoroAdd.name} img={DoraList[1].kokoroAdd.img} />
        : <Kokoro id={1} name="blank" img="" />
    }
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <div onDragOver={onDragOver} onDrop={() => onDroptest(3)}>
                  {
      DoraList.length > 2
        ? <Kokoro id={DoraList[2].kokoroAdd.id} name={DoraList[2].kokoroAdd.name} img={DoraList[2].kokoroAdd.img} />
        : <Kokoro id={2} name="blank" img="" />
    }
                </div>
              </Grid>
              <Grid item>
                <div onDragOver={onDragOver} onDrop={() => onDroptest(4)}>
                  {
      DoraList.length > 3
        ? <Kokoro id={DoraList[3].kokoroAdd.id} name={DoraList[3].kokoroAdd.name} img={DoraList[3].kokoroAdd.img} />
        : <Kokoro id={3} name="blank" img="" />
    }
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
        )}
      </div>

      <div>
        {KokoroSoubi === 1 && ( // 装備を表示する
        <div>

          <Grid item xs={12}>

            <Grid container justify="center" spacing={2}>
              <Grid item>
                <div onDragOver={onDragOver} onDrop={() => onDroptestSoubi(1)}>
                  {
                  DoraList.length > 0
                    ? <Kokoro id={SoubiList[0].soubi.id} name={SoubiList[0].soubi.name} img={SoubiList[0].soubi.img} />
                    : <Kokoro id={0} name="blank" img="" />
                  }
                </div>
              </Grid>
              <Grid item>
                <div onDragOver={onDragOver} onDrop={() => onDroptestSoubi(2)}>
                  {
                  DoraList.length > 1
                    ? <Kokoro id={SoubiList[1].soubi.id} name={SoubiList[1].soubi.name} img={SoubiList[1].soubi.img} />
                    : <Kokoro id={1} name="blank" img="" />
                    }
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <div onDragOver={onDragOver} onDrop={() => onDroptestSoubi(3)}>
                  {
                  DoraList.length > 2
                    ? <Kokoro id={SoubiList[2].soubi.id} name={SoubiList[2].soubi.name} img={SoubiList[2].soubi.img} />
                    : <Kokoro id={2} name="blank" img="" />
                  }
                </div>
              </Grid>
              <Grid item>
                <div onDragOver={onDragOver} onDrop={() => onDroptestSoubi(4)}>
                  {
                  DoraList.length > 3
                    ? <Kokoro id={SoubiList[3].soubi.id} name={SoubiList[3].soubi.name} img={SoubiList[3].soubi.img} />
                    : <Kokoro id={3} name="blank" img="" />
                  }
                </div>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item>
                <div onDragOver={onDragOver} onDrop={() => onDroptestSoubi(5)}>
                  {
                  DoraList.length > 2
                    ? <Kokoro id={SoubiList[4].soubi.id} name={SoubiList[4].soubi.name} img={SoubiList[4].soubi.img} />
                    : <Kokoro id={2} name="blank" img="" />
                  }
                </div>
              </Grid>
              <Grid item>
                <div onDragOver={onDragOver} onDrop={() => onDroptestSoubi(6)}>
                  {
                  DoraList.length > 3
                    ? <Kokoro id={SoubiList[5].soubi.id} name={SoubiList[5].soubi.name} img={SoubiList[5].soubi.img} />
                    : <Kokoro id={3} name="blank" img="" />
                  }
                </div>
              </Grid>
            </Grid>

          </Grid>

        </div>
        )}
      </div>

    </>
  );
};

export default FitKokoro;

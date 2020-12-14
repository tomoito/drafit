import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import Dummy2 from 'testdata/Dummy2.json';
import Dummy2soubi from 'testdata/Dummy2soubi.json';

import kokorowaku from 'app/img/kokorowaku.png';
import yellowWaku from 'app/img/黄.png';
import blueWaku from 'app/img/blue.png';
import greenWaku from 'app/img/緑.png';

import purpleYellowWaku from 'app/img/紫黄.png';
import blueGreenWaku from 'app/img/青緑.png';

type Dora = typeof Dummy2;
const kokoroList:Dora = Dummy2;

type DoraSoubi = typeof Dummy2soubi;
const soubiList:DoraSoubi = Dummy2soubi;
// stateの型定義

// type APIDATA = typeof dataJson;
// type APIDATADAILY = typeof dataJsonDaily;

// "id": 3,
// "name": "大魔王ハドラー" ,
// "hp":23,
// "mp":35,
// "攻撃力":123,
// "img":"https://img.game8.jp/3652535/e00f05232c79ca112a5d207e90a7106c.png/show"

// image={`/static/images/${x.fileName}`}

export type RESULT_SOUBI ={
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

const resultListSoubi:RESULT_SOUBI = {
  id: 1,
  name: '盾',
  hp: 0,
  mp: 0,
  攻撃力: 0,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPZpAjGoRenHa_eo1PuGbCFo8LuuIxyFSyg&usqp=CAU',
  メラ斬撃: 0,
  メラ耐性: 0,
  フィルター: [],
};

type soubiAdd={
  id:number
  soubi:RESULT_SOUBI,
}

const initialSoubiAdd:soubiAdd[] = [
  {
    id: 1,
    soubi: resultListSoubi,
  },
  {
    id: 2,
    soubi: resultListSoubi,
  },
  {
    id: 3,
    soubi: resultListSoubi,
  },
  {
    id: 4,
    soubi: resultListSoubi,
  },
  {
    id: 5,
    soubi: resultListSoubi,
  },
  {
    id: 6,
    soubi: resultListSoubi,
  },
];

export type RESULT_KOKORO ={
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

const resultList:RESULT_KOKORO = {
  id: 0,
  色: '赤',
  name: 'None',
  hp: 0,
  mp: 0,
  攻撃力: 0,
  img: blueWaku,
  スキル斬撃: 0,
  メラ斬撃: 0,
  メラ耐性: 0,
  フィルター: [],
};

const resultList2:RESULT_KOKORO = {
  id: 0,
  色: '赤',
  name: 'None',
  hp: 0,
  mp: 0,
  攻撃力: 0,
  img: yellowWaku,
  スキル斬撃: 0,
  メラ斬撃: 0,
  メラ耐性: 0,
  フィルター: [],
};

const resultList3:RESULT_KOKORO = {
  id: 0,
  色: '赤',
  name: 'None',
  hp: 0,
  mp: 0,
  攻撃力: 0,
  img: greenWaku,
  スキル斬撃: 0,
  メラ斬撃: 0,
  メラ耐性: 0,
  フィルター: [],
};

const resultList4:RESULT_KOKORO = {
  id: 0,
  色: '赤',
  name: 'None',
  hp: 0,
  mp: 0,
  攻撃力: 0,
  img: purpleYellowWaku,
  スキル斬撃: 0,
  メラ斬撃: 0,
  メラ耐性: 0,
  フィルター: [],
};

type SELECT_KOKORO={
  no:number
  kokoro:RESULT_KOKORO,
}

const selectKokoro:SELECT_KOKORO = {
  no: 1,
  kokoro: resultList,
};

type KOKOROFIT = {
  kokoro1:RESULT_KOKORO,
  kokoro2:RESULT_KOKORO,
  kokoro3:RESULT_KOKORO,
  kokoro4:RESULT_KOKORO,
}

const stateKokoroFite:KOKOROFIT = {
  kokoro1: resultList,
  kokoro2: resultList2,
  kokoro3: resultList3,
  kokoro4: resultList4,
};

type kokoroAdd ={
  id:number
  kokoroAdd:RESULT_KOKORO
}

type colorFilter ={
  blueFliter:boolean,
  redFilter:boolean,
  GreenFilter:boolean,
  PurpleFilter:boolean,
}

const colorType:colorFilter = {
  blueFliter: true,
  redFilter: true,
  GreenFilter: true,
  PurpleFilter: true,
};

const initialkokoroAdd:kokoroAdd[] = [
  {
    id: 1,
    kokoroAdd: resultList,
  },
  {
    id: 2,
    kokoroAdd: resultList2,
  },
  {
    id: 3,
    kokoroAdd: resultList3,
  },
  {
    id: 4,
    kokoroAdd: resultList4,
  },
];
const initialColor = [
  {
    id: 1,
    img1: purpleYellowWaku,
    img2: purpleYellowWaku,
    img3: purpleYellowWaku,
    img4: purpleYellowWaku,
  },
  {
    id: 2,
    img1: yellowWaku,
    img2: yellowWaku,
    img3: yellowWaku,
    img4: yellowWaku,
  },
  {
    id: 3,
    img1: blueWaku,
    img2: blueWaku,
    img3: blueWaku,
    img4: blueWaku,
  },
  {
    id: 4,
    img1: greenWaku,
    img2: greenWaku,
    img3: greenWaku,
    img4: greenWaku,
  },
];

type doraState = {
  data: Dora;
  filteredData:Dora
  soubiData:DoraSoubi
  filteredSoubiData:DoraSoubi
  count: number;
  resultDora:RESULT_KOKORO;
  kokorofit:KOKOROFIT,
  pickKokoro:SELECT_KOKORO,
  kokoroAdd:kokoroAdd[],
  filterColor:colorFilter,
  filterType:string[],
  drogItem:RESULT_KOKORO,
  drogItemSoubi:RESULT_SOUBI,
  pickFigher:number,
  initialColorList:string[],
  setKokoroSoubi:number
  soubiAdd:soubiAdd[]
};

export type State = {
    count: number;
  };

// 初期状態。インラインで書いても良いですが・・・・
const initialState: doraState = {
  data: kokoroList,
  filteredData: kokoroList,
  soubiData: soubiList,
  filteredSoubiData: soubiList,
  count: 0,
  resultDora: resultList,
  kokorofit: stateKokoroFite,
  pickKokoro: selectKokoro,
  kokoroAdd: initialkokoroAdd,
  filterColor: colorType,
  filterType: [''],
  drogItem: resultList,
  drogItemSoubi: resultListSoubi,
  pickFigher: 1,
  initialColorList: [blueWaku, yellowWaku, greenWaku, purpleYellowWaku],
  setKokoroSoubi: 0,
  soubiAdd: initialSoubiAdd,

};

// createSliceでreducerとactionを同時に定義
const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    pickFigher: (state, action: PayloadAction<number>) => ({
      ...state,
      pickFigher: action.payload,
    }),
    filterChange: (state) => {
      const whichType = initialColor.find((i) => (i.id === state.pickFigher));
      let test1:RESULT_KOKORO;
      let test2:RESULT_KOKORO;
      let test3:RESULT_KOKORO;
      let test4:RESULT_KOKORO;

      if (whichType !== undefined) {
        test1 = {
          id: 0,
          色: '赤',
          name: 'None',
          hp: 0,
          mp: 0,
          攻撃力: 0,
          img: whichType.img1,
          スキル斬撃: 0,
          メラ斬撃: 0,
          メラ耐性: 0,
          フィルター: [],
        }; ;

        test2 = {
          id: 0,
          色: '赤',
          name: 'None',
          hp: 0,
          mp: 0,
          攻撃力: 0,
          img: whichType.img2,
          スキル斬撃: 0,
          メラ斬撃: 0,
          メラ耐性: 0,
          フィルター: [],
        }; ;

        test3 = {
          id: 0,
          色: '赤',
          name: 'None',
          hp: 0,
          mp: 0,
          攻撃力: 0,
          img: whichType.img3,
          スキル斬撃: 0,
          メラ斬撃: 0,
          メラ耐性: 0,
          フィルター: [],
        };

        test4 = {
          id: 0,
          色: '赤',
          name: 'None',
          hp: 0,
          mp: 0,
          攻撃力: 0,
          img: whichType.img4,
          スキル斬撃: 0,
          メラ斬撃: 0,
          メラ耐性: 0,
          フィルター: [],
        };

        const changeKokoroSet:kokoroAdd[] = [
          {
            id: 1,
            kokoroAdd: test1,
          },
          {
            id: 2,
            kokoroAdd: test2,
          },
          {
            id: 3,
            kokoroAdd: test3,
          },
          {
            id: 4,
            kokoroAdd: test4,
          },
        ];

        state.kokoroAdd = changeKokoroSet;
        state.resultDora = resultList;
      }

      // const kokoro1 = resultList;
      // kokoro1.img = ikeike.find(((i) => i.id === whichType[0].id)).path;
    },
    incrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count - action.payload,
    }),
    calcResult: (state, action: PayloadAction<RESULT_KOKORO>) => ({
      ...state,
      count: state.resultDora.hp + action.payload.hp,
    }),
    setKirikae: (state, action: PayloadAction<number>) => ({
      ...state,
      setKokoroSoubi: action.payload,
    }),
    dragSet: (state, action: PayloadAction<RESULT_KOKORO>) => ({
      ...state,
      drogItem: action.payload,
    }),
    dragSetSoubi: (state, action: PayloadAction<RESULT_SOUBI>) => ({
      ...state,
      drogItemSoubi: action.payload,
    }),
    addFilter: (state, action: PayloadAction<string>) => {
      let isOverlapped = false;

      state.filterType.forEach((i) => {
        if (action.payload === i) {
          isOverlapped = true;
        }
      });

      if (!isOverlapped) {
        state.filterType.push(action.payload);
      } else {
        state.filterType = state.filterType.filter((n) => n !== action.payload);
      }
      state.filterType = state.filterType.filter((n) => n !== '');
    },

    filterType: (state, action: PayloadAction<kokoroAdd>) => {
      const y = state.kokoroAdd.filter((x) => (x.id !== action.payload.id));
      y.push(action.payload);

      const line = y.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });

      state.kokoroAdd = line;

      // 既存の計算値を足す
      state.resultDora.hp += action.payload.kokoroAdd.hp;
      state.resultDora.mp += action.payload.kokoroAdd.mp;
      state.resultDora.攻撃力 += action.payload.kokoroAdd.攻撃力;
      state.resultDora.スキル斬撃 += action.payload.kokoroAdd.スキル斬撃;
      state.resultDora.メラ斬撃 += action.payload.kokoroAdd.メラ斬撃;
      state.resultDora.メラ耐性 += action.payload.kokoroAdd.メラ耐性;
    },
    filterTypeSoubi: (state, action: PayloadAction<soubiAdd>) => {
      const y = state.soubiAdd.filter((x) => (x.id !== action.payload.id));
      y.push(action.payload);

      const line = y.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });

      state.soubiAdd = line;

      // 既存の計算値を足す
      state.resultDora.hp += action.payload.soubi.hp;
      state.resultDora.mp += action.payload.soubi.mp;
      state.resultDora.攻撃力 += action.payload.soubi.攻撃力;
      state.resultDora.メラ斬撃 += action.payload.soubi.メラ斬撃;
      state.resultDora.メラ耐性 += action.payload.soubi.メラ耐性;
    },
    reduceKokoro: (state, action: PayloadAction<kokoroAdd>) => {
      const xxx = state.kokoroAdd.filter((x) => (x.id === action.payload.id));

      // 既存の計算から引く
      // const xxx:RESULT_KOKORO = state.kokorofit.kokoro1;
      if (xxx.length === 1) {
        state.resultDora.hp -= xxx[0].kokoroAdd.hp;
        state.resultDora.mp -= xxx[0].kokoroAdd.mp;
        state.resultDora.攻撃力 -= xxx[0].kokoroAdd.攻撃力;
        state.resultDora.スキル斬撃 -= xxx[0].kokoroAdd.スキル斬撃;
        state.resultDora.メラ斬撃 -= xxx[0].kokoroAdd.メラ斬撃;
        state.resultDora.メラ耐性 -= xxx[0].kokoroAdd.メラ耐性;
      }
    },
    reduceSoubi: (state, action: PayloadAction<soubiAdd>) => {
      const xxx = state.soubiAdd.filter((x) => (x.id === action.payload.id));

      // 既存の計算から引く
      // const xxx:RESULT_KOKORO = state.kokorofit.kokoro1;
      if (xxx.length === 1) {
        state.resultDora.hp -= xxx[0].soubi.hp;
        state.resultDora.mp -= xxx[0].soubi.mp;
        state.resultDora.攻撃力 -= xxx[0].soubi.攻撃力;
        state.resultDora.メラ斬撃 -= xxx[0].soubi.メラ斬撃;
        state.resultDora.メラ耐性 -= xxx[0].soubi.メラ耐性;
      }
    },
    colorFilterRed: (state) => {
      state.filterColor.redFilter = !state.filterColor.redFilter;
    },
    colorFilterBlue: (state) => {
      state.filterColor.blueFliter = !state.filterColor.blueFliter;
    },
    colorFilterGreen: (state) => {
      state.filterColor.GreenFilter = !state.filterColor.GreenFilter;
    },
    colorFilterPurple: (state) => {
      state.filterColor.PurpleFilter = !state.filterColor.PurpleFilter;
    },
    FlterResult: (state) => {
      // 色の選別を開始
      const colorList:string[] = [];
      if (state.filterColor.redFilter) {
        colorList.push('赤');
      }

      if (state.filterColor.blueFliter) {
        colorList.push('青');
      }

      if (state.filterColor.GreenFilter) {
        colorList.push('緑');
      }

      if (state.filterColor.PurpleFilter) {
        colorList.push('紫');
      }
      state.filteredData = state.data.filter((kokoro) => colorList.includes(kokoro.色));
      state.filterType = state.filterType.filter((n) => n !== '');

      state.filteredData = state.filteredData.filter((kokoro) => {
        const matched = state.filterType.map((ft) => kokoro.フィルター.includes(ft));
        if (matched.length === 1) {
          return matched.includes(true);
        }
        return !matched.includes(false);
      });
    },
    FlterResultSoubi: (state) => {
      // 色の選別を開始

      state.filteredSoubiData = state.soubiData.filter((soubi) => {
        const matched = state.filterType.map((ft) => soubi.フィルター.includes(ft));
        if (matched.length === 1) {
          return matched.includes(true);
        }
        return !matched.includes(false);
      });
    },
    FlterResultSkill: (state) => {
      // 色の選別を開始
      const colorList:string[] = [];
      if (state.filterColor.redFilter) {
        colorList.push('赤');
      }

      if (state.filterColor.blueFliter) {
        colorList.push('青');
      }

      if (state.filterColor.GreenFilter) {
        colorList.push('緑');
      }

      if (state.filterColor.PurpleFilter) {
        colorList.push('紫');
      }

      state.filteredData = state.data.filter((kokoro) => colorList.includes(kokoro.色));

      // if (state.filterSkill.スキル斬撃) {
      //   state.filteredData = state.filteredData.filter((kokoro) => kokoro.スキル斬撃 > 0);
      // }

      // if (state.filterSkill.メラ斬撃) {
      //   state.filteredData = state.filteredData.filter((kokoro) => kokoro.メラ斬撃 > 0);
      // }

      // if (state.filterSkill.メラ耐性) {
      //   state.filteredData = state.filteredData.filter((kokoro) => kokoro.メラ耐性 > 0);
      // }

      // state.filteredData = state.data.filter((kokoro) => colorList.includes(kokoro.色));
    },
  },
});

// action creatorもこんな風に取り出して公開できて、dispatchでReactから利用できる
export const {
  incrementCounter,
  decrementCounter,
  calcResult,
  filterType,
  filterTypeSoubi,
  reduceKokoro,
  reduceSoubi,
  colorFilterRed,
  colorFilterBlue,
  colorFilterGreen,
  colorFilterPurple,
  FlterResult,
  FlterResultSoubi,
  addFilter,
  dragSet,
  pickFigher,
  filterChange,
  setKirikae,
  dragSetSoubi,
} = slice.actions;
export const selectOpenNewPost = (state: RootState) => state.draque.count;// eslint-disable-line
export const selectDoraList = (state: RootState) => state.draque.kokoroAdd;// eslint-disable-line
export const filterdData = (state: RootState) => state.draque.filteredData;// eslint-disable-line
export const sumStatus = (state: RootState) => state.draque.resultDora;// eslint-disable-line
export const dragStatus = (state: RootState) => state.draque.drogItem;// eslint-disable-line
export const dragStatusSoubi = (state: RootState) => state.draque.drogItemSoubi;// eslint-disable-line

export const selectKokoroSoubi = (state: RootState) => state.draque.setKokoroSoubi;// eslint-disable-line
export const filteredSoubiData = (state: RootState) => state.draque.filteredSoubiData;// eslint-disable-line

export const selectSoubiData = (state: RootState) => state.draque.soubiAdd;// eslint-disable-line

export default slice.reducer;

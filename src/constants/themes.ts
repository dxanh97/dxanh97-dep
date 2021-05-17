import { Theme } from '../models';

const themes: {
  [themeName: string]: Theme;
} = {
  lux: {
    key: 1,
    topBar: '#f2e7ca',
    backdrop: '#f9f1e1',
    paper: '#fef8ec',
    text: '#005661',
  },
  lilac: {
    key: 2,
    topBar: '#dedbf5',
    backdrop: '#edecf8',
    paper: '#f2f1f8',
    text: '#0c006b',
  },
  machine: {
    key: 3,
    topBar: '#161b1e',
    backdrop: '#1d2528',
    paper: '#273136',
    text: '#f2fffc',
  },
  // octa: {
  //   backdrop: '#1e1f2b',
  //   paper: '#282a3a',
  //   text: '#eaf2f1',
  // },
};

export default themes;

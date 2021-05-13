import { Theme } from '@dxanh97/models';

const themes: {
  [themeName: string]: Theme;
} = {
  luxi: {
    key: 1,
    backdrop: '#f9f1e1',
    paper: '#fef8ec',
    text: '#005661',
  },
  lila: {
    key: 2,
    backdrop: '#edecf8',
    paper: '#f2f1f8',
    text: '#0c006b',
  },
  mach: {
    key: 3,
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

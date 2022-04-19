import {Dimensions} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const ph = (percent: number) => {
    return (percent * screenHeight) / 100;
  };
  
  export const pw = (percent: number) => {
    return (percent * screenWidth) / 100;
  };
  
import React from 'react';
import Header from './src/components/Header/Header'
import { GlobalStyles } from './src/components/Global/GlobalStyles'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
    {/* <GlobalStyles/> */}
      <StatusBar />
      <SafeAreaView>
        <ScrollView>
          <Header/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

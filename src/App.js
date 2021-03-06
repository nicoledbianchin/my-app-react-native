import React from 'react';
import Header from './components/Header/Header'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
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

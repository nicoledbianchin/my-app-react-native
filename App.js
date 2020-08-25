import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView>
          <Text>
            test
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;

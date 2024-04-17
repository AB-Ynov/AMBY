import React from 'react';
import { View, Text } from 'react-native';
import Profile from './Profile';
import Networking from './Networking';
import MediaSharing from './MediaSharing';
import News from './News';
import FinancialEducation from './FinancialEducation';

const App = () => {
  return (
    <View>
      <Text>Welcome to AMBY - Application for Young Entrepreneurs</Text>
      <Profile />
      <Networking />
      <MediaSharing />
      <News />
      <FinancialEducation />
    </View>
  );
};

export default App;

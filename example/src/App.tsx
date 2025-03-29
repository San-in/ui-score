import { View, StyleSheet, Alert } from 'react-native';

import { scorebird, scorebuddy, fanapp } from '../../src';
import { type FC, useState } from 'react';

const App: FC = () => {
  const { Button, Input } = scorebird;
  const { Button: SBButton, Input: SBInput } = scorebuddy;
  const { Button: FAButton, Input: FAInput } = fanapp;

  const [fanappInputValue, setFanappInputValue] = useState('');
  const [scorebirdInputValue, setScorebirdInputValue] = useState('');
  const [scoreBuddyInputValue, setScoreBuddyInputValue] = useState('');
  return (
    <View style={styles.container}>
      <Button
        title={'Scorebird'}
        onPress={() => {
          Alert.alert('You`ve clicked on Scorebird button');
        }}
      />
      <SBButton
        title={'ScoreBuddy'}
        onPress={() => {
          Alert.alert('You`ve clicked on ScoreBuddy');
        }}
      />
      <FAButton
        title={'FanApp'}
        onPress={() => {
          Alert.alert('You`ve clicked on FanApp');
        }}
      />
      <Input
        value={scorebirdInputValue}
        onChangeText={setScorebirdInputValue}
      />
      <FAInput value={fanappInputValue} onChangeText={setFanappInputValue} />
      <SBInput
        value={scoreBuddyInputValue}
        onChangeText={setScoreBuddyInputValue}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 30,
    backgroundColor: '#ffffff',
  },
});

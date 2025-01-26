import { View, StyleSheet, Alert } from 'react-native';
import { scorebird, scorebuddy, fanapp } from 'ui-score';

export default function App() {
  const { Button } = scorebird;
  const { Button: SBButton } = scorebuddy;
  const { Button: FAButton } = fanapp;

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 30,
  },
});

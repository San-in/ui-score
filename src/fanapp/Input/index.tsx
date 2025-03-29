import {
  TextInput,
  StyleSheet,
  View,
  type ViewStyle,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
} from 'react-native';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

export const Input = ({
  placeholder = 'Write here...',
  value,
  onChangeText,
  inputStyle = {},
  containerStyle = {},
  ...props
}: InputProps) => (
  <View style={[styles.container, containerStyle]}>
    <TextInput
      style={[styles.input, inputStyle]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ff003b',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  input: {
    height: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

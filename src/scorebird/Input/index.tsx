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
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,4,255,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(0,4,255,0.1)',
  },
  input: {
    height: 35,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(0,4,255,0.5)',
  },
});

import {
  Text,
  StyleSheet,
  Pressable,
  type ViewStyle,
  type StyleProp,
  type TextStyle,
  type PressableProps,
} from 'react-native';

type ButtonProps = {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
} & PressableProps;

export const Button = ({
  title,
  onPress,
  textStyle,
  buttonStyle,
  ...props
}: ButtonProps) => (
  <Pressable style={[styles.button, buttonStyle]} onPress={onPress} {...props}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0004ff',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

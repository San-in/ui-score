import {
  TextInput,
  StyleSheet,
  View,
  type ViewStyle,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  Pressable,
} from 'react-native';
import { CrossedEyeIcon, EyeIcon } from '../../icons';
import { useState } from 'react';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  isSecure?: boolean;
} & TextInputProps;

export const Input = ({
  placeholder = 'Write here...',
  value,
  onChangeText,
  inputStyle = {},
  containerStyle = {},
  isSecure = false,
  ...props
}: InputProps) => {
  const [secure, setSecure] = useState(isSecure);
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secure}
        {...props}
      />
      {isSecure && (
        <Pressable
          onPress={() => setSecure((prevState) => !prevState)}
          style={({ pressed }) => [
            { opacity: pressed ? 0.8 : 1 },
            styles.iconContainer,
          ]}
        >
          {!secure ? (
            <CrossedEyeIcon
              color={'rgba(0,4,255,0.5)'}
              width={32}
              height={32}
            />
          ) : (
            <EyeIcon color={'rgba(0,4,255,0.5)'} width={32} height={32} />
          )}
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgb(142,102,182)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 15,
    backgroundColor: 'rgb(213,205,221)',
  },
  input: {
    height: 45,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgb(119,22,214)',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
});

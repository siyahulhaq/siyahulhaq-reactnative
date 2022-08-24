import {Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import styles from './styles';

interface InputFieldProps extends TextInputProps {
  error?: string | boolean;
}

const InputField: React.FC<InputFieldProps> = ({style, error, ...props}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.input} {...props} />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default InputField;

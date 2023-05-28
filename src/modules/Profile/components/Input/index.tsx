import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from '../../styles';

interface InputTypes {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function Input({label, value, onChangeText}: InputTypes) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType="email-address"
        autoCapitalize={'none'}
        autoComplete="email"
        style={styles.input}
        placeholder="Enter your name"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

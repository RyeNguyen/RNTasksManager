import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { InputFieldParamList } from '../types/component.types';
import { textStyles } from '../styles';
import { colors, sizes } from '../constants';

const InputFieldComponent: React.FC<InputFieldParamList> = ({
  inputLabel,
  inputPreIcon,
  inputPostIcon,
  inputPlaceholder = '',
  secureText = false,
  onIconTap,
  onChange,
  value,
  error,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  console.log(error);

  return (
    <>
      {inputLabel ? <Text style={[textStyles.h3, styles.label]}>{inputLabel}</Text> : null}
      <View style={[styles.inputWrapper, isFocused && styles.inputActive]}>
        {inputPreIcon ? <View style={styles.preIcon}>{inputPreIcon}</View> : null}
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          cursorColor={colors.white}
          placeholder={inputPlaceholder}
          placeholderTextColor='rgba(255, 255, 255, 0.6)'
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          secureTextEntry={secureText}
          onChangeText={onChange}
          value={value}
          //returnKeyType={}
        />
        {inputPostIcon ? (
          <TouchableOpacity style={styles.postIcon} onPress={onIconTap}>
            {inputPostIcon}
          </TouchableOpacity>
        ) : null}
      </View>
      {error ? (
        <Text style={[textStyles.textMain, textStyles.textRed, styles.errMsg]}>
          This is required.
        </Text>
      ) : null}
    </>
  );
};

export default InputFieldComponent;

const styles = StyleSheet.create({
  label: {
    marginBottom: sizes.sizeModerateH,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: sizes.sizeModerate,
    paddingVertical: sizes.sizeSmallH,
    paddingHorizontal: sizes.sizeBig,
  },
  preIcon: {
    marginRight: sizes.sizeSmall,
  },
  input: {
    color: colors.white,
    flex: 1,
    padding: 0,
    fontSize: sizes.textSizeSmall,
    fontFamily: 'SF-Pro-Display-Medium',
  },
  inputActive: {
    borderColor: colors.primary,
  },
  postIcon: {
    marginLeft: sizes.sizeSmall,
  },
  errMsg: {
    marginTop: sizes.sizeSmallerH,
  },
});

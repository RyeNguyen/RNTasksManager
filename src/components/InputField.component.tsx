import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { InputFieldParamList } from '../types/component.types';
import { IconFilter, IconSearch } from '../assets/icons';
import { textStyles } from '../styles';
import { colors, sizes } from '../constants';

const InputFieldComponent: React.FC<InputFieldParamList> = ({
  inputLabel,
  inputPlaceholder = '',
  isSearched = false,
  hasFilter = false,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <>
      {inputLabel ? <Text style={[textStyles.h3, styles.label]}>{inputLabel}</Text> : null}
      <View style={[styles.inputWrapper, isFocused && styles.inputActive]}>
        {isSearched ? (
          <View style={styles.searchIcon}>
            <IconSearch />
          </View>
        ) : null}
        <TextInput
          style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          cursorColor={colors.white}
          placeholder={inputPlaceholder}
          placeholderTextColor={colors.white}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          returnKeyType={isSearched ? 'search' : 'done'}
        />
        {hasFilter ? (
          <TouchableOpacity style={styles.filterButton}>
            <IconFilter />
          </TouchableOpacity>
        ) : null}
      </View>
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
  searchIcon: {
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
  filterButton: {
    marginLeft: sizes.sizeSmall,
  },
});

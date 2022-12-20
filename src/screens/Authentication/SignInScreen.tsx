import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { layoutStyles, textStyles } from '../../styles';
import { IconSignInDecoration } from '../../assets/icons';
import { sizes } from '../../constants';
import { InputField } from '../../components';

const SignInScreen: React.FC<any> = () => {
  return (
    <View style={[layoutStyles.layoutScreen, styles.screen]}>
      <View style={styles.header}>
        <Text style={[textStyles.h1, styles.headerText]}>Sign In</Text>
        <IconSignInDecoration />
      </View>

      <InputField inputPlaceholder='Enter your email' isSearched={false} hasFilter={false} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    paddingTop: sizes.sizeMassiveH * 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: sizes.sizeMassiveH + 7,
  },
  headerText: {
    marginRight: sizes.sizeSmaller + 2,
  },
});

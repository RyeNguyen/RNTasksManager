import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { layoutStyles, textStyles } from '../../styles';
import { IconEmail, IconLock, IconPasswordHide, IconSignInDecoration } from '../../assets/icons';
import { constants, sizes } from '../../constants';
import { DefaultButton, InputField } from '../../components';
import { useForm, Controller } from 'react-hook-form';
import { useKeyboardWatcher } from '../../hooks';
import { ValidationUserType } from '../../types/validation.types';
import { useAppDispatch } from '../../hooks/useRedux.hook';
import { createNewUser } from '../../redux/thunks/userThunk.thunk';

const AuthenticateScreen: React.FC<any> = () => {
  const dispatch = useAppDispatch();
  const { isKeyboardVisible } = useKeyboardWatcher();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ValidationUserType>();

  const onSubmit = (data: any) => {
    dispatch(createNewUser(data));
  };

  /**
   * Function to compare confirmed password with password
   * @param text
   * Author: MinhNQ53(26/12/2022)
   */
  const comparePassword = (text: string) => {
    if (text !== watch('password')) {
      return 'passwordMismatch';
    }
  };

  return (
    <ScrollView>
      <View
        style={[
          layoutStyles.layoutScreen,
          styles.screen,
          isKeyboardVisible ? styles.screenWithKeyboard : styles.screenWithoutKeyboard,
        ]}
      >
        <View style={styles.header}>
          <Text style={[textStyles.h1, styles.headerText]}>Sign Up</Text>
          <IconSignInDecoration />
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: constants.EMAIL_PATTERN,
            }}
            render={({ field: { onChange, value } }) => (
              <InputField
                inputPreIcon={<IconEmail />}
                inputPlaceholder={constants.EMAIL_PLACEHOLDER}
                onChange={onChange}
                value={value}
                error={errors.email}
              />
            )}
            name='email'
          />
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 6,
            }}
            render={({ field: { onChange, value } }) => (
              <InputField
                inputPreIcon={<IconLock />}
                inputPostIcon={<IconPasswordHide />}
                inputPlaceholder={constants.PASSWORD_PLACEHOLDER}
                secureText={true}
                onChange={onChange}
                value={value}
                error={errors.password}
              />
            )}
            name='password'
          />
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
              validate: (text: string) => comparePassword(text),
            }}
            render={({ field: { onChange, value } }) => (
              <InputField
                inputPreIcon={<IconLock />}
                inputPostIcon={<IconPasswordHide />}
                inputPlaceholder={constants.PASSWORD_CONFIRM_PLACEHOLDER}
                secureText={true}
                onChange={onChange}
                value={value}
                error={errors.confirmPassword}
              />
            )}
            name='confirmPassword'
          />
        </View>

        <TouchableOpacity style={styles.linkContainer}>
          {/*<Text style={textStyles.h3}>Forgot password?</Text>*/}
        </TouchableOpacity>

        <DefaultButton buttonText='Sign Up' onPress={handleSubmit(onSubmit)} />

        <View
          style={[
            styles.navigatorLink,
            isKeyboardVisible ? styles.navigatorWithKeyboard : styles.navigatorWithoutKeyboard,
          ]}
        >
          <Text style={[textStyles.h3, textStyles.textGrey]}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={[textStyles.h3, textStyles.textOrange]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthenticateScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    paddingTop: sizes.sizeMassiveH * 2,
    paddingHorizontal: sizes.sizeBig,
  },
  screenWithoutKeyboard: {
    height: Dimensions.get('window').height,
  },
  screenWithKeyboard: {
    height: 'auto',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: sizes.sizeMassiveH + 7,
  },
  headerText: {
    marginRight: sizes.sizeSmaller + 2,
  },
  inputContainer: {
    width: '100%',
    marginBottom: sizes.sizeBigH,
  },
  linkContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: sizes.sizeBigH,
  },
  navigatorLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigatorWithKeyboard: {
    position: 'relative',
    marginTop: sizes.sizeModerateH,
  },
  navigatorWithoutKeyboard: {
    position: 'absolute',
    bottom: sizes.sizeModerateH,
    marginTop: 0,
  },
});

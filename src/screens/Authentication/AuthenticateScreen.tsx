import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { layoutStyles, textStyles } from '../../styles';
import { IconEmail, IconLock, IconPasswordHide, IconSignInDecoration } from '../../assets/icons';
import { sizes } from '../../constants';
import { DefaultButton, InputField } from '../../components';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

const AuthenticateScreen: React.FC<any> = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={[layoutStyles.layoutScreen, styles.screen]}>
      <View style={styles.header}>
        <Text style={[textStyles.h1, styles.headerText]}>Sign Up</Text>
        <IconSignInDecoration />
      </View>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
              inputPreIcon={<IconEmail />}
              inputPlaceholder='Enter your email'
              onChange={onChange}
              value={value}
              error={errors.email}
            />
          )}
          name='email'
        />
      </View>

      <View style={styles.inputContainer}>
        <InputField
          inputPreIcon={<IconLock />}
          inputPostIcon={<IconPasswordHide />}
          inputPlaceholder='Enter your password'
          secureText={hidePassword}
          onIconTap={() => setHidePassword(!hidePassword)}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputField
          inputPreIcon={<IconLock />}
          inputPostIcon={<IconPasswordHide />}
          inputPlaceholder='Re-enter your password'
          secureText={hidePassword}
          onIconTap={() => setHidePassword(!hidePassword)}
        />
      </View>

      <TouchableOpacity style={styles.linkContainer}>
        {/*<Text style={textStyles.h3}>Forgot password?</Text>*/}
      </TouchableOpacity>

      <DefaultButton buttonText='Sign Up' onPress={handleSubmit(onSubmit)} />

      <View style={styles.navigatorLink}>
        <Text style={[textStyles.h3, textStyles.textGrey]}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={[textStyles.h3, textStyles.textOrange]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthenticateScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    paddingTop: sizes.sizeMassiveH * 2,
    paddingHorizontal: sizes.sizeBig,
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
    position: 'absolute',
    bottom: sizes.sizeModerateH,
  },
});

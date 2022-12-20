import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { textStyles, layoutStyles } from '../../../styles';
import { IconDashboard, IconAdd } from '../../../assets/icons';
import { IconButton } from '../../../components';
import { sizes } from '../../../constants';

const HomeHeader: React.FC<any> = () => {
  const handlePress = () => {};

  return (
    <View style={[layoutStyles.layoutStretch, styles.container]}>
      <View style={styles.header}>
        <Text style={[textStyles.h2, styles.heading]}>Dashboard</Text>
        <IconDashboard />
      </View>

      <IconButton onPress={handlePress}>
        <IconAdd />
      </IconButton>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    marginBottom: sizes.sizeBigH,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    marginRight: sizes.sizeSmaller,
  },
});

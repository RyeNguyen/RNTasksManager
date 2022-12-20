import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconCalendar, IconDashboardLarge } from '../../assets/icons';
import { layoutStyles, textStyles } from '../../styles';
import { colors, sizes } from '../../constants';

const TaskCardSimple: React.FC<any> = () => {
  return (
    <View style={styles.card}>
      <View style={[layoutStyles.layoutCenter, styles.cardIconContainer]}>
        <IconDashboardLarge />
      </View>

      <View style={styles.cardContent}>
        <Text style={textStyles.h3}>Userflow main UIKit</Text>
        <View style={styles.cardContentDate}>
          <IconCalendar />
          <Text style={[textStyles.textMain, textStyles.textGrey, styles.cardContentDateText]}>
            Deadline: 03/02/2021
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TaskCardSimple;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: sizes.sizeBigH,
    paddingHorizontal: sizes.sizeBig,
    borderRadius: sizes.sizeModerate,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: sizes.sizeModerateH,
  },
  cardIconContainer: {
    borderRadius: 1000,
    backgroundColor: colors.white,
    padding: sizes.sizeModerate - 2,
  },
  cardContentDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    marginLeft: sizes.sizeModerate,
  },
  cardContentDateText: {
    marginLeft: sizes.sizeSmaller,
  },
});

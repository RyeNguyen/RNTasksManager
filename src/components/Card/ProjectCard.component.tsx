import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../constants';
import { layoutStyles, textStyles } from '../../styles';
import { scaleSizeUI } from '../../utils';
import { IconArrowDashed, IconCalendar } from '../../assets/icons';
import { width } from '../../utils/scaleSizeUI';

const FAKES = [
  {
    id: 1,
    avatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4f/4f230ef03211fa8a638e9e2d94162d35fb120605_full.jpg',
  },
  {
    id: 2,
    avatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4f/4f2b0d3ed539cfd6968bbf732db5b35613ca7011_full.jpg',
  },
  {
    id: 3,
    avatar:
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4f/4f7a0eded9013d894f34c32f8fc170f6678e18ef_full.jpg',
  },
];

const ProjectCard: React.FC<any> = () => {
  return (
    <View style={styles.card}>
      {/*Card's header including the title and members list*/}
      <View style={[layoutStyles.layoutStretch, styles.cardHeader]}>
        <Text style={textStyles.h2}>Main UIKit</Text>

        <View style={styles.cardMembers}>
          {FAKES.map((item: any, index: number) => (
            <Image
              key={item.id}
              source={{ uri: item.avatar }}
              style={[
                styles.cardMemberAvatar,
                { right: sizes.sizeSmaller * index - sizes.sizeSmaller },
              ]}
            />
          ))}
        </View>
      </View>

      {/*Card's start and end date*/}
      <View style={layoutStyles.layoutStretch}>
        <View style={styles.cardDate}>
          <IconCalendar />
          <Text style={[textStyles.textMain, textStyles.textGrey, styles.cardDateText]}>
            01/01/2021
          </Text>
        </View>

        <IconArrowDashed />

        <View style={styles.cardDate}>
          <IconCalendar color={colors.primary} />
          <Text style={[textStyles.textMain, textStyles.textPurple, styles.cardDateText]}>
            18/06/2021
          </Text>
        </View>
      </View>

      {/*Card's footer including the progress bar*/}
      <View style={[layoutStyles.layoutStretch, styles.cardFooter]}>
        <Text style={textStyles.textSmall}>50%</Text>
        <View style={styles.cardProgressContainer}>
          <View style={[styles.cardProgress, { width: '50%' }]} />
        </View>
        <Text style={textStyles.textSmall}>
          <Text style={textStyles.textGrey}>24</Text>/48 tasks
        </Text>
      </View>
    </View>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  card: {
    paddingVertical: sizes.sizeBigH,
    paddingHorizontal: sizes.sizeBig,
    borderRadius: sizes.sizeModerate,
    borderWidth: 1,
    borderColor: colors.white,
    marginBottom: sizes.sizeModerateH,
  },
  cardHeader: {
    marginBottom: sizes.sizeModerateH + 2,
  },
  cardMembers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardMemberAvatar: {
    width: scaleSizeUI(28),
    height: scaleSizeUI(28),
    borderRadius: 1000,
  },
  cardDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDateText: {
    marginLeft: sizes.sizeSmaller,
  },
  cardFooter: {
    marginTop: sizes.sizeModerateH + 2,
  },
  cardProgressContainer: {
    flex: 1,
    height: sizes.sizeSmaller,
    marginHorizontal: sizes.sizeSmaller,
    borderRadius: sizes.sizeSmaller,
    backgroundColor: colors.white,
  },
  cardProgress: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: sizes.sizeSmaller,
  },
});

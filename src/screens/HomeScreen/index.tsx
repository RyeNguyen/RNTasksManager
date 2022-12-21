import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { layoutStyles } from '../../styles';
import { sizes } from '../../constants';
import HomeHeader from './modules/HomeHeader';
import {
  InputField,
  ProjectCard,
  SectionContainer,
  TabsSystem,
  TaskCardSimple,
} from '../../components';
import { homeTabItems } from '../../data/tabItems';
import { IconFilter, IconList, IconSearch, IconTask } from '../../assets/icons';

const HomeScreen: React.FC<any> = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);

  return (
    <ScrollView style={[layoutStyles.layoutScreen, styles.screen]}>
      <HomeHeader />

      <View style={styles.searchSection}>
        <InputField
          inputPreIcon={<IconSearch />}
          inputPostIcon={<IconFilter />}
          inputPlaceholder='Search'
        />
      </View>

      <TabsSystem tabItems={homeTabItems} currentTab={currentTab} onSelectTab={setCurrentTab} />
      {currentTab === 1 && (
        <View>
          <SectionContainer sectionName='Your project' hasArrow={true} sectionIcon={<IconList />}>
            <ProjectCard />
          </SectionContainer>

          <SectionContainer
            sectionName='Your recent tasks'
            hasArrow={true}
            sectionIcon={<IconTask />}
          >
            <TaskCardSimple />
          </SectionContainer>
        </View>
      )}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: sizes.sizeBig,
    paddingVertical: sizes.sizeModerateH,
  },
  searchSection: {
    marginBottom: sizes.sizeBigH,
  },
});

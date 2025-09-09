import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { s, vs } from 'react-native-size-matters';

const tabsArr = ['Left Tab', 'Right Tab'];
const ACTIVE_BG = '#0000FF';

const TopTabs = () => {
  const [activeTab, setActiveTab] = useState('Left Tab');
  return (
    <View style={styles.container}>
      {tabsArr.map((tabName) => {
        return (
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === tabName && { backgroundColor: ACTIVE_BG },
            ]}
            onPress={() => setActiveTab(tabName)}
          >
            <Text
              style={
                activeTab === tabName ? styles.activeText : styles.inactiveText
              }
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    height: vs(48),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F4',
    borderRadius: s(12),
    marginTop: s(10),
    padding: s(4),
  },
  tabButton: {
    height: vs(32),
    flex: 1,
    borderRadius: s(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeText: {
    color: '#FFF',
    fontSize: s(14),
    fontWeight: 'semibold',
  },
  inactiveText: {
    color: '#B6D0E2',
    fontSize: s(14),
    fontWeight: 'regular',
  },
});

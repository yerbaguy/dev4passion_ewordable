/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Feed = () => {
  return (
    <View><Text>Feed</Text></View>
  )
}

const Article = () => {
  return (
    <View><Text>Article</Text></View>
  )
}

const SettingsScreen = () => {
  //const navigation = useNavigation();
  return (
    <View>
      {/* <Header navigation={navigation} /> */}
      <Text>SettingsScreen</Text>
    </View>
  )
}


const HomeScreen = () => {
  return (
    // <Drawer.Navigator initialRouteName="DummyHome">
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Add Product" component={AddProduct} />

      {/* <Drawer.Screen name="DummyHome" component={MainScreen} /> */}
      {/* <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> */}


      {/* here       */}
      {/* <Drawer.Screen name="Add Categories" component={AddCategories} />
      <Drawer.Screen name="Add Products" component={AddProducts} /> */}
      {/* here */}
    </Drawer.Navigator>
  )
}

const MainScreen = () => {
  return (
    <View><Text>MainScreen</Text></View>
  )
}

const Account = () => {
  return (
    <View><Text>Account</Text></View>
  )
}

const AddProduct = () => {
  return (
    <View><Text>AddProduct</Text></View>
  )
}


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>


    // <NavigationContainer>
    // <Drawer.Navigator>
    //   <Drawer.Screen name="Feed" component={Feed} />
    //   <Drawer.Screen name="Article" component={Article} />
    // </Drawer.Navigator>
    // </NavigationContainer>

    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.js</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

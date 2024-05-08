/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import React from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VideoPlayer from './screens/VideoPlayer';
import HomeScreen from './screens/HomeScreen';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

// const HomeScreen = () => {
//   return (
//     <Text>Home</Text>
//   )
// }

const SettingsScreen = () => {
  return (
    <Text>Settings</Text>
  )
}

const LearnEngWords = () => {
  return (
    <Text>Learn</Text>
  )
}

const AddWords = () => {
  return (
    <Text>AddWord</Text>
  )
}

const EngWordssss = () => {
  return (
    <Text>Learn</Text>
  )
}

// const VideoPlayer = () => {
//   return (
//     <Text>Learn</Text>
//   )
// }

const Check = () => {
  return (
    <Text>Learn</Text>
  )
}

const BottomTabNavigator = () => {
  return (
    <View style={{
      width,
      height,
    }}>


      <Tab.Navigator>
        {/* <Tab.Screen name='Home' component={MainScreen} /> */}

        {/* <Tab.Screen name='Home' component={DrawerNavigator} /> */}

        {/* <Tab.Screen name='Learn' component={LearnnnnScreen} options={{ headerShown: false }}/> */}
        {/* <Tab.Screen name='Learn' component={LearnEngWords} options={{ headerShown: false }} /> */}
        <Tab.Screen name='Home' component={HomeScreen} />
        {/* <Tab.Screen name='Add Word' component={AddWords} options={{ headerShown: false }} /> */}
        <Tab.Screen name='Add Word' component={AddWords}  />

        {/* <Tab.Screen name='Check' component={Check} options={{ headerShown: false }} /> */}
        <Tab.Screen name='Check' component={Check} />

        {/* <Tab.Screen name='Words' component={WordssScreen} /> */}
        {/* <Tab.Screen name='Words' component={EngWords} options={{ headerShown: false }}/> */}
        {/* <Tab.Screen name='Words' component={EngWordssss} options={{ headerShown: false }} /> */}
        <Tab.Screen name='Words' component={EngWordssss} />
        {/* <Tab.Screen name='Words' component={EngWordss} options={{ headerShown: false }}/> */}

        <Tab.Screen name="videoplayer" component={VideoPlayer} />

        {/* <Tab.Screen name='Contact' component={ContactScreen} /> */}
      </Tab.Navigator>
    </View>
  )
}




//}

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

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer >

    {/* <SafeAreaView style={backgroundStyle}> */}

      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}

      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}

        {/* <Header /> */}
     
        {/* <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}> */}


          {/* <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section> */}
          {/* <Section title="See Your Changes">
            <ReloadInstructions />
          </Section> */}
          {/* <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks /> */}
          
          {/* <NavigationContainer> */}


          {/* <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator> */}
          
          
          {/* </NavigationContainer> */}

           
        {/* </View>           
      </ScrollView>         
    </SafeAreaView> */}

      <BottomTabNavigator />    
    </NavigationContainer >
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

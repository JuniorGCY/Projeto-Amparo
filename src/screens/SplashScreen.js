import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { getItem } from '../utils/storage';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    async function check() {
      
      const hasSeenOnboarding = await getItem('hasSeenOnboarding');
      const userToken = await getItem('userToken'); // se tiver auth
      setTimeout(() => {
        if (!hasSeenOnboarding) navigation.replace('Onboarding');
        else if (!userToken) navigation.replace('Auth');
        else navigation.replace('Main');
      }, 800);
    }
    check();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../images/Logo.png')} style={styles.logo} />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#fff' },
  logo:{ width:200, height:200, resizeMode:'contain' }
});

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { setItem } from '../utils/storage';
import { RFValue } from 'react-native-responsive-fontsize';

const slides = [
    { key:'1', title:'Bem-vinda ao App Amparo!', text:'Um app feito para receber você!', image: require('../assets/onboard1.png') },
    { key:'2', title:'Sua Força', text:'Estamos aqui para acolher, fazer você ser ouvida e ajudar na sua luta!', image: require('../assets/onboard2.png') },
    { key:'3', title:'Tudo em um App', text:'Funções e informações úteis reunidas para ajudar você, na palma da sua mão.', image: require('../assets/onboard3.png') },
];
  
export default function OnboardingScreen({ navigation }){
  const sliderRef = React.useRef(null);

  const done = async () => {
    await setItem('hasSeenOnboarding', 'true');
    navigation.replace('Drawer');
  }

  const renderItem = ({ item, index }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
  
      <View style={styles.buttonColumn}>
        {index < slides.length - 1 && (
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => sliderRef.current.goToSlide(index + 1)}
          >
            <Text style={styles.nextText}>Próximo</Text>
          </TouchableOpacity>
        )}
        {index === slides.length - 1 ? (
          <TouchableOpacity onPress={done} style={styles.nextBtn}>
            <Text style={styles.nextText}>Começar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={done} style={styles.skipBtn}>
            <Text style={styles.skipText}>Pular</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <AppIntroSlider
      ref={sliderRef}
      data={slides}
      renderItem={renderItem}
      onDone={done}
      onSkip={done}
      showNextButton={false}
      showSkipButton={false}
      showDoneButton={false}
    />
  );
}

const styles = StyleSheet.create({
  slide:{flex:1, alignItems:'center', justifyContent:'center', padding:20, backgroundColor:'#fff'},
  image:{width:260, height:260, resizeMode:'contain', marginBottom:20},
  title:{fontSize: RFValue(16), fontWeight:'900', marginBottom:8, textAlign:'center', color: '#7B4DFA'},
  text:{fontSize: RFValue(12), color:'#222', textAlign:'center', paddingHorizontal:10},
  btn:{fontSize: RFValue(12), color:'#7B4DFA', padding:10, fontWeight: '900'},
  buttonColumn: {flexDirection: 'column', width: '100%', gap: 10, marginTop: 30 },
  skipBtn: {padding: 12, borderWidth: 1, borderColor: '#7B4DFA', borderRadius: 12,},
  skipText: { fontSize: RFValue(12), textAlign: 'center', color: '#7B4DFA', fontWeight: '600'},
  nextBtn: { padding: 14, borderRadius: 12, backgroundColor: '#7B4DFA' },
  nextText: { fontSize: RFValue(12), textAlign: 'center', color: '#fff', fontWeight: '900'},
});

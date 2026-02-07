import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { Linking } from "react-native";

export default function aboutAmparo({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <MaterialCommunityIcons name="menu" size={RFValue(29)} color='#7B4DFA'/>
                </TouchableOpacity>

                <Text style={styles.titleHead}>Sobre o Amparo</Text>
            </View>

            <View style={styles.cardMain}>
              <ScrollView>
                <View style={{marginBottom: 20}}>
                    <Text style={styles.textMain}> Lideres do Projeto</Text>
                    <Text style={styles.textSubTitle}>Ines</Text>
                </View>

                <View style={{marginBottom: 20}}>
                    <Text style={styles.textMain}> Programadores do Projeto</Text>
                    <Text style={styles.textSubTitle}>Fernanda - Web</Text>
                    <Text style={styles.textSubTitle}>Euvaldo - Mobile</Text>
                </View>
                
                <View style={{marginBottom: 20}}>
                    <Text style={styles.textMain}>Recursos Imagens </Text>
                    <Text style={styles.textSubTitle}>StorySet</Text>

                    <View style={{marginVertical: 20, marginHorizontal: 10}}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity onPress={ () => Linking.openURL('https://storyset.com/self-care')}>
                                    <Image source={require('../assets/onboard1.png')} style={styles.image}/>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Linking.openURL('https://storyset.com/rights')}>
                                    <Image source={require('../assets/onboard2.png')} style={styles.image}/>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Linking.openURL('https://storyset.com/medical')}>
                                    <Image source={require('../assets/onboard3.png')} style={styles.image}/>
                                </TouchableOpacity>
                        </ScrollView>
                        <Text style={styles.textSubTitle}>Clique na imagem para visitar</Text>
                    </View>
                </View>
                
                <Text style={styles.text}>O Amparo agradece seu voto de confiança!</Text>
              </ScrollView>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    header: {
        width: '100%',
        minHeight: 100,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#eee',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderBottomLeftRadius: 40,
        elevation: 2
    },
    titleHead: {
        fontSize: RFValue(17),
        fontWeight: '900',
        marginEnd: 80,
        color: "#7B4DFA"
    },
    cardMain: {
        paddingTop: 10,
        paddingHorizontal: 24,
        paddingBottom: 10,
        marginTop: 30,
        marginHorizontal: 24,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 4
    },
    textMain: {
        fontSize: RFValue(15),
        fontWeight: '900',
        color: '#7B4DFA',
        textAlign: 'center'
    },
    textSubTitle: {
        fontSize: RFValue(13),
        fontWeight: '600',
        color: '#7B4DFA',
        textAlign: 'center'
    },
    text: {
        fontSize: RFValue(12),
        fontWeight: '900',
        color: '#7B4DFA',
        textAlign: 'center'
    },
    image: {
        width: 130,
        height: 130
    }
})
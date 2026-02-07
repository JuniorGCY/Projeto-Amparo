import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons, Feather, FontAwesome } from '@expo/vector-icons';

import * as Linking from 'expo-linking'
import { RFValue } from "react-native-responsive-fontsize";
import { DrawerActions } from "@react-navigation/native";


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <MaterialCommunityIcons name="menu" size={RFValue(30)} color='#7B4DFA' />
                </TouchableOpacity>

                <Text style={styles.textTitle}>Projeto Amparo</Text>

                <View style={{ width: RFValue(30) }} />
            </View>

            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}>
                <Text style={[styles.subTextTitle, {marginTop: 15}]}>Principais Recursos de Emergência</Text>
                <Text style={[styles.subTextTitle, {marginBottom: 15}]}>Disponível 24 horas por dia</Text>

                <View style={{ minHeight: 150, maxHeight: 180 }}>
                    <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.carouselContent}
                    >

                        <TouchableOpacity onPress={() => navigation.navigate('Gravar Áudio')}>
                            <View style={styles.cardView}>
                                <MaterialCommunityIcons name="microphone" size={RFValue(36)} color='#fff' />
                                <Text style={styles.cardTextTitle}>Gravar Áudio</Text>
                                <Text style={styles.cardTextSub}>
                                    Inicia gravação automaticamente e salva na nuvem com opção de compartilhar
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Contatos de Emergência')}>
                            <View style={[styles.cardView, { backgroundColor: '#FF9500' }]}>
                                <MaterialCommunityIcons name="message-alert-outline" size={RFValue(36)} color='#fff' />
                                <Text style={styles.cardTextTitle}>Alertar Contatos</Text>
                                <Text style={styles.cardTextSub}>
                                    Envia SMS imediato para os contatos cadastrados de emergência
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Linking.openURL(`tel:${190}`)}>
                            <View style={[styles.cardView, { backgroundColor: '#FF3B30' }]}>
                                <Feather name="phone-call" size={RFValue(36)} color='#fff' />
                                <Text style={styles.cardTextTitle}>Ligar 190</Text>
                                <Text style={styles.cardTextSub}>
                                    Faz ligação direta para a Polícia Militar se permitido
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Botão de Emergência')}>
                            <View style={[styles.cardView, { backgroundColor: '#FF3B30' }]}>
                                <MaterialCommunityIcons name="alert-decagram" size={RFValue(36)} color='#fff' />
                                <Text style={styles.cardTextTitle}>Botão de Emergência</Text>
                                <Text style={styles.cardTextSub}>Aperte caso esteja em perigo</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Modo Discreto')}>
                            <View style={[styles.cardView, { backgroundColor: '#7B4DFA' }]}>
                                <MaterialCommunityIcons name="calculator" size={RFValue(36)} color='#fff' />
                                <Text style={styles.cardTextTitle}>Modo Discreto</Text>
                                <Text style={styles.cardTextSub}>Para não levantar suspeitas</Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

                <View style={styles.cardFrases}>
                    <Text style={styles.fraseText}>
                        "Romper o silêncio é o primeiro passo para a liberdade."
                    </Text>
                </View>

                <View style={styles.cardObjetivo}>
                    <View style={styles.cardObjetivoHeader}>
                        <FontAwesome name="heart" size={RFValue(22)} color='#7B4DFA' />
                        <Text style={styles.cardObjetivoTitle}>O que é o Projeto Amparo?</Text>
                        <FontAwesome name="heart" size={RFValue(22)} color='#7B4DFA' />
                    </View>

                    <Text style={styles.cardObjetivoText}>
                        O Projeto Amparo é uma plataforma digital dedicada ao apoio integral 
                        de mulheres vítimas de violência sexual. Oferecemos suporte jurídico, 
                        psicossocial e comunitário através de recursos tecnológicos seguros e acessíveis.
                    </Text>

                    <Text style={styles.cardObjetivoText}>
                        Nossa missão é proporcionar ferramentas de proteção, orientação e acolhimento, 
                        conectando mulheres em situação de vulnerabilidade com redes de apoio 
                        especializadas e recursos de emergência.
                    </Text>

                    <Text style={styles.cardObjetivoText}>
                        Acreditamos que toda mulher merece viver livre de violência, com dignidade 
                        e segurança. O Projeto Amparo está aqui para apoiar você em cada passo dessa jornada.
                    </Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerTitle}>Siga-nos nas Redes Sociais</Text>

                <View style={styles.footerRow}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/amparoofc')}>
                        <Image source={require('../images/instaicon.png')} style={styles.footerIcon} />
                    </TouchableOpacity>

                    <Image source={require('../images/Logo.png')} style={styles.img} />

                    <TouchableOpacity onPress={() => Linking.openURL('https://www.tiktok.com/@amparoofc')}>
                        <Image source={require('../images/tiktokicon.png')} style={styles.footerIcon} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.footerTag}>@amparoofc</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
    },
    header: {
        width: "100%",
        minHeight: 100,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        borderBottomLeftRadius: 40,
        shadowRadius: 4,
    },
    textTitle: {
        fontSize: RFValue(22),
        fontWeight: "900",
        color: "#7B4DFA",
    },
    scrollContent: {
        paddingBottom: 140,
        alignItems: "center",
    },
    subTextTitle: {
        fontSize: RFValue(18),
        fontWeight: "900",
        color: "#7B4DFA",
        textAlign: "center"
    },
    carouselContent: {
        paddingHorizontal: 10,
        alignItems: "center",
    },
    cardView: {
        backgroundColor: "#7B4DFA",
        width: RFValue(210),
        height: RFValue(130),
        marginHorizontal: 12,
        padding: 12,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6
    },
    cardTextTitle: {
        fontSize: RFValue(15),
        fontWeight: "800",
        color: "#fff",
        marginTop: 5,
    },
    cardTextSub: {
        fontSize: RFValue(11),
        color: "#F2E8FF",
        textAlign: "center",
        marginTop: 2,
    },
    cardFrases: {
        maxWidth: "90%",
        minWidth: "80%",
        padding: 12,
        marginTop: 20,
        borderRadius: 18,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    fraseText: {
        fontSize: RFValue(12),
        fontWeight: "900",
        color: "#7B4DFA",
        textAlign: "center",
    },
    cardObjetivo: {
        maxWidth: "92%",
        minWidth: "80%",
        marginTop: 20,
        padding: 15,
        borderRadius: 18,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 5,
        elevation: 2,
    },
    cardObjetivoHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    cardObjetivoTitle: {
        fontSize: RFValue(19),
        color: "#7B4DFA",
        fontWeight: "900",
    },
    cardObjetivoText: {
        color: "#7B4DFA",
        fontWeight: "600",
        fontSize: RFValue(13),
        textAlign: "center",
        marginTop: 10,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 110,
        backgroundColor: "#7B4DFA",
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 5,
        paddingTop: 10,
        elevation: 10,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    footerTitle: {
        fontSize: RFValue(15),
        color: "#fff",
        fontWeight: "800",
        marginBottom: 5,
    },
    footerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 120,
        marginBottom: 6,
    },
    footerIcon: {
        width: RFValue(25),
        height: RFValue(25),
    },
    footerTag: {
        fontSize: RFValue(12),
        color: "#fff",
        fontWeight: "800",
    },

    img: {
        width: 50,
        height: 40,
        alignSelf: "center",
    },
});

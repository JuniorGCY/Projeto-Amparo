import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../styles/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

export default function BotaoPanico({navigation}) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
               <TouchableOpacity style={{marginStart: RFValue(20), marginEnd: RFValue(20)}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                 <MaterialCommunityIcons name="menu" size={(RFValue(30))}color='#FF3B30' />
               </TouchableOpacity>
            
               <MaterialCommunityIcons name="alert" size={(RFValue(30))} color='#FF3B30'/>
               <Text style={styles.titleHeader}>Botão de Pânico</Text>
            </View>
        
            <SafeAreaView style={{flex: 1}}>
                <ScrollView contentContainerStyle={{padding: 10}}>

                    <View style={styles.cardFuncionamento}>
                        <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <MaterialCommunityIcons name="shield-alert-outline" size={(RFValue(25))} color='#FF0000' />
                            <Text style={{color: '#FF3B30', fontWeight: '900', fontSize: RFValue(14), textAlign: 'center'}}>
                                Como funciona o Botão de Panico
                            </Text>
                        </View>
                        
                        <Text style={{color: '#FF3B30', fontWeight: '700', fontSize: RFValue(11), textAlign: 'center'}}>
                            O Botão de Panico ativa automaticamente tres ações de emergencias simultaneas
                        </Text>

                        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 10}}>
                            <MaterialIcons name="phone" size={(RFValue(19))} color='#FF0000'/>
                            <Text style={{color: '#222', fontWeight: '700'}}>Ligar para 190 (Policia)</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 10}}>
                            <MaterialCommunityIcons name="microphone" size={(RFValue(19))} color='#FF0000'/>
                            <Text style={{color: '#222', fontWeight: '700'}}>Iniciar gravação de aúdio</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 10}}>
                            <MaterialCommunityIcons name="chat-outline" size={(RFValue(19))} color='#FF0000'/>
                            <Text style={{color: '#222', fontWeight: '700'}}>Alertar contatos de emergência</Text>
                        </View>

                        <Text style={{alignSelf: 'center', marginTop: 10, fontWeight: '700', color: '#222'}}>
                            Use apenas em casos de emergência
                        </Text>
                    </View>

                    <View style={styles.cardEmergencia}>
                        <Text style={{fontSize: RFValue(14), textAlign: 'center', fontWeight: '800', color: '#FF3B30'}}>
                            Pressione o botão abaixo em caso de emergência
                        </Text>

                        <TouchableOpacity>
                            <View style={styles.botaoEmergencia}>
                                <Text style={{color: colors.background, textAlign: 'center', fontSize: RFValue(14), fontWeight: 'bold'}}>Emergência</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={{textAlign: 'center', marginTop: 10, fontSize: RFValue(11), fontWeight: '500', color: '#222'}}>
                            Você terá 5 segundos para cancelar se pressionou por engano.
                        </Text>
                    </View>

                    <View style={styles.cardSecundarios}>
                        <Text style={{color: '#FF3B30', fontWeight: '800', fontSize: RFValue(14), textAlign: 'center'}}>
                            Contatos de Emergência
                        </Text>

                        <Text style={{fontSize: RFValue(11), textAlign: 'center', fontWeight: '500', color: '#222'}}>
                            Configure seus contatos para receber alertas automaticos
                        </Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Contatos de Emergência')}>
                            <View style={styles.button}>
                                <Text style={{fontSize: RFValue(11), fontWeight: 'bold', color: colors.background, textAlign: 'center'}}>
                                    Configurar Contatos
                                </Text>
                            </View>   
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardSecundarios}>
                        <Text style={{color: '#FF3B30', fontWeight: '800', fontSize: RFValue(14), textAlign: 'center'}}>
                            Teste do Sistema
                        </Text>

                        <Text style={{fontSize: RFValue(11), textAlign: 'center', fontWeight: '500', color: '#222'}}>
                            Teste as funcionalidades sem ativar a emergência real
                        </Text>

                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={{fontSize: RFValue(12), fontWeight: 'bold', color: colors.background, textAlign: 'center'}}>
                                    Modo Teste
                                </Text>
                            </View>   
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardFooter}>
                        <Text style={{fontSize: RFValue(14), fontWeight: '900', color: '#FF3B30', alignSelf: 'center', marginBottom: 5}}>
                            🚨 Informações Importantes
                        </Text>

                        {[
                            "O sistema funciona mesmo sem internet (ligação 190)",
                            "Mantenha seus contatos de emergência sempre atualizados",
                            "A gravação de áudio requer permissão do microfone",
                            "Em caso de falha, ligue diretamente 190 ou 180",
                            "Mantenha o celular carregado",
                        ].map((tip, index) => (
                            <Text key={index} style={{fontSize: RFValue(12), fontWeight: '700', color: '#FF3B30', marginBottom: 5}}>
                                • {tip}
                            </Text>
                        ))}
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        </View>
    )
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
        shadowRadius: 6,
    },
    titleHeader: {
        fontSize: RFValue(22),
        color: '#FF3B30', 
        fontWeight: '800', 
        textAlign: 'center'
    },
    cardFuncionamento: {
        maxWidth: '93%',
        minWidth: '80%',
        maxHeight: 350,
        minHeight: 230,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 3
    },
    cardEmergencia: {
        maxWidth: '94%',
        minWidth: '80%',
        maxHeight: 350,
        minHeight: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 3,
        overflow: 'hidden',
    },
    botaoEmergencia: {
        width: 120,
        minWidth: 90,
        height: 120,
        minHeight: 90,
        aspectRatio: 1,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 99, 
        backgroundColor: colors.danger
    },
    cardSecundarios: {
        maxWidth: '94%',
        minWidth: '90%',
        maxHeight: 150,
        minHeight: 120,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 2
    },
    button: {
        width: '70%',
        minWidth: '40%',
        minHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        padding: 10,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: '#fff',
        backgroundColor: colors.danger
    },
    cardFooter: {
        maxWidth: '90%',
        minWidth: '85%',
        maxHeight: 260,
        minHeight: 190,
        alignSelf: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 2
    },
})
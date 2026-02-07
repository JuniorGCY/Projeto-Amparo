import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking} from "react-native";
import colors from "../styles/colors";

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ModalContent3() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="scale-balance" size={30} color='#8238A5' />
                    <Text style={{color: '#000', fontWeight: '700', fontSize: 20}}>  Medidas Protetivas</Text>
                </View>

                <Text style={{marginBottom: 20, fontSize: 16}}>
                São decisões judiciais que garantem proteção à vítima, como afastamento do agressor. 
                Podem ser solicitadas na delegacia, Defensoria Pública ou Ministério Público
                </Text>

                <Text style={{marginBottom: 20, fontSize: 16, fontWeight: 'bold'}}>Tipos de Medidas Protetivas:</Text>

                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.title}>• Afastamento do agressor do lar:</Text>
                    <Text style={styles.subtitle}>
                        O agressor deve deixar a casa ou o ambiente onde a mulher reside, mesmo que ele seja o proprietário.
                    </Text>
                                        
                    <Text style={styles.title}>• Proibição de aproximação e contato</Text>
                    <Text style={styles.subtitle}>
                        O agressor é proibido de se aproximar da vítima, de seus filhos e de testemunhas, em uma distância determinada pela Justiça.
                    </Text>           

                    <Text style={styles.title}>• Internação em estabelecimento de saúde:</Text>
                    <Text style={styles.subtitle}>
                        Se necessário, a mulher pode ser encaminhada para um local de atendimento especializado, seja para acolhimento físico ou psicológico.
                    </Text>
                    
                    <Text style={styles.title}>• Sequestro de bens e alimentos:</Text>
                    <Text style={styles.subtitle}>
                        Pode ser determinada a prestação de alimentos provisionais e o sequestro de bens do agressor para garantir o cumprimento de suas obrigações
                    </Text>
                </View>

                <Text style={{marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>
                    Direitos das Mulheres:
                </Text>

                <View style={{flexDirection: 'column',  marginTop: 20}}>
                    <Text style={styles.title}>• Direito à segurança</Text>
                    <Text style={styles.title}>• Direito à saúde</Text>
                    <Text style={styles.title}>• Direito à justiça</Text>
                    <Text style={styles.title}>• Direito ao atendimento especializado</Text>
                </View>

                <Text style={{marginTop: 20, fontSize: 16, fontWeight: 'bold'}}>Links Úteis</Text>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Lei Maria da Penha</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://brasilescola.uol.com.br/historiab/lei-maria-da-penha.html")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Central de Atendimento à Mulher</Text>
                    <Text style={styles.subtitleButton}>Ligue 180</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.gov.br/mulheres/pt-br/ligue180")}>
                        <Text style={styles.linkText}>Clique para saber como funciona.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Instituto Maria da Penha</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.institutomariadapenha.org.br/")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{marginTop: 20, fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#542485'}}>
                    O Projeto Amparo não oferece atendimento jurídico 
                    indiviual. Nosso papel é informar e encaminhar você para os serviços oficiais de apoio
                </Text>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto',
        flex: 1,
        padding: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: colors.background,
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10
    },
    buttonStyle: {
        marginTop: 10,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: '#000',
    },
    title: {
        fontSize: 16,
        marginTop:5,
        fontWeight: '500'
    },
    subtitle: {
        marginStart: 10,
        marginBottom: 10,
    },
    titlebutton: {
        fontSize: 14,
        fontWeight: '500'
    },
    subtitleButton: {
        fontSize: 14,
        fontWeight: '500'
    },
    linkText: {
        fontSize: 14,
        color: '#0066cc',
        textDecorationLine: 'underline',
        marginBottom: 10
    },
})
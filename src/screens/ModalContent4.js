import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking} from "react-native";
import colors from "../styles/colors";

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ModalContent4() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="scale-balance" size={30} color='#8238A5' />
                    <Text style={{color: '#000', fontWeight: '700', fontSize: 20}}>  Denúncias</Text>
                </View>

                <Text style={{marginBottom: 20, fontSize: 16}}>
                Você pode denunciar gratuitamente pelos canais: 180 (Central da Mulher), 190 
                (emergência), 100 (Direitos Humanos) ou aplicativo Proteja Brasil.
                </Text>

                <Text style={{marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>Links Úteis</Text>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Central de Atendimento à Mulher</Text>
                    <Text style={styles.subtitleButton}>• Serviço gratuito e confidencial oferecido pelo governo federal, por meio do Ministério das Mulheres.</Text>
                    <Text style={styles.subtitleButton}>• Atendimento 24 horas por dia, todos os dias da semana.</Text>
                    <Text style={styles.subtitleButton}>• Ligue 180</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.gov.br/mulheres/pt-br/ligue180")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Delegacia Especial de Atendimento à Mulher (DEAM)</Text>
                    <Text style={styles.subtitleButton}>• Delegacias especializadas que funcionam 24 horas por dia, todos os dias da semana.</Text>
                    <Text style={styles.subtitleButton}>• Atendimento 24 horas por dia, todos os dias da semana.</Text>
                    <Text style={styles.subtitleButton}>• É recomendável procurar a DEAM mais próxima ou entrar em contato pelo telefone 
                        para obter informações sobre localização e funcionamento.
                    </Text>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Polícia Militar - Emergência</Text>
                    <Text style={styles.subtitleButton}>• Ligue 190</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://policialpadrao.com.br/como-funciona-o-190-da-policia-militar/")}>
                        <Text style={styles.linkText}>Clique para saber como funciona.</Text>
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
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking} from "react-native";
import colors from "../styles/colors";

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ModalContent1() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="scale-balance" size={30} color='#8238A5' />
                    <Text style={{color: '#000', fontWeight: '700', fontSize: 20}}> Direitos das Vítimas</Text>
                </View>

                <Text style={{marginBottom: 10, fontSize: 16}}>
                    Você tem direito a atendimento médico gratuito e sigiloso, apoio psicológico, registro de 
                    boletim de ocorrência e medidas protetivas. Pode procurar: DEAM, Defensoria Pública,
                    CRAS, CREAS, ou serviços do SUS.
                </Text>

                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.title}>• Atendimento Médico Gratuito e Sigiloso:</Text>
                    <Text style={styles.subtitle}>
                        A vítima de violência tem direito ao atendimento médico gratuito e sigiloso. 
                        Esse atendimento inclui o fornecimento de cuidados de saúde e atendimento psicológico.
                    </Text>
                    
                    <Text style={styles.title}>• Apoio Psicológico:</Text>
                    <Text style={styles.subtitle}>
                        A vítima tem direito a apoio psicológico em centros especializados (CAPS e CRAS), 
                        de forma gratuita e sigilosa, para ajudá-la a lidar com o trauma.</Text>
                        
                    <Text style={styles.title}>• Boletim de Ocorrência (B.O.):</Text>
                    <Text style={styles.subtitle}>
                        A vítima pode registrar um boletim de ocorrência para formalizar a denúncia de violência. O B.O. 
                        pode ser feito na DEAM (Delegacia Especializada de Atendimento à Mulher), delegacia comum ou até online. 
                        Em alguns casos, é possível fazer a denúncia de forma anônima.</Text>

                    <Text style={styles.title}>• Medidas Protetivas de Urgência:</Text>
                    <Text style={styles.subtitle}>
                        A vítima tem direito a medidas protetivas que garantem sua segurança imediata, 
                        como afastamento do agressor e restrições de contato</Text>
    
                    <Text style={styles.title}>• Sigilo:</Text>
                    <Text style={styles.subtitle}>
                        Todas as informações sobre o caso são sigilosas por lei. 
                        Nenhuma informação será compartilhada sem o consentimento da vítima, 
                        exceto em situações de risco iminente.</Text>

                    <Text style={styles.title}>• Direitos de Denúncia:</Text>
                    <Text style={styles.subtitle}>
                        A vítima tem o direito de denunciar a violência, com apoio das autoridades competentes, 
                        como a Polícia Militar (190) e a Central de Atendimento à Mulher (180).</Text>
                </View>
                
                <Text style={styles.title}>Links úteis</Text>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Central de Atendimento à Mulher</Text>
                    <Text style={styles.subtitleButton}>Ligue 180</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.gov.br/mulheres/pt-br/ligue180")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Polícia Militar - Emergência</Text>
                    <Text style={styles.subtitleButton}>Ligue 190</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://policialpadrao.com.br/como-funciona-o-190-da-policia-militar/")}>
                        <Text style={styles.linkText}>Clique para saber como funciona.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Delegacia da Mulher</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://mulher.podemos.org.br/mapa-delegacia-da-mulher/?radius=25")}>
                        <Text style={styles.linkText}>Clique para encontrar uma.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Defensoria Públicar</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.politize.com.br/guia-carreiras-juridicas/o-que-e-a-defensoria-publica/")}>
                        <Text style={styles.linkText}>Clique para conhecer mais.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>CREAS - Centro de Referência Especializado de Assistência Social</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.gov.br/pt-br/servicos/acessar-creas-centro-de-referencia-especializado-em-assistencia-social")}>
                        <Text style={styles.linkText}>Clique para conhecer mais.</Text>
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
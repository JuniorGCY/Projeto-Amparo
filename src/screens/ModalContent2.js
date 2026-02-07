import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking} from "react-native";
import colors from "../styles/colors";

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ModalContent2() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="scale-balance" size={30} color='#8238A5' />
                    <Text style={{color: '#000', fontWeight: '700', fontSize: 20}}> Boletim de Ocorrência</Text>
                </View>

                <Text style={{marginBottom: 20, fontSize: 16}}>
                A violência sexual dentro de um relacionamento também é crime. O B.O. pode ser feito na 
                DEAM, delegacia comum ou online, levando documentos e provas.
                </Text>

                <Text style={{marginBottom: 20, fontSize: 16, fontWeight: 'bold'}}>Quando Registrar um B.O.</Text>

                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.title}>• Violência Doméstica e Familiar:</Text>
                    <Text style={styles.subtitle}>
                        Agressões físicas, psicológicas, ameaças ou qualquer forma de violência no âmbito doméstico.
                    </Text>
                                        
                    <Text style={styles.title}>• Furto ou Roubo:</Text>
                    <Text style={styles.subtitle}>
                        Subtração de objetos, documentos, veículos ou pertences pessoais.
                    </Text>           

                    <Text style={styles.title}>• Perda ou Extravio de Documentos:</Text>
                    <Text style={styles.subtitle}>
                        Quando seus documentos pessoais são perdidos ou roubados.
                    </Text>
                    
                    <Text style={styles.title}>• Ameaças e Calúnias:</Text>
                    <Text style={styles.subtitle}>
                        Situações que envolvem intimidação ou difamação.
                    </Text>
                </View>

                <Text style={{marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>
                    Documentos Necessários para o Registro
                </Text>

                <View style={{flexDirection: 'column',  marginTop: 20}}>
                    <Text style={styles.title}>• Documento de Identidade com Foto (RG, CNH, etc.)</Text>
                    <Text style={styles.title}>• Cadastro de Pessoa Física (CPF)</Text>
                    <Text style={styles.title}>• Comprovante de Endereço (quando solicitado)</Text>
                    <Text style={styles.title}>• Informações sobre o Fato:</Text>
                    <Text style={styles.title}>• Documento de Identidade com Foto (RG, CNH, etc.)</Text>
                </View>

                <Text style={{marginTop: 20, fontSize: 16, fontWeight: 'bold'}}>Links Úteis</Text>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Delegacia Eletrônica da Polícia Civil de São Paulo:</Text>
                    <Text style={styles.subtitleButton}>Ligue 180</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/home")}>
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
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking} from "react-native";
import colors from "../styles/colors";

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ModalContent8() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="scale-balance" size={30} color='#8238A5' />
                    <Text style={{color: '#000', fontWeight: '700', fontSize: 20}}> Atendimento Online</Text>
                </View>

                <Text style={{marginBottom: 10, fontSize: 16}}>
                     Denúncias podem ser feitas pelo site gov.br/mdh ou apps oficiais. O Amparo fornece links 
                     e orientação sobre canais adequados.
                </Text>

                <Text style={{marginTop: 20, fontSize: 16, fontWeight: 'bold'}}>Links Úteis</Text>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Central de Atendimento à Mulher:</Text>
                    <Text style={styles.subtitle}>
                        • Serviço gratuito e confidencial oferecido pelo governo federal, disponível 24 horas por dia, todos os dias da semana.
                    </Text>
                    <Text style={styles.titlebutton}> • Telefone: 180</Text>
                    <Text style={styles.titlebutton}> • WhatsApp: (61) 9610-0180</Text>
                    <Text style={styles.titlebutton}> • E-mail: central180@mulheres.gov.br</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.gov.br/mulheres/pt-br/ligue180")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Mapa do Acolhimento:</Text>
                    <Text style={styles.subtitle}>
                        • Organização que oferece apoio psicológico e jurídico gratuito para mulheres que sofreram violência.
                    </Text>
                    <Text style={styles.titlebutton}> • Psicólogas e advogadas voluntárias oferecem suporte online</Text>
                    <Text style={styles.titlebutton}> • Localiza serviços públicos de apoio às mulheres em situação de violência.</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.mapadoacolhimento.org/")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Justiceiras:</Text>
                    <Text style={styles.subtitle}>
                        • Plataforma que oferece apoio jurídico e psicológico via WhatsApp, conectando vítimas a profissionais voluntários.
                    </Text>
                    <Text style={styles.titlebutton}> • WhatsApp: (61) 9610-0180</Text>
                    <Text style={styles.titlebutton}> • Oferece orientação jurídica, apoio psicológico e encaminhamentos para serviços especializados.</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.justiceiras.org.br/")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Plataforma SOS Mulher e DDM Online:</Text>
                    <Text style={styles.subtitle}>
                        • Plataformas digitais do Governo do Estado de São Paulo que oferecem atendimento online para mulheres vítimas de violência.
                    </Text>
                    <Text style={styles.titlebutton}> • Oferece orientação e encaminhamento para serviços de apoio.</Text>
                    <Text style={styles.titlebutton}> •Permite o registro de boletins de ocorrência online..</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.delegaciaeletronica.policiacivil.sp.gov.br/ssp-de-cidadao/home")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Canal de Ajuda SaferNet Brasil:</Text>
                    <Text style={styles.subtitle}>
                        • Serviço de apoio psicológico e jurídico online, com foco em vítimas de violência e crimes virtuais.
                    </Text>
                    <Text style={styles.titlebutton}> • Disponível por meio de chat online.</Text>
                    <Text style={styles.titlebutton}> • Oferece orientação e encaminhamento para serviços especializados.</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://new.safernet.org.br/helpline")}>
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
    titlebuttonsubtitle: {
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
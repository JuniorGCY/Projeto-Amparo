import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking} from "react-native";
import colors from "../styles/colors";

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ModalContent6() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="scale-balance" size={30} color='#8238A5' />
                    <Text style={{color: '#000', fontWeight: '700', fontSize: 20}}>Rede de Apoio</Text>
                </View>

                <Text style={{marginBottom: 20, fontSize: 16}}>
                  Procure CAPS, CRAS, CREAS, universidades e ONGs. O Amparo oferece escuta 
                  empática e encaminhamento, mas não terapia.
                </Text>

                <Text style={{marginTop: 10, fontSize: 16, fontWeight: 'bold'}}>Links Úteis</Text>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>CRAS (Centro de Referência de Assistência Social):</Text>
                    <Text style={styles.subtitleButton}>• Atende famílias em situação de vulnerabilidade social, 
                        oferecendo serviços como o PAIF (Serviço de Proteção e Atendimento Integral à Família) e orientação 
                        sobre direitos e serviços disponíveis.
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.gov.br/pt-br/servicos/acessar-o-cras-centro-de-referencia-da-assistencia-social")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>CREAS (Centro de Referência Especializado de Assistência Social):</Text>
                    <Text style={styles.subtitleButton}>
                        • Destinado a famílias e indivíduos que sofreram violação de direitos, 
                        incluindo violência doméstica, oferecendo atendimento especializado e acompanhamento psicossocial
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.gov.br/mds/pt-br/acoes-e-programas/suas/unidades-de-atendimento/centro-de-referencia-especializado-de-assistencia-social-creas")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>CRAM (Centro de Referência de Atendimento à Mulher):</Text>
                    <Text style={styles.subtitleButton}>
                        • Unidades que oferecem atendimento especializado a pessoas com sofrimento ou transtornos mentais, 
                          incluindo vítimas de violência, promovendo cuidado integral e reintegração social.
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.tjse.jus.br/portaldamulher/rede-de-enfrentamento/equipamentos/creams")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>CAPS (Centros de Atenção Psicossocial):</Text>
                    <Text style={styles.subtitleButton}>
                        • Espaços especializados que oferecem acolhimento psicológico, social e jurídico às mulheres em 
                        situação de violência, promovendo o fortalecimento da cidadania e autonomia
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps")}>
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
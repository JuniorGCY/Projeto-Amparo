import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking} from "react-native";
import colors from "../styles/colors";

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ModalContent5() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="scale-balance" size={30} color='#8238A5' />
                    <Text style={{color: '#000', fontWeight: '700', fontSize: 20}}>Feminicídio</Text>
                </View>

                <Text style={{marginBottom: 20, fontSize: 16}}>
                  É o assassinato de uma mulher por razão de gênero, previsto no art. 121, §2º, VI do 
                  Código Penal, com pena de até 30 anos de prisão
                </Text>

                <Text style={{marginBottom: 20, fontSize: 16, fontWeight: 'bold'}}>Direitos das Mulheres Vítimas de Feminicídio:</Text>

                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.title}>• Direito à Justiça:</Text>
                    <Text style={styles.subtitle}>
                        As vítimas têm o direito de ver os responsáveis punidos de forma rigorosa, com penas específicas para o feminicídio.
                    </Text>
                                        
                    <Text style={styles.title}>• Direito à Reparação:</Text>
                    <Text style={styles.subtitle}>
                        A Lei nº 14.717/2023 institui uma pensão especial para filhos e dependentes de mulheres vítimas de feminicídio, 
                        garantindo um salário mínimo mensal, desde que a renda familiar mensal por pessoa seja igual ou inferior a 
                        um quarto do salário mínimo.
                    </Text>           

                    <Text style={styles.title}>• Direito ao Acompanhamento:</Text>
                    <Text style={styles.subtitle}>
                        É assegurado o acompanhamento das investigações e processos judiciais relacionados ao feminicídio, 
                        com acesso a informações sobre o andamento dos casos.
                    </Text>
                </View>

                <Text style={{marginTop: 20, fontSize: 16, fontWeight: 'bold'}}>Links Úteis</Text>

               <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Central de Atendimento à Mulher</Text>
                    <Text style={styles.subtitleButton}>
                        • Serviço gratuito e confidencial que oferece orientação, registro de denúncias e encaminhamento 
                        para serviços especializados. Disponível 24 horas por dia, todos os dias da semana.
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.gov.br/mulheres/pt-br/ligue180")}>
                            <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Instituto Maria da Penha</Text>
                    <Text style={styles.subtitleButton}>
                        • Organização que promove ações de prevenção à violência contra a mulher e 
                        oferece informações sobre os direitos das mulheres.
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.institutomariadapenha.org.br/")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Mapa do Acolhimento:</Text>
                    <Text style={styles.subtitleButton}>
                        •Plataforma que disponibiliza informações sobre serviços públicos de apoio às mulheres 
                        em situação de violência, como delegacias, centros de referência e casas-abrigo
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.mapadoacolhimento.org/")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                
                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Associação Fala Mulher:</Text>
                    <Text style={styles.subtitleButton}>
                        • Organização que atua no combate à violência doméstica contra a mulher, 
                        oferecendo apoio psicológico, jurídico e social.
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.falamulher.ong.br/")}>
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
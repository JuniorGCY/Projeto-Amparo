import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking} from "react-native";
import colors from "../styles/colors";

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function ModalContent7() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="scale-balance" size={30} color='#8238A5' />
                    <Text style={{color: '#000', fontWeight: '700', fontSize: 20}}>Sigilo e Proteção</Text>
                </View>

                <Text style={{marginBottom: 20, fontSize: 16}}>
                     Atendimentos são sigilosos por lei. Nenhuma informação pode ser divulgada sem consentimento.
                </Text>

                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.title}>• Sigilo do Nome da Vítima:</Text>
                    <Text style={styles.subtitle}>
                        A Lei nº 14.857/2024 alterou a Lei Maria da Penha (Lei nº 11.340/2006) para assegurar o sigilo do nome da vítima em 
                        processos judiciais relacionados a crimes de violência doméstica e familiar contra a mulher. 
                        Essa medida visa proteger a identidade da vítima, evitando a revitimização e o constrangimento público. 
                        O nome do agressor e os dados do processo podem ser divulgados, garantindo a transparência do julgamento.
                    </Text>
                                        
                    <Text style={styles.title}>• Sigilo de Dados Pessoais:</Text>
                    <Text style={styles.subtitle}>
                        A Lei nº 14.994/2024, conhecida como "Pacote Antifeminicídio", reforça a proteção dos dados pessoais das mulheres 
                        vítimas de violência doméstica e seus dependentes. Estabelece que os dados pessoais armazenados em bancos de dados 
                        públicos ou privados são sigilosos, mesmo que anteriores à situação de violência. O acesso é restrito a 
                        juízes, Ministério Público e órgãos competentes do poder público, e a Autoridade Nacional de Proteção de Dados 
                        (ANPD) é responsável pela fiscalização e aplicação de sanções em caso de descumprimento
                    </Text>           

                    <Text style={styles.title}>• Proteção de Dados Cadastrais:</Text>
                    <Text style={styles.subtitle}>
                        Em alguns estados, como o Amazonas, leis estaduais asseguram o sigilo dos dados cadastrais das mulheres em situação de 
                        risco decorrente de violência doméstica e intrafamiliar, bem como dos dados de seus filhos e outros membros das famílias. Essas informações são mantidas em sigilo nos cadastros dos órgãos e secretarias estaduais, visando evitar que o agressor localize a vítima por meio desses dados. SAPL
                    </Text>
                </View>

                <Text style={{marginTop: 20, fontSize: 16, fontWeight: 'bold'}}>Links Úteis</Text>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Lei nº 14.857/2024 (Sigilo do Nome da Vítima):</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.jusbrasil.com.br/artigos/o-sigilo-trazido-pela-lei-14857-24-e-sua-aplicacao-aos-inqueritos-policiais-que-apurem-violencia-domestica-e-familiar-contra-a-mulher/2507488253?msockid=24b6ff1f9fa26ce90057eb629e136d3e")}>
                        <Text style={styles.linkText}>Clique para ir ao site.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Lei nº 14.994/2024 (Pacote Antifeminicídio)</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.jusbrasil.com.br/artigos/pacote-antifeminicidio-a-lei-n-14994-2024-e-a-resposta-definitiva-ou-o-inicio-de-um-novo-desafio/5129490622?msockid=24b6ff1f9fa26ce90057eb629e136d3e")}>
                        <Text style={styles.linkText}>Clique para saber como funciona.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonStyle}>
                    <Text style={styles.titlebutton}>Lei nº 14.857/2024 (Sigilo do Nome da Vítima)</Text>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.jusbrasil.com.br/artigos/o-sigilo-trazido-pela-lei-14857-24-e-sua-aplicacao-aos-inqueritos-policiais-que-apurem-violencia-domestica-e-familiar-contra-a-mulher/2507488253?msockid=24b6ff1f9fa26ce90057eb629e136d3e")}>
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
import React, {useState} from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {MaterialCommunityIcons,  Feather} from '@expo/vector-icons'
import colors from "../styles/colors";
import { RFValue } from "react-native-responsive-fontsize";

import * as Print from 'expo-print'
import { shareAsync } from "expo-sharing";
import * as FileSystem from 'expo-file-system'

import CheckBox from "expo-checkbox";
import { DrawerActions } from "@react-navigation/native";

export default function ManualDeFuga({navigation}) {
    const [situacao, setSituacao] = useState("");
    const [localSeguro, setLocalSeguro] = useState("");
    const [contatos, setContatos] = useState("");
    const [recursos, setRecursos] = useState("");
    const [planejamento, setPlanejamento] = useState("");
    const [observacoes, setObservacoes] = useState("");

    const [selectedOptions, setSelectedOptions] = useState({
        RG_CPF: false,
        Carteira_de_Trabalho: false,
        Comprovante_de_Residencia: false,
        MedicamentosEssenciais: false,
        Cartões_Bancários : false,
        CertificadodeNascimento: false,
        ComprovantedeRenda: false,
        CartõesDoSUS: false,
        ChavesExtras: false,
        DocumentosDosFilhos: false
    })

    const [selectedOptions2, setSelectedOptions2] = useState({
        Informarpessoadeconfiançasobreoplano: false,
        Guardardinheiroemlocalseguro: false,
        Identificarrotasdefuga: false,
        Documentarevidênciasdeviolência : false,
        Prepararbolsascomitensessenciais: false,
        Memorizarnúmerosdeemergência : false,
        Prepararosfilhosetiver: false,
        Buscarorientacaojurídicaprévia: false
    })

    const labels = {
        RG_CPF: "RG/CPF",
        Carteira_de_Trabalho: "Carteira de Trabalho",
        Comprovante_de_Residencia: "Comprovante de Residência",
        MedicamentosEssenciais: "Medicamentos Essenciais",
        Cartões_Bancários : "Cartões Bancários",
        CertificadodeNascimento: "Certificado de Nascimento (Própria e dos filhos)",
        ComprovantedeRenda: "Comprovante de Renda",
        CartõesDoSUS: "Cartões do SUS",
        ChavesExtras: "Chaves Extras",
        DocumentosDosFilhos: "Documentos Dos Filhos (Escola, Saúde)",
        Informarpessoadeconfiançasobreoplano: "Informar pessoa de confiança sobre o plano",
        Guardardinheiroemlocalseguro: "Guardar dinheiro em local seguro",
        Identificarrotasdefuga: "Identificar rotas de fuga",
        Documentarevidênciasdeviolência : "Documentar evidências de violência ",
        Prepararbolsascomitensessenciais: "Preparar bolsas com itens essenciais",
        Memorizarnúmerosdeemergência : "Memorizar números de emergência",
        Prepararosfilhosetiver: "Preparar os filhos (se tiver)",
        Buscarorientacaojurídicaprévia: "Buscar orientação jurídica prévia"
    }   

    const handleToggle = (key) => {
        setSelectedOptions({...selectedOptions, [key]: !selectedOptions[key]})
    }

    const handleToggle2 = (key) => {
        setSelectedOptions2({...selectedOptions2, [key]: !selectedOptions2[key]})
    }

    async function gerarPDF() {
        const documentosSelecionados = Object.keys(selectedOptions)
            .filter(key => selectedOptions[key])
            .map(key => `<li>${labels[key]}</li>`)
            .join("");

        const medidasSelecionadas = Object.keys(selectedOptions2)
            .filter(key => selectedOptions2[key])
            .map(key => `<li>${labels[key]}</li>`)
            .join("");

        try {
            const html = `
                    <html>
                    <head>
                        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
                        <style>
                        body {
                            font-family: Arial, sans-serif;
                            padding: 20px;
                            line-height: 1.5;
                        }
                        h1 {
                            text-align: center;
                            color: #A459D1;
                        }
                        h2 {
                            margin-top: 30px;
                            color: #444;
                        }
                        .section {
                            margin-top: 20px;
                        }
                        .box {
                            background: #f8f8f8;
                            padding: 10px;
                            border-radius: 8px;
                            border: 1px solid #ccc;
                        }
                        ul {
                            margin-top: 5px;
                        }
                        </style>
                    </head>
                    <body>
                        <h1>Plano de Segurança Pessoal</h1>

                        <div class="section">
                        <h2>1. Informações Iniciais</h2>
                        <div class="box">
                            <p><strong>Situação atual:</strong> ${situacao || "Não informado"}</p>
                            <p><strong>Local seguro:</strong> ${localSeguro || "Não informado"}</p>
                            <p><strong>Contatos de confiança:</strong> ${contatos || "Não informado"}</p>
                        </div>
                        </div>

                        <div class="section">
                        <h2>2. Documentos Importantes</h2>
                        <div class="box">
                            ${
                            documentosSelecionados.length > 0
                                ? `<ul>${documentosSelecionados}</ul>`
                                : "<p>Nenhum documento selecionado.</p>"
                            }
                        </div>
                        </div>

                        <div class="section">
                        <h2>3. Recursos Financeiros</h2>
                        <div class="box">
                            <p>${recursos || "Não informado"}</p>
                        </div>
                        </div>

                        <div class="section">
                        <h2>4. Medidas de Segurança a Tomar</h2>
                        <div class="box">
                            ${
                            medidasSelecionadas.length > 0
                                ? `<ul>${medidasSelecionadas}</ul>`
                                : "<p>Nenhuma medida selecionada.</p>"
                            }
                        </div>
                        </div>

                        <div class="section">
                        <h2>5. Planejamento da Saída</h2>
                        <div class="box">
                            <p>${planejamento || "Não informado"}</p>
                        </div>
                        </div>

                        <div class="section">
                        <h2>6. Observações Adicionais</h2>
                        <div class="box">
                            <p>${observacoes || "Não informado"}</p>
                        </div>
                        </div>

                    </body>
                    </html>
                    `;

            const { uri } = await Print.printToFileAsync({
            html,
            base64: false,
            });
            console.log("PDF gerado em:", uri);

            const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

            if (!permissions.granted) {
                console.log("Permissão negada.");
                return;
            }

            const fileUri = await FileSystem.StorageAccessFramework.createFileAsync(
            permissions.directoryUri,
            "Manual_De_Fuga",
            "application/pdf"
            );

            const pdfBase64 = await FileSystem.readAsStringAsync(uri, {
              encoding: FileSystem.EncodingType.Base64,
           });

           await FileSystem.writeAsStringAsync(fileUri, pdfBase64, {
              encoding: FileSystem.EncodingType.Base64,
            });

            console.log("PDF salvo em:", fileUri);
            await shareAsync(uri);
        } catch (error) {
            console.error("Erro ao gerar PDF:", error);
        }
    }

    return (    
      <ScrollView style={styles.scrollView}>

            <View style={styles.header}>
                <TouchableOpacity style={{marginStart: 20, marginEnd: 20}} onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <MaterialCommunityIcons name="menu" size={RFValue(30)}  color='#7B4DFA'/>
                </TouchableOpacity>

                <MaterialCommunityIcons name="shield" size={RFValue(25)} color='#7B4DFA'/>
                <Text style={{fontSize: RFValue(22),color: "#7B4DFA", fontWeight: '900', textAlign: 'center'}}> Manual de Fuga</Text>
            </View>

            <View style={styles.body}>

                <View style={styles.mainCard}>
                    <Text style={{fontSize: RFValue(16),fontWeight: '900', textAlign: 'center', color: "#7B4DFA"}}>Plano de Segurança Pessoal</Text>
                    <Text style={{fontSize: RFValue(12),fontWeight: '700', textAlign: 'center', color: "#7B4DFA", marginBottom: 10}}>Preencha as informações abaixo para criar seu plano de saída segura</Text>

                    <Text style={styles.textCard}>Descreva brevemente sua situação atual:</Text>
                    <TextInput 
                      style={styles.TextInput}
                      placeholder="Descreva sua situação do seu jeito confortável"
                      value={situacao}
                      onChangeText={setSituacao}/>

                    <Text style={styles.textCard}>Local seguro para onde deseja ir:</Text>
                    <TextInput 
                      style={styles.TextInput}
                      placeholder="Casa de familiar, amigo, abrigo etc."
                      value={localSeguro}
                      onChangeText={setLocalSeguro}/>

                    <Text style={styles.textCard}>Contatos de confiança:</Text>
                    <TextInput 
                      style={styles.TextInput}
                      placeholder="Nome e telefones das pessoas que podem ajudar."
                      value={contatos}
                      onChangeText={setContatos}/>

                    <Text style={styles.textCard}>Documentos importantes para Levar</Text>
                    {Object.keys(selectedOptions).map((key, index) => (
                        <View key={index} style={styles.checkBox}>
                            <CheckBox 
                              value={selectedOptions[key]}
                              onValueChange={ (newValue) => setSelectedOptions((prev) => ({
                                ...prev, [key]: newValue
                              }))}
                              color={selectedOptions[key] ? '#4CAF50' : '#444'}/>
                            <Text style={{fontWeight: '600', marginStart: 5, color: '#222'}}>{labels[key]}</Text>
                        </View>
                    ))}

                   <Text style={styles.textCard}>Recursos Financeiros Disponíveis</Text>
                   <TextInput 
                      style={styles.TextInput}
                      placeholder="Dinheiro guardado, contas bancárias"
                      value={recursos}
                      onChangeText={setRecursos}/>
                    <Text style={styles.textCard}>Medidas de segurança a tomar</Text>

                     {Object.keys(selectedOptions2).map((key, index) => (
                        <View key={index} style={styles.checkBox}>
                            <CheckBox 
                              value={selectedOptions2[key]}
                              onValueChange={ (newValue) => setSelectedOptions2((prev) => ({
                                ...prev, [key]: newValue
                              }))}
                              color={selectedOptions2[key] ? '#4CAF50' : '#444'}/>
                            <Text style={{fontWeight: '600', marginStart: 5, color: '#222'}}>{labels[key]}</Text>
                        </View>
                    ))}

                    <Text style={styles.textCard}>Planejamento Detalhado da saida: </Text>
                    <TextInput 
                      style={styles.TextInput}
                      placeholder="Descreva quando e como pretende sair. Horários, transporte.."
                      value={planejamento}
                      onChangeText={setPlanejamento}/>
                      
                    <Text style={styles.textCard}>Observações Adicionais: </Text>
                    <TextInput 
                      style={styles.TextInput}
                      placeholder="Outras informações importantes para seu plano"
                      value={observacoes}
                      onChangeText={setObservacoes}/>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity  onPress={gerarPDF}>
                          <View style={styles.buttonCard}>
                             <Feather name="download" size={RFValue(20)} color='#fff'/>
                             <Text style={{fontSize: RFValue(10), fontWeight: 'bold', color: colors.background}}>Salvar como PDF</Text>
                          </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.cardSeguranca}>
                        <View  style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="alert" size={RFValue(26)} color="#FF4B4B"/>
                            <Text style={styles.titleCardSeuranca}>Importante para sua segurança</Text>
                        </View>

                        {[
                            "Mantenha este plano em local seguro e sigiloso",
                            "Compartilhe apenas com pessoas de extrema confiança",
                            "Atualize o plano sempre que necessário",
                            "Em emergência, ligue 190 (Polícia) ou 180 (Central da Mulher)",
                            "Procure sempre orientação profissional especializada",
                        ].map((tip, index) => (
                            <Text key={index} style={styles.textCardSeguranca}>• {tip}</Text>
                        ))}
                    </View>

                </View>
            </View>
                
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "#F9F9FB",
    },
    header: {
        width: "100%",
        minHeight: 100,
        maxHeight: 120,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        backgroundColor: "#fff",
        elevation: 4,
        borderBottomLeftRadius: 40
    },
    body: {
        maxWidth: '92%',
        minWidth: '86%',
        height: 'auto',
        marginTop: 30,
        marginHorizontal: 10,
        padding: 10,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.background,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 3
    },
    checkBox: {
        flexDirection: 'row'
    },
    cardSeguranca: {
        maxWidth: '96%',
        minWidth: '90%',
        maxHeight: 320,
        minHeight: 280,
        alignSelf: 'center',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
        elevation: 2
    },
    buttonCard: {
        maxWidth: RFValue(250),
        minWidth: RFValue(140),
        maxHeight: RFValue(65),
        minHeight: RFValue(45),
        marginTop: 15,
        flexDirection: 'row',
        borderRadius:  20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7B4DFA'
    },
    TextInput: {
        width: 350,
        height: 40,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    textCard: {
        fontSize: RFValue(12),
        fontWeight: '600',
        color: '#222',
        marginTop: 10,
        marginBottom: 5
    },
     titleCardSeuranca: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: RFValue(15),
        color: '#FF3B30'
    },
    textCardSeguranca: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: RFValue(13),
        fontWeight: '500',
        color: '#FF3B30',
        textAlign: 'left'
    }
    })
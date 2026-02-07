import React, {useState}from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { DrawerActions } from "@react-navigation/native";
import colors from "../styles/colors";
import { Linking } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import ModalContentPsi1 from './ModalContentPsi1'
import ModalContentPsi2 from './ModalContentPsi2'
import ModalContentPsi3 from './ModalContentPsi3'

export default function ApoioPsicoloico({navigation}) {
    const [selectedContent, setSelecedContent] = useState(null)
    const [visibleModal, setVisibleModal] = useState(false)

    const handleModal = (content) => {
        setVisibleModal(true),
        setSelecedContent(content)
    }

    const ligar = (numero) => {
        Linking.openURL(`tel:${numero}`);
      };

    const renderModal = () => {
        switch (selectedContent) {
            case 'Content1':
                return <ModalContentPsi1 />
            case 'Content2':
                return <ModalContentPsi2 />
            case 'Content3':
                return <ModalContentPsi3 />
            default:
                return null;
        }
    }
    return (
        <ScrollView style={styles.scrollView}>
             <View style={styles.header}>
                <TouchableOpacity style={{marginStart: 20, marginEnd: 20}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <MaterialCommunityIcons name="menu" size={RFValue(30)} color='#7B4DFA' />
                </TouchableOpacity>
                        
                <MaterialCommunityIcons name="heart" size={RFValue(26)} color='#7B4DFA'/>
                <Text style={{fontSize: RFValue(20),color: '#7B4DFA', fontWeight: '900', marginStart: 15, textAlign: 'center'}}>Apoio Psicológico</Text>
            </View>

            <View style={styles.cardPesquisa}>
                <Text style={{fontWeight: '900', textAlign: 'center', color: '#7B4DFA', marginTop: 5, marginBottom: 5}}>Encontre Apoio Psicológico</Text>
                <TextInput 
                  placeholder="Buscar por serviços de apoio psicologico gratuitos e acessiveis em sua região"
                  placeholderTextColor='#222'
                  style={{borderWidth: 1, borderColor: '#444', borderRadius: 10}}/>
            </View>

            <Text style={{fontWeight: '900', fontSize: RFValue(15), marginTop: 30, marginStart: 20, alignItems: 'flex-start', color: '#7B4DFA'}}>Apoio Profissional</Text>

            <ScrollView horizontal style={{margin: 10, padding: 5}} showsHorizontalScrollIndicator={false}>
                <View style={styles.cardSuporteProfissional}>
                    <ScrollView nestedScrollEnabled={true} >
                    <Text style={styles.cardTitleSuporte}>Centro de Valorização da Vida (CVV)</Text>
                    <Text style={styles.cardSubtitleSuporte}>Apoio emocional e prevenção do suicidio. Atendimento voluntário e gratuito</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="phone" size={20} color='#252525ff'/>
                        <Text style={styles.cardTextSuporte}>188</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="clock-alert-outline" size={20} color='#000'/>
                        <Text style={styles.cardTextSuporte}>24 horas</Text>
                    </View>
                    
                    <Text style={{fontWeight: '500', fontSize: RFValue(14), marginBottom: 10, color: '#222'}}>Serviços oferecidos:</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Chat Online 7 dias</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Ligação 24 horas</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Atendimento online e presencial</Text>
                    </View>
                    
                    <Text style={{backgroundColor: '#5fff59ff', color: '#000', fontWeight: '400', width: 140}}>Atendimento Gratuito</Text>

                    <View style={{width: '100%',height: 1, backgroundColor: '#a3a3a3ff', marginTop: 10, marginBottom: 10}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => ligar("188")} style={{flexDirection: 'row'}}>
                            <MaterialCommunityIcons name="phone" size={20} color='#FF0000'/>
                            <Text style={{fontWeight: '500', color: '#FF0000', marginStart: 10}}>Ligar para agendar</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>             
                
                <View style={styles.cardSuporteProfissional}>
                    <ScrollView nestedScrollEnabled={true} >
                    <Text style={styles.cardTitleSuporte}>Terapia Online - Zenklub</Text>
                    <Text style={styles.cardSubtitleSuporte}>Plataforma de terapia online com psicólogos certificados.</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="location-exit" size={20} color='#000'/>
                        <Text style={styles.cardTextSuporte}>Online: App Zenklub</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="clock-alert-outline" size={20} color='#000'/>
                        <Text style={styles.cardTextSuporte}>Conforme agendamento</Text>
                    </View>
                    
                    <Text style={{fontWeight: '500', fontSize: 16, marginBottom: 10, color: '#222'}}>Serviços oferecidos:</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Sessões individuais</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Psicologia/Psicanálise/Terapia/Nutrição</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Atendimento online</Text>
                    </View>
                    
                    <Text style={{backgroundColor: '#5fff59ff', color: '#000', fontWeight: '400', width: 140}}>Atendimento Pago</Text>

                    <View style={{width: '100%',height: 1, backgroundColor: '#a3a3a3ff', marginTop: 10, marginBottom: 10}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => ligar("188")} style={{flexDirection: 'row'}}>
                            <MaterialCommunityIcons name="clipboard-check" size={20} color='#FF0000'/>
                            <Text style={{fontWeight: '500', color: '#FF0000', marginStart: 10}}>Acessar Site</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>

                <View style={styles.cardSuporteProfissional}>
                    <ScrollView nestedScrollEnabled={true} >
                    <Text style={styles.cardTitleSuporte}>Núcleo de Psicologia da Universidade</Text>
                    <Text style={styles.cardSubtitleSuporte}>Serviço de psicologia comunitária com foco em situações de violência e trauma.</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="location-exit" size={20} color='#000'/>
                        <Text style={styles.cardTextSuporte}>Rua das Flores, 500 - São Paulo/SP</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="phone" size={20} color='#252525ff'/>
                        <Text style={styles.cardTextSuporte}>(11) 2222-3333</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="clock-alert-outline" size={20} color='#000'/>
                        <Text style={styles.cardTextSuporte}>Segunda a sexta, 9h às 17h</Text>
                    </View>
                    
                    <Text style={{fontWeight: '500', fontSize: 16, marginBottom: 10, color: '#222'}}>Serviços oferecidos:</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Atendimento psicológico gratuito</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Orientação familiar</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Grupos terapêuticos</Text>
                    </View>
                    
                    <Text style={{backgroundColor: '#5fff59ff', color: '#000', fontWeight: '400', width: 140}}>Atendimento Gratuito</Text>

                    <View style={{width: '100%',height: 1, backgroundColor: '#a3a3a3ff', marginTop: 10, marginBottom: 10}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={ () => ligar("")}>
                            <MaterialCommunityIcons name="phone" size={20} color='#FF0000'/>
                            <Text style={{fontWeight: '500', color: '#FF0000', marginStart: 10}}>Ligar para agendar</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>

                <View style={styles.cardSuporteProfissional}>
                    <ScrollView nestedScrollEnabled={true} >
                    <Text style={styles.cardTitleSuporte}>Casa da Mulher Brasileira</Text>
                    <Text style={styles.cardSubtitleSuporte}>Atendimento psicológico especializado para mulheres em situação de violência.</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="location-exit" size={20} color='#000'/>
                        <Text style={styles.cardTextSuporte}>Capitais e grandes cidades</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="phone" size={20} color='#252525ff'/>
                        <Text style={styles.cardTextSuporte}>Presencial: 180</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="clock-alert-outline" size={20} color='#000'/>
                        <Text style={styles.cardTextSuporte}>24 horas</Text>
                    </View>
                    
                    <Text style={{fontWeight: '500', fontSize: 16, marginBottom: 10, color: '#222'}}>Serviços oferecidos:</Text>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Atendimento psicológico gratuito</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Orientação familiar</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="check-circle-outline" size={20} color='#00ff15ff'/>
                        <Text style={styles.cardTextSuporte}>Grupos terapêuticos</Text>
                    </View>
                    
                    <Text style={{backgroundColor: '#5fff59ff', color: '#000', fontWeight: '400', width: 140}}>Atendimento Gratuito</Text>

                    <View style={{width: '100%',height: 1, backgroundColor: '#a3a3a3ff', marginTop: 10, marginBottom: 10}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.gov.br/mulheres/pt-br/acesso-a-informacao/acoes-e-programas/casa-da-mulher-brasileira")} style={{flexDirection: 'row'}}>
                            <MaterialCommunityIcons name="clipboard-check" size={20} color='#FF0000'/>
                            <Text style={{fontWeight: '500', color: '#FF0000', marginStart: 10}}>Acessar site</Text>
                        </TouchableOpacity>
                        
                    </View>
                    </ScrollView>
                </View>
            </ScrollView>

            <View style={styles.cardExercicios}>
                <Text style={{fontSize: RFValue(14), color: '#7B4DFA', fontWeight: '900', margin: 10}}>Exercícios de Autocuidado</Text>

                <View style={{width: '100%', height: 1, backgroundColor: '#d3d3d3ff', marginBottom: 10}}></View>

                <TouchableOpacity onPress={ () => handleModal('Content1')}>
                    <View style={styles.cardLite}>
                    <Text style={{color: '#7B4DFA', fontWeight: '800', fontSize: RFValue(10)}}>Respiração para Redução de Ansiedade</Text>
                    <Text style={{fontSize: RFValue(9), color: '#222', fontWeight: 500}}>Exercícios de Respiração profunda para acalmar o sistema nervoso em mom...</Text>

                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <MaterialCommunityIcons name="clock" size={RFValue(16)} color='#000'/>
                        <Text style={{marginStart: 10, fontSize: RFValue(11), color: '#222', fontWeight: 500}}>5 Minutos</Text>
                    </View>
                </View>
                </TouchableOpacity>
                
                <View style={{width: '100%', height: 1, backgroundColor: '#d3d3d3ff', marginBottom: 10}}></View>

                <TouchableOpacity onPress={ () => handleModal('Content2')}>
                    <View style={styles.cardLite}>
                    <Text style={{color: '#7B4DFA', fontWeight: '800', fontSize: RFValue(10)}}>Escaneamento Corporal para Redução de Estresse</Text>
                    <Text style={{fontSize: RFValue(9), color: '#222', fontWeight: 500}}>Técnica de atenção plena para reconectar com o corpo e reduzir tensões...</Text>

                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <MaterialCommunityIcons name="clock" size={RFValue(16)} color='#000'/>
                        <Text style={{marginStart: 10, fontSize: RFValue(11), color: '#222', fontWeight: 500}}>10-15 Minutos</Text>
                    </View>
                </View>
                </TouchableOpacity>
                
                <View style={{width: '100%', height: 1, backgroundColor: '#d3d3d3ff', marginBottom: 10}}></View>

                <TouchableOpacity onPress={() => handleModal('Content3')}>
                    <View style={styles.cardLite}>
                    <Text style={{color: '#7B4DFA', fontWeight: '800', fontSize: RFValue(10)}}>Diário de Gratidão</Text>
                    <Text style={{fontSize: RFValue(9), color: '#222', fontWeight: 500}}>Prática de registro diário para reconhecer aspectos positivos mesmo em...</Text>

                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <MaterialCommunityIcons name="clock" size={RFValue(16)} color='#000'/>
                        <Text style={{marginStart: 10, fontSize: RFValue(11), color: '#222', fontWeight: 500}}>5 Minutos</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <Modal 
                  visible={visibleModal}
                  animationType="slide"
                  onRequestClose={ () => setVisibleModal(false)}
                  transparent={false}>

                    <ScrollView>
                        <View>
                            {renderModal()}
                        </View>
                    </ScrollView>
                </Modal>
                
            </View>

            <ScrollView  style={styles.cardAutoCuidado}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={styles.cardtitle}>Cuide da Sua Saúde Mental</Text>
                    </View>

                    {[
                        "Redução de sintomas de ansiedade e estresse",
                        "Maior clareza para tomar decisões",
                        "Fortalecimento da autoestima",
                        "Reconexão com seus valores e necessidades",
                        "Mantenha uma rotina de sono regular",
                        "Evite isolamento social"
                    ].map((tip, index) => (
                        <Text key={index} style={styles.cardSubTitle}>• {tip}</Text>
                    ))}
                </View>
            </ScrollView>           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#F9F9FB'
    },
    header: {
        width: "100%",
        maxHeight: 110,
        minHeight: 100,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        elevation: 4,
        borderBottomLeftRadius: 40,
    },
    cardPesquisa: {
        maxWidth: '93%',
        minWidth: '85%',
        maxHeight: 110, 
        minHeight: 90,
        padding: 10,
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#eee',
        elevation: 4
    },
    cardSuporteProfissional: {
        maxWidth: RFValue(270),
        minWidth: RFValue(200),
        maxHeight: RFValue(220),
        minHeight: RFValue(180),
        marginTop: 10,
        marginHorizontal: 10,
        padding: 20,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 4
    },
    cardTitleSuporte: {
        fontWeight: '500', 
        color: '#222',
        fontSize: RFValue(13), 
        marginTop: 5
    },
    cardSubtitleSuporte: {
        fontWeight: '400', 
        color: '#222',
        fontSize: RFValue(12), 
        marginTop: 5, 
        marginBottom: 10
    },
    cardTextSuporte: {
        fontSize: RFValue(10),
        color: '#222',
        marginStart: 10, 
        marginBottom: 5
    },
    cardLite: {
        width: 'auto', 
        height: 'auto',
        paddingStart: 10,
        marginBottom: 10,
        backgroundColor: '#fff', 
        flexDirection: 'column', 
        borderRadius: 8
    },
    cardExercicios: {
        maxWidth: '90%',
        minWidth: '85%',
        maxHeight: 400,
        minHeight: 300,
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 3
    },
    cardAutoCuidado: {
        maxWidth: '90%',
        minWidth: '80%',
        maxHeight: 350,
        minHeight: 240,
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 20,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 3
    },
    cardtitle: {
        color: '#7B4DFA', 
        fontSize: RFValue(16), 
        fontWeight: '900', 
        margin: 10
    },
    cardSubTitle: {
        color: '#7B4DFA', 
        fontSize: RFValue(13), 
        fontWeight: '700', 
        margin: 5
    }

})
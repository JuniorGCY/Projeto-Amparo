import React, {useRef, useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";

import { SafeAreaView} from "react-native-safe-area-context";
import {MaterialIcons} from "@expo/vector-icons"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { DrawerActions } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import RecordAudio from "../components/RecordAudio";
import databaseService from "../components/dataBase"

export default function GravarAudio({navigation}) { 
    const recordRef = useRef()
    const [isRecording, setIsRecording] = useState(false)
    const [duration, setDuration] = useState(0);
    const [audios, setAudios] = useState([]);

    const formatTime = (millis) => {
        const totalSeconds = Math.floor(millis / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        (async () => {
          await databaseService.init();
        })();
      }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (recordRef.current) {
                setIsRecording(recordRef.current.isRecording);
                setDuration(recordRef.current.duration);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const loadAudios = async () => {
        try {
            console.log("📀 Carregando áudios do banco...");
            const db = await databaseService.getDatabase();
            const results = await db.getAllAsync("SELECT * FROM audio_records ORDER BY id DESC;");
            console.log(`✅ ${results.length} áudios carregados`);
            setAudios(results);
        } catch (error) {
            console.error("❌ Erro ao carregar áudios:", error);
            setAudios([]);
        }
    };

    useEffect(() => {
        loadAudios();
    }, []);

    const handleToggleRecording = () => { 
        if (isRecording) {
            recordRef.current.stopRecording();
        } else {
            recordRef.current.startRecording();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{flexDirection: 'row', marginStart: 10, alignItems: 'center', justifyContent: 'flex-start'}} onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <MaterialCommunityIcons name="menu" size={RFValue(30)} color='#7B4DFA' />
                </TouchableOpacity>

                <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', flex: 1}}>
                    <MaterialCommunityIcons name="microphone" size={RFValue(30)} color='#7B4DFA' />
                    <Text style={styles.headerTitle}>Gravar Aúdio</Text>
                </View>
            </View>

            <SafeAreaView style={{flex: 1}}>
                <ScrollView contentContainerStyle={{padding: 20}}>

                    <View style={styles.card}>
                        <View style={styles.tagCard}>
                            <Text style={{color: '#fff', fontSize: RFValue(16), fontWeight: '800',textAlign: 'center'}}>Gravação de Aúdio</Text>
                            <Text style={{color: '#fff', fontSize: RFValue(12), fontWeight: '700', textAlign: 'center'}}>
                                Grave evidências de áudio de forma segura e automática
                            </Text>
                        </View>

                        <Text style={{color: '#7B4DFA', fontSize: RFValue(18), fontWeight: '800',textAlign: 'center', marginTop: 10}}>
                            Toque para iniciar a gravação
                        </Text>

                        <TouchableOpacity onPress={handleToggleRecording}>
                            <View style={[
                                styles.recordButton, 
                                isRecording && styles.recordingButton
                            ]}>
                                <MaterialCommunityIcons 
                                    name={isRecording ? "stop" : "microphone"} 
                                    size={RFValue(30)} 
                                    color='#fff' 
                                />
                            </View>
                            <View style={{width: 100, height: 100, borderRadius: 50, backgroundColor: '#FF3B30', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                                <MaterialCommunityIcons name="microphone" size={RFValue(30)} color='#fff' />
                            </View>
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                          {isRecording ? (
                            <>
                            <Text
                                style={{
                                color: '#FF0000',
                                fontSize: RFValue(18),
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginBottom: 5,
                                }}
                            >
                                🔴 Gravando...
                            </Text>
                            <Text
                                style={{
                                color: '#7B4DFA',
                                fontSize: RFValue(20),
                                fontWeight: 'bold',
                                }}
                            >
                                {formatTime(duration)}
                            </Text>
                            </>
                        ) : (
                            <Text
                            style={{
                                color: '#7B4DFA',
                                fontSize: RFValue(20),
                                fontWeight: 'bold',
                            }}
                            >
                            {duration > 0 ? formatTime(duration) : '00:00'}
                            </Text>
                        )}
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <MaterialIcons name="location-on" size={RFValue(16)} color='#7B4DFA'/>
                            <Text style={{fontSize: RFValue(14), color: '#7B4DFA', fontWeight: '500'}}>Localização: Localização não disponível</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.tagCard}>
                            <Text style={{color: '#fff', fontSize: RFValue(16), fontWeight: '800',textAlign: 'center'}}>
                                Histórico de Gravações
                            </Text>
                            <Text style={{color: '#fff', fontSize: RFValue(12), fontWeight: '700', textAlign: 'center'}}>
                                Suas gravações são salvas automaticamente com data hora e localização
                            </Text>
                        </View>

                        <ScrollView style={{ width: '100%', maxHeight: 200, marginTop: 10 }} nestedScrollEnabled={true}>
                            {audios.length === 0 ? (
                                <Text style={{ fontSize: RFValue(14), textAlign: 'center' }}>
                                Nenhuma gravação encontrada. Faça sua primeira gravação acima.
                                </Text>
                            ) : (
                                audios.map((item) => (
                                <View
                                    key={item.id}
                                    style={{
                                    backgroundColor: '#fff',
                                    borderWidth: 1,
                                    borderColor: '#eee',
                                    padding: 10,
                                    marginVertical: 5,
                                    marginHorizontal: 10,
                                    borderRadius: 8,
                                    elevation: 2
                                    }}
                                >
                                    <Text style={{ fontWeight: 'bold', color: '#7B4DFA' }}>Áudio #{item.id}</Text>
                                    <Text style={{color: '#222'}}>Duração: {item.duration.toFixed(1)}s</Text>
                                    <Text style={{color: '#222'}}>Data: {new Date(item.created_at).toLocaleString()}</Text>
                                </View>
                                ))
                            )}
                        </ScrollView>

                    </View>

                    <View style={styles.card2}>
                        <Text style={{fontWeight: '900', fontSize: RFValue(18), color: '#7B4DFA', alignSelf: 'center'}}>
                            🔒 Segurança e Privacidade:
                        </Text>

                        {[
                            "As gravações são salvas localmente no seu dispositivo",
                            "Inclui automaticamente data, hora e localização (se permitida)",
                            "Você controla quando e com quem compartilhar",
                            "Mantenha backups seguros das gravações importantes",
                            "Use fones de ouvido para maior discrição",
                        ].map((tip, index) => (
                            <Text key={index} style={styles.card2Text}>• {tip}</Text>
                        ))}

                    </View>

                    <RecordAudio ref={recordRef} onRecordingSaved={loadAudios} />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
    headerTitle: {
        fontSize: RFValue(22),
        fontWeight: "900",
        color: "#7B4DFA",
    },
    title: {    
        fontSize: RFValue(20),
        fontWeight: 'bold',
        color: '#A459D1'
    },
    card: {
        maxWidth: '98%',
        minWidth: '90%',
        minHeight: 290,
        maxHeight: 390,
        marginBottom: 20,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 4
    },
    tagCard: {
        width: '100%',
        backgroundColor: '#7B4DFA', 
        borderRadius: 6,
    },
    card2: {
        maxWidth: '100%',
        minWidth: '90%',
        minHeight: 230,
        maxHeight: 290,
        marginBottom: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 2
    },
    card2Text: {
        fontWeight: '700', 
        fontSize: RFValue(12), 
        color: '#7B4DFA', 
        alignSelf: 'flex-start', 
        marginTop:  8
    }
})
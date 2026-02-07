import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from "react";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";
import databaseService from "./dataBase"
import * as MediaLibrary from "expo-media-library";


const RecordAudio = forwardRef((props, ref) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Audio.requestPermissionsAsync();
        setHasPermission(status === "granted");
        console.log("🎤 Permissão de áudio:", status);
      } catch (error) {
        console.error("❌ Erro na permissão de áudio:", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { status: audioStatus } = await Audio.requestPermissionsAsync();
        setHasPermission(audioStatus === "granted");
        console.log("🎤 Permissão de áudio:", audioStatus);
  
        const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
        console.log("📂 Permissão de mídia:", mediaStatus);
      } catch (error) {
        console.error("❌ Erro nas permissões:", error);
      }
    })();
  }, []);
  

  useImperativeHandle(ref, () => ({
    startRecording,
    stopRecording,
    isRecording,
    duration,
  }));

  const startRecording = async () => {
    try {
      console.log("🎤 Iniciando gravação...");
      
      if (!hasPermission) {
        Alert.alert("Permissão", "Microfone não autorizado.");
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
      });

      console.log("🔊 Configurando gravação...");
      const { recording: newRecording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      setRecording(newRecording);
      setIsRecording(true);
      setDuration(0);

      intervalRef.current = setInterval(() => {
        setDuration(prev => prev + 100);
      }, 100);

      console.log("✅ Gravação iniciada");

    } catch (err) {
      console.error("❌ Erro ao iniciar gravação:", err);
      Alert.alert("Erro", "Não foi possível iniciar a gravação");
    }
  };

  const stopRecording = async () => {
    try {
      console.log("🛑 Parando gravação...");
      
      if (!recording) {
        console.log("⚠️ Nenhuma gravação ativa para parar");
        return;
      }

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      console.log("⏹️ Parando e descarregando gravação...");
      await recording.stopAndUnloadAsync();
      
      const uri = recording.getURI();
      console.log("📁 URI da gravação:", uri);

      if (!uri) {
        throw new Error("URI da gravação não disponível");
      }

      const durationSeconds = duration / 1000;
      console.log(`⏱️ Duração total: ${durationSeconds}s`);

      const audioDir = `${FileSystem.documentDirectory}audios`;
      const dirInfo = await FileSystem.getInfoAsync(audioDir);
      if (!dirInfo.exists) {
        console.log("📁 Criando diretório de áudios...");
        await FileSystem.makeDirectoryAsync(audioDir, { intermediates: true });
      }

      const filename = `audio_${Date.now()}.m4a`;
      const destUri = `${audioDir}/${filename}`;
      console.log("🎯 Destino:", destUri);

      await FileSystem.moveAsync({ from: uri, to: destUri });

      try {
        const asset = await MediaLibrary.createAssetAsync(destUri);
        await MediaLibrary.createAlbumAsync("AppAmparo", asset, false);
        console.log("📂 Áudio exportado para a galeria (álbum AppAmparo)");
      } catch (e) {
        console.log("⚠️ Não foi possível exportar para a galeria:", e);
      }

      const createdAt = new Date().toISOString();

      console.log("💾 Salvando no banco de dados...");
      const db = await databaseService.getDatabase();
      await db.runAsync(
        "INSERT INTO audio_records (path, duration, created_at, uploaded) VALUES (?, ?, ?, 0);",
        [destUri, durationSeconds, createdAt]
      );

      console.log("✅ Gravação salva com sucesso!");

      setRecording(null);
      setIsRecording(false);
      setDuration(0);
      
      if (props.onRecordingSaved) {
        console.log("🔄 Notificando componente pai...");
        props.onRecordingSaved();
      }

      Alert.alert("Sucesso", "Gravação salva com sucesso!");
      
    } catch (err) {
      console.error("❌ Erro ao parar gravação:", err);
      console.error("Detalhes do erro:", err);
      
      setRecording(null);
      setIsRecording(false);
      setDuration(0);
      
      Alert.alert("Erro", "Não foi possível salvar a gravação");
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return null;
});

export default RecordAudio;
import React, { useState, useEffect } from "react";
import { 
  View, Text, StyleSheet, ScrollView, 
  TouchableOpacity, TextInput, Alert 
} from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import * as SMS from "expo-sms";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ContatosEmergencia({ navigation }) {
  const [telefone, setTelefone] = useState("");
  const [contatos, setContatos] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [charCount, setCharCount] = useState(160);

  const normalizarTelefone = (numero) => numero.replace(/\D/g, "");

  const isTelefoneValido = (numero) => {
    const digits = normalizarTelefone(numero);
    return digits.length === 11;
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedContatos = await AsyncStorage.getItem("@contatosEmergencia");
        const storedMensagem = await AsyncStorage.getItem("@mensagemEmergencia");

        if (storedContatos) {
          setContatos(JSON.parse(storedContatos));
        }

        if (storedMensagem) {
          setMensagem(storedMensagem);
          setCharCount(160 - storedMensagem.length);
        }
      } catch (e) {
        console.log("Erro ao carregar dados:", e);
      }
    };

    loadData();
  }, []);

  const handleAddTelefone = async () => {
    if (!telefone) {
      Alert.alert("Erro", "Digite um número de telefone.");
      return;
    }

    const numeroLimpo = normalizarTelefone(telefone);

    if (!isTelefoneValido(numeroLimpo)) {
      Alert.alert("Erro", "Por favor, insira um número de telefone válido (11 dígitos).");
      return;
    }

    if (contatos.includes(numeroLimpo)) {
      Alert.alert("Aviso", "Esse número já está cadastrado.");
      setTelefone("");
      return;
    }

    const novosContatos = [...contatos, numeroLimpo];

    try {
      await AsyncStorage.setItem("@contatosEmergencia", JSON.stringify(novosContatos));
      setContatos(novosContatos);
      setTelefone("");
      Alert.alert("Sucesso", "Número adicionado à lista de emergência.");
    } catch (e) {
      console.log("Erro ao salvar contatos:", e);
      Alert.alert("Erro", "Não foi possível salvar o número.");
    }
  };

  const handleSalvarMensagem = async () => {
    try {
      await AsyncStorage.setItem("@mensagemEmergencia", mensagem);
      Alert.alert("Sucesso", "Mensagem de emergência salva.");
    } catch (e) {
      console.log("Erro ao salvar mensagem:", e);
      Alert.alert("Erro", "Não foi possível salvar a mensagem.");
    }
  };

  const handleEnviarSMS = async () => {
    if (!contatos.length) {
      Alert.alert("Erro", "Nenhum número cadastrado para emergência.");
      return;
    }

    const mensagemFinal =
      mensagem ||
      "EMERGÊNCIA - Esta é uma mensagem automática do Projeto Amparo. " +
      "Preciso de ajuda urgente. Entre em contato comigo ou ligue para a polícia (190).";

    try {
      const { result } = await SMS.sendSMSAsync(contatos, mensagemFinal);

      if (result === "sent") {
        Alert.alert("Sucesso", "Mensagem enviada (ou marcada para envio).");
      } else {
        Alert.alert("Aviso", "Envio cancelado ou não concluído.");
      }
    } catch (e) {
      console.log("Erro ao enviar SMS:", e);
      Alert.alert("Erro", "Não foi possível enviar as mensagens.");
    }
  };

  const handleMensagemChange = (texto) => {
    setMensagem(texto);
    setCharCount(160 - texto.length);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <MaterialCommunityIcons
            name="menu"
            size={RFValue(28)}
            color="#7B4DFA"
          />
        </TouchableOpacity>

        <Feather name="phone" size={RFValue(26)} color="#7B4DFA" />
        <Text style={styles.headerTitle}>Contatos de Emergência</Text>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.card}>
            <View style={{ alignSelf: "center" }}>
              <MaterialCommunityIcons
                name="alert"
                size={RFValue(34)}
                color="#FF3B30"
              />
            </View>
            <Text style={styles.cardTitleRed}>Alerta de Emergência</Text>
            <Text style={styles.cardText}>
              Envie SMS automático para todos os contatos cadastrados
            </Text>
            <TouchableOpacity
              style={styles.alertButton}
              onPress={handleEnviarSMS}
            >
              <MaterialCommunityIcons
                name="chat-outline"
                size={RFValue(22)}
                color="#fff"
              />
              <Text style={styles.alertButtonText}>ALERTAR AGORA</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitlePurple}>Seus Contatos de Emergência</Text>
            <Text style={styles.cardText}>
              Cadastre números de confiança para receber alertas automáticos
            </Text>

            <View style={styles.divider} />

            <TextInput
              style={styles.input}
              value={telefone}
              onChangeText={setTelefone}
              placeholder="Telefone de Emergência (DDD + número)"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddTelefone}
            >
              <MaterialCommunityIcons
                name="plus"
                size={RFValue(20)}
                color="#fff"
              />
              <Text style={styles.addButtonText}>Adicionar Número</Text>
            </TouchableOpacity>

            <View style={{ marginTop: 10, alignItems: "center" }}>
              {contatos.length === 0 ? (
                <Text style={styles.cardText}>Nenhum número cadastrado</Text>
              ) : (
                <>
                  <Text
                    style={[
                      styles.cardText,
                      { fontWeight: "700", marginBottom: 4 },
                    ]}
                  >
                    Números cadastrados:
                  </Text>
                  {contatos.map((numero, index) => (
                    <Text key={index} style={styles.cardText}>
                      {numero}
                    </Text>
                  ))}
                </>
              )}
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitlePurple}>Mensagem de Emergência</Text>
            <Text style={styles.cardText}>
              Personalize a mensagem que será enviada automaticamente
            </Text>

            <TextInput
              style={[styles.input, { height: 120, textAlignVertical: "top" }]}
              multiline
              value={mensagem}
              onChangeText={handleMensagemChange}
              placeholder="EMERGÊNCIA - Esta é uma mensagem automática do Projeto Amparo. 
                 Preciso de ajuda urgente. Entre em contato comigo ou ligue para a polícia (190)."
              placeholderTextColor="#999"
            />

            <Text style={styles.counter}>Caracteres: {charCount}/160</Text>

            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSalvarMensagem}
            >
              <Text style={styles.saveButtonText}>Salvar Mensagem</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
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
    borderBottomLeftRadius: 40,
  },
  headerTitle: {
    fontSize: RFValue(18),
    fontWeight: "900",
    color: "#7B4DFA",
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    maxWidth: "100%",
    minWidth: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
  },
  cardTitleRed: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#FF3B30",
    marginTop: 10,
    textAlign: "center",
  },
  cardTitlePurple: {
    fontSize: RFValue(17),
    fontWeight: "700",
    color: "#7B4DFA",
    textAlign: "center",
  },
  cardText: {
    fontSize: RFValue(12),
    color: "#222",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 5,
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "#DDD",
    alignSelf: "center",
    marginVertical: 12,
  },
  input: {
    minWidth: 300,
    height: 40,
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    padding: 12,
    fontSize: RFValue(12),
    marginTop: 10,
  },
  counter: {
    marginTop: 6,
    fontSize: RFValue(11),
    color: "#444",
  },
  alertButton: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    borderRadius: 12,
  },
  alertButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(14),
  },
  addButton: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#7B4DFA",
    paddingVertical: 12,
    borderRadius: 15,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: RFValue(13),
  },
  saveButton: {
    marginTop: 12,
    backgroundColor: "#7B4DFA",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(13),
  },
});

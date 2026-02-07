import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../styles/colors";
import { DrawerActions } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { sendMessageToBackend } from "../services/api";

export default function ChatJuridico({ navigation }) {

  const [messages, setMessages] = useState([
    {
      id: "1",
      from: "ia",
      text: "Olá! Sou a assistente jurídica do Projeto Amparo. Como posso ajudar você hoje?",
      time: "10:37"
    }
  ]);

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  async function handleSendMessage() {
    if (!userInput.trim()) return;
  
    const userMsg = {
      id: Date.now().toString(),
      from: "user",
      text: userInput,
      time: new Date().toLocaleTimeString().slice(0, 5),
    };
  
    setMessages(prev => [...prev, userMsg]);
    setUserInput("");
    setLoading(true);
  
    const history = [...messages].map(msg => ({
      role: msg.from === "user" ? "user" : "assistant",
      content: msg.text,
    }));
  
    const aiReply = await sendMessageToBackend(userMsg.text, history);
  
    const botMsg = {
      id: Date.now().toString(),
      from: "ia",
      text: aiReply || "Não consigo entender. Pode reformular?",
      time: new Date().toLocaleTimeString().slice(0, 5),
    };
  
    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
  }
  

  return (
    <View style={styles.screen}> 

      <View style={styles.header}>
        <TouchableOpacity 
          style={{ marginStart: 20, marginEnd: 20 }} 
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <MaterialCommunityIcons name="menu" size={RFValue(30)} color='#7B4DFA' />
        </TouchableOpacity>

        <MaterialCommunityIcons name="scale-balance" size={RFValue(30)} color='#7B4DFA' />
        <Text style={styles.headerTitle}>Chat Jurídico</Text>
      </View>

      <View style={styles.body}>

        <ScrollView
          ref={scrollRef}
          style={styles.chatScroll}
          contentContainerStyle={{ padding: 10 }}
        >
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.bubble,
                msg.from === "user" ? styles.bubbleUser : styles.bubbleIA
              ]}
            >
              <Text style={{ fontSize: RFValue(14), color: "#000" }}>
                {msg.text}
              </Text>
              <Text style={styles.time}>{msg.time}</Text>
            </View>
          ))}

          {loading && (
            <View style={[styles.bubble, styles.bubbleIA]}>
              <Text style={{ color: "#000" }}>Digitando...</Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem..."
            value={userInput}
            onChangeText={setUserInput}
            multiline
          />

          <TouchableOpacity style={styles.sendBtn} onPress={handleSendMessage}>
            <MaterialCommunityIcons name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
          <MaterialCommunityIcons name="alert" size={RFValue(30)} color="#FF3B30" />
          <Text style={styles.footerTitle}>Aviso Legal</Text>
        </View>

        <Text style={styles.footerText}>
          As informações fornecidas têm caráter orientativo e não substituem uma consulta com advogado.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F9F9FB",    
    alignItems: "center"
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
    elevation: 2,
    borderBottomLeftRadius: 40
  },
  headerTitle: {
    fontSize: RFValue(22),
    fontWeight: "900",
    color: "#7B4DFA",
  },
  body: {
    maxWidth: "95%",
    minWidth: "90%",
    flex: 1,
    marginTop: 20,
    borderColor: "#000",
    borderBottomWidth: 0.5,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: colors.background,
    overflow: "hidden"
  },
  chatScroll: {
    flex: 1
  },
  bubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  bubbleUser: {
    backgroundColor: "#d7baff",
    alignSelf: "flex-end",
  },

  bubbleIA: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "flex-start",
  },
  time: {
    fontSize: RFValue(10),
    color: "#666",
    marginTop: 5,
    textAlign: "right",
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
    fontSize: RFValue(14),
    maxHeight: 120,
  },
  sendBtn: {
    marginLeft: 10,
    backgroundColor: "#AF28FF",
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    maxWidth: "90%",
    minWidth: '80%',
    maxHeight: 200,
    minHeight: 150,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 2,
  },
  footerTitle: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: RFValue(18),
    fontWeight: "900",
    color: "#7B4DFA",
  },
  footerText: {
    fontSize: RFValue(12),
    fontWeight: "700",
    color: "#7B4DFA",
    textAlign: "center"
  }
});

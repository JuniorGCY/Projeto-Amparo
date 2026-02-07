const apiUrl = "https://backend-ai-production-6e0f.up.railway.app";

export async function sendMessageToBackend(message, history) {
  try {
    const response = await fetch(`${apiUrl}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, history }),
    });

    const data = await response.json();
    return data.reply || "Não entendi, pode reformular?";
  } catch (err) {
    console.log("Erro ao enviar mensagem:", err);
    return "Erro ao conectar com o servidor.";
  }
}

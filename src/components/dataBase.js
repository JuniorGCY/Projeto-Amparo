import * as SQLite from 'expo-sqlite';

class DatabaseService {
  constructor() {
    this.db = null;
    this.isInitialized = false;
  }

  async init() {
    if (this.isInitialized) return this.db;

    try {
      console.log("📀 Inicializando banco de dados...");
      this.db = await SQLite.openDatabaseAsync('AppAmparo.db');
      
      await this.db.execAsync(`
        CREATE TABLE IF NOT EXISTS audio_records (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          path TEXT NOT NULL,
          duration REAL,
          created_at TEXT,
          uploaded INTEGER DEFAULT 0
        );
      `);
      
      this.isInitialized = true;
      console.log("✅ Banco de dados inicializado com sucesso");
      return this.db;
    } catch (error) {
      console.error("❌ Erro ao inicializar banco de dados:", error);
      this.isInitialized = false;
      throw error;
    }
  }

  async getDatabase() {
    if (!this.isInitialized || !this.db) {
      console.warn("⚠️ DB não estava pronto, inicializando novamente...");
      await this.init();
    }
    return this.db;
  }
  
  async reset() {
    this.db = null;
    this.isInitialized = false;
    return await this.init();
  }
}

export default new DatabaseService();
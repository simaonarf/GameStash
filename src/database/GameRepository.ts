import db from "./SQLiteDatabase";

export type Game = {
    id: number;
    title: string;
    description: string;
    status: 'playing' | 'completed' | 'backlog' | null;
    uri: string;
    created_at: string;
    user_id: number;
    category_id: number;
};

export default class GameRepository {
    constructor() {
        this.up();
    }

    public async up() {
        await db.runAsync(
            `CREATE TABLE IF NOT EXISTS games (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                title VARCHAR NOT NULL, 
                description VARCHAR,
                status VARCHAR, 
                uri VARCHAR,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
                user_id INTEGER NOT NULL, 
                category_id INTEGER NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id),
                FOREIGN KEY (category_id) REFERENCES categories(id)
            );`
        );
    }

    public async down() {
        await db.runAsync("DROP TABLE games;");
    }

    public async create(game: Game) {
        const result = await db.runAsync(
            "INSERT INTO games (title, description, status, uri, user_id, category_id) values (?, ?, ?, ?, ?, ?);",
            [game.title, game.description, game.status, game.uri, game.user_id, game.category_id]
        );
        return result.lastInsertRowId;
    }

    public async all() {
        const result = await db.getAllAsync<Game>("SELECT * FROM games");
        return result;
    }


    public async find(id: number): Promise<Game | null> {
        const result = await db.getFirstAsync<Game>(
            "SELECT * FROM games WHERE id = ?",
            [id]
        );
        return result;
    }
}
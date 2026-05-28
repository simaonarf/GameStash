import db from "./SQLiteDatabase";

export type User = {
    id: number;
    username: string;
    password: string;
    email: string;
    created_at: string;
};

export default class UserRepository {
    constructor() {
        this.up();
    }

    public async up() {
        await db.runAsync(
            "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR NOT NULL, password VARCHAR NOT NULL, email VARCHAR NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);"
        );
    }

    public async down() {
        await db.runAsync("DROP TABLE users;");
    }

    public async create(user: User) {
        const result = await db.runAsync(
            "INSERT INTO users (username, password, email) values (?, ?, ?);",
            [user.username, user.password, user.email]
        );
        return result.lastInsertRowId;
    }

    public async all() {
        const result = await db.getAllAsync<User>("SELECT * FROM users");
        return result;
    }
}
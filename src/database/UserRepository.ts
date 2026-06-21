import * as Crypto from "expo-crypto";
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
            `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            username VARCHAR NOT NULL, 
            password VARCHAR NOT NULL, 
            email VARCHAR NOT NULL, 
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`
        );
    }

    public async down() {
        await db.runAsync("DROP TABLE users;");
    }

    private async hashPassword(password: string): Promise<string> {
        return await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            password
        );
    }

    public async create(user: User) {
        const hashedPassword = await this.hashPassword(user.password);
        const result = await db.runAsync(
            "INSERT INTO users (username, password, email) values (?, ?, ?);",
            [user.username, hashedPassword, user.email]
        );
        return result.lastInsertRowId;
    }

    public async all() {
        const result = await db.getAllAsync<User>("SELECT * FROM users");
        return result;
    }

    public async findByEmail(email: string): Promise<User | null> {
        const result = await db.getFirstAsync<User>(
            "SELECT * FROM users WHERE email = ?;",
            [email]
        );
        return result ?? null;
    }

    public async authenticate(email: string, password: string): Promise<User | null> {
        const user = await this.findByEmail(email);
        if (!user) return null;

        const hashedInput = await this.hashPassword(password);
        if (hashedInput !== user.password) return null;

        return user;
    }
}
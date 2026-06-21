import db from "./SQLiteDatabase";

export type Bookmark = {
    id: number;
    user_id: number;
    game_id: number;
};

export default class BookmarkRepository {
    constructor() {
        this.up();
    }

    async up() {
        await db.runAsync(
            `CREATE TABLE IF NOT EXISTS bookmarks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                game_id INTEGER NOT NULL,
                UNIQUE(user_id, game_id)
            )`
        );
    }

    async add(userId: number, gameId: number) {
        await db.runAsync(
            "INSERT OR IGNORE INTO bookmarks (user_id, game_id) VALUES (?, ?);",
            [userId, gameId]
        );
    }

    async remove(userId: number, gameId: number) {
        await db.runAsync(
            "DELETE FROM bookmarks WHERE user_id = ? AND game_id = ?;",
            [userId, gameId]
        );
    }

    async allByUser(userId: number) {
        return await db.getAllAsync<Bookmark>(
            "SELECT * FROM bookmarks WHERE user_id = ?;",
            [userId]
        );
    }
}

export const bookmarkRepository = new BookmarkRepository();
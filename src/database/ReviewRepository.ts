import db from "./SQLiteDatabase";

export type Review = {
    id: number;
    rating: number;
    title: string | null;
    comment: string | null;
    created_at: string;
    game_id: number;
    user_id: number;
};

export default class ReviewRepository {
    constructor() {
        this.up();
    }

    public async up() {
        await db.runAsync(
            `CREATE TABLE IF NOT EXISTS reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                rating REAL NOT NULL, 
                title VARCHAR,
                comment TEXT, 
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
                game_id INTEGER NOT NULL, 
                user_id INTEGER NOT NULL,
                FOREIGN KEY (game_id) REFERENCES games(id),
                FOREIGN KEY (user_id) REFERENCES users(id)
            );`
        );
    }

    public async down() {
        await db.runAsync("DROP TABLE reviews;");
    }

    public async create(review: Review) {
        const result = await db.runAsync(
            "INSERT INTO reviews (rating, title, comment, game_id, user_id) values (?, ?, ?, ?, ?);",
            [review.rating, review.title, review.comment, review.game_id, review.user_id]
        );
        return result.lastInsertRowId;
    }

    public async all() {
        const result = await db.getAllAsync<Review>("SELECT * FROM reviews");
        return result;
    }

    public async findByGameId(gameId: number): Promise<Review[]> {
        const result = await db.getAllAsync<Review>(
            "SELECT * FROM reviews WHERE game_id = ? ORDER BY created_at DESC",
            [gameId]
        );
        return result;
    }
}
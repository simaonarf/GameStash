import db from "./SQLiteDatabase";

export type Category = {
    id: number;
    name: string;
};

export default class CategoryRepository {
    constructor() {
        this.up();
    }

    public async up() {
        await db.runAsync(
            "CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR NOT NULL);"
        );
    }

    public async down() {
        await db.runAsync("DROP TABLE categories;");
    }

    public async create(category: Category) {
        const result = await db.runAsync(
            "INSERT INTO categories (name) values (?);",
            [category.name]
        );
        return result.lastInsertRowId;
    }

    public async all() {
        const result = await db.getAllAsync<Category>("SELECT * FROM categories");
        return result;
    }
}
import { updateBookmarkCount } from "./bookmarkCounter";

describe("updateBookmarkCount", () => {
    test("incrementa quando saved = true", () => {
        const prev = 0;
        const result = updateBookmarkCount(prev, true);
        expect(result).toBe(1);
    });

    test("diminui quando saved = false", () => {
        const prev = 2;
        const result = updateBookmarkCount(prev, false);
        expect(result).toBe(1);
    });

    test("funciona em sequência", () => {
        let count = 0;

        count = updateBookmarkCount(count, true);
        expect(count).toBe(1);

        count = updateBookmarkCount(count, true);
        expect(count).toBe(2);

        count = updateBookmarkCount(count, false);
        expect(count).toBe(1);
    });

    test("não permite valores negativos", () => {
        const result = updateBookmarkCount(0, false);
        expect(result).toBe(-1);
    });
});

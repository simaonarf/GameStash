import React, { createContext, useCallback, useContext, useState } from "react";
import { bookmarkRepository } from "../src/database/BookmarkRepository";

type BookmarkContextType = {
    bookmarks: number[];
    isBookmarked: (gameId: number) => boolean;
    toggleBookmark: (userId: number, gameId: number) => Promise<void>;
    loadBookmarks: (userId: number) => Promise<void>;
    clearBookmarks: () => void;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
    const [bookmarks, setBookmarks] = useState<number[]>([]);

    const loadBookmarks = useCallback(async (userId: number) => {
        const rows = await bookmarkRepository.allByUser(userId);
        setBookmarks(rows.map((r) => r.game_id));
    }, []);

    const toggleBookmark = useCallback(async (userId: number, gameId: number) => {
        setBookmarks((prev) => {
            const exists = prev.includes(gameId);
            if (exists) {
                bookmarkRepository.remove(userId, gameId);
                return prev.filter((id) => id !== gameId);
            } else {
                bookmarkRepository.add(userId, gameId);
                return [...prev, gameId];
            }
        });
    }, []);

    const isBookmarked = useCallback(
        (gameId: number) => bookmarks.includes(gameId),
        [bookmarks]
    );

    const clearBookmarks = useCallback(() => setBookmarks([]), []);

    return (
        <BookmarkContext.Provider
            value={{ bookmarks, isBookmarked, toggleBookmark, loadBookmarks, clearBookmarks }}
        >
            {children}
        </BookmarkContext.Provider>
    );
}

export function useBookmarks() {
    const ctx = useContext(BookmarkContext);
    if (!ctx) throw new Error("useBookmarks deve ser usado dentro de BookmarkProvider");
    return ctx;
}
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type BookmarkEntry = {
    id: number;
    value: boolean;
};

type State = {
    bookmarks: BookmarkEntry[];
};

type Actions = {
    setBookmark: (id: number, value: boolean) => void;
    isBookmarked: (id: number) => boolean;
};

const useBookmark = create<State & Actions>()(
    persist(
        (set, get) => ({
            bookmarks: [],

            setBookmark: (id, value) =>
                set((state) => {
                    const exists = state.bookmarks.find((b) => b.id === id);
                    if (exists) {
                        return {
                            bookmarks: state.bookmarks.map((b) =>
                                b.id === id ? { ...b, value } : b
                            ),
                        };
                    }
                    return { bookmarks: [...state.bookmarks, { id, value }] };
                }),

            isBookmarked: (id) =>
                get().bookmarks.find((b) => b.id === id)?.value ?? false,
        }),

        {
            name: "state-useBookmark",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

export default useBookmark;

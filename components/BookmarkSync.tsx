// components/BookmarkSync.tsx
import { useAuth } from "@/contexts/AuthContext";
import { useBookmarks } from "@/contexts/BookmarkContext";
import { useEffect } from "react";

export default function BookmarkSync() {
    const { user } = useAuth();
    const { loadBookmarks, clearBookmarks } = useBookmarks();

    useEffect(() => {
        if (user) {
            loadBookmarks(user.id);
        } else {
            clearBookmarks();
        }
    }, [user]);

    return null;
}
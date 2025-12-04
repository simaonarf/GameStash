export function updateBookmarkCount(prev: number, saved: boolean) {
    return saved ? prev + 1 : prev - 1;
}

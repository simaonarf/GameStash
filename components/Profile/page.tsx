import { useAuth } from "@/contexts/AuthContext";
import { useBookmarks } from "@/contexts/BookmarkContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfilePage() {
    const { user, logout } = useAuth();
    const { bookmarks } = useBookmarks();

    function handleLogout() {
        Alert.alert(
            "Sair da conta",
            "Tem certeza que deseja sair?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Sair", style: "destructive", onPress: logout },
            ]
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <FontAwesome name="user" size={36} color="#000" />
                </View>

                <Text style={styles.username}>{user?.username}</Text>
                <Text style={styles.email}>{user?.email}</Text>
            </View>

            <View style={styles.statsRow}>
                <View style={styles.statCard}>
                    <FontAwesome name="bookmark" size={20} color="#f7c222" />
                    <Text style={styles.statNumber}>{bookmarks.length}</Text>
                    <Text style={styles.statLabel}>Salvos</Text>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoSection}>
                <View style={styles.infoRow}>
                    <FontAwesome name="calendar" size={16} color="#777" />
                    <Text style={styles.infoText}>
                        Membro desde {user?.created_at ? new Date(user.created_at).toLocaleDateString("pt-BR") : "-"}
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.logoutButton}
                activeOpacity={0.8}
                onPress={handleLogout}
            >
                <FontAwesome name="sign-out" size={18} color="#ff4444" style={{ marginRight: 8 }} />
                <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    header: {
        alignItems: "center",
        marginBottom: 30,
    },
    avatar: {
        width: 84,
        height: 84,
        borderRadius: 42,
        backgroundColor: "#f7c222",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    username: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 4,
    },
    email: {
        color: "#a4a4a4",
        fontSize: 14,
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    statCard: {
        backgroundColor: "#1c1c1c",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#2c2c2c",
        paddingVertical: 16,
        paddingHorizontal: 28,
        alignItems: "center",
    },
    statNumber: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 8,
    },
    statLabel: {
        color: "#777",
        fontSize: 13,
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: "#333",
        marginVertical: 20,
    },
    infoSection: {
        marginBottom: 30,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1c1c1c",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#2c2c2c",
        paddingVertical: 12,
        paddingHorizontal: 15,
    },
    infoText: {
        color: "#ccc",
        fontSize: 14,
        marginLeft: 10,
    },
    logoutButton: {
        flexDirection: "row",
        backgroundColor: "#1c1c1c",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: "#ff4444",
        marginTop: "auto",
        marginBottom: 30,
    },
    logoutText: {
        color: "#ff4444",
        fontWeight: "bold",
        fontSize: 16,
    },
});
import { useAuth } from "@/contexts/AuthContext";
import React, { useState } from 'react';
import { View } from "react-native";
import CreateUserForm from "./create";
import LoginForm from './Form';
import ProfilePage from './page';

export default function Profile() {
    const [hasAccount, setHasAccount] = useState(false);
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return null;
    }

    if (user) {
        return <ProfilePage />;
    }

    return (
        <View>
            {hasAccount ? (
                <LoginForm onSwitch={() => setHasAccount(false)} />
            ) : (
                <CreateUserForm onSwitch={() => setHasAccount(true)} />
            )}
        </View>
    );
}

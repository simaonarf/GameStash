import React, { useState } from 'react';
import { View } from "react-native";
import CreateUserForm from "./create";
import LoginForm from './Form';

export default function Profile() {
    const [hasAccount, setHasAccount] = useState(false);

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

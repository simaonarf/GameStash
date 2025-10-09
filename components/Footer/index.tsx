import theme from "@/constants/theme";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "./IconButton";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateIfNotCurrent = (path: "/" | "/favorites" | "/login") => {
    if (pathname !== path) {
      router.push(path);
    } else {
      console.log(`Já está em ${path}`);
    }
  };

  const handleHomeClick = () => navigateIfNotCurrent('/');
  const handleFavoriteClick = () => navigateIfNotCurrent('/favorites');
  const handleLoginClick = () => navigateIfNotCurrent('/login');
  return (
    <View style={styles.container}>
      <IconButton icon="rocket" text="Explorar" onPress={handleFavoriteClick} active={pathname === '/favorites'}
      />
      <IconButton icon="home" text="Início" onPress={handleHomeClick} active={pathname === '/'} />
      <IconButton icon="profile" text="Perfil" onPress={handleLoginClick} active={pathname === '/login'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingVertical: theme.dimension.xs,
    paddingHorizontal: theme.dimension.sm,
    borderRadius: 15,

    paddingBottom: 18,
    /*     backgroundColor: theme.footerColor, */
  },
});


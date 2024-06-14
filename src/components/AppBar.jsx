import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native"
import StyledText from "./StyledText.jsx";
import Constants from "expo-constants"
import theme from "../theme.js";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.AppBar.primary,
        flexDirection: "row",
        paddingTop: Constants.statusBarHeight +10,
    },
    scroll:{
        paddingBottom: 15
    },
    text: {
        color: theme.AppBar.textSecondary,
        paddingHorizontal: 10,
    },
    active: {
        color: theme.AppBar.textPrimary, 
    }
})

const AppBarTab = ({ active, children, to}) => {
    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight="bold" style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

export default function AppBar () {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
            <AppBarTab active to="/">Repositories</AppBarTab>
            <AppBarTab active to= "/signin">Sign In</AppBarTab>
            <AppBarTab active to="/">Register</AppBarTab>
            <AppBarTab active to= "/signin">Sub to twitch account</AppBarTab>
            <AppBarTab active to="/">midu hi!</AppBarTab>
            <AppBarTab active to= "/signin">Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
}


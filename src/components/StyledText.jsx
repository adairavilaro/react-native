import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
    Text: {
        fontSize: theme.fontSizes.body,
        color: theme.Colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.Colors.primary
    },
    colorSecundary: {
        color: theme.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    textAlighnCenter: {
        textAlign: "center"
    }
})

export default function StyledText({ align, children, color, fontSize, fontWeight, style, ...resetOfProps }) {
    const textStyles = [
        styles.Text,
        align === "center" && styles.textAlighnCenter,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecundary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold,
        style
    ]

    return (
        <Text style={textStyles} {...resetOfProps}>
            {children}
        </Text>
    )
}
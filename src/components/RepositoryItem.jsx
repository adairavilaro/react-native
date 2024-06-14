import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";


export default function RepositoryItem  (props)  {
    <View key={props.id} style={styles.container} >
        <StyledText fontSize="subheading "fontWeight="bold">{props.name}</StyledText>
        <RepositoryStats {...props} />
    </View>
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    languaje: {
        padding: 4,
        color: theme.Colors.white,
        backgroundColor: theme.Colors.primary,
        alignSelf: "flex-start"
    }
})


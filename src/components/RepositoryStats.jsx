import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

export default function RepositoryStats (props) { 
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around"}}>
            <View>
                <StyledText align= "center" fontWeight="bold">Username:</StyledText>
                <StyledText>{props.username}</StyledText>
            </View>
            
            <View>
                <StyledText align= "center" fontWeight="bold">Email:</StyledText>
                <StyledText>{props.email}</StyledText>
            </View>
            
        </View>
    )
}


import { View,Text,StyleSheet,TextInput } from "react-native"

interface formValue{
    label:string;
    formplaceholder?:string;
}
export default function Form({label,formplaceholder}:formValue){
    return(
        <View style={Styles.form}>
            <Text style={Styles.label}>{label}</Text>
            <TextInput style={Styles.input}
            placeholder={formplaceholder}
            placeholderTextColor="gray"
            >
            </TextInput>
        </View>
    )
}

const Styles = StyleSheet.create({
    form:{
        width: "100%",
        paddingBottom:21,
    },
    label:{
        fontSize:14,
        paddingLeft:4,
        paddingBottom:7,
        fontWeight:"600",
    },
    input:{
        padding: 10,
        backgroundColor:"#ffffff",
        borderColor:"1f1f1f",
        borderWidth:1,
        borderRadius:8,
    },
});

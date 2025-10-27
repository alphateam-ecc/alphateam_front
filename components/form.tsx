import { View,Text,StyleSheet,TextInput } from "react-native"

interface formValue{
    label:string;
    formplaceholder?:string;
}
export default function Form({label,formplaceholder}:formValue){
    return(
        <View style={Styles.form}>
            <Text>{label}</Text>
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
    input:{
        padding: 10,
        borderColor:"1f1f1f",
        borderWidth:1,
        borderRadius:8,
    },
});

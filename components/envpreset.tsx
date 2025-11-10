import {View, Text,StyleSheet} from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import Ionicons from '@expo/vector-icons/Ionicons';

interface presetProps{
    title:string;
    icon:React.ComponentProps<typeof MaterialIcons>["name"];
}


export default function EnvPreset(props:presetProps) {
    return(
        <View style= {styles.settingContainer}>
            <View style = {styles.setting}>
                <View style = {styles.iconContainer}>
                    <MaterialIcons name={props.icon} size={24} color="#81A88B"  />
                </View>
                <Text style = {styles.settingText}>{props.title}</Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    settingContainer:{
    paddingBottom:16,
  },
  setting: {
    flexDirection:'row',
    paddingVertical:16,
    paddingHorizontal:12,
    borderRadius:16,
    backgroundColor:'#FFFFFF',
  },
  settingText:{
    fontSize:24,
  },
  iconContainer :{
    backgroundColor:'#E9F4EA',
    padding:8,
    borderRadius:90,
    marginRight:8,
  }
});
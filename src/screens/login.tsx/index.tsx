import { StatusBar } from "expo-status-bar";
import { Text,TextInput,Pressable,Image,View, } from "react-native";
import {styles} from './styles';
import { useNavigation } from "@react-navigation/native";
import fla1 from '../../assets/fla1.png';
import fla2 from '../../assets/fla2.jpg';


export default function Login(){
    const navigation = useNavigation();


    return(
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="black" translucent={true}/>

            <Image style={styles.Image} resizeMode="stretch"
             source={require('../../assets/fla1.png')} />

          
            <Text style={styles.formTitle1}>Seja Bem vindo </Text> 
          
            <Text style={styles.formTitle2}>ao</Text>

            <Text style={styles.formTitle3}>Espaço</Text>

            <Text style={styles.formTitle4}>Rubro Negro!</Text>

            
            
            <Text style={styles.formTitle}> Faça login</Text>
            <StatusBar style="auto"/>
            <TextInput style={styles.formInput}
            placeholder="Informe o E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email" 
            />
            <TextInput style={styles.formInput}
            placeholder="Informe a Senha"
            autoCapitalize="none"
            secureTextEntry
            />
            <Pressable style={styles.formButton} onPress={() => navigation.navigate('Shop')}>
                <Text style={styles.textButton}>Logar </Text>
            </Pressable>
            <View style={styles.subContainer}>
                <Pressable style={styles.subButton}>
                    <Text style={styles.subTextButton}>Esqueceu a senha?</Text>
                </Pressable>
                <Pressable style={styles.subButton}>
                    <Text style={styles.subTextButton}> Cadastrar usuário</Text>
                </Pressable>

               
            

            </View>


                 <Image style={styles.Image} 
                 source={fla2} />


        </View>
    )
}

import { Text,TextInput,Pressable,View, StyleSheet,ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../shop.tsx/styles2";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


    export default function Shop(){
        return(
                 <ScrollView style={styles.scrollView}>

                 <View>
               
               
               
               
               

                 <Image style={styles.logo1} resizeMode="stretch"
                 source={require('../../assets/fla1.png')}></Image>


                 <Text style={styles.formTitle}>A Loja Oficial Do Mengão!</Text>

                 <Image style={styles.carrinho} resizeMode="stretch"
                 source={require('../../assets/carrinho.png')}></Image>

                 <Image style={styles.imgBanner} resizeMode="stretch"
                 source={require('../../assets/img1.jpeg')}/>

                
                 <Image style={styles.imgCamisa1} resizeMode="stretch"
                 source={require('../../assets/img2.jpeg')}></Image>

                 <View >
                 <Text style={styles.textManto1}>Manto Flamengo Jogo 1</Text>
                 <Text style={styles.textManto2}>Adidas 2023 (Masculino e feminino)</Text>
                 <Text style={styles.preço}>           R$ 349,99</Text>
                 <Pressable style={styles.formButton1}>
                 <Text style={styles.textButton1}>COMPRAR</Text>
                 </Pressable>
                 </View>

                 <Image style={styles.imgBanner2} resizeMode="stretch"
                 source={require('../../assets/img6.jpeg')}></Image>

                 <Image style={styles.imgCamisa2} resizeMode="stretch"
                 source={require('../../assets/img8.jpg')}></Image>

                 <View >
                 <Text style={styles.textManto3}>Manto Flamengo Jogo 2</Text>
                 <Text style={styles.textManto4}>Adidas 2023 (Masculino e feminino)</Text>
                 <Text style={styles.preçoManto2}>           R$ 349,99</Text>
                 <Pressable style={styles.formButton2}>
                 <Text style={styles.textButton2}>COMPRAR</Text>
                 </Pressable>
                 </View>

                 <Image style={styles.imgBanner3} resizeMode="stretch"
                 source={require('../../assets/img7.jpeg')}></Image>

                 <Image style={styles.imgCamisa3} resizeMode="stretch"
                 source={require('../../assets/img9.jpg')}></Image>

                 <View >
                 <Text style={styles.textManto3}>Manto Flamengo Jogo 3</Text>
                 <Text style={styles.textManto4}>Adidas 2023 (Masculino e feminino)</Text>
                 <Text style={styles.preçoManto2}>           R$ 199,99</Text>
                 <Pressable style={styles.formButton2}>
                 <Text style={styles.textButton2}>COMPRAR</Text>
                 </Pressable>
                 </View>


             
               

                 <View style={styles.container}>
                 <StatusBar style="light" backgroundColor="black" translucent={true}/>
                
               
                
       
                 </View>
            
                 </View>  

                 </ScrollView>

           

                 )}

    

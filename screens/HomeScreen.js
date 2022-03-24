import { useNavigation } from '@react-navigation/core'
import React, {useState} from 'react'
import {KeyboardAvoidingView, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { auth } from '../firebase'
import {ScrollView} from "react-native-web";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.header}>
                <Image
                    source={require("../images/appLogo.png")}
                    style={styles.logoImg}
                />
                <Image
                    source={require("../images/profilImg.png")}
                    style={styles.profilImg}
                />
            </View>

            <View style={styles.body} >
                {/*<Text style={{ fontWeight: 'bold', textAlign: 'center', borderWidth: 1}}>*/}
                {/*    Description : {count}*/}
                {/*</Text>*/}
                {/*<View style={{ flex: 1, borderWidth: 1, height:"100%", weight:"100%" }}>*/}
                {/*    <Image*/}
                {/*        source={require("../images/lasagnes.jpg")}*/}
                {/*        // resizeMode: 'stretch'*/}
                {/*        style={{height: "100%", width: "100%"}}*/}
                {/*    />*/}
                {/*</View>*/}
                {/*<View style={styles.article1}>*/}
                {/*    <View style={styles.ImgBrownie}>*/}
                {/*        <Image*/}
                {/*            source={require("../images/brownie.jpg")}*/}
                {/*            style={{width:"100%", height:"80%"}}*/}
                {/*        />*/}
                {/*    </View>*/}
                {/*    <View style={styles.vBrownie}>*/}
                {/*        <Text style={styles.TitleBrownie}>*/}
                {/*            Le titre*/}
                {/*        </Text>*/}
                {/*        <Text style={styles.descriptionBrownie}>*/}
                {/*            La description du brownie*/}
                {/*        </Text>*/}
                {/*    </View>*/}
                {/*</View>*/}

                {/*<View style={styles.footer}>*/}
                {/*</View>*/}
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.buttonDesign}
                    onPress={onPress}
                >
                    <Image
                        source={require('../images/addButton.png')}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        flex:1.2,
        backgroundColor:'#FDE0DC',
        alignItems: 'center',
        flexDirection: "row",
    },
    logoImg:{
        width: "80%",
        height: "80%",
        resizeMode: 'contain',
        flex:1.5,
        position: "absolute",
        left: 42,
        bottom: 5
    },
    profilImg: {
        flex:1,
        width: "10%",
        height:"35%",
        borderRadius:100,
        resizeMode: "contain",
        position:"absolute",
        left:300,
        bottom:20
    },
    body:{
        flex:6,
        backgroundColor: "rgb(255,248,242)",
    },
    article1:{
        height: "100%",
        flexDirection: "row",
        borderWidth:1,
    },
    ImgBrownie:{
        flex: 1,
        borderWidth:1,
        borderColor:"blue",
        justifyContent: "center"
    },
    vBrownie:{
        flex: 1,
        borderWidth: 1
    },
    descriptionBrownie:{
        marginLeft: 5,
    },
    TitleBrownie:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },
    footer:{
        flex:1,
        backgroundColor: '#FDE0DC',
    },
    buttonDesign: {
        marginTop:20
    },
    buttonImage: {
        alignSelf:"center",
        resizeMode: 'contain',
        width: "90%",
        height: "90%",
        borderRadius: 100
    },
});

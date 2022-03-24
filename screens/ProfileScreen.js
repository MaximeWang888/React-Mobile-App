import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import {useNavigation} from "@react-navigation/core";
import {auth} from "../firebase";

const ProfileScreen = () => {
    const navigation = useNavigation();

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const handleNavigate2Home = () => {
        navigation.replace("Home")
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image style = {styles.logoImg} source={require("../images/appLogo.png")}>
                </Image>
            </View>

            <View style={styles.myProfile}>
                <Text style={{fontSize:25}}>Mon Profil</Text>
                <Image style = {styles.imageChapeau} source={require("../images/chapeau.jpg")}>
                </Image>
            </View>

            <View style={styles.body}>

                <Text style={{marginBottom: 50, fontSize:18}}>Email: {auth.currentUser?.email}</Text>

                <View style={styles.button_themeBasic}>
                    <Button
                        title="Mes recettes"
                        color="black"
                        onPress={handleNavigate2Home}
                    />
                </View>

                <View style={styles.button_themeBasic}>
                    <Button
                        title="Déconnexion"
                        color="black"
                        onPress={handleSignOut}
                    />
                </View>
            </View>

        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create ({

    container: {
        flex: 6,
        flexDirection: 'column',
        backgroundColor:"rgb(253, 224, 220)"
    },

    header: {
        flex: 1.5,
        alignItems:"center"
    },

    myProfile: {
        backgroundColor: "rgb(255, 248, 242)",
        flex: 0.5,
        justifyContent:'space-around',
        alignItems:"center"
    },

    imageChapeau: {
        position: "absolute",
        width: 26,
        height: 26,
        right:"10%",
    },

    logoImg: {
        width: '100%',
        height:'100%',
    },

    body: {
        flex: 2,
        alignItems:"center",
        marginTop:50
    },

    button_themeBasic: {
        width: 265,
        height: 87,
        borderRadius: 4,
        marginBottom : 20,
        alignItems: "center",
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.14,
        shadowRadius: 2,
        backgroundColor: "rgb(255, 248, 242)",
        justifyContent: "center",
    },

})



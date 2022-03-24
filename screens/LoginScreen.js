import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MARMINOOB</Text>

        <Image
            style={styles.logoImg}
            source={require('../images/appLogo.png')} />
      </View>

      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput
              placeholder="Identification (email)"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
          />
          <TextInput
              placeholder="Mot de passe"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
              onPress={handleLogin}
              style={styles.button}
          >
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={handleSignUp}
              style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Inscription</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 2,
    width: "100%",
    backgroundColor: "rgb(255,224,220)",
    alignItems:"center",
  },
  headerTitle: {
    fontSize: 20,
    textAlign:'center',
    marginTop: 35,
  },
  logoImg: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  body: {
    flex: 3,
    width:"100%",
    alignItems:"center",
    backgroundColor: "rgb(255,248,242)",
  },
  inputContainer: {
    width: '80%',
    marginTop: 50,
  },
  input: {
    backgroundColor: '#FDE0DC',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#FDE0DC',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#FDE0DC',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#FDE0DC',
    fontWeight: '700',
    fontSize: 16,
  },
})

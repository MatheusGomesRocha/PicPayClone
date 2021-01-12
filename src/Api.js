import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export default {
    signUp: (name, email, cpf, birthday, pass, navigation) => {     // RegisterScreen
        let id = Math.floor(Math.random() * (9999 - 1));
        let idString = id.toString();
        let user = name+'.'+idString;

        const res =
            auth()
                .createUserWithEmailAndPassword(email, pass)
                .then(() => {
                    firestore()
                        .collection('users')
                        .doc(idString)
                        .set({
                            id: idString,
                            name: name,
                            user: user,
                            email: email,
                            pass: pass,
                            cpf: cpf,
                            birthday: birthday
                        })

                    navigation.reset({
                        routes: [
                            {name: 'preload'}
                        ]
                    })
                }).catch(error => {
                if(error.code == 'auth/email-already-in-use') {
                    Alert.alert(
                        'Error',
                        "Este email já está cadastro, tente outro",
                        [
                            {text: 'OK'}
                        ],
                        {cancelable: false}
                    );
                }
            })
    },

    login: (email, pass, navigation, setEmail, setUser, setName) => {       // LoginScreen
        const res =
            auth()
                .signInWithEmailAndPassword(email, pass)
                .then(() => {
                    navigation.reset({
                        routes: [
                            {name: 'apptab'}
                        ]
                    });

                    setEmail(email)
                }).catch(error => {
                    if(error) {
                        Alert.alert(
                            'Error',
                            'Email ou senha incorretas',
                            [
                                {text: 'OK'}
                            ],
                            {cancelable: false}
                        );
                    }
            })
    },

    getUserLogin: (email, setId, setName, setUser, setCpf, setBirthday) => {        // ConfigScreen
        let list = [];

        return firestore()
            .collection('users')
            .where('email', '==', email)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    let data = documentSnapshot.data();

                    setId(data.id)
                    setName(data.name);
                    setUser(data.user);
                    setCpf(data.cpf);
                    setBirthday(data.birthday);
                })
            })
    },

    updateUser: (id, newUser, navigation) => {      // UserBankScreen
        const res =
                 firestore().
                    collection('users')
                    .doc(id)
                    .update({
                        user: newUser
                    }).then(() => {
                     navigation.reset({
                         routes: [
                             {name: 'apptab'}
                         ]
                     });
                     Alert.alert(
                         "Success",
                         "Update successfully",
                         [
                             {text: "OK"}
                         ],
                         {cancelable: false}
                     );
                 })
    },

    updateUserData: (id, newName, newBirthday, navigation) => {      // UserDataScreen
        const res =
            firestore().
            collection('users')
                .doc(id)
                .update({
                    name: newName,
                    birthday: newBirthday,
                }).then(() => {
                navigation.reset({
                    routes: [
                        {name: 'apptab'}
                    ]
                });
                Alert.alert(
                    "Success",
                    "Update successfully",
                    [
                        {text: "OK"}
                    ],
                    {cancelable: false}
                );
            })
    }
}
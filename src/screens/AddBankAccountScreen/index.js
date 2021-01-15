import React, {useState, createRef} from 'react';
import Check from '../../assets/svg/check.svg';
import Lock from '../../assets/svg/lock.svg';
import Api from '../../Api';

import {useNavigation, useRoute} from '@react-navigation/native';

import {DefaultText} from '../../components/DefaultText';
import {DefaultBtn} from '../../components/DefaultBtn';

import {
    Container,
    Scroll,

    Input,
    DivInputRow,
    DefaultView,
    DefaultViewRow,
    SquareBtn,
} from './styled';

export default () => {
    const [accountNumber, setAccountNumber] = useState();
    const [agencyNumber, setAgencyNumber] = useState();
    const [digit, setDigit] = useState();
    const [type, setType] = useState();
    const [bank, setBank] = useState();
    const [ownerName, setOwnerName] = useState();
    const [ownerCpf, setOwnerCpf] = useState();

    const [focus1, setFocus1] = useState(false);
    const [focus2, setFocus2] = useState(false);
    const [focus3, setFocus3] = useState(false);
    const [focus4, setFocus4] = useState(false);
    const [focus5, setFocus5] = useState(false);
    const [focus6, setFocus6] = useState(false);
    const [focus7, setFocus7] = useState(false);

    const [notMyAccount, setNotMyAccount] = useState(false);

    const agencyRef = createRef();
    const digitRef = createRef();
    const typeRef = createRef();
    const bankRef = createRef();
    const cpfRef = createRef();

    const navigation = useNavigation();
    const route = useRoute();

    const id = route.params.userId;

    const setInputFocus1 = () => {
        setFocus1(true);
        setFocus2(false);
        setFocus3(false);
        setFocus4(false);
        setFocus5(false);
        setFocus6(false);
        setFocus7(false);
    }

    const setInputFocus2 = () => {
        setFocus1(false);
        setFocus2(true);
        setFocus3(false);
        setFocus4(false);
        setFocus5(false);
        setFocus6(false);
        setFocus7(false);
    }

    const setInputFocus3 = () => {
        setFocus1(false);
        setFocus2(false);
        setFocus3(true);
        setFocus4(false);
        setFocus5(false);
        setFocus6(false);
        setFocus7(false);
    }

    const setInputFocus4 = () => {
        setFocus1(false);
        setFocus2(false);
        setFocus3(false);
        setFocus4(true);
        setFocus5(false);
        setFocus6(false);
        setFocus7(false);
    }

    const setInputFocus5 = () => {
        setFocus1(false);
        setFocus2(false);
        setFocus3(false);
        setFocus4(false);
        setFocus5(true);
        setFocus6(false);
        setFocus7(false);
    }

    const setInputFocus6 = () => {
        setFocus1(false);
        setFocus2(false);
        setFocus3(false);
        setFocus4(false);
        setFocus5(false);
        setFocus6(true);
        setFocus7(false);
    }

    const setInputFocus7 = () => {
        setFocus1(false);
        setFocus2(false);
        setFocus3(false);
        setFocus4(false);
        setFocus5(false);
        setFocus6(false);
        setFocus7(true);
    }
    
    const handleAdd = () => {
        if(notMyAccount) {
            Api.addBankAccount(id, accountNumber, agencyNumber, digit, type, bank, ownerName, ownerCpf, navigation);
        } else {
            Api.addBankAccount(id, accountNumber, agencyNumber, digit, type, bank, null, null, navigation);
        }
    }

    return (
        <Container>
            <Scroll showsVerticalScrollIndicator={false}>
                <DefaultText mTop={"15px"} font={"16px"} color={"#aaa"}>
                    To transfer money from Bankidô to your bank account, you need to register a account first
                </DefaultText>

                <Input bc={focus1 ? '#DF274C' : '#ccc'} onChangeText={(an => setAccountNumber(an))}
                       returnKeyType={"next"}
                       onSubmitEditing={() => agencyRef.current.focus()}
                       placeholder={"Account number"} onFocus={setInputFocus1}/>

                <DivInputRow>
                    <Input bc={focus2 ? '#DF274C' : '#ccc'} onChangeText={(agn => setAgencyNumber(agn))}
                           returnKeyType={"next"}
                           onSubmitEditing={() => digitRef.current.focus()} ref={agencyRef}
                           width={"70%"} placeholder={"Agency number"} onFocus={setInputFocus2}/>
                    <Input bc={focus3 ? '#DF274C' : '#ccc'} onChangeText={(d => setDigit(d))} returnKeyType={"next"}
                           onSubmitEditing={() => typeRef.current.focus()} ref={digitRef}
                           width={"25%"} placeholder={"Digit"} onFocus={setInputFocus3}/>
                </DivInputRow>

                <Input bc={focus4 ? '#DF274C' : '#ccc'} onChangeText={(t => setType(t))} returnKeyType={"next"}
                       onSubmitEditing={() => bankRef.current.focus()} ref={typeRef}
                       placeholder={"Account type"} onFocus={setInputFocus4}/>
                <Input bc={focus5 ? '#DF274C' : '#ccc'} onChangeText={(b => setBank(b))} ref={bankRef}
                       placeholder={"Bank"} onFocus={setInputFocus5}/>

                <DefaultView>

                    <DefaultViewRow>
                        <DefaultText>This bank account isn't mine</DefaultText>
                        <SquareBtn onPress={() => setNotMyAccount(!notMyAccount)}>
                            {notMyAccount &&
                            <Check width={20} height={20} fill={"#000"}/>
                            }
                        </SquareBtn>
                    </DefaultViewRow>

                    {notMyAccount &&
                    <>
                        <Input bc={focus6 ? '#DF274C' : '#ccc'} onChangeText={(on => setOwnerName(on))}
                               returnKeyType={"next"}
                               onSubmitEditing={() => cpfRef.current.focus()} onFocus={setInputFocus6}
                               placeholder={"Account Owner name"} mTop={"10px"}/>
                        <Input bc={focus7 ? '#DF274C' : '#ccc'} onChangeText={(oc => setOwnerCpf(oc))} ref={cpfRef}
                               placeholder={"Owner CPF"}
                               mBottom={"10px"} mTop={"10px"} onFocus={setInputFocus7}/>
                    </>
                    }
                </DefaultView>

                <DefaultBtn disabled={accountNumber && agencyNumber && digit && type && bank ? false : true} bgColor={accountNumber && agencyNumber && digit && type && bank ? '#DF274C' : '#ccc'} onPress={handleAdd} underlayColor="#BE1C3D">
                    <DefaultText color={"#fff"} font={"18px"}>Save</DefaultText>
                </DefaultBtn>

                <DefaultViewRow>
                    <Lock width={50} height={50} fill={"#bbb"}/>
                    <DefaultText style={{width: '80%'}} mTop={"15px"} color={"#bbb"}>
                        Bankidô it's 100% safe. this data will only be used when you do a transfer from Bankidô to other
                        bank
                    </DefaultText>
                </DefaultViewRow>

            </Scroll>
        </Container>
    );
}
import React, {useState, createRef} from 'react';
import Teste from '../../assets/svg/search.svg';
import Lock from '../../assets/svg/lock.svg';

import {DefaultText} from '../../components/DefaultText';

import {
    Container,
    Scroll,

    Input,
    DivInputRow,
    DefaultView,
    DefaultViewRow,
    SquareBtn,
    DefaultBtn
} from './styled';

export default () => {
    const [accountNumber, setAccountNumber] = useState();
    const [agencyNumber, setAgencyNumber] = useState();
    const [digit, setDigit] = useState();
    const [type, setType] = useState();
    const [bank, setBank] = useState();
    const [ownerName, setOwnerName] = useState();
    const [ownerCpf, setOwnerCpf] = useState();

    const [notMyAccount, setNotMyAccount] = useState(false);

    const agencyRef = createRef();
    const digitRef = createRef();
    const typeRef = createRef();
    const bankRef = createRef();
    const cpfRef = createRef();

    return (
        <Container>
            <Scroll>
                <DefaultText mTop={"15px"} font={"16px"} color={"#aaa"}>
                    To transfer money from Bankidô to your bank account, you need to register a account first
                </DefaultText>

                <Input onChangeText={(an => setAccountNumber(an))} returnKeyType={"next"}
                       onSubmitEditing={() => agencyRef.current.focus()}
                       placeholder={"Account number"}/>

                <DivInputRow>
                    <Input onChangeText={(agn => setAgencyNumber(agn))} returnKeyType={"next"}
                           onSubmitEditing={() => digitRef.current.focus()} ref={agencyRef}
                           width={"70%"} placeholder={"Agency number"}/>
                    <Input onChangeText={(d => setDigit(d))} returnKeyType={"next"}
                           onSubmitEditing={() => typeRef.current.focus()} ref={digitRef}
                           width={"25%"} placeholder={"Digit"}/>
                </DivInputRow>

                <Input onChangeText={(t => setType(t))} returnKeyType={"next"}
                       onSubmitEditing={() => bankRef.current.focus()} ref={typeRef}
                       placeholder={"Account type"}/>
                <Input onChangeText={(b => setBank(b))} ref={bankRef} placeholder={"Bank"}/>

                <DefaultView>

                    <DefaultViewRow>
                        <DefaultText>This bank account isn't mine</DefaultText>
                        <SquareBtn onPress={() => setNotMyAccount(!notMyAccount)}>
                            {notMyAccount &&
                            <Teste width={20} height={20} fill={"#000"}/>
                            }
                        </SquareBtn>
                    </DefaultViewRow>

                    {notMyAccount &&
                    <>
                        <Input onChangeText={(on => setOwnerName(on))} returnKeyType={"next"}
                               onSubmitEditing={() => cpfRef.current.focus()}
                               placeholder={"Account Owner name"} mTop={"10px"}/>
                        <Input onChangeText={(oc => setOwnerCpf(oc))} ref={cpfRef} placeholder={"Owner CPF"}
                               mBottom={"10px"} mTop={"10px"}/>
                    </>
                    }
                </DefaultView>

                <DefaultBtn>
                    <DefaultText color={"#fff"} font={"16px"}>Save</DefaultText>
                </DefaultBtn>

                <DefaultViewRow>
                    <Lock width={50} height={50} fill={"#bbb"} />
                    <DefaultText style={{width: '80%'}} mTop={"15px"} color={"#bbb"}>
                        Bankidô it's 100% safe. this data will only be used when you do a transfer from Bankidô to other bank
                    </DefaultText>
                </DefaultViewRow>

            </Scroll>
        </Container>
    );
}
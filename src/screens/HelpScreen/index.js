import React, {useState} from 'react';
import Search from '../../assets/svg/search.svg';
import Star from '../../assets/svg/star.svg';

import {DefaultText} from '../../components/DefaultText';

import {
    Container,

    Scroll,

    DivInput,
    Input,

    ArrayDiv,
    ArrayBtn,
} from './styled';

let arrayPix = [
    {id: 1, title: 'PIX', question: 'What is PIX?'},
    {id: 2, title: 'PIX', question: 'How to use PIX?'},
    {id: 3, title: 'PIX', question: 'How can i transfer money?'},
    {id: 4, title: 'PIX', question: 'Can i add money with PIX on my Bankidô?'},
    {id: 5, title: 'PIX', question: 'What are the keys?'},
    {id: 6, title: 'PIX', question: 'What is the random key?'},
];

let arrayCommon = [
    {id: 1, title: 'Indication promotion', question: 'How its work the indication promotion?'},
    {id: 2, title: 'Password update', question: 'How to update my password?'},
    {id: 3, title: 'Bankidô e-mails', question: 'I want to stop receiving Bankidô e-mails'},
    {id: 4, title: 'Username update', question: 'How to update my @username?'},
];



export default () => {
    const [userSearch, setUserSearch] = useState();

    // const filterData = arrayPix.filter((item) => {              // Array que será mostrado, pegando o valor digitado do usuário e filtrando para mostrar os que tem
    //     if(userSearch) {
    //         return item.name.indexOf(userSearch) >=0
    //     } else {
    //         return arrayPix;
    //     }
    // })

    return (
        <Container>
            <Scroll showsVerticalScrollIndicator={false}>
                <DivInput>
                    <Search width="25px" height="25px" fill="#DF274C"/>
                    <Input onSubmitEditing={() => console.log(userSearch)} placeholder="What's your question?" value={userSearch} onChangeText={us=>setUserSearch(us)}/>
                </DivInput>

                <ArrayDiv>
                    <DefaultText font={"22px"} bolder={"bold"} mTop={"15px"}>All about PIX</DefaultText>

                    {arrayPix.map((item, k) => (
                        <ArrayBtn key={k}>
                            <>
                                <DefaultText font={"16px"} color={"#666"}>{item.question}</DefaultText>
                                <Star width={15} height={15} fill={"#DF274C"}/>
                            </>
                        </ArrayBtn>
                    ))}
                </ArrayDiv>

                <ArrayDiv mTop={"25px"}>
                    <DefaultText font={"22px"} bolder={"bold"} mTop={"15px"}>Common questions</DefaultText>

                    {arrayCommon.map((item, k) => (
                        <ArrayBtn key={k}>
                            <>
                                <DefaultText font={"16px"} color={"#666"}>{item.question}</DefaultText>
                                <Star width={15} height={15} fill={"#DF274C"}/>
                            </>
                        </ArrayBtn>
                    ))}
                </ArrayDiv>
            </Scroll>
        </Container>
    );
}
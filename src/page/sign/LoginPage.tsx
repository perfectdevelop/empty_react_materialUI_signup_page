import React from 'react';
import styled from 'styled-components';

import { useFormik } from 'formik';
import UIForm from '../../ui-kit/form/UIForm';
import UIDatePicker from '../../ui-kit/form/UIDatePicker';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
`;

const Main = styled.div`
    flex-grow: 1;
    background-color: #114377;
    border-radius: 20px;
    margin: 10px;
    min-width: 430px;
    @media (max-width: 450px){
        min-width: 300px;
    }
`;

const Forms = styled.div`
    width: 430px;
    padding: 40px;
    margin-top: 90px;
    >form{
        >p:nth-child(1){
            margin-bottom: 20px;
        }
        >p:nth-child(3){
            margin-top: 52px;
        }
        >p:nth-child(4){
            margin-top: 36px;
        }
    }
`;

const Input = styled.input`
    padding: 11px 15px;
    outline: none;
    border: none;
    border: 1px solid #BAC4CF;
    border-radius: 8px;
    color: #0b0b0b;
    font-size: 12px;
    font-weight: 600;
    &:focus {
        border: 1px solid #BAC4CF;
        border-radius: 8px;
    }
    &:hover {
        border: 1px solid #BAC4CF;
        border-radius: 8px;
    }
    &:focus {
        outline: none;
    }
`

const P = styled.p`
    margin: 0;
    font-size: 14px;
    font-family: "Poppins";
    color: #0b0b0b;
    line-height: 22px;
`;

const SignBut = styled.button`
    width: 120px;
    height: 44px;
    border-radius: 8px;
    background-color: white;
    color: #114377;
    font-size: 14px;
    box-shadow: 2px 3px 10px rgba(17, 67, 119, 0.3);
    border: none;
    font-weight: 600;
`

const LogBut = styled.button`
    width: 120px;
    height: 44px;
    border-radius: 8px;
    background-color: #114377;
    color: white;
    border: none;
    font-weight: 600;
    box-shadow: 2px 5px 8px rgba(17, 67, 119, 0.3);
`;

const ButtonsGroup = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Label = styled.p`
    margin: 0;
    font-size: 10px;
    font-family: Poppins;
    color: #4f4f4f;
    margin-bottom: 6px;
    margin-top: 20px;
`;

const Div = styled.div`
    width: 100%;
    input{
        width: 100%;
        height: 44px !important;
    }
`;

const Confirm = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`;

const ConfirmBut = styled.button`
    width: 120px;
    height: 44px;
    border-radius: 8px;
    background-color: #114377;
    color: white;
    border: none;
    margin-top: 30px;
    font-weight: 600;
    opacity: 0.3;
    box-shadow: 2px 5px 8px rgba(17, 67, 119, 0.3);
`;

const LoginPage = () => {

    const formik = useFormik({
        initialValues: {},
        onSubmit: (values: any) => { },
    });

    return (
        <Container>
            <Main>
            </Main>
            <Forms>
                <UIForm formik={formik} style={{ width: '100%' }}>
                    <P>Do you have an existing portal account?</P>
                    <ButtonsGroup>
                        <SignBut>Sign Up</SignBut>
                        <LogBut>Log In</LogBut>
                    </ButtonsGroup>
                    <P>or</P>
                    <P>View results without creating a portal account.</P>
                    <P>Enter the following info to verify your identify.</P>
                    <Div>
                        <Label>FULL NAME</Label>
                        <Input id="firstName" name="firstName" />
                    </Div>
                    <Div>
                        <Label>DATE OF BIRTH</Label>
                        <UIDatePicker id='dob' name="dob" />
                    </Div>
                    <Confirm>
                        <ConfirmBut>Confirm</ConfirmBut>
                    </Confirm>
                </UIForm>
            </Forms>
        </Container>
    );
};

export default LoginPage;

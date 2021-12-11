import React from 'react';
import styled from 'styled-components';

import { useFormik } from 'formik';
import UIForm from '../../ui-kit/form/UIForm';
import { ReactComponent as CalendarIcon } from '../../media/image/calendar-icon.svg';
import { useState, FC } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { makeStyles } from '@material-ui/core';
import { Modal } from '@material-ui/core';

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
    &:hover{
        cursor: pointer;
    }
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
    &:hover{
        cursor: pointer;
    }
`;

const ButtonsGroup = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
`;

const ButtonsGroups = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    position: absolute;
    bottom: 20px;
    right: 0px;
`;

const Label = styled.p`
    margin: 0;
    font-size: 10px;
    font-family: Poppins;
    font-weight: 500;
    color: #4f4f4f;
    margin-bottom: 6px;
    margin-top: 20px;
`;

const Div = styled.div`
    width: 100%;
    position: relative;
    input{
        width: 100%;
        height: 44px !important;
    }
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;

const Divd = styled.div`
    width: 100%;
    position: relative;
    input{
        width: 100%;
        height: 44px !important;
    }
    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
    &.rdrDayToday::after{
        display: none;
    }
    &.rdrSelected{
        background-color: red !important;
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

const useStyles = makeStyles((theme) => ({
    calendar: {
        zoom: 0.904,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        "&>.rdrMonthsVertical": {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        },
        "&>.rdrDateDisplayWrapper": {
            height: 50,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: 'white',
            "&::before": {
                content: `'Select birthday'`,
                position: 'absolute',
                padding: 20,
                fontWeight: 600,
                fontSize: 16,
                color: '#0b0b0b'
            },
        },
        "&>div:nth-child(2)": {
            "&>span": {
                justifyContent: 'space-between',
                padding: 20,
                gap: 20,
                "&>span:nth-child(2)": {
                    display: 'none'
                },
                "&>span:nth-child(1)": {
                    borderRadius: 8,
                    border: '1px solid #BAC4CF',
                    flexGrow: 1,
                    "&>select": {
                        width: '100%'
                    },
                },
                "&>span:nth-child(3)": {
                    borderRadius: 8,
                    border: '1px solid #BAC4CF',
                    flexGrow: 1,
                    "&>select": {
                        width: '100%'
                    }
                }
            }
        },
        "&>div:nth-child(3)": {
            "&>div": {
                "&>div:nth-child(1)": {
                    "&>span": {
                        color: '#114377',
                        fontSize: '10px !important',
                        fontWeight: 600
                    }
                },
                "&>div:nth-child(2)": {
                    "&>.rdrDay": {
                        "&>.rdrDayStartPreview": {
                            border: 'none'
                        },
                        "&>.rdrDayStartPreview:hover": {
                            border: 'none'
                        },
                        "&>.rdrDayEndPreview": {
                            border: 'none'
                        },
                        "&>.rdrDayEndPreview:hover": {
                            border: 'none'
                        },

                        "&>.rdrSelected": {
                            borderRadius: '50%',
                            height: 30,
                            width: 30,
                            left: 7,
                            top: 2,
                            boxShadow: '2px 3px 10px rgb(17 67 119 / 30%)'
                        }
                    },
                    "&>.rdrDayHovered": {
                        "&>.rdrDayNumber:after": {
                            display: 'none',
                        }
                    },
                    "&>.rdrDayToday": {
                        "&>.rdrDayNumber": {
                            "&>span::after": {
                                display: 'none'
                            }
                        }
                    }
                }
            }
        }
    },
    calendarIcon: {
        position: 'absolute',
        right: 10,
        top: 55
    }
}));

const DivModal = styled.div`
    width: 300px;
    background-color: white;
    box-shadow: 2px 4px 8px rgb(0 0 0 / 15%);
    border-radius: 10px;
    padding-bottom: 20px;
    position: absolute;
    right: 70px;
    top: 0;
    bottom: 0;
    min-height: 390px;
    max-height: 420px;
    margin: auto;
    @media(max-width: 879px){
        right: 0;
        left: 0;
        margin: auto;
    }
    &:focus-visible{
        outline: none;
    }
`;

const Cancel = styled.p`
    padding: 8px 19px;
    color: #114377;
    font-size: 12px;
    font-weight: 600;
    &:hover{
        cursor: pointer;
    }
`;

const CalConfirm = styled.button`
    background-color: #114377;
    box-shadow: 2px 5px 8px rgba(17, 67, 119, 0.3);
    border-radius: 8px;
    padding: 8px 19px;
    color: white;
    font-size: 12px;
    font-weight: 600;
    &:hover{
        cursor: pointer;
    }
`;

const ConfirmButActive = styled.div`
    width: 120px;
    height: 44px;
    border-radius: 8px;
    background-color: #114377;
    color: white;
    border: none;
    margin-top: 30px;
    font-weight: 600;
    padding: 12px 30px;
    box-shadow: 2px 5px 8px rgba(17, 67, 119, 0.3);
    &:hover{
        cursor: pointer;
    }
`;

const LoginPage = () => {

    const formik = useFormik({
        initialValues: {},
        onSubmit: (values: any) => { },
    });

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const [temp, setTemp] = useState<any>();
    const handleOpen = () => setOpen(true);
    const [value, setValue] = useState<any>();

    function onChange(date: any) {
        setDate(date);
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();

        var today = yyyy + '-' + mm + '-' + dd;

        setTemp(today);
    }

    const onClose = () => {
        setOpen(false);
    }

    const cancel = () => {
        setOpen(false);
    }

    const confirm = () => {
        setValue(temp);
        onClose();
    }

    const valueChange = (e: any) => {
        setValue(e.target.value)
    }

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
                    <Divd>
                        <Label>DATE OF BIRTH</Label>
                        <Input type="date" value={value} max="9999-12-31" data-date-format="MM/dd/yyyy" style={{ position: 'relative' }} onChange={valueChange} />
                        <CalendarIcon className={classes.calendarIcon} onClick={handleOpen} />
                        <Modal open={open} onClose={onClose} style={{ borderRadius: '10px' }}>
                            <DivModal>
                                <Calendar date={date} onChange={onChange} showMonthArrow={false} color="#114377" className={classes.calendar} width={300} />
                                <ButtonsGroups style={{ justifyContent: "end", paddingRight: '20px' }}>
                                    <Cancel onClick={cancel}>Cancel</Cancel>
                                    <CalConfirm onClick={confirm}>Confirm</CalConfirm>
                                </ButtonsGroups>
                            </DivModal>
                        </Modal>
                    </Divd>
                    <Confirm>
                        {console.log(value)}
                        {value ?
                            <ConfirmButActive>Confirm</ConfirmButActive> :
                            <ConfirmBut disabled>Confirm</ConfirmBut>
                        }
                    </Confirm>
                </UIForm>
            </Forms>
        </Container>
    );
};

export default LoginPage;

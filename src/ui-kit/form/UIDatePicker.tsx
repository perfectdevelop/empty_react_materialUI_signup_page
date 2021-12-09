/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { ReactComponent as CalendarIcon } from '../../media/image/calendar-icon.svg';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';
import { Tween } from '../../settings/Tween';
import { FontSize, FontWeight, LetterSpacing, LineHeight } from '../../settings/Font';
import { ThemeColor } from '../../settings/ThemeColor';

const InputWrapper = styled.div`
    position: relative;
    border: none;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 16px;
    /* margin-top: 16px; */
    margin-bottom: 0px;
    border-radius: 16px;
    box-sizing: border-box;
    border-radius: 8px;

    > input {
        &:focus {
            border: 1px solid #BAC4CF;
        }
    }
`;

const SInput = styled.input`
    flex: 1;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #BAC4CF;
    padding: 8px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    transition: border-color ${Tween.duration}s ${Tween.ease}, box-shadow ${Tween.duration}s ${Tween.ease};
    font-family: Poppins;
    color: #0b0b0b;

    &::placeholder {
        font-style: normal;
        font-weight: normal;
        display: flex;
        align-items: center;
        color: #828282;
        opacity: 1;
    }

    :focus {
        outline: none;
    }
`;

const IconWrapper = styled.div<any>`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 3px;
    right: 4px;
    width: 32px;
    height: 32px;
    padding: 0px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    pointer-events: none;

    ${(props) => {
        return css`
            /* cursor: pointer; */

            :hover {
                background: #114377;
                opacity: 0.5;
                > svg {
                }
            }
        `;
    }}

    & > svg {
        width: 24px;
        height: 24px;
        user-select: false;
        /* pointer-events: none; */
    }
`;

const Text = styled.span`
    font-style: normal;
    font-weight: ${FontWeight.medium};
    font-size: ${FontSize.md};
    line-height: ${LineHeight.md};
    letter-spacing: ${LetterSpacing.md};
    color: ${ThemeColor.content};
    user-select: none;
`;

interface IProps {
    className?: string;
    id: string;
    name: string;
    label?: string;
    style?: any;
    readOnly?: boolean;
}

const UIDatePicker: FC<IProps> = ({ id, name, label, style, readOnly }) => {
    const [field, meta, helpers] = useField({ name });
    const { value } = meta;
    const { setValue } = helpers;
    const [selectedDate, handleDateChange] = useState(value || new Date());

    const renderInput = (props) => (
        <InputWrapper>
            <IconWrapper className="input-icon">
                <CalendarIcon />
            </IconWrapper>
            <SInput placeholder={'MM/DD/YYYY'} type="text" id={`datePicker-${props.id}`} name={`datePicker-${props.name}`} onClick={props.onClick} value={props.value} onChange={props.onChange} />
        </InputWrapper>
    );
    return (
        <UIFormControl style={style}>
            {label && <UILabel htmlFor={id}>{label}</UILabel>}
            {readOnly ? (
                <Text>
                    {selectedDate.getMonth()}/{selectedDate.getDate()}/{selectedDate.getFullYear()}
                </Text>
            ) : (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        // label="Light blue picker"
                        value={selectedDate}
                        format="MM/dd/yyyy"
                        onChange={(date) => {
                            handleDateChange(date);
                            setValue(date);
                        }}
                        TextFieldComponent={renderInput}
                        okLabel="Confirm"
                        cancelLabel="Cancel"
                    />
                </MuiPickersUtilsProvider>
            )}
        </UIFormControl>
    );
};

export default UIDatePicker;

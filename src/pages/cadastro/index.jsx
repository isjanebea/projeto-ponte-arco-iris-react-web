
import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../components/text'


const Main = styled.main`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);

`
const Input = styled.input`
    width: 100%;
    height: 50px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background: ${props => props.disabled ? props.theme.color.inputDisabled : props.theme.color.inputBg};
    padding: 10px;
    margin: 5px;
    outline: none;      
`
const Textarea = styled.textarea`
    width: 100%;
    height: 4em;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background: ${props => props.disabled ? props.theme.color.inputDisabled : props.theme.color.inputBg};
    color: ${props => props.theme.color.primary};
    padding: 10px;
    margin: 5px;
    outline: none;      
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.color.bg};
`

const FormGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    align-items: center;
    width: 100%;

    input, label {
        margin-bottom: 30px;
    }
    
`
const Label = styled.label`
    color: ${props => props.theme.color.primary};
    font-size: 20px;
    display: block;
`


const FormItens = (props) => {
    return (
        <FormGroup>
            <Label htmlFor={props.id}>{props.description}</Label>
            {props.type=="textarea" ? (
                <Textarea
                    placeholder={props.placeholder}
                    onChange={props.handleChange} id={props.id}
                    disabled={props.disabled} required={props.required}
                />
            )
                : (
                    <Input
                        type={props.type} placeholder={props.placeholder}
                        onChange={props.handleChange} id={props.id}
                        disabled={props.disabled} required={props.required}
                    />
                )
            }
        </FormGroup>
    )
}

const FormContainer = styled.div`
    max-width: 960px;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 10px;
    
`


const Wrapped = styled.section`
        background: rgb(${props => props.theme.color.bgContrast});
        padding: 20px;
        border-radius: 5px;
        margin-bottom: 10px;
`

const Form = styled.form`

    display: flex;
    flex-direction: column;  
`;





const Cadastro = () => {

    return (
        <Main >
            <Container>
                <FormContainer>
                    <H1>Cadastro</H1>
                    <Form>
                        <Wrapped>
                            <FormItens type={'text'} id={'nome'} handleChange={() => { }}
                                placeholder={'Nome'} description={'Nome da organização'} />
                            <FormItens type={'textarea'} id={'descricao'} handleChange={() => { }}
                                placeholder={''} description={'Descreva a organização'} />
                            <FormItens type={'date'} id={'fundacao'} handleChange={() => { }}
                                placeholder={'24/06/2020'} description={'Informe a data de fundação'} />
                            <FormItens type={'text'} id={'tipo'} handleChange={() => { }}
                                placeholder={'tipo'} description={'Informe qual o tipo de organização'} />
                            <FormItens type={'text'} id={'cnpj'} handleChange={() => { }}
                                placeholder={'00000/00'} description={'CNPJ da organização'} />
                        </Wrapped>
                        <Wrapped> { /* este form será dinamico */}
                            <FormItens type={'text'} id={'fundacao'} handleChange={() => { }}
                                placeholder={'24/06/2020'} description={'Informe a data de fundação'} />
                            <FormItens type={'text'} id={'tipo'} handleChange={() => { }}
                                placeholder={'tipo'} description={'Informe qual o tipo de organização'} />
                        </Wrapped>
                    </Form>
                </FormContainer>
            </Container>
        </Main >
    )
}


export default Cadastro;
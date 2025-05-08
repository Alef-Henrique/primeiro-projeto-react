import styled from "styled-components";
import { FcOk, FcEmptyTrash } from "react-icons/fc";


export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const ToDoList = styled.div`
    background-color: white;
    padding: 30px 20px;
    border-radius: 5px;
    width: 500px;
    margin: 20px;
    ul{
        padding: 0;
        margin-top: 60px;
    }

`
export const Imput = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    margin-right: 10px;
    height: 30px;
    width: 300px;
    margin-right: 20px;
`
export const Button = styled.button`
    background: #8052ec;
    border-radius: 5px;
    font-size: 17px;
    line-height: 2px;
    height: 30px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
`
export const ListItem = styled.div`
    background: ${props => (props.$isFinished ? '#E8FF8B' : '#E4E4E4')};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    margin-bottom: 20px;
    width: 100%;

    li{
        list-style-type: none;
    }

`
export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`
export const Check = styled(FcOk)`
    cursor: pointer;
`
export const TextoVazio = styled.h3`

    text-align: center;
    color: gray;
`
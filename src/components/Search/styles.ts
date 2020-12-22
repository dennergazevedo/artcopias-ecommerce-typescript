import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    margin: 20px;

    input{
        padding: 5px 20px 5px 5px;
        border: 1px solid #A3A3A3;
        color: #A3A3A3;
        font-size: 12px;
        background-color: #FFF;
        border-radius: 5px 0px 0px 5px;
        height: 30px;
        width: 200px;

        &:hover{
            border: 1px solid #555;
        }

        &:focus{
            border: 2px solid #333;
        }
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #333;
        color: #FFF;
        height: 30px;
        width: 30px;
        border-radius: 0px 5px 5px 0px;

        &:hover{
            background-color: #111;
        }
    }
`;
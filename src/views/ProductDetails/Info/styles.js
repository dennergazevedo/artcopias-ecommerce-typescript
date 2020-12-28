import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 300px;
    margin-top: 30px;
    box-shadow: 1px 1px 5px #3335;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
    background-color: #333;
    width: 100%;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    
    .iconTitle{
        font-size: 16px;
        margin-right: 10px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    background-color: #FFF;
    padding: 20px;

    @media only screen and (max-width: 600px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    min-width: 230px;
    margin: 10px;

    #infotec{
        font-size: 12px;
        text-align: justify;
        margin-top: 10px;
        margin-bottom: 10px;
        align-self: center;
    }

    #infoacab{
        font-size: 12px;
        text-align: justify;
        margin-top: 10px;
        margin-bottom: 10px;
        align-self: center;
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        width: 100%;

        @media only screen and (max-width: 600px){
            font-size: 12px;
            font-weight: 600;
        }

        .icon{
            margin-right: 20px;
        }
    }
`;
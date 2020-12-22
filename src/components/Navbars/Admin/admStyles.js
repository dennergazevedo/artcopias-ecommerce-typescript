import styled from 'styled-components';

export const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100vw;
    height: 70px;
    background-color: #333;
    color: #F2F2F2;
    padding-left: 20px;
    padding-right: 20px;

    @media only screen and (max-width: 600px){
        flex-direction: column;
        height: auto;
        align-items: flex-start;
        padding-bottom: 20px;
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span{
        font-size: 14px;
        font-weight: 600;
        margin-left: 10px;
    }

    img{
        display: flex;
        width: auto;
        height: 40px;
    }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .buttonDiv{
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
        color: #FFF;

        &:hover{
            color: #999;
        }

        span{
            display: flex;
            margin-left: 5px;
            font-size: 12px;
            font-weight: 600;
        }
    }
`;

export const ItemDrop = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    text-decoration: none;
    color: #FFF;
    font-weight: 600;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    background-color: transparent;
    width: auto;

    &:hover{
        color: #999;
    }

    .icon{
        font-size: 16px;
        margin-right: 5px;
    }

    .iconNav{
        font-size: 18px;
        margin-top: 5px;
    }
`;

export const DropButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    background-color: #FFF;
    box-shadow: 1px 1px 10px #A3A3A3;
    width: auto;
    min-width: 230px;
    border-radius: 3px;
    height: auto;
    top: 60px;
    transition: 0.5s all;
    padding: 10px;
    z-index: 20;

    a{
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        margin-top: 15px;
        color: #A3A3A3;

        &:hover{
            color: #555;
        }
    }

    div{
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        color: #A3A3A3;
        width: 100%;
        padding: 10px;

        &:hover{
            color: #555;
            background-color: #3331;
        }
    }
`;
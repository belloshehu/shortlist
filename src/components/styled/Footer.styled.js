import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: #000322;
    color: #ffffff;
    display: flex;
    flex-direction: rows;
    align-items: center;
    justify-content: space-between;
    padding: 10%;

    ul {
        list-style-type: none;
        text-align: left;
    }
    @media(min-width: 786) {
        flex-direction: column;
    }
    ul li{
        margin-bottom: 10px;
    }
    div {
        text-align: left;
        color: #ffffff;
    }
    h1, h2{
        color: #ffffff;
    }

`

export const StyledSocial = styled.div`
    // background-color: #fef099;
    ul li {
        display: inline-block;
        margin: 0px 20px;
    }
    ul  {
        list-style-type: none;
    }
    ul li a {
        color: #ffffff;
    }
    ul li:hover {
        transform: scale(1.25);
    }
`

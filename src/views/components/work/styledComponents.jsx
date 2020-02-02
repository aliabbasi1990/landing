import styled from 'styled-components';
import { MainColors} from "../theme.jsx";

export const Field = styled.div`
direction: rtl;
margin: 1.5rem 20%;

.labelWrapper{
    display: inline-block;
    width: 40%;
}
.label {
    font-size: 1rem;
}
.inputWrapper {
    display: inline-block;
    width: 60%;
}
.input {
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid;
    width: 100%;
    color: ${MainColors.mainGray};
}
.popo {
    text-align: center !important;
    width: 100%;
    font-size: 1rem;
    background: none;
    border: none;
    color: ${MainColors.mainGray};
}
`;
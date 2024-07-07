import styled, { createGlobalStyle } from 'styled-components';
import Modal from 'styled-react-modal'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&family=Roboto:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.1);
  }

  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 80%;
  border-radius: 10px;
  background: white;
`;

export const Header = styled.div`
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 12px;

  span {
    font-weight: 900;
    font-size: 20px;
    word-break: break-all;
  }
`;

export const StyledModal = Modal.styled`
  width: 80rem;
  padding: 20px;
  border-radius: 10px;
  border-style: solid;
  border-color: blue;
  border-width: 1px;
  background-color: white;`

export const DivTable = styled.div`
  padding: 10px;
  width: auto; 
  height: inherit; 
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: whitesmoke; 
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray; 
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff4c4c;
  border: none;
  color: red;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff1c1c;
    color: white;
  }

  &:active {
    background-color: #e60000;
  }

  &:disabled {
    background-color: #ffcccc;
    cursor: not-allowed;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 10px;
  word-break: break-all;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: whitesmoke;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid rgb(238, 235, 235)!important;
`;

export const Th = styled.th`
  padding: 5px;
  text-align: start;
  margin-bottom: 50px;

  &.acao {
    width: 100px!important;
    text-align: center;
  }
`;

export const Td = styled.td`
  vertical-align: text-top;
  padding: 6px;
  max-width: 50px;

  &.acao {
    text-align: center;
  }

  button {
    border: none;
    outline: none;
    background: transparent;

    i {
      font-size: 25px;
    }

    i:first-child {
      margin-right: 10px;
    }
  }
`;

export const ModalContainer = styled.dialog`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 999;
  align-items: center;
  justify-content: center;

  &.active {
    display: flex;

    .modal {
      animation: modal .4s;
    }
  }
`;

export const KeyframesModal = styled.div`
  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
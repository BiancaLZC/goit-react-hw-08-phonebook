import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  gap: 15px;
  width: 300px;
  margin: 0 auto;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;
`;
export const Input = styled.input`
  /* width: 300px; */
  height: 30px;
`;

export const SingUp = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin: 0 auto;
  cursor: pointer;
  color: #fff;
  background-color: #000;
  text-transform: uppercase;
`;
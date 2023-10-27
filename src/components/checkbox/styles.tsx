import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 24px;
  gap: 10px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  width: 22px;
  height: 22px;
  margin: 0;
  padding: 0;
  position: relative;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.checkBoxBorder};
  transition: box-shadow 0.2s ease 0s;
`;

export const CheckboxTypo = styled.div`
  color: ${({ theme }) => theme.colors.checkBoxColor};
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
`;

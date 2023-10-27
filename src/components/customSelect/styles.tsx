import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
`;

export const SelectedOption = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const OptionsContainer = styled.div`
  top: 100%;
  width: 100%;
  padding: 5px;
  position: absolute;
  margin-top: 2px;
  right: -5px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.stakingDesc};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 500;

  &:hover {
    background-color: lightgray;
  }
`;

export const DropDown = styled.div`
  width: 10px;
  height: 30px;
  background-image: url('${({ theme }) => theme.urls.dropDown}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

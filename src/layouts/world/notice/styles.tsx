import styled from 'styled-components';

export const NoticeWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 430px;
  height: 40px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: rgba(63, 120, 239, 0.5);

  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMobileWidth}) {
    width: calc(100% - 42px);
  }
`;

export const NoticeIcon = styled.div`
  width: 40px;
  min-width: 40px;
  height: 26px;
  background-image: url('${({ theme }) => theme.urls.worldNoticeLogo}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const NoticeTextWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

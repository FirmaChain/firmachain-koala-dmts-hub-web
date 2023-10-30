import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.footerBg};
`;

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  display: flex;
  align-items: stretch;

  gap: 80px;
  @media only screen and (max-width: ${({ theme }) => theme.sizes.mediaMaxWidth}) {
    margin: 0 120px;
  }

  @media only screen and (max-width: 750px) {
    margin: 0 40px;
    padding: 40px 0;
    flex-direction: column;
    gap: 60px;
    & > div:nth-child(1) {
      width: 100%;
      order: 2;
    }
    & > div:nth-child(2) {
      width: 70%;
      max-width: 230px;
      order: 1;
    }
  }
`;

export const FooterProject = styled.div`
  width: 410px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Logo1Image = styled(ReactSVG)`
  width: 34px;
  height: 34px;
  svg {
    width: 34px;
    height: 34px;
  }
`;
export const Logo2Image = styled(ReactSVG)`
  width: 154px;
  height: 16px;
  svg {
    width: 154px;
    height: 16px;
  }
`;

export const ProjectTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

export const ProjectNameTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ProjectDescriptionTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font14};
  font-weight: 500;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.white}80;
`;

export const ProjectPolicy = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PolicyTypo = styled.div`
  cursor: pointer;
  font-size: ${({ theme }) => theme.sizes.font15};
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white}B3;
`;

export const PolicyDivider = styled.div`
  width: 2px;
  height: 15px;
  font-size: ${({ theme }) => theme.sizes.font15};
  font-weight: 600;
  line-height: 20px;
  background-color: ${({ theme }) => theme.colors.white}B3;
`;

export const ProjectBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CopyrightTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font12};
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white}4D;
`;

export const FooterContactUs = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactUsTypo = styled.div`
  font-size: ${({ theme }) => theme.sizes.font16};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const ContactList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactItem = styled(ReactSVG)`
  svg {
    width: 26px;
    height: 26px;
    fill: ${({ theme }) => theme.colors.white};
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FCTLogo = styled(ReactSVG)`
  svg {
    width: 20px;
    height: 30px;
    fill: #ccc !important;
  }
`;

export const FirmachainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`;

export const FirmachainTypo = styled.div`
  color: #ccc;
  font-weight: 500;
`;

export const XDivider = styled.div`
  color: #ccc;
  padding: 0 6px 0 4px;
`;

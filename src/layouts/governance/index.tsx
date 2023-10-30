import React from 'react';

import useTheme from '../../hooks/useTheme';

import {
  GovernanceContainer,
  GovernanceWrapper,
  GovernanceCard,
  TopWrapper,
  TopTitleWrapper,
  TitleWrapper,
  TitleTypo,
  BorderLine,
  CommingsoonLabelTypo,
  DescriptionTypo,
  BottomWrapper,
  IntroItem,
  IntroTitleWrapper,
  IndexWrapper,
  IndexBg,
  IndexTypo,
  IntroTitleTypo,
  IntroDescriptionWrapper,
  DescriptionContents,
  IntroDescriptionTypo,
  LinkChainIcon,
  LinkLabel,
  LinkWrapper,
  VoteWrapper,
  VoteImage,
  VoteButton,
  GovMessageTypo1,
  GovMessageTypo2,
  GovMessageBox,
} from './styles';

const Governance = () => {
  const { theme } = useTheme();

  return (
    <GovernanceContainer>
      <GovernanceWrapper>
        <GovernanceCard>
          <TopWrapper>
            <TopTitleWrapper>
              <TitleWrapper>
                <TitleTypo>GOVERNANCE</TitleTypo>
                <BorderLine src={theme.urls.borderLine} />
              </TitleWrapper>
              <CommingsoonLabelTypo>COMMING SOON</CommingsoonLabelTypo>
            </TopTitleWrapper>
            <DescriptionTypo>
              By staking on Koala-Fi and using gKOA, you can influence Koala Knights' governance, including voting on
              new characters and dungeon attributes.
            </DescriptionTypo>
          </TopWrapper>
          <BottomWrapper>
            <IntroItem>
              <IntroTitleWrapper>
                <IndexWrapper>
                  <IndexBg />
                  <IndexTypo>1</IndexTypo>
                </IndexWrapper>
                <IntroTitleTypo>Participation</IntroTitleTypo>
              </IntroTitleWrapper>
              <IntroDescriptionWrapper>
                <DescriptionContents>
                  <VoteWrapper>
                    <VoteImage>
                      <VoteButton>VOTE</VoteButton>
                    </VoteImage>
                    <GovMessageBox>
                      <GovMessageTypo1>NECESSARY</GovMessageTypo1>
                      <GovMessageTypo2>MY gKOA</GovMessageTypo2>
                    </GovMessageBox>
                  </VoteWrapper>
                </DescriptionContents>
                <IntroDescriptionTypo>
                  If you hold 'gKOA', you are entitled to participate in Koala Knights' governance.
                </IntroDescriptionTypo>
              </IntroDescriptionWrapper>
            </IntroItem>
            <IntroItem>
              <IntroTitleWrapper>
                <IndexWrapper>
                  <IndexBg />
                  <IndexTypo>2</IndexTypo>
                </IndexWrapper>
                <IntroTitleTypo>LP-POOL linkage</IntroTitleTypo>
              </IntroTitleWrapper>
              <IntroDescriptionWrapper>
                <DescriptionContents>
                  <LinkWrapper>
                    <LinkChainIcon src={theme.urls.linkChain} />
                    <LinkLabel>LP-POOL</LinkLabel>
                  </LinkWrapper>
                </DescriptionContents>
                <IntroDescriptionTypo>
                  By providing liquidity to Koala-Fi's LP-POOL, one can acquire the 'gKOA' token.
                </IntroDescriptionTypo>
              </IntroDescriptionWrapper>
            </IntroItem>
          </BottomWrapper>
        </GovernanceCard>
      </GovernanceWrapper>
    </GovernanceContainer>
  );
};

export default React.memo(Governance);

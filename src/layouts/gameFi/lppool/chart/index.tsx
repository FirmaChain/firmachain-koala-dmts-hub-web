import React from 'react';

import {
  BottomWrapper,
  RateItem,
  RateWrapper,
  RateCurrencyIconFCT,
  RateCurrencyIconKOA,
  RateTypo,
  ChartCard,
  ChartTopWrapper,
  ChartTopLeftWrapper,
  ChartTopRightWrapper,
  AprLabelTypo,
  AprValueTypo,
  ChartBottomWrapper,
  ChartBottomLeftWrapper,
  ChartLabelList,
  ChartLabelItem,
  ChartLabelTypo,
  ChartLabelValue,
  ChartBottomRightWrapper,
  DummyChart,
} from './styles';

const LppoolChart = () => {
  return (
    <BottomWrapper>
      <ChartCard>
        <ChartTopWrapper>
          <ChartTopLeftWrapper>
            <RateWrapper>
              <RateItem>
                <RateCurrencyIconFCT />
                <RateTypo>1 FCT = 12.123123 KOA</RateTypo>
              </RateItem>
              <RateItem>
                <RateCurrencyIconKOA />
                <RateTypo>1 FGT = 0.123123 FGT</RateTypo>
              </RateItem>
            </RateWrapper>
          </ChartTopLeftWrapper>
          <ChartTopRightWrapper>
            <AprLabelTypo>APR</AprLabelTypo>
            <AprValueTypo>50.4%</AprValueTypo>
          </ChartTopRightWrapper>
        </ChartTopWrapper>
        <ChartBottomWrapper>
          <ChartBottomLeftWrapper>
            <ChartLabelList>
              <ChartLabelItem $active={true}>
                <ChartLabelTypo>Total Liquidity</ChartLabelTypo>
                <ChartLabelValue>6.04m</ChartLabelValue>
              </ChartLabelItem>

              <ChartLabelItem $active={false}>
                <ChartLabelTypo>Total Liquidity</ChartLabelTypo>
                <ChartLabelValue>6.04m</ChartLabelValue>
              </ChartLabelItem>

              <ChartLabelItem $active={false}>
                <ChartLabelTypo>Total Liquidity</ChartLabelTypo>
                <ChartLabelValue>6.04m</ChartLabelValue>
              </ChartLabelItem>

              <ChartLabelItem $active={false}>
                <ChartLabelTypo>Total Liquidity</ChartLabelTypo>
                <ChartLabelValue>6.04m</ChartLabelValue>
              </ChartLabelItem>
            </ChartLabelList>
          </ChartBottomLeftWrapper>
          <ChartBottomRightWrapper>
            <DummyChart />
          </ChartBottomRightWrapper>
        </ChartBottomWrapper>
      </ChartCard>
    </BottomWrapper>
  );
};

export default React.memo(LppoolChart);

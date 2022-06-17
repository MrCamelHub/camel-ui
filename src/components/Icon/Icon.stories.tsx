import React from 'react';

import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import Icon from '@components/Icon';

import { ThemeProvider } from '@theme';

import * as SpecifySvgIcons from '../../assets/icons/specify';
import * as OutlinedSvgIcons from '../../assets/icons/outlined';
import * as FilledSvgIcons from '../../assets/icons/filled';

export default {
  title: 'Components/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;

  & div {
    min-width: 200px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & svg {
    margin: 20px;
  }
`;

export function Default({ ...args }) {
  return (
    <ThemeProvider theme="light">
      <Icon name="HeartOutlined" {...args} />
    </ThemeProvider>
  );
}

export function FilledIcons() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        {(
          [
            'AlarmFilled',
            'BangFilled',
            'BookmarkFilled',
            'CameraFilled',
            'DownloadFilled',
            'HeartFavoriteFilled',
            'HeartFilled',
            'HomeFilled',
            'KakaoFilled',
            'MoreFilled',
            'NewFilled',
            'NotiFilled',
            'QuestionFilled',
            'RankFilled',
            'SafeFilled',
            'SettingFilled',
            'ShareFilled',
            'StarFilled',
            'TrophyFilled',
            'UnderFilled',
            'UserFilled',
            'UserLargeFilled',
            'WarningFilled'
          ] as (keyof typeof FilledSvgIcons)[]
        ).map((name) => (
          <div key={`filled-icon-${name}`}>
            <Icon name={name} />
            {name}
          </div>
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}

export function OutlinedIcons() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        {(
          [
            'AlarmOutlined',
            'ArrowDownOutlined',
            'ArrowLeftOutlined',
            'ArrowRightOutlined',
            'ArrowUpOutlined',
            'BoxOutlined',
            'CaretDownOutlined',
            'CaretLeftOutlined',
            'CaretRightOutlined',
            'CaretUpOutlined',
            'CategoryOutlined',
            'ChangeStatusOutlined',
            'ChatOutlined',
            'CheckOutlined',
            'CloseOutlined',
            'ClothesOutlined',
            'DeleteOutlined',
            'EditOutlined',
            'FilterOutlined',
            'HeartFavoriteOutlined',
            'HeartShadowOutlined',
            'HeartOutlined',
            'HomeOutlined',
            'MenuOutlined',
            'MessageOutlined',
            'MinusOutlined',
            'NotiOutlined',
            'PantsOutlined',
            'PlusOutlined',
            'PullUpOutlined',
            'RankOutlined',
            'RotateOutlined',
            'SearchOutlined',
            'ShareOutlined',
            'ShoesOutlined',
            'StarOutlined',
            'TimeOutlined',
            'TrophyOutlined',
            'UserOutlined',
            'UserLargeOutlined',
            'ViewOutlined'
          ] as (keyof typeof OutlinedSvgIcons)[]
        ).map((name) => (
          <div key={`outlined-icon-${name}`}>
            <Icon name={name} />
            {name}
          </div>
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}

export function SpecifyIcons() {
  return (
    <ThemeProvider theme="light">
      <Wrapper>
        {(
          [
            'LongCaretDownSpecify_66_11',
            'LongCaretUpSpecify_66_11',
            'Logo_45_45',
            'LogoText_96_20'
          ] as (keyof typeof SpecifySvgIcons)[]
        ).map((name) => (
          <div key={`specify-icon-${name}`}>
            <Icon name={name} />
            {name}
          </div>
        ))}
      </Wrapper>
    </ThemeProvider>
  );
}

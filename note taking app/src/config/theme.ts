import { theme as baseTheme } from 'antd';

import type { ConfigProviderProps } from 'antd';
import '@/index.css';

// Colors
// General
const PRIMARY_COLOR = 'oklch(0.623 0.214 259.815)';
export const PRIMARY_TEXT_COLOR = 'hsla(156, 61%, 9%, 1)';
export const SECONDARY_COLOR = 'hsla(0, 0%, 93%, 1)';
export const TEXT_COLOR_GREY = 'hsla(155, 5%, 44%, 1)';
export const DASHBOARD_BG_COLOR = 'hsla(0, 0%, 97%, 1)';
export const TEXT_COLOR_RED = 'hsla(0, 100%, 50%, 1)';
const LIGHT_GREEN = 'hsla(153, 100%, 94%, 1)';
export const ERROR_BG_COLOR = 'hsla(358, 72%, 46%, 1)';

// Table status colors
export const PRIMARY_STATUS_BG = 'hsla(155, 100%, 90%, 1)';
export const PRIMARY_STATUS_TEXT = 'hsla(155, 80%, 37%, 1)';
export const SECONDARY_STATUS_BG = 'hsla(37, 100%, 95%, 1)';
export const SECONDARY_STATUS_TEXT = 'hsla(39, 80%, 54%, 1)';
export const DANGER_STATUS_BG = 'hsla(349, 100%, 93%, 1)';
export const DANGER_STATUS_TEXT = 'hsla(349, 74%, 49%, 1)';
export const TERTIARY_STATUS_BG = 'hsla(222, 100%, 93%, 1)';
export const TERTIARY_STATUS_TEXT = 'hsla(222, 75%, 54%, 1)';

const PRIMARY_HOVER_COLOR = 'var(--primary-foreground)';

export const UNIVERSAL_COLOR = 'white';

export const FONT_FAMILY = "'Archivo', sans-serif";

const buttonStyle = {
  borderColorDisabled: 'transparent',
  colorPrimary: 'var(--primary)',
  colorPrimaryHover: PRIMARY_HOVER_COLOR,
  colorLink: 'var(--primary)',
  colorText: UNIVERSAL_COLOR,
  colorTextLightSolid: UNIVERSAL_COLOR,
  contentFontSize: 13,
  contentFontSizeLG: 15,
  contentFontSizeSM: 12,
  primaryShadow: 'none',
  controlHeight: 37,
  controlHeightSM: 30,
  controlHeightLG: 40,
  //   defaultBg: 'transparent',
  defaultBg: 'var(--primary)',
  defaultColor: 'black',
  defaultHoverBg: 'hsla(0, 0%, 93%, 0.5)',
  defaultHoverBorderColor: 'none',
  defaultHoverColor: 'black',
  // defaultActiveBg: TERTIARY_COLOR,
  // defaultActiveBorderColor: TERTIARY_COLOR,
  //   defaultActiveColor: SECONDARY_COLOR,
  // fontWeight: 400,
  // fontWeightSM: 400,
  // fontWeightLG: 500,
  paddingInline: 25,
  paddingInlineLG: 28,
  // paddingInlineSM: 16,
  paddingBlock: 10,
  paddingBlockLG: 16,
  // paddingBlockSM: 16,
};

const paginationStyle = {
  borderColorDisabled: 'transparent',
  borderRadius: 100,
  borderRadiusLG: 100,
  borderRadiusSM: 100,
  colorPrimary: UNIVERSAL_COLOR,
  itemActiveBg: LIGHT_GREEN,
  // controlHeight: 37,
  // controlHeightSM: 30,
  // controlHeightLG: 45,
  //   defaultBg: 'transparent',
  // defaultActiveBg: TERTIARY_COLOR,
  // defaultActiveBorderColor: TERTIARY_COLOR,
  //   defaultActiveColor: SECONDARY_COLOR,
  // fontWeight: 400,
  // fontWeightSM: 400,
  // fontWeightLG: 500,
  // paddingInline: 25,
  // paddingInlineLG: 28,
  // paddingInlineSM: 16,
  // paddingBlock: 14,
  // paddingBlockLG: 16,
  // paddingBlockSM: 16,
};

const dateStyle = {
  borderRadius: 100,
  fontSize: 14,
  fontSizeSM: 12,
  fontSizeLG: 14,
  //   colorPrimary: PRIMARY_TEXT_DARK_COLOR,
  //   colorPrimaryHover: PRIMARY_TEXT_DARK_COLOR,
  //   colorBorder: TERTIARY_COLOR,
  //   // paddingBlock: 9,
  //   // paddingBlockSM: 6.5,
  //   paddingBlockLG: 8,
  // paddingInline: 20,
  //   // paddingInlineSM: 16,
  //   // paddingInlineLG: 24,
};

const inputStyle = {
  //   activeBorderColor: 'none',
  // activeBg: 'transparent',
  // colorPrimary: PRIMARY_TEXT_DARK_COLOR,
  //   hoverBorderColor: 'none',
  inputFontSize: 14,
  inputFontSizeSM: 12,
  inputFontSizeLG: 16,
  // paddingBlock: 12,
  // paddingBlockSM: 9,

  controlHeight: 38,
  controlHeightSM: 33,
  controlHeightLG: 43,
  //   paddingBlockLG: 13,
  // paddingInline: 20,
  // paddingInlineSM: 20,
  // paddingInlineLG: 20,
};

const selectStyle = {
  activeBorderColor: 'none',
  borderRadius: 10,
  borderRadiusSM: 10,
  borderRadiusLG: 10,
  colorPrimary: '#6b7671',
  //   colorPrimaryHover: PRIMARY_TEXT_DARK_COLOR,
  controlHeight: 35,
  controlHeightSM: 30,
  controlHeightLG: 40,
  fontSize: 14,
  fontSizeSM: 12,
  fontSizeLG: 16,
  //   fontSizeLG: 14,
  hoverBorderColor: 'none',
  //   optionSelectedColor: SECONDARY_COLOR,
  //   optionSelectedFontWeight: 400,
};

const theme = ({ themeValue }: { themeValue?: 'dark' | 'light' }) => {
  const value: ConfigProviderProps['theme'] = {
    algorithm:
      themeValue === 'dark'
        ? baseTheme.darkAlgorithm
        : baseTheme.defaultAlgorithm,
    components: {
      Button: buttonStyle,
      Checkbox: {
        // colorWhite: PRIMARY_TEXT_DARK_COLOR,
        // colorPrimary: TERTIARY_COLOR,
        colorPrimaryHover: PRIMARY_HOVER_COLOR,
      },
      DatePicker: dateStyle,
      Form: {
        margin: 8,
        marginLG: 8, // adjust this value to your liking
      },
      InputNumber: inputStyle,
      Input: inputStyle,
      Pagination: paginationStyle,
      Message: {
        colorPrimary: PRIMARY_COLOR,
        colorPrimaryHover: PRIMARY_HOVER_COLOR,
        // colorInfo: MESSAGE_COLOR_INFO,
      },
      Select: selectStyle,
      Tabs: {
        // itemColor: PRIMARY_TEXT_DARK_COLOR,
        // inkBarColor: PRIMARY_TEXT_DARK_COLOR,
        // itemActiveColor: PRIMARY_TEXT_DARK_COLOR,
        // itemHoverColor: PRIMARY_TEXT_DARK_COLOR,
        // itemSelectedColor: PRIMARY_TEXT_DARK_COLOR,
      },
      Upload: {
        // colorPrimaryHover: PRIMARY_TEXT_DARK_COLOR,
      },
    },
    token: {
      colorPrimary: PRIMARY_COLOR,
      // colorBgBase: themeValue === 'dark' ? DARK_BG_BASE_COLOR : undefined,
      fontFamily: FONT_FAMILY,
    },
  };

  return value;
};

export default theme;

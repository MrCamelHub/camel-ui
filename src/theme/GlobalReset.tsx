import type { CustomStyle } from '@types';
import useTheme from '@theme/provider/useTheme';
import { Global } from '@emotion/react';

interface GlobalResetProps {
  customResetStyle?: CustomStyle;
}

/*! tailwindcss v2.2.15 | MIT License | https://tailwindcss.com */
/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */
function GlobalReset({ customResetStyle }: GlobalResetProps) {
  const {
    theme: {
      palette: { common }
    }
  } = useTheme();
  return (
    <Global
      styles={{
        'abbr[title]': {
          textDecoration: 'underline dotted'
        },
        'b, strong': {
          fontWeight: 'bolder'
        },
        'code, kbd, samp, pre': {
          fontFamily: 'ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo',
          fontSize: '1em'
        },
        small: {
          fontSize: '80%'
        },
        'sub, sup': {
          fontSize: '75%',
          lineHeight: 0,
          position: 'relative',
          verticalAlign: 'baseline'
        },
        sub: {
          bottom: '-0.25em'
        },
        sup: {
          top: '-0.5em'
        },
        table: {
          borderCollapse: 'collapse',
          textIndent: 0,
          borderColor: 'inherit'
        },
        'button, select': {
          textTransform: 'none'
        },
        'button, [type="button"], [type="reset"], [type="submit"]': {
          appearance: 'button'
        },
        '::-moz-focus-inner': {
          borderStyle: 'none',
          padding: 0
        },
        ':-moz-ui-invalid': {
          boxShadow: 'none'
        },
        legend: {
          padding: 0
        },
        progress: {
          verticalAlign: 'baseline'
        },
        '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
          height: 'auto'
        },
        '[type="search"]': {
          appearance: 'textfield',
          outlineOffset: '-2px'
        },
        '::-webkit-search-decoration': {
          appearance: 'none'
        },
        '::-webkit-file-upload-button': {
          appearance: 'button',
          font: 'inherit'
        },
        summary: {
          display: 'list-item'
        },
        'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
          margin: 0
        },
        button: {
          backgroundColor: 'transparent',
          backgroundImage: 'none'
        },
        fieldset: {
          margin: 0,
          padding: 0
        },
        'ol, ul': {
          listStyle: 'none',
          margin: 0,
          padding: 0
        },
        html: {
          tabSize: 4,
          textSizeAdjust: '100%',
          height: '100%',
          lineHeight: 1.5
        },
        body: {
          margin: 0,
          height: '100%',
          backgroundColor: common.bg01,
          color: common.ui20,
          lineHeight: 'inherit',
          fontFamily:
            'Camel Product Sans, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
          WebkitFontSmoothing: 'antialiased'
        },
        '*, ::before, ::after': {
          boxSizing: 'border-box',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: 'currentColor'
        },
        hr: {
          height: 0,
          color: 'inherit',
          borderTopWidth: 1
        },
        img: {
          borderStyle: 'solid'
        },
        textarea: {
          resize: 'vertical'
        },
        'input::placeholder, textarea::placeholder': {
          opacity: 1,
          color: '#9ca3af'
        },
        'button, [role="button"]': {
          cursor: 'pointer'
        },
        ':-moz-focusring': {
          outline: 'auto'
        },
        'h1, h2, h3, h4, h5, h6': {
          fontSize: 'inherit',
          fontWeight: 'inherit'
        },
        a: {
          color: 'inherit',
          textDecoration: 'inherit'
        },
        'button, input, optgroup, select, textarea': {
          margin: 0,
          padding: 0,
          lineHeight: 'inherit',
          fontFamily: 'inherit',
          fontSize: '100%',
          color: 'inherit'
        },
        'pre, code, kbd, samp': {
          fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        Liberation Mono, Courier New, monospace`
        },
        'canvas, audio, iframe, embed, object': {
          display: 'block',
          verticalAlign: 'middle'
        },
        'img, video': {
          maxWidth: '100%',
          height: 'auto'
        },
        'img, svg, video': {
          verticalAlign: 'middle'
        },
        '[hidden]': {
          display: 'none'
        },
        '*': {
          WebkitTapHighlightColor: 'transparent'
        },
        '*,::before,::after': {
          '--tw-border-opacity': 1,
          borderColor: 'rgba(229, 231, 235, var(--tw-border-opacity))'
        },
        ...customResetStyle
      }}
    />
  );
}

export default GlobalReset;

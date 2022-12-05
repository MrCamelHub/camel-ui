import type { Property } from 'csstype';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type ColorKey = '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '50A';

export type ColorProperty = Property.Color;

export type ColorCode = RGB | RGBA | HEX;
export type Color =
  | ColorCode
  | ColorProperty
  | `linear-gradient(${number}deg, ${ColorCode} ${number}%, ${ColorCode} ${number}%)`;

export type AbsoluteUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';
export type RelativeUnit = 'em' | 'ex' | 'ch' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
export type CSSValue = number | `${number}${AbsoluteUnit | RelativeUnit}` | 'auto' | 'fit-content';

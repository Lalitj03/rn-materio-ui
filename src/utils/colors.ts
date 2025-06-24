// src/utils/colors.ts

import type { ColorBlock, ColorPalette, ThemeColors } from '../index';
import { twcolors } from '../index';

// --- TYPE DEFINITIONS for the simplified API ---

type ColorFamily = keyof Omit<typeof twcolors, 'white' | 'black'>;
type ShadeKey = keyof typeof twcolors.blue;
type ColorInput = ColorFamily | [ColorFamily, ShadeKey];
type BaseColorValue = ColorInput | { light: ColorInput; dark: ColorInput };
type BaseColorConfig = Partial<Record<ThemeColors, BaseColorValue>>;

// --- HELPER CONSTANT ---

const shadeKeys: ShadeKey[] = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
];

// --- CORE LOGIC ---

/**
 * The core logic. Generates a full ColorBlock based on a color family and
 * a base shade, applying the new, simplified contrast rules.
 */
const generateColorBlock = (
  family: ColorFamily,
  baseShade: ShadeKey,
  mode: 'light' | 'dark'
): ColorBlock => {
  const colorRamp = twcolors[family];
  const baseShadeIndex = shadeKeys.indexOf(baseShade);

  // 1. Determine Main Colors
  const main = colorRamp[baseShade];
  let mainHigh: string;
  let mainLow: string;

  if (mode === 'light') {
    const highShadeIndex = Math.min(baseShadeIndex + 4, shadeKeys.length - 1); // e.g., 500 -> 900
    const lowShadeIndex = Math.max(baseShadeIndex - 4, 0); // e.g., 500 -> 100
    mainHigh = colorRamp[shadeKeys[highShadeIndex]!];
    mainLow = colorRamp[shadeKeys[lowShadeIndex]!];
  } else {
    const highShadeIndex = Math.max(baseShadeIndex - 3, 0); // e.g., 400 -> 100
    const lowShadeIndex = Math.min(baseShadeIndex + 4, shadeKeys.length - 1); // e.g., 400 -> 800
    mainHigh = colorRamp[shadeKeys[highShadeIndex]!];
    mainLow = colorRamp[shadeKeys[lowShadeIndex]!];
  }

  // 2. Determine Contrast Colors based on the new rules
  const baseContrast = twcolors.gray['50'];

  // Rule: Contrast is the opposite end of the same color family's ramp.
  const lightContrast = colorRamp[shadeKeys[1]!]; // '100' shade
  const darkContrast = colorRamp[shadeKeys[shadeKeys.length - 2]!]; // '900' shade

  // Helper to determine if a shade is "dark" (>= 500)
  const isDark = (shade: ShadeKey) => shadeKeys.indexOf(shade) >= 5;

  // Find the shade for mainHigh and mainLow to determine their contrast
  const highShade =
    shadeKeys.find((key) => colorRamp[key] === mainHigh) || '500';
  const lowShade = shadeKeys.find((key) => colorRamp[key] === mainLow) || '500';

  return {
    base: { main, contrast: baseContrast },
    high: {
      main: mainHigh,
      contrast: isDark(highShade) ? lightContrast : darkContrast,
    },
    low: {
      main: mainLow,
      contrast: isDark(lowShade) ? lightContrast : darkContrast,
    },
  };
};

/**
 * Takes the user's input (e.g., 'purple' or ['purple', '500']) and
 * returns a structured object with the family and shade.
 */
const resolveInput = (
  input: ColorInput
): { family: ColorFamily; shade: ShadeKey } => {
  if (typeof input === 'string') {
    return { family: input, shade: '500' };
  }
  return { family: input[0], shade: input[1] };
};

// --- MAIN EXPORTED FUNCTION ---

/**
 * Creates a full light and dark color palette from a declarative configuration
 * using only `twcolors`.
 *
 * @param config An object where keys are color names (e.g., 'primary') and
 * values define the base color using Tailwind color names and shades.
 */
export const createPalette = (
  config: BaseColorConfig
): { light: Partial<ColorPalette>; dark: Partial<ColorPalette> } => {
  const lightPalette: Partial<ColorPalette> = {};
  const darkPalette: Partial<ColorPalette> = {};

  for (const colorName in config) {
    const key = colorName as ThemeColors;
    const value = config[key];

    if (value) {
      let lightConfig: { family: ColorFamily; shade: ShadeKey };
      let darkConfig: { family: ColorFamily; shade: ShadeKey };

      if (typeof value === 'object' && !Array.isArray(value)) {
        lightConfig = resolveInput(value.light);
        darkConfig = resolveInput(value.dark);
      } else {
        lightConfig = resolveInput(value);
        const darkShadeIndex = Math.max(
          shadeKeys.indexOf(lightConfig.shade) - 1,
          0
        ); // 500 -> 400
        darkConfig = {
          family: lightConfig.family,
          shade: shadeKeys[darkShadeIndex]!,
        };
      }

      lightPalette[key] = generateColorBlock(
        lightConfig.family,
        lightConfig.shade,
        'light'
      );
      darkPalette[key] = generateColorBlock(
        darkConfig.family,
        darkConfig.shade,
        'dark'
      );
    }
  }

  return {
    light: lightPalette,
    dark: darkPalette,
  };
};

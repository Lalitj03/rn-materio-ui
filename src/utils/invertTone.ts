import { type ColorTone } from './types/theme';

/**
 * Inverts the tone between 'high', 'base', and 'low'
 * @param tone The current tone that needs to be inverted
 * @returns The inverted tone
 */
export default function invertTone(tone: ColorTone): ColorTone {
  switch (tone) {
    case 'high':
      return 'low';
    case 'low':
      return 'high';
    default:
      return 'base';
  }
}

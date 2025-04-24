import {
    useTheme, type PaperVariants,
    type ThemeColors,
    type ThemeColorTones
} from '@materio/rn-materio-ui';
import { View } from 'react-native';
import { BaseButton, type BaseButtonProps } from 'react-native-gesture-handler';

export interface ColoredCardProps extends BaseButtonProps {
  color?: ThemeColors;
  colorTone?: ThemeColorTones;
  variant?: PaperVariants;
  /** The border radius of the card */
  rounded?: number;
  /** Adds padding to the card. Default is 8 */
  padding?: number;
  pressable?: boolean;
}

export default function ColoredCard({
  children,
  color = 'neutral',
  colorTone = 'low',
  variant = 'solid',
  enabled = true,
  rounded = 16,
  padding = 8,
  style,
  pressable,
  ...props
}: ColoredCardProps) {
  const theme = useTheme();
  const colorBlock = theme.colorScheme.palette[color];
  let backgroundColor = colorBlock[colorTone].main;
  let borderColor = colorBlock[colorTone].main;

  if (variant === 'outline') {
    backgroundColor = 'transparent';
  }

  if (variant === 'solid') {
    borderColor = 'transparent';
  }

  if (!enabled) {
    if (variant === 'solid') {
      backgroundColor += '60';
    } else {
      borderColor += '60';
    }
  }

  if (pressable) {
    return (
      <BaseButton
        style={[
          {
            borderWidth: variant === 'outline' ? 1 : 0,
            backgroundColor,
            borderColor,
            borderRadius: rounded,
            padding,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </BaseButton>
    );
  }

  return (
    <View
      style={[
        {
          borderWidth: variant === 'outline' ? 1 : 0,
          backgroundColor,
          borderColor,
          borderRadius: rounded,
          padding,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

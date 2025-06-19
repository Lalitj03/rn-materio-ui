import {
  useTheme,
  type PaperVariants,
  type Theme,
} from '@materio/rn-materio-ui';
import { BaseButton, type BaseButtonProps } from 'react-native-gesture-handler';

export interface CardProps extends BaseButtonProps {
  variant?: PaperVariants;
  /** The border radius of the card. Can be a theme key or a number */
  rounded?: keyof Theme['borderRadius'] | number;
}

export default function Card({
  children,
  variant = 'solid',
  rounded = 'md',
  style,
  ...props
}: CardProps) {
  const theme = useTheme();
  const backgroundColor =
    variant === 'solid' ? theme.colorScheme.surface.paper : 'transparent';
  const borderWidth =
    variant === 'outline' ? theme.borderWidths.medium : theme.borderWidths.none;
  const borderColor =
    variant === 'outline' ? theme.colorScheme.surface.divider : 'transparent';
  let borderRadius: number;
  if (
    typeof rounded === 'string' &&
    Object.prototype.hasOwnProperty.call(theme.borderRadius, rounded)
  ) {
    borderRadius = theme.borderRadius[rounded as keyof Theme['borderRadius']];
  } else if (typeof rounded === 'number') {
    borderRadius = rounded;
  } else {
    borderRadius = theme.borderRadius.md;
  }

  return (
    <BaseButton
      style={[
        {
          borderWidth,
          backgroundColor,
          borderColor,
          borderRadius,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

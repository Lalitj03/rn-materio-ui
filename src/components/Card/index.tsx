import { useTheme } from 'rn-materio-ui';
import { type PaperVariants } from 'rn-materio-ui';
import { BaseButton, type BaseButtonProps } from 'react-native-gesture-handler';

export interface CardProps extends BaseButtonProps {
  variant?: PaperVariants;
  /** The border radius of the card */
  rounded?: number;
}

export default function Card({
  children,
  variant = 'solid',
  rounded = 12,
  style,
  ...props
}: CardProps) {
  const theme = useTheme();
  const backgroundColor =
    variant === 'solid' ? theme.colorScheme.surface.paper : 'transparent';
  const borderWidth = variant === 'outline' ? 1 : 0;
  const borderColor =
    variant === 'outline' ? theme.colorScheme.surface.divider : 'transparent';

  return (
    <BaseButton
      style={[
        {
          borderWidth,
          backgroundColor,
          borderColor,
          borderRadius: rounded,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

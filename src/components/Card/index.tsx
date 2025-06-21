import { type PaperVariants } from '@materio/rn-materio-ui';
import { BaseButton, type BaseButtonProps } from 'react-native-gesture-handler';
import { useComponentStyle } from 'src/hooks/useComponentStyle';

export interface CardProps extends BaseButtonProps {
  variant?: PaperVariants;
  /** The border radius of the card. Can be a theme key or a number */
  rounded?: 'none' | 'full' | number;
}

export default function Card({
  children,
  variant = 'solid',
  rounded,
  style,
  ...props
}: CardProps) {
  const componentStyle = useComponentStyle<PaperVariants, any>(
    'Card',
    variant,
    'none'
  );

  // Handle rounded prop override
  const borderRadius =
    rounded === 'none'
      ? 0
      : rounded === 'full'
        ? 9999
        : typeof rounded === 'number'
          ? rounded
          : componentStyle.borderRadius;

  return (
    <BaseButton style={[componentStyle, { borderRadius }, style]} {...props}>
      {children}
    </BaseButton>
  );
}

import { View, type ViewProps } from 'react-native';
import { useComponentStyle } from '../../hooks/useComponentStyle';
import { type PaperVariants } from '../../index';

export interface PaperProps extends ViewProps {
  variant?: PaperVariants;
  /** The border radius of the Paper. Can be a number or a theme key. */
  rounded?: 'none' | 'full' | number;
}

export default function Paper({
  children,
  variant = 'solid',
  rounded,
  style,
  ...props
}: PaperProps) {
  const componentStyle = useComponentStyle<PaperVariants, any>(
    'Paper',
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
    <View style={[componentStyle, { borderRadius }, style]} {...props}>
      {children}
    </View>
  );
}

import type { ModalProps } from 'react-native';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  useComponentDefaults,
  useComponentStyle,
} from '../../hooks/useComponentStyle';

export type BackdropVariants = 'solid';
export type BackdropSizes = 'medium';

export interface BackdropProps extends ModalProps {
  onPress?: () => void;
  onClose?: () => void;
  backdropColor?: string;
  animationDuration?: number;
  variant?: BackdropVariants;
  size?: BackdropSizes;
}

export default function Backdrop({
  children,
  onPress,
  onClose,
  backdropColor,
  animationDuration,
  variant,
  size,
  ...props
}: BackdropProps) {
  const { style, ...rest } = props;

  // Get default props from theme
  const defaultProps = useComponentDefaults<BackdropVariants, BackdropSizes>(
    'Backdrop'
  );

  // Apply defaults with prop overrides
  const finalVariant = variant ?? defaultProps.variant ?? 'solid';
  const finalSize = size ?? defaultProps.size ?? 'medium';

  // Use the new component style system
  const componentStyle = useComponentStyle(
    'Backdrop',
    finalVariant,
    finalSize,
    'neutral' // Backdrop doesn't really need color variation
  );

  // Use onClose if provided, otherwise fall back to onPress
  const handleBackdropPress = onClose || onPress;

  // Use custom backdrop color if provided, otherwise use component style
  const bgColor = backdropColor || componentStyle.backgroundColor;

  return (
    <Modal
      hardwareAccelerated={true}
      statusBarTranslucent={true}
      transparent
      style={[StyleSheet.absoluteFill, style]}
      animationType="fade"
      {...(animationDuration && { animationDuration })}
      {...rest}
    >
      <TouchableWithoutFeedback
        touchSoundDisabled
        onPress={handleBackdropPress}
      >
        <View
          style={[
            StyleSheet.absoluteFill,
            { zIndex: 9998, backgroundColor: bgColor },
          ]}
        />
      </TouchableWithoutFeedback>
      {children}
    </Modal>
  );
}

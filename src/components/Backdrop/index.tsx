import type { ModalProps } from 'react-native';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export interface BackdropProps extends ModalProps {
  onPress?: () => void;
  onClose?: () => void;
  backdropColor?: string;
  animationDuration?: number;
}

export default function Backdrop({
  children,
  onPress,
  onClose,
  backdropColor = 'rgba(0, 0, 0, 0.5)',
  animationDuration,
  ...props
}: BackdropProps) {
  const { style, ...rest } = props;

  // Use onClose if provided, otherwise fall back to onPress
  const handleBackdropPress = onClose || onPress;

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
            { zIndex: 9998, backgroundColor: backdropColor },
          ]}
        />
      </TouchableWithoutFeedback>
      {children}
    </Modal>
  );
}

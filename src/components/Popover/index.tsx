import {
  type ButtonColors,
  type ThemeColorTones,
  type ThemeContextType,
  useTheme,
} from '@materio/rn-materio-ui';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Platform,
  StyleSheet,
  useWindowDimensions,
  type ViewProps,
} from 'react-native';
import Animated, {
  Easing,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Backdrop from '../Backdrop';

export type PopoverPlacement =
  | 'top'
  | 'bottom'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end';

export interface PopoverProps extends ViewProps {
  open: boolean;
  onClose: () => void;
  color?: ButtonColors;
  colorTone?: ThemeColorTones;
  /** Ref of the target element which the popover will be positioned relative to */
  targetRef: React.RefObject<any>;
  /** Space between the target and the popover */
  distance?: number;
  /** Position of the menu relative to the target */
  placement?: PopoverPlacement;
  /** Height of the bottom tab bar */
  bottomTabBarHeight?: number;
  /** If true, the popover will avoid the bottom tab bar */
  // avoidTabBar?: boolean;
  children: React.ReactNode;
  /** If true, the popover will adopt the width of the target */
  adoptTargetWidth?: boolean;
}

const measureInit = { x: 0, y: 0, width: 0, height: 0, pageX: 0, pageY: 0 };

type PopeverPlacementType = { top: number | null; left: number | null };

export default function Popover({
  open,
  onClose,
  targetRef,
  children,
  color,
  colorTone = 'low',
  placement = 'bottom',
  distance = 4,
  bottomTabBarHeight = Platform.select({ ios: 72, android: 24 }) || 56,
  adoptTargetWidth,
  ...props
}: PopoverProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const dimentions = useWindowDimensions();
  const styles = useStyles({ theme });
  const [popoverPlacement, setPopoverPlacement] =
    useState<PopeverPlacementType>({
      top: null,
      left: null,
    });
  const [targetWidth, setTargetWidth] = useState<any>('auto');
  const popoverRef = useRef<Animated.View>(null);
  const opacityValue = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  useLayoutEffect(() => {
    if (open && targetRef.current) {
      let target = measureInit;
      targetRef.current?.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number
        ) => {
          target = { x, y, width, height, pageX, pageY };
          /**
           * If the adoptTargetWidth is true, the popover will adopt the width of the target.
           */
          if (adoptTargetWidth) {
            setTargetWidth(width);
            setPopoverPlacement({
              top: pageY + height + distance,
              left: pageX,
            });
            return;
          }
        }
      );
      popoverRef.current?.measure(
        (
          _x: number,
          _y: number,
          width: number,
          height: number,
          _pageX: number,
          _pageY: number
        ) => {
          const popoverWidth = adoptTargetWidth ? target.width : width;
          const popoverHeight = height;

          const endAlignedLeftEdge = target.pageX + target.width - popoverWidth;
          const startAlignedLeftEdge = target.pageX;
          const centerAlignedLeftEdge =
            target.pageX + target.width / 2 - popoverWidth / 2;
          const centerAlignedRightEdge =
            target.pageX + target.width / 2 + popoverWidth / 2;

          const topAlignedTopEdge = target.pageY - popoverHeight - distance;
          const bottomAlignedTopEdge = target.pageY + target.height + distance;

          const isGoingAbove = topAlignedTopEdge < insets.top;
          const isGoingBelow =
            bottomAlignedTopEdge >
            dimentions.height - bottomTabBarHeight - popoverHeight;
          /**
           * Horizontal positioning: start
           * Checks if the popover is going outside of the screen on right side
           * while positioning at left corner of the target.
           */
          const startLeft =
            target.pageX + popoverWidth > dimentions.width
              ? endAlignedLeftEdge
              : startAlignedLeftEdge;
          /**
           * Horizontal positioning: center
           * Checks if the popover is going outside of the screen on both sides
           * while positioning at center of the target.
           */
          const centerLeft =
            centerAlignedRightEdge > dimentions.width
              ? endAlignedLeftEdge
              : centerAlignedLeftEdge < 0
                ? startAlignedLeftEdge
                : centerAlignedLeftEdge;
          /**
           * Horizontal positioning: end
           * Checks if the popover is going outside of the screen on left side
           * while positioning at right corner of the target.
           */
          const endLeft =
            endAlignedLeftEdge < 0 ? startAlignedLeftEdge : endAlignedLeftEdge;

          const placementMap = {
            'top': {
              top: isGoingAbove ? bottomAlignedTopEdge : topAlignedTopEdge,
              left: centerLeft,
            },
            'top-start': {
              top: isGoingAbove ? bottomAlignedTopEdge : topAlignedTopEdge,
              left: startLeft,
            },
            'top-end': {
              top: isGoingAbove ? bottomAlignedTopEdge : topAlignedTopEdge,
              left: endLeft,
            },
            'bottom': {
              top: isGoingBelow ? topAlignedTopEdge : bottomAlignedTopEdge,
              left: centerLeft,
            },
            'bottom-start': {
              top: isGoingBelow ? topAlignedTopEdge : bottomAlignedTopEdge,
              left: startLeft,
            },
            'bottom-end': {
              top: isGoingBelow ? topAlignedTopEdge : bottomAlignedTopEdge,
              left: endLeft,
            },
          };

          setPopoverPlacement(placementMap[placement]);
        }
      );
    }
  }, [
    open,
    targetRef,
    popoverRef,
    dimentions.height,
    dimentions.width,
    distance,
    placement,
    insets.top,
    bottomTabBarHeight,
    adoptTargetWidth,
  ]);

  useEffect(() => {
    if (popoverPlacement.top !== null) {
      opacityValue.value = withTiming(1, {
        duration: 200,
        easing: Easing.ease,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popoverPlacement]);

  if (!open) return null;

  const backgroundColor = color
    ? theme.colorScheme.palette[color][colorTone].main
    : theme.colorScheme.surface.paper;

  return (
    <Backdrop onPress={onClose}>
      <Animated.View
        ref={popoverRef}
        exiting={FadeOut}
        style={[
          styles.modal,
          animatedStyle,
          popoverPlacement,
          { width: targetWidth },
          { backgroundColor: backgroundColor },
        ]}
        {...props}
      >
        {children}
      </Animated.View>
    </Backdrop>
  );
}

const useStyles = ({ theme }: ThemeContextType) =>
  StyleSheet.create({
    modal: {
      position: 'absolute',
      backgroundColor: theme.colorScheme.surface.paper,
      borderRadius: theme.borderRadius.lg,
      zIndex: 9999,
    },
  });

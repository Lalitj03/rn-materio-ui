import { Feather } from '@expo/vector-icons';
import { useTheme } from '@materio/rn-materio-ui';
import { Tabs } from 'expo-router';
import React from 'react';
import { useWindowDimensions } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={24} {...props} />;
}

const HomeTabBarIcon = ({ color }: { color: string }) => (
  <TabBarIcon name="home" color={color} />
);

const ButtonTabBarIcon = ({ color }: { color: string }) => (
  <TabBarIcon name="square" color={color} />
);

const CardTabBarIcon = ({ color }: { color: string }) => (
  <TabBarIcon name="credit-card" color={color} />
);

const ChipTabBarIcon = ({ color }: { color: string }) => (
  <TabBarIcon name="tag" color={color} />
);

const InputTabBarIcon = ({ color }: { color: string }) => (
  <TabBarIcon name="edit" color={color} />
);

const TypographyTabBarIcon = ({ color }: { color: string }) => (
  <TabBarIcon name="type" color={color} />
);

const MiscTabBarIcon = ({ color }: { color: string }) => (
  <TabBarIcon name="grid" color={color} />
);

export default function TabLayout() {
  const theme = useTheme();
  const dimentions = useWindowDimensions();
  const verticalTabBar = dimentions.width * 3 > dimentions.height * 4;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorScheme.palette.primary.high.main,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        tabBarPosition: verticalTabBar ? 'left' : 'bottom',
        tabBarVariant: verticalTabBar ? 'material' : 'uikit',
        tabBarStyle: {
          minWidth: verticalTabBar ? 240 : '100%',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="buttons"
        options={{
          title: 'Buttons',
          tabBarIcon: ButtonTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: 'Cards',
          tabBarIcon: CardTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="inputs"
        options={{
          title: 'Inputs',
          tabBarIcon: InputTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="typography"
        options={{
          title: 'Typography',
          tabBarIcon: TypographyTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="chips"
        options={{
          title: 'Chips',
          tabBarIcon: ChipTabBarIcon,
        }}
      />
      <Tabs.Screen
        name="misc"
        options={{
          title: 'Miscellaneous',
          tabBarIcon: MiscTabBarIcon,
        }}
      />
    </Tabs>
  );
}

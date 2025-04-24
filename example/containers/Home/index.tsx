import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useAtom } from 'jotai';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Paper, Typography, useTheme } from 'rn-materio-ui';
import { themeModeAtom } from '../App/atoms';

interface ComponentCardProps {
  title: string;
  icon: React.ComponentProps<typeof Feather>['name'];
  route: string;
  description: string;
}

const ComponentCard = ({
  title,
  icon,
  route,
  description,
}: ComponentCardProps) => {
  const theme = useTheme();

  return (
    <Link href={route} asChild>
      <Button fullwidth variant="ghost" style={styles.cardButton}>
        <Paper
          style={[
            styles.card,
            { borderColor: theme.colorScheme.surface.divider },
          ]}
          variant="outline"
        >
          <View style={styles.cardHeader}>
            <Feather
              name={icon}
              size={24}
              color={theme.colorScheme.palette.primary.base.main}
            />
            <Typography
              variant="title"
              size="medium"
              color="primary"
              style={styles.cardTitle}
            >
              {title}
            </Typography>
          </View>
          <Typography variant="body" size="small" usageType="secondary">
            {description}
          </Typography>
        </Paper>
      </Button>
    </Link>
  );
};

export default function Home() {
  const theme = useTheme();
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const components: ComponentCardProps[] = [
    {
      title: 'Buttons',
      icon: 'square',
      route: '/buttons',
      description: 'Buttons, IconButtons, and interactive elements',
    },
    {
      title: 'Cards',
      icon: 'credit-card',
      route: '/cards',
      description: 'Card and ColoredCard components with various styles',
    },
    {
      title: 'Inputs',
      icon: 'edit-2',
      route: '/inputs',
      description: 'TextInput fields and form controls',
    },
    {
      title: 'Typography',
      icon: 'type',
      route: '/typography',
      description: 'Text styles, headings, and typography variants',
    },
    {
      title: 'Chips',
      icon: 'tag',
      route: '/chips',
      description: 'Chip components for tags and selections',
    },
    {
      title: 'Miscellaneous',
      icon: 'grid',
      route: '/misc',
      description: 'Dividers, Menus, Popovers, and other utilities',
    },
  ];

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.colorScheme.surface.background },
      ]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Typography variant="display" size="small" color="primary" gutterBottom>
          rn-materio-ui
        </Typography>
        <Typography variant="body" color="primary" gutterBottom>
          A comprehensive React Native UI component library with a material
          design influence
        </Typography>
        <View style={styles.themeButton}>
          <Button
            variant="solid"
            color="secondary"
            startIcon={
              themeMode === 'light' ? (
                <Feather name="moon" />
              ) : (
                <Feather name="sun" />
              )
            }
            onPress={toggleTheme}
          >
            {themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </View>
      </View>

      <View style={styles.componentsGrid}>
        {components.map((component) => (
          <ComponentCard
            key={component.title}
            title={component.title}
            icon={component.icon}
            route={component.route}
            description={component.description}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  themeButton: {
    marginTop: 16,
    justifyContent: 'center',
  },
  componentsGrid: {
    marginTop: 16,
  },
  cardButton: {
    marginBottom: 12,
    width: '100%',
  },
  card: {
    width: '100%',
    padding: 16,
    marginBottom: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    marginLeft: 8,
  },
});

import { Feather } from '@expo/vector-icons';
import {
  Backdrop,
  Button,
  Divider,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Typography,
  useTheme,
} from '@materio/rn-materio-ui';
import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Divider Examples
const DividerExamples = () => {
  return (
    <View style={styles.exampleContainer}>
      <Typography variant="body" size="small" gutterBottom>
        Default horizontal divider:
      </Typography>
      <Divider />

      <View style={{ height: 16 }} />

      <Typography variant="body" size="small" gutterBottom>
        Custom color divider:
      </Typography>
      <Divider color="primary" colorTone="base" />

      <View style={{ height: 16 }} />

      <Typography variant="body" size="small" gutterBottom>
        Thick divider with margins:
      </Typography>
      <Divider thickness={3} marginV={8} marginH={16} color="secondary" />

      <View style={{ height: 16 }} />

      <Typography variant="body" size="small" gutterBottom>
        Vertical divider (in a row):
      </Typography>
      <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
        <Typography>Left</Typography>
        <Divider orientation="vertical" marginH={16} thickness={1} />
        <Typography>Right</Typography>
      </View>
    </View>
  );
};

// Paper Examples
const PaperExamples = () => {
  return (
    <View style={styles.exampleContainer}>
      <Paper style={styles.paper}>
        <Typography variant="body" size="small">
          Default Paper (solid variant)
        </Typography>
      </Paper>

      <Paper variant="outline" style={styles.paper}>
        <Typography variant="body" size="small">
          Outline Paper variant
        </Typography>
      </Paper>

      <Paper rounded={24} style={styles.paper}>
        <Typography variant="body" size="small">
          Paper with custom rounded corners
        </Typography>
      </Paper>
    </View>
  );
};

// Menu Examples
const MenuExamples = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnchorRef = useRef(null);

  return (
    <View style={styles.exampleContainer}>
      <Button
        ref={menuAnchorRef}
        onPress={() => setMenuVisible(true)}
        endIcon={<Feather name="chevron-down" />}
        color="primary"
      >
        Open Menu
      </Button>

      <Menu
        open={menuVisible}
        onClose={() => setMenuVisible(false)}
        targetRef={menuAnchorRef}
        placement="bottom"
        color="primary"
        colorTone="low"
      >
        <MenuItem
          startIcon={<Feather name="user" />}
          onSelected={() => {
            console.log('Profile selected');
            setMenuVisible(false);
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          startIcon={<Feather name="settings" />}
          onSelected={() => {
            console.log('Settings selected');
            setMenuVisible(false);
          }}
        >
          Settings
        </MenuItem>
        <MenuItem
          startIcon={<Feather name="log-out" />}
          onSelected={() => {
            console.log('Logout selected');
            setMenuVisible(false);
          }}
          itemProps={{ color: 'danger' }}
        >
          Logout
        </MenuItem>
      </Menu>
    </View>
  );
};

// Popover Examples
const PopoverExamples = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const popoverAnchorRef = useRef(null);

  return (
    <View style={styles.exampleContainer}>
      <Button
        ref={popoverAnchorRef}
        onPress={() => setPopoverVisible(true)}
        color="secondary"
      >
        Open Popover
      </Button>

      <Popover
        open={popoverVisible}
        onClose={() => setPopoverVisible(false)}
        targetRef={popoverAnchorRef}
        placement="bottom"
        color="secondary"
        colorTone="low"
      >
        <View style={styles.popoverContent}>
          <Typography variant="title" size="small" gutterBottom>
            Popover Title
          </Typography>
          <Typography variant="body" size="small">
            This is a popover component that can contain any content.
          </Typography>
          <Button
            onPress={() => setPopoverVisible(false)}
            style={{ marginTop: 16 }}
            size="sm"
          >
            Close
          </Button>
        </View>
      </Popover>
    </View>
  );
};

// Backdrop Examples
const BackdropExamples = () => {
  const [backdropVisible, setBackdropVisible] = useState(false);

  return (
    <View style={styles.exampleContainer}>
      <Button onPress={() => setBackdropVisible(true)} color="info">
        Show Backdrop
      </Button>

      {backdropVisible && (
        <Backdrop onPress={() => setBackdropVisible(false)}>
          <View style={styles.backdropContent}>
            <Typography variant="title" size="medium" gutterBottom>
              Backdrop Content
            </Typography>
            <Typography variant="body" size="small" gutterBottom>
              This modal is shown with a backdrop that can be clicked to
              dismiss.
            </Typography>
            <Button
              onPress={() => setBackdropVisible(false)}
              style={{ marginTop: 16 }}
            >
              Close
            </Button>
          </View>
        </Backdrop>
      )}
    </View>
  );
};

export default function MiscScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.colorScheme.surface.background },
      ]}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingBottom: insets.bottom + 20 },
      ]}
    >
      <Typography variant="headline" size="small" color="primary" gutterBottom>
        Miscellaneous
      </Typography>

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Dividers
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Dividers create a clear separation between content sections.
        </Typography>

        <DividerExamples />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Paper
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Paper component provides a surface for content display.
        </Typography>

        <PaperExamples />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Menu
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Menus display a list of choices on a temporary surface.
        </Typography>

        <MenuExamples />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Popover
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Popovers display content in a floating surface.
        </Typography>

        <PopoverExamples />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Backdrop
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Backdrop component provides a dimmed layer behind modal content.
        </Typography>

        <BackdropExamples />
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
  section: {
    marginVertical: 8,
  },
  exampleContainer: {
    marginVertical: 8,
  },
  paper: {
    padding: 16,
    marginVertical: 8,
  },
  popoverContent: {
    padding: 16,
    width: 250,
  },
  backdropContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -100,
    marginLeft: -150,
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

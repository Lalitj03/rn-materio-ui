import { Divider, TextInput, Typography, useTheme } from '@materio/rn-materio-ui';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Basic TextInput Examples
const BasicInputs = () => {
  const [basicValue, setBasicValue] = useState('');
  const [outlineValue, setOutlineValue] = useState('');

  return (
    <View style={styles.inputsContainer}>
      <TextInput
        label="Basic Input (Solid Variant)"
        variant="solid"
        placeholder="Enter text here"
        style={styles.inputSpacing}
        value={basicValue}
        onChangeText={setBasicValue}
      />

      <TextInput
        label="Outline Input"
        variant="outline"
        placeholder="Enter text here"
        style={styles.inputSpacing}
        value={outlineValue}
        onChangeText={setOutlineValue}
      />
    </View>
  );
};

// TextInput Colors Examples
const ColoredInputs = () => {
  const colors = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
  ] as const;
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (color: string, text: string) => {
    setValues((prev) => ({
      ...prev,
      [color]: text,
    }));
  };

  return (
    <View style={styles.inputsContainer}>
      {colors.map((color) => (
        <TextInput
          key={color}
          label={`${color.charAt(0).toUpperCase() + color.slice(1)} Input`}
          color={color}
          placeholder={`${color} color input`}
          style={styles.inputSpacing}
          value={values[color] || ''}
          onChangeText={(text) => handleChange(color, text)}
        />
      ))}
    </View>
  );
};

// TextInput States Examples
const InputStates = () => {
  const [errorValue, setErrorValue] = useState('');
  const [helperValue, setHelperValue] = useState('');

  return (
    <View style={styles.inputsContainer}>
      <TextInput
        label="Input with Error"
        error={true}
        errorMessage="This is an error message"
        placeholder="Error state"
        style={styles.inputSpacing}
        value={errorValue}
        onChangeText={setErrorValue}
      />

      <TextInput
        label="Input with Helper Text"
        helperText="This is some helper text"
        placeholder="With helper text"
        style={styles.inputSpacing}
        value={helperValue}
        onChangeText={setHelperValue}
      />

      <TextInput
        label="Disabled Input"
        disabled={true}
        placeholder="This input is disabled"
        style={styles.inputSpacing}
      />
    </View>
  );
};

// TextInput Sizes Examples
const InputSizes = () => {
  const [smallValue, setSmallValue] = useState('');
  const [mediumValue, setMediumValue] = useState('');
  const [largeValue, setLargeValue] = useState('');

  return (
    <View style={styles.inputsContainer}>
      <TextInput
        label="Small Size"
        size="small"
        placeholder="Small input"
        style={styles.inputSpacing}
        value={smallValue}
        onChangeText={setSmallValue}
      />

      <TextInput
        label="Medium Size"
        size="medium"
        placeholder="Medium input"
        style={styles.inputSpacing}
        value={mediumValue}
        onChangeText={setMediumValue}
      />

      <TextInput
        label="Large Size"
        size="large"
        placeholder="Large input"
        style={styles.inputSpacing}
        value={largeValue}
        onChangeText={setLargeValue}
      />
    </View>
  );
};

// Full Width TextInput Example
const FullWidthInput = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.inputsContainer}>
      <TextInput
        label="Full Width Input"
        placeholder="This input takes the full available width"
        fullWidth
        style={styles.inputSpacing}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

export default function InputsScreen() {
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
        Text Inputs
      </Typography>

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Basic Text Inputs
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          The TextInput component supports solid and outline variants.
        </Typography>

        <BasicInputs />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Colored Inputs
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          TextInputs can be styled with different colors.
        </Typography>

        <ColoredInputs />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Input States
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          TextInputs support error, helper text, and disabled states.
        </Typography>

        <InputStates />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Input Sizes
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          TextInputs are available in different sizes.
        </Typography>

        <InputSizes />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Full Width Input
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          TextInputs can take up the full available width.
        </Typography>

        <FullWidthInput />
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
  inputsContainer: {
    marginVertical: 8,
  },
  inputSpacing: {
    marginBottom: 16,
  },
});

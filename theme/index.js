// theme/index.js imports
import { extendTheme } from '@chakra-ui/react';
// Global style overrides
// Foundational style overrides
// Component style overrides

const overrides = {
  // global style overrides
  styles: {
    global: {},
  },
  // foundational style overrides go here
  components: {},
};

const theme = extendTheme(overrides);

export default theme;

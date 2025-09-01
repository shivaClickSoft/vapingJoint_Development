// import { View, StyleSheet } from 'react-native';
// import React from 'react';
// import AppNavigator from '../navigation/AppNavigator';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <AppNavigator />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },   // ✅ important
// });

// export default App;


import React from 'react';
import AppNavigator from '../navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;   // ✅ No wrapper
};

export default App;

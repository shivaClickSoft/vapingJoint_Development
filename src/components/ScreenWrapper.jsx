import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, Platform, StyleSheet  } from 'react-native'

const ScreenWrapper = ({ children, edges = ["top", "bottom"]}) => {
  return (
    <SafeAreaView style={styles.container} edges={edges}>
        <KeyboardAvoidingView
         style={styles.container}
         behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            {children}
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default ScreenWrapper
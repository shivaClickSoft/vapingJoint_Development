import AsyncStorage from "@react-native-async-storage/async-storage";

const Storage = {

    // set data in local storage
    setItem: async (Key, value) => {
        try {
            await AsyncStorage.setItem(Key, value);
        } catch (error) {
           console.error("Error storing data:", error); 
        }
    },

    // get data from local storage
    getItem: async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value != null ? JSON.parse(value) : null;
        } catch (error) {
            console.error("Error retrieving data:", error);
            return null; 
        }
    },

    // remove data from the storage
    removeItem: async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing data:", error);
        }
    }

}

export default Storage
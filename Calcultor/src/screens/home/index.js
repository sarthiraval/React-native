
import styles from './style';
import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';




let Calculator = () => {


   return (
      // <ImageBackground
      //    source={}
      //    style={styles.AllContent}>

         <SafeAreaView style={styles.SafeDesign} >
       
            <Text style={styles.Texts}>Name = </Text>
            <Text style={styles.Texts}>Email =</Text>
            <Text style={styles.Texts}>Phone = </Text>
            <Text style={styles.Texts}>Password = </Text>

         </SafeAreaView>
      // </ImageBackground>
   )
}
export default Calculator
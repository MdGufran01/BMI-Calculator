/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  InputAccessoryView,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Keyboard,
  Text,
  TextInput,
  View,
} from 'react-native';
// import ExternalStyle from './externalStyle';

const App = () => {
  const [feet, setfeet] = useState('')
  const [weight, setweight] = useState('')
  const [inches, setinches] = useState('')
  const [outputText, setOutputText] = useState('');
  const [display, setDisplay] = useState(false)
  const [bmioutput, setbmi] = useState('')


  const formReset = () => {
    setDisplay(false)
    setfeet('')
    setinches('')
    setweight('')
  }




  const Calculate = () => {
    let feet2 = feet
    let inches2 = inches
    let weight2 = weight
    const sum = (feet2 * 0.3048) + (inches2 * 0.0254)
    let bmi = weight2 / (sum * sum)

    if (bmi <= 18.4) {
      setOutputText("your are underweight")
    }
    else if (bmi > 18.5 && bmi < 24.9) {
      setOutputText('your are normal')
    }
    else if (bmi > 25.0 && bmi < 39.9) {
      setOutputText("your are overweight")
    } else if (bmi >= 40.0) {
      setOutputText("your are obese")
    }
    setbmi(bmi.toFixed(2))
  }
  function CloseKeyboardButton() {
      Keyboard.dismiss(); // This will dismiss the keyboard
  }

  return (

<View style={{backgroundColor:'#184A45FF', height:700,}}>
      <View style={styles.a1}>
        <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }} >Calculate Your BMI </Text>
      </View>

      <View style={{margin:20,}}>
       
       <TextInput placeholder='Enter your Height(in feet)'
          style={styles.design}
          onChangeText={(text) => setfeet(text)}
          value={feet}
        />


        <TextInput placeholder='Enter your Height(in inches) '
          style={styles.design}
          onChangeText={(data) => setinches(data)}
          value={inches}
        />
       

        <TextInput type="number" placeholder='Enter your Weight(in kg)'
          style={styles.design}
          onChangeText={(value) => setweight(value)}
          value={weight}
        />
        

        <Button title='press here' onPress={function () {
          setDisplay(true)
          Calculate()
          CloseKeyboardButton()
         
        }
        } />
         <View style={{ marginTop: 20, fontSize:30, color:'red' }}>
        <Button title='reset' onPress={formReset} style={{ fontSize: 30, }} />
       
      </View>
      </View>
     
      <View>

        {
          display ?
            <View style={{height:200, textAlign:'center', paddingLeft:20, marginTop:20,}} >
              <Text style={{ fontSize: 25, marginBottom: 15, color: 'white' }}>
                Your body mass is :{bmioutput}
              </Text>
              <Text style={{fontSize:25 , color:'white'}}>
              {outputText}
              </Text>
            </View> : null
        }
      </View>
    </View>

  )
}

const styles = ({
  design: {
    marginBottom: 20,
    fontSize: 25,
    borderWidth: 2,
    paddingLeft: 10,
    color:'white',
    borderColor: 'green',
  },

  a1: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 10,
    padding: 20,
    backgroundColor: 'black',

  },
})





// const styles = StyleSheet.create({
//   change:{
//     fontSize:39,
//     color:'blue',
//     marginTop:20,
//     borderWidth:2,
//     padding:6,
//     width:170,

//   }, 


// })

// array ********* is start

// const App = () => {
//   const [feet, setfeet] = useState("you are not update");


//   return(
//     <View>
//       <Text style={{fontSize:20 , color:'blue'}}>
//        Press and update props
//       </Text>
//       <Button title='press me' onPress={()=>setfeet("updated")}/>
//       <User feet={feet}/>

//     </View>
//   )
// }
// const User=(Props) =>{
//   return(
//     <View>
//       <Text>
//         {Props.feet}
//       </Text>
//     </View>
//   )
// }

export default App;

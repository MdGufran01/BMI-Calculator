//import { StyleSheet } from 'react-native'

 //const ExternalStyle = StyleSheet.create({
//     design: {
//         backgroundColor: 'black',
//         fontSize: 25,
//         color: 'white',
//         padding: 10,
//         textAlign: 'center',
//         height: 100,
//         borderWidth: 2,
//         textAlignVertical:'center'
//     },
//     desing1: {
//         marginTop: 20,
//         fontSize: 30,
//         color: 'green',
//         borderWidth:2,
//         borderColor:'red',
//         paddingLeft:10,
//     },
   
// })

// const [foot, setfoot] = useState("")
// const [inches, setinches] = useState("")
// const [weight, setweight] = useState("")
// const [display, SetDisplay] = useState(false)
 
//   return (
//     <View style={ExternalStyle}>
//       <Text style={ExternalStyle.design}>
//         Calculate Your BMI
//       </Text>
//       <TextInput style={ExternalStyle.desing1} 

//       placeholder='your heigh in feet'
//       onChangeText={(Text)=>setfoot(Text)}
//       value={foot}

//        />
//       <TextInput style={ExternalStyle.desing1} 
//       placeholder='your in inches'
//       onChangeText={(Text)=>setinches(Text)}
//       value={inches}
//        />
//       <TextInput style={ExternalStyle.desing1}
//        placeholder='your weight'
//       onChangeText={(Text)=>setweight(Text)}
//       value={weight}
//         />
//        <Button title='press here' onPress={SetDisplay}/>
//       <View>
//         {
//           display ?
//         <View>
//             <Text> 
//              You Body mass index is : {foot}
//             </Text>
//             <Text> 
//              You Body mass index is : {inches}
//             </Text>
//             <Text> 
//              You Body mass index is : {weight}
//             </Text>
//         </View>:null
//           }
//       </View>
//     </View>)

// getting input value
// const[name, update] = useState('')

// {/* <View>
// <Text style={{fontSize:30,}}>
//   Your input value is :{name}
// </Text>
// <TextInput placeholder='your values'
// style={{
//   borderWidth:2,
//   borderColor:'blue',
//   fontSize:25,
// }}
//  onChangeText={(text)=>update(text)}
 
// />
// </View> */}

// grid property is start

// const styles = StyleSheet.create({
//     flex: {
//       flex: 1,
//       columnGap: 10,
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//       flexDirection: 'row'
//     },
//     grid: {
//       backgroundColor: 'blue',
//       fontSize: 20,
//       color: 'white',
//       textAlign: 'center',
//       textAlignVertical: 'center',
//       marginBottom: 20,
//       height: 100,
//       width: 100
//     }
//   });

// export default ExternalStyle;


// Flat list is start is here
{/* <ScrollView showsVerticalScrollIndicator={true}>
   <View>
   <Text>Welcomm to flatlisting here</Text>
     <View style={styles.flatlist}>
       <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.list}>{item.name}</Text>}
      />
    </View>
  </View>
 </ScrollView> */}

 
// const App = () => {
//     const users = [
//       {
//         id: 1,
//         name: "gufran",
//         skills: "frontend"
//       },
//       {
//         id: 2,
//         name: "anas",
//         skills: "backend + fronend"
//       },
//       {
//         id: 3,
//         name: "anish",
//         skills: "backend + fronend"
//       },
//       {
//         id: 4,
//         name: "sabbeer",
//         skills: "frontend "
//       },
//       {
//         id: 5,
//         name: "sabbeer",
//         skills: "frontend "
//       },
//     ]
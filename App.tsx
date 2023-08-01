

import React, { PropsWithChildren, useState } from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

import DiceOne from './assets/faces-one.png'
import DiceTwo from './assets/faces-two.png'
import DiceThree from './assets/faces-three.png'
import DiceFour from './assets/faces-four.png'
import DiceFive from './assets/faces-five.png'
import DiceSix from './assets/faces-six.png'
import DiceImg from './assets/dice-fire.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}:DiceProps): JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

function App(): JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceImg);

  const rollDiceOnTap = () => {
    let randomNum = Math.floor(Math.random()* 6) + 1;

    switch (randomNum) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }
  }
  
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable style={styles.RollBtn}onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>
        Roll the dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  diceImage:{
    height:200,
    width:200,
    borderRadius:8,
  },
  rollDiceBtnText:{
    paddingHorizontal:6,
    paddingVertical:10,
    borderWidth:2,
    borderRadius:8,
    borderColor:'black',
    fontSize:16,
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    backgroundColor:'#38CC77'
  },
  RollBtn:{
    padding:20
  }
  
});

export default App;

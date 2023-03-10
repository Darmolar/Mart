import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
/**
* Override styles that get passed from props
**/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + (percent * 3.6);
  return {
    transform:[{rotateZ: `${rotateBy}deg`}]
  };
}

renderThirdLayer = (percent) => {
  if(percent > 50){
    /**
    * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
    * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
    * before passing to the propStyle function
    **/
    return <View style={[styles.secondProgressLayer,propStyle((percent - 50), 45) ]}></View>
  }else{
    return <View style={styles.offsetLayer}></View>
  }
}

const CircularProgress = ({percent, amount}) => {
  let firstProgressLayerStyle;
  if(percent > 50){
      firstProgressLayerStyle = propStyle(50, -135);
  }else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return(
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
      <Text style={styles.display}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderWidth: 5,
    borderRadius: 100,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstProgressLayer: {
    width: 60,
    height: 60,
    borderWidth: 5,
    borderRadius: 100,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#243972',
    borderTopColor: '#243972',
    transform:[{rotateZ: '-135deg'}]
  },
  secondProgressLayer:{
    width: 60,
    height: 60,
    position: 'absolute',
    borderWidth: 5,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#243972',
    borderTopColor: '#243972',
    transform: [{rotateZ: '45deg'}]
  },
  offsetLayer: {
    width: 60,
    height: 60,
    position: 'absolute',
    borderWidth: 5,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#FFF',
    borderTopColor: '#FFF',
    transform:[{rotateZ: '-135deg'}]
  },
  display: {
    position: 'absolute',
    fontSize: 15,
    fontFamily: 'Mulish-Black',
    color: '#243972',
  }
});

export default CircularProgress;
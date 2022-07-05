import { View, Text,Image, TouchableOpacity,ToastAndroid,Cart } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from './styles';

const ProductDetail = ({route}) => {
  const {data} = route.params;
  console.log(data)

  const addToCart = () => {
    ToastAndroid.show("Successfully Added",3000)
  }

  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={data.imageUrl} style={styles.productImage} />
    </View>

    <View style={styles.details}>
      <View>
        <Text>{data.title}</Text>
        <Text>
           {data.price} {data.currency}
        </Text>
      </View>
      <TouchableOpacity style={styles.btnContainer} onPress={addToCart}>
        {/* <Cart width={wp(5)} height={hp(3)} /> */}
        <Text style={styles.addToCartTitle}>Add to Cart</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.description}>
      <Text>{data.description}</Text>
    </View>
  </View>
  )
}

export default ProductDetail
import React from 'react'
import { View, Text, Image ,TouchableOpacity, FlatList} from 'react-native'

import styles from './styles';


const Productlist = (props) => {
  
const renderComponent = ({item}) => {
  return (
    <TouchableOpacity onPress={() => props.productDetail(item)}  style={styles.card}>
      <View style={styles.imageContainer}>
          <Image source={item.imageUrl} style={styles.image} />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.productInfo}>
          <Text>{item.title}</Text>
          <Text> {item.currency} {item.price} </Text>

        </View>
        <TouchableOpacity style={styles.btnCart}>
            <Text style={styles.textCart}>Add to Cart</Text>
        </TouchableOpacity>
       
      </View>

        
       
    </TouchableOpacity>
  )
}
  return (
    <View style={styles.productListContainer}>

      <FlatList 
          data={props.data}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderComponent}
          showsVerticalScrollIndicator={false}
       />
    </View>

    
  )
}

export default Productlist
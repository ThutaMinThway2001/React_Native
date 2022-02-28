import {View, Text, StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    itemText: {
        fontSize: 20
    }
})
const ItemList = ({name, price}) => {
    return(
        <View style={styles.item}>
        <Text style={styles.itemText}>
            {name}
            (${price})
        </Text>
        </View>
    )
}

export default ItemList
import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { Drawer } from 'react-native-paper';

const DrawerSections = ({ navigation }) => {

    const [active, setActive] = React.useState('');
    return (
        <Drawer.Section title="Billetera">
            <Drawer.Item
                label="Historial"
                active={active === 'first'}
            // onPress={() => navigation.navigate('transfer')}
            />
            <Drawer.Item
                label="Second Item"
                active={active === 'second'}
                onPress={() => setActive('second')}
            />
        </Drawer.Section>
    )
}

export default DrawerSections
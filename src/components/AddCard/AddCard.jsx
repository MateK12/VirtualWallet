import React, { useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet, ScrollView } from "react-native"
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from 'react-native-picker-select';
import GlobalStyles from '../../styles';
import ReactiveCard from './ReactiveCard';

const AddCard = () => {
    const [brands, setbrands] = useState([{ label: 'MasterCard', value: 'MasterCard' }, { label: 'Visa', value: 'Visa' }, { label: 'American Express', value: 'AmericanExpress' }])
    const [selectedBrand, setSelectedBrand] = useState(0);
    const [Number, setNumber] = useState('');
    const [Owner, setOwner] = useState('');
    const [ExpiryDate, setExpiryDate] = useState('');
    const [Cvv, setCvv] = useState('')
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            cardNumber: "",
            owner: "",
            expiryDate: '',
            cvv: '',
            brand: ''
        },
    })
    const onSubmit = (data) => {
        console.log(data);
    }
    const handleSelect = (value) => {
        setSelectedValue(value);
        console.log(value);
    };
    return (
        <ScrollView>
            <View style={styles.titleCont}>
                <Text style={styles.Title}>
                    Nueva Tarjeta
                </Text>
            </View>
            <View style={[styles.formCont]}>

                <Controller
                    control={control}
                    render={({ ...field }) => (
                        <View>
                            <Text style={styles.label}>Emisoras</Text>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectedBrand(value)}
                                items={brands}
                            />
                        </View>
                    )}
                    name="brand"
                    rules={{ required: 'Please select an option' }}
                />
                <Controller  //{/*Controller for each field  */}
                    control={control}
                    rules={{
                        required: { value: true, message: 'Este campo es necesario' }, //set each rule to the field
                        minLength: { value: 10, message: 'Minimo 10 numeros' }
                    }}
                    render={({ ...field }) => ( //pass these 3 methods to the 3 props down there
                        <View>
                            <Text style={styles.label}>Numero</Text>

                            <TextInput
                                placeholder="Ingrese el numero" //
                                onBlur={field.onBlur}
                                onChangeText={(text) => {
                                    setNumber(text)
                                }}
                                value={field.value}
                            />
                        </View>
                    )}
                    name="cardNumber"
                />
                {errors.cardNumber && <Text>{errors.cardNumber.message}</Text>}

                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                        required: { value: true, message: 'Este campo es necesario' }
                    }}
                    render={({ ...field }) => (
                        <View>
                            <Text style={styles.label}>Titular</Text>

                            <TextInput
                                placeholder="Ingrese el Titular"
                                onBlur={field.onBlur}
                                onChangeText={(text) => {
                                    setOwner(text)
                                }}
                                value={field.value}
                            />
                        </View>
                    )}
                    name="owner"
                />
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                        required: { value: true, message: 'Este campo es necesario' }
                    }}
                    render={({ ...field }) => (
                        <View>
                            <Text style={styles.label}>Fecha de expiracion</Text>

                            <TextInput
                                placeholder="Ingrese la fecha de vencimiento"
                                onBlur={field.onBlur}
                                onChangeText={(text) => {
                                    setExpiryDate(text);
                                }}
                                value={field.value}
                            />
                        </View>
                    )}
                    name="expiryDate"
                />
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                        required: { value: true, message: 'Este campo es necesario' }
                    }}
                    render={({ ...field }) => (
                        <View>
                            <Text style={styles.label}>CVV</Text>

                            <TextInput
                                placeholder="Ingrese el codigo de seguridad"
                                onBlur={field.onBlur}
                                onChangeText={(text) => {
                                    setCvv(text);
                                }}
                                value={field.value}
                            />
                        </View>
                    )}
                    name="CVV"
                />

                <Button style={GlobalStyles.primaryColor} title="Agregar" onPress={() => { handleSubmit(onSubmit()) }} />
            </View>
            <ReactiveCard data={{ number: Number, owner: Owner, securityCode: Cvv, expiryDate: ExpiryDate, brand: selectedBrand }}></ReactiveCard>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        color: '#333333'
    },
    formCont: {
        margin: '10%',
        padding: '10%',
        backgroundColor: 'white'
    },
    titleCont: {
        alignItems: 'center',
        marginTop: 10
    },
    Title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#333333'
    }

})
export default AddCard
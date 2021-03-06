import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    ActivityIndicator,
    BackHandler,
    ScrollView,
    TextInput,
    Touchable,
    TouchableOpacity,
    Button,
} from 'react-native';

import Layout from '../../layout/index'
import { SIGN_IN_TO_EVENT, DATA_CITY, DATA_DISTRICT, DATA_AGENCY, DATE_ICON, IMAGE_ICON, DECOR_LEFT, DECOR_RIGHT, ICED_LEFT, ICED_RIGHT, SUBMIT_BUTTON } from '../../utils/constant'
import styles from './styles'
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import moment from 'moment';

import { useSelector, useDispatch } from 'react-redux'
import {addEvent} from '../../services/pepsi'


type ValueType = string | number | boolean;


interface responseChild {
    uri: string,
    fileName?: string
}

interface DefaultRootStateType {
    statusActivityIndicator:boolean,
    isDone:boolean
}
interface subNavigation {
    navigate: (where:string, params?:string) => void;
}

interface typeProps {
    navigation: subNavigation;
}




const Item = (props: any) => {
    return (
        <TouchableOpacity style={[styles.containerItem]} key={props.item} onPress={() => {
            props.onPress(props.item);
            props.TickIconComponent();
        }
        }>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: props.isSelected ? "#cef5ff" : '#fff' }}>
                <View>
                    <Text style={styles.agencyName}>{props.item.value}</Text>
                    <Text style={styles.addressName}>{props.item.address}</Text>
                </View>
                {props.isSelected && <props.TickIconComponent isSelected={props.isSelected} />}
            </View>
        </TouchableOpacity>
    )
}

const InfoScreen = (prop:typeProps) => {
    const {navigation} = prop
    const [openCity, setOpenCity] = useState(false);
    const [cityValue, setCityValue] = useState<ValueType | null>(null);
    const [city, setCity] = useState(DATA_CITY);

    const [openDistrict, setOpenDistrict] = useState(false);
    const [districtValue, setDistrictValue] = useState<ValueType | null>(null);
    const [district, setDistrict] = useState(DATA_DISTRICT);


    const [openAgency, setOpenAgency] = useState(false);
    const [agencyValue, setAgencyValue] = useState<ValueType | null>(null);
    const [agency, setAgency] = useState(DATA_AGENCY);

    const [image1, setImage1] = useState<responseChild | null>(null);

    const [image2, setImage2] = useState<responseChild | null>(null);

    const [image3, setImage3] = useState<responseChild | null>(null);


    const [myDate, setMyDate] = useState<any>(null);


    const [userName, setUserName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [partyCity, setPartyCity] = useState<string>("");
    const [partyDistrict, setPartyDistrict] = useState<string>("");
    const [partyAddress, setPartyAddress] = useState<string>("");


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


    const status = useSelector((state:DefaultRootStateType) => state?.statusActivityIndicator)
    const isDone = useSelector((state:DefaultRootStateType) => state?.isDone)
    const dispatch = useDispatch();
    

    useLayoutEffect(()=>{
        if(isDone){
            navigation.navigate("Success");
        }   
        return () =>{
            dispatch({
                type: 'pepsi/handleIsDone',
                payload: false,
            })
        }
    },[status, isDone])

    const selectImage = () => {
        const options: any = {
            maxWidth: 2000,
            maxHeight: 2000,
            mediaType: "photo"
        };
        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.errorMessage) {
                console.log('User tapped custom button: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri, fileName: response.assets[0].fileName };
                setImage1(source);
            }
        });
    };


    const selectImage2 = () => {
        const options: any = {
            maxWidth: 2000,
            maxHeight: 2000,
            mediaType: "photo"
        };
        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.errorMessage) {
                console.log('User tapped custom button: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri, fileName: response.assets[0].fileName };
                setImage2(source);
            }
        });
    };

    const selectImage3 = () => {
        const options: any = {
            maxWidth: 2000,
            maxHeight: 2000,
            mediaType: "photo"
        };
        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else if (response.errorMessage) {
                console.log('User tapped custom button: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri, fileName: response.assets[0].fileName };
                setImage3(source);
            }
        });
    };


    const handleSubmitForm = () => {
        dispatch({
            type: 'pepsi/changeStatusActivityIndicator',
            payload: true,
        })
        const data = {
            city: cityValue,
            district: districtValue,
            agent: agencyValue,
            data_user: {
                userName: userName,
                phone: phone
            },
            infoParty: {
                partyCity: partyCity,
                partyDistrict: partyDistrict,
                partyAddress: partyAddress,
                date: myDate
            },
            images: [
                image1,
                image2,
                image3,
            ]
        }
        addEvent(data, dispatch);
        return null;
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        let momentDate = moment(date);
        setMyDate(momentDate.format("YYYY-MM-DD hh:mm:ss A "));
        hideDatePicker();
    };

    return (
        <Layout title="InfoScreen">
            <View style={{display: !status ? 'none' : 'flex', backgroundColor:'red', opacity:0.2, position: 'absolute',top:0, left:0, right:0, bottom:0, zIndex:10, alignItems: 'center', justifyContent:'center'}}>
                <ActivityIndicator size="large" />
            </View>
            <View style={styles.container}>
                <Image source={SIGN_IN_TO_EVENT} style={styles.imgTitle} />

                <ScrollView style={{ marginTop: 10, backgroundColor: "#004F9D" }}>
                    <View style={styles.containerBody}>
                        <Text style={styles.headerText}>TH??NG TIN MUA H??NG</Text>
                        <View style={styles.address}>
                            <View>
                                <Text style={styles.textLabel}>T???nh / Th??nh Ph???</Text>
                                <DropDownPicker
                                    open={openCity}
                                    value={cityValue}
                                    items={city}
                                    setOpen={setOpenCity}
                                    setValue={setCityValue}
                                    setItems={setCity}
                                    listMode="SCROLLVIEW"
                                    style={styles.inputCity}
                                    containerStyle={{
                                        width: 150,
                                        marginRight: 30,
                                    }}
                                    placeholder="Select an city"
                                    selectedItemContainerStyle={{
                                        backgroundColor: "#cef5ff",
                                    }}
                                    listItemLabelStyle={{
                                        color: "#00355A"
                                    }}
                                    selectedItemLabelStyle={{
                                        color: "#00355A"
                                    }}
                                    dropDownContainerStyle={{
                                        marginTop: 4,
                                        borderRadius: 5
                                    }}
                                    modalContentContainerStyle={{
                                        backgroundColor: "red"
                                    }}
                                    disableBorderRadius={true}
                                    zIndex={1000}
                                />
                            </View>

                            <View>
                                <Text style={styles.textLabel}>Qu???n / Huy???n</Text>
                                <DropDownPicker
                                    open={openDistrict}
                                    value={districtValue}
                                    items={district}
                                    setOpen={setOpenDistrict}
                                    setValue={setDistrictValue}
                                    setItems={setDistrict}
                                    listMode="SCROLLVIEW"
                                    style={styles.inputDistrict}
                                    containerStyle={{
                                        width: 150,

                                    }}
                                    selectedItemContainerStyle={{
                                        backgroundColor: "#cef5ff",
                                    }}
                                    listItemLabelStyle={{
                                        color: "#00355A"
                                    }}
                                    selectedItemLabelStyle={{
                                        color: "#00355A"
                                    }}
                                    placeholder="Select an District"
                                    dropDownContainerStyle={{
                                        marginTop: 4,
                                        borderRadius: 5
                                    }}
                                    zIndex={1000}
                                />
                            </View>

                        </View>
                        <View>
                            <Text style={styles.textLabel}>?????i l??</Text>
                            <DropDownPicker
                                open={openAgency}
                                value={agencyValue}
                                items={agency}
                                setOpen={setOpenAgency}
                                setValue={setAgencyValue}
                                setItems={setAgency}
                                listMode="SCROLLVIEW"
                                style={styles.inputDistrict}
                                containerStyle={{
                                    width: "100%",
                                    borderRadius: 5
                                }}
                                placeholder="Select an Agency"
                                selectedItemContainerStyle={{
                                    backgroundColor: "#cef5ff",
                                }}
                                listItemLabelStyle={{
                                    color: "#00355A"
                                }}
                                selectedItemLabelStyle={{
                                    color: "#00355A"
                                }}
                                dropDownContainerStyle={{
                                    marginTop: 4,
                                    borderRadius: 5,
                                }}
                                renderListItem={(props) => <Item {...props} />}
                                zIndex={100}
                            />
                        </View>

                        <View style={styles.line}></View>
                        <View style={styles.containerInfoCustomer}>
                            <Text style={styles.headerText}>TH??NG TIN NG?????I THAM GIA</Text>
                            <View style={styles.containerInfoCustomer1}>
                                <View style={{ flex: .45 }}>
                                    <Text style={styles.textLabel}>H??? t??n</Text>
                                    <TextInput value={userName} onChangeText={setUserName} style={styles.inputField} placeholder="Enter your name" />
                                </View>
                                <View style={{ flex: .45 }}>
                                    <Text style={styles.textLabel}>S??? ??i???n tho???i</Text>
                                    <TextInput value={phone} onChangeText={setPhone} style={styles.inputField} placeholder="Enter your phone" />
                                </View>
                            </View>
                            <View style={styles.infoParty}>
                                <Text style={styles.headerText}>TH??NG TIN TI???C</Text>
                                <View style={styles.containerInfoCustomer1}>
                                    <View style={{ flex: .45 }}>
                                        <Text style={styles.textLabel}>Th??nh ph???</Text>
                                        <TextInput value={partyCity} onChangeText={setPartyCity} style={styles.inputField} placeholder="Enter your city" />
                                    </View>
                                    <View style={{ flex: .45 }}>
                                        <Text style={styles.textLabel}>T???nh</Text>
                                        <TextInput value={partyDistrict} onChangeText={setPartyDistrict} style={styles.inputField} placeholder="Enter your province" />
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.textLabel}>S??? nh??, t??n ???????ng</Text>
                                    <TextInput value={partyAddress} onChangeText={setPartyAddress} style={styles.inputField} placeholder="Enter your address" />
                                </View>
                                <View>
                                    <Text style={styles.textLabel}>Th???i gian ti???c</Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <TextInput value={myDate ? myDate : ""} editable={false} style={[styles.inputField, { flex: 1 }]} placeholder="Select your date" />
                                        <TouchableOpacity onPress={showDatePicker}>
                                            <Image source={DATE_ICON} style={styles.iconStyle} />
                                        </TouchableOpacity>
                                    </View>
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="datetime"
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}
                                        is24Hour={true}
                                    />
                                </View>
                            </View>
                            <Text style={styles.headerText}>H??NH ???NH</Text>
                            <View>
                                <View >
                                    <Text style={styles.textLabel}>H??nh thi???p c?????i</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', position: 'relative' }}>
                                        <TouchableOpacity style={styles.imgIcon} onPress={selectImage}>
                                            <Image source={IMAGE_ICON} />
                                        </TouchableOpacity>
                                        <View style={styles.straightLine}></View>
                                        <TextInput value={image1?.fileName} editable={false} style={[styles.inputField, { flex: 1, position: 'relative', zIndex: 0, paddingLeft: 50 }]} placeholder="Attach the picture" />
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View >
                                    <Text style={styles.textLabel}>H??nh h??a ????n b??n h??ng</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', position: 'relative' }}>
                                        <TouchableOpacity style={styles.imgIcon} onPress={selectImage2}>
                                            <Image source={IMAGE_ICON} />
                                        </TouchableOpacity>
                                        <View style={styles.straightLine}></View>
                                        <TextInput value={image2?.fileName} editable={false} style={[styles.inputField, { flex: 1, position: 'relative', zIndex: 0, paddingLeft: 50 }]} placeholder="Attach the picture" />
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View >
                                    <Text style={styles.textLabel}>H??nh kh???i s???n ph???m</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', position: 'relative' }}>
                                        <TouchableOpacity style={styles.imgIcon} onPress={selectImage3}>
                                            <Image source={IMAGE_ICON} />
                                        </TouchableOpacity>
                                        <View style={styles.straightLine}></View>
                                        <TextInput value={image3?.fileName} editable={false} style={[styles.inputField, { flex: 1, position: 'relative', zIndex: 0, paddingLeft: 50 }]} placeholder="Attach the picture" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => console.log(handleSubmitForm())} style={{ alignItems: 'center', marginTop: 5 }}>
                        <Image source={SUBMIT_BUTTON} />
                    </TouchableOpacity>
                </ScrollView>
                <Image source={DECOR_LEFT} style={styles.pillarLeft} />
                <Image source={DECOR_RIGHT} style={styles.pillarRight} />
                <Image source={ICED_LEFT} style={styles.iceLeft} />
                <Image source={ICED_RIGHT} style={styles.iceRight} />

            </View>
        </Layout>
    )
}

export default InfoScreen;
import React, { useState } from 'react';
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
import { SIGN_IN_TO_EVENT, DATA_CITY, DATA_DISTRICT, DATA_AGENCY, DATE_ICON, IMAGE_ICON, DECOR_LEFT, DECOR_RIGHT, ICED_LEFT, ICED_RIGHT } from '../../utils/constant'
import styles from './styles'
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";



const Item = (props: any) => {
    return (
        <TouchableOpacity style={[styles.containerItem]} key={props.item} onPress={() => {
            props.onPress(props.item);
            props.TickIconComponent();
        }
        }>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor:props.isSelected ? "#cef5ff":'#fff'}}>
                <View>
                    <Text style={styles.agencyName}>{props.item.value}</Text>
                    <Text style={styles.addressName}>{props.item.address}</Text>
                </View>
                {props.isSelected && <props.TickIconComponent isSelected={props.isSelected} />}
            </View>
        </TouchableOpacity>
    )
}

const InfoScreen = () => {
    const [openCity, setOpenCity] = useState(false);
    const [cityValue, setCityValue] = useState(null);
    const [city, setCity] = useState(DATA_CITY);

    const [openDistrict, setOpenDistrict] = useState(false);
    const [districtValue, setDistrictValue] = useState(null);
    const [district, setDistrict] = useState(DATA_DISTRICT);


    const [openAgency, setOpenAgency] = useState(false);
    const [agencyValue, setAgencyValue] = useState(null);
    const [agency, setAgency] = useState(DATA_AGENCY);



    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        hideDatePicker();
    };

    return (
        <Layout title="InfoScreen">
            <View style={styles.container}>
                <Image source={SIGN_IN_TO_EVENT} style={styles.imgTitle} />

                <ScrollView style={{ marginTop: 10, backgroundColor: "#004F9D" }}>
                    <View style={styles.containerBody}>
                        <Text style={styles.headerText}>THÔNG TIN MUA HÀNG</Text>
                        <View style={styles.address}>
                            <View>
                                <Text style={styles.textLabel}>Tỉnh / Thành Phố</Text>
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
                                <Text style={styles.textLabel}>Quận / Huyện</Text>
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
                            <Text style={styles.textLabel}>Đại lý</Text>
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
                            <Text style={styles.headerText}>THÔNG TIN NGƯỜI THAM GIA</Text>
                            <View style={styles.containerInfoCustomer1}>
                                <View style={{ flex: .45 }}>
                                    <Text style={styles.textLabel}>Họ tên</Text>
                                    <TextInput style={styles.inputField} placeholder="Enter your name" />
                                </View>
                                <View style={{ flex: .45 }}>
                                    <Text style={styles.textLabel}>Số điện thoại</Text>
                                    <TextInput style={styles.inputField} placeholder="Enter your phone" />
                                </View>
                            </View>
                            <View style={styles.infoParty}>
                                <Text style={styles.headerText}>THÔNG TIN TIỆC</Text>
                                <View style={styles.containerInfoCustomer1}>
                                    <View style={{ flex: .45 }}>
                                        <Text style={styles.textLabel}>Thành phố</Text>
                                        <TextInput style={styles.inputField} placeholder="Enter your city" />
                                    </View>
                                    <View style={{ flex: .45 }}>
                                        <Text style={styles.textLabel}>Tỉnh</Text>
                                        <TextInput style={styles.inputField} placeholder="Enter your province" />
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.textLabel}>Số nhà, tên đường</Text>
                                    <TextInput style={styles.inputField} placeholder="Enter your address" />
                                </View>
                                <View>
                                    <Text style={styles.textLabel}>Thời gian tiệc</Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <TextInput editable={false} style={[styles.inputField, { flex: 1 }]} placeholder="Select your date" />
                                        <TouchableOpacity onPress={showDatePicker}>
                                            <Image source={DATE_ICON} style={styles.iconStyle} />
                                        </TouchableOpacity>
                                    </View>
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="datetime"
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}
                                    />
                                </View>
                            </View>
                            <Text style={styles.headerText}>HÌNH ẢNH</Text>
                            <View>
                                <View >
                                    <Text style={styles.textLabel}>Hình hiệp cưới</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', position: 'relative' }}>
                                        <TouchableOpacity style={styles.imgIcon}>
                                            <Image source={IMAGE_ICON} />
                                        </TouchableOpacity>
                                        <View style={styles.straightLine}></View>
                                        <TextInput editable={false} style={[styles.inputField, { flex: 1, position: 'relative', zIndex: 0, paddingLeft: 50 }]} placeholder="Attach the picture" />
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View >
                                    <Text style={styles.textLabel}>Hình hóa đơn bán hàng</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', position: 'relative' }}>
                                        <TouchableOpacity style={styles.imgIcon}>
                                            <Image source={IMAGE_ICON} />
                                        </TouchableOpacity>
                                        <View style={styles.straightLine}></View>
                                        <TextInput editable={false} style={[styles.inputField, { flex: 1, position: 'relative', zIndex: 0, paddingLeft: 50 }]} placeholder="Attach the picture" />
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View >
                                    <Text style={styles.textLabel}>Hình khối sản phẩm</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', position: 'relative' }}>
                                        <TouchableOpacity style={styles.imgIcon}>
                                            <Image source={IMAGE_ICON} />
                                        </TouchableOpacity>
                                        <View style={styles.straightLine}></View>
                                        <TextInput editable={false} style={[styles.inputField, { flex: 1, position: 'relative', zIndex: 0, paddingLeft: 50 }]} placeholder="Attach the picture" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

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
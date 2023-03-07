import React from 'react';
import { StyleSheet, Picker, Text, View, SafeAreaView, Button} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const BirthdayPicker = () => {
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    return (
        // <View style={styles.container}>
        //     <Text>BirthdayPicker</Text>
    <View>
      <Button onPress={showDatepicker} title="Show date picker!" />
      {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {flexDirection: "row"},
    monthPicker: {flex: 1},
    dayPicker: {flex: 1},
    yearPicker: {flex: 1}
})

export default BirthdayPicker;


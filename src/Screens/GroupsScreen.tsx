import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import useGroup from '../Hooks/useGropus';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {InputDropDown, NumberPicker, NumbersAlert} from '../Component';

type Props = {};

const GroupsScreen = (props: Props) => {
  const {groups, handleMarks, marksArr, teacherMarks} = useGroup();
  const [selectedGroup, setSelectedGroup] = React.useState(-1);
  const [selectedItem, setSelectedItem] = React.useState(-1);

  const onClose = () => {
    setSelectedItem(-1);
  };

  const handleSelectmarks = (marks: number) => {
    handleMarks(selectedGroup, selectedItem, marks);
    onClose();
  };

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} style={{flex: 1}}>
        {groups.map((group, groupId) => {
          let isSelected = selectedGroup === groupId;
          return (
            <View key={groupId} style={styles.group}>
              <TouchableOpacity
                onPress={() => setSelectedGroup(isSelected ? -1 : groupId)}
                style={styles.groupHeader}>
                <Text style={styles.groupHeaderText}>
                  Group {groupId + 1}
                  <Text style={{fontSize: 13}}>
                    - ({marksArr[groupId]}) earn total score{' '}
                  </Text>
                </Text>

                <View style={styles.groupHeaderButton}>
                  <Ionicons
                    name={isSelected ? 'caret-up' : 'caret-down'}
                    size={20}
                    color="#aaa"
                  />
                </View>
              </TouchableOpacity>

              <View style={styles.item}>
                {isSelected &&
                  group.map((item, itemId) => (
                    <View key={itemId} style={styles.singleItem}>
                      <Text style={styles.label}>
                        {' '}
                        G{groupId > itemId ? itemId + 1 : itemId + 2}
                      </Text>
                      <InputDropDown
                        value={item}
                        onPress={() => setSelectedItem(itemId)}
                      />
                    </View>
                  ))}
              </View>
            </View>
          );
        })}

        {/* <Text>GroupsScreen : {JSON.stringify(teacherMarks)} </Text> */}
        <View style={[styles.group, {backgroundColor: 'transparent'}]}>
          <Text style={styles.groupHeaderText}>Teacher</Text>
          <View style={[styles.item, {backgroundColor: 'transparent'}]}>
            {teacherMarks.map((item, itemId) => (
              <View key={itemId} style={styles.singleItem}>
                <Text style={styles.label}> G{itemId + 1}</Text>
                <InputDropDown
                  secondary={true}
                  value={item}
                  onPress={() =>{
                    setSelectedGroup(-1)
                     setSelectedItem(itemId)
                  }}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {selectedItem !== -1 && (
        <NumbersAlert
          // ref={pickerRef}
          marks={selectedGroup !== -1 ? groups?.[selectedGroup]?.[selectedItem] : teacherMarks[selectedItem]}
          onSelect={handleSelectmarks}
          onClose={onClose}
          selected={{group: selectedGroup, item: selectedItem}}
        />
      )}
    </View>
  );
};

export default GroupsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#efefef',
    // padding : 10
  },
  group: {
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  groupHeader: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groupHeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#856c90',
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  singleItem: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  groupHeaderButton: {
    width: 50,
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#000',
  },
});

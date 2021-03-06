import React, {useState, useEffect} from 'react'; // Hooks addition
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FetchNotes, EditNoteAction} from '../../redux/actions/Home';
import {COLORS, DEVICE_WIDTH} from '../../common';
import styles from './styles';
import {DeleteNote, AddNote} from './CrudNoteModals/CrudNoteModals';
import moment from 'moment';
import AppIcon from '../../Components/AppIcon';
import Button from '../../Components/Button';
import { logout } from '../../redux/actions/User';
import { useNavigation } from 'react-navigation-hooks';

const Home = () => {
  const [type, setType] = useState('add');
  const navigation = useNavigation()
  const [selectedNote, setSelectedNote] = useState({});
  const [filterNotes, setFilterNotes] = useState(notes);
  const [searchText, setSearchText] = useState('');
  const [AddNoteVisible, setAddNoteVisible] = useState(false);
  const [DeleteNoteVisible, setDeleteNoteVisible] = useState(false);
  const notes = useSelector(state => state?.Home.notes)
  const dispatch = useDispatch()

  useEffect(() => {
    // if we have real APIs we should call it..
    // FetchNotes()
    setFilterNotes(notes);
  }, [notes]);

  const renderItem = ({item}) => {
    return (
      <View style={[styles.noteItem, {backgroundColor: item.color}]}>
        <Text style={styles.noteText}>{item.note}</Text>
        <View style={styles.actions}>
          <Text style={styles.date}>
            {moment.unix(item.created_at).fromNow()}
          </Text>
          <TouchableOpacity
            disabled={item.color == COLORS.green}
            onPress={() => dispatch(EditNoteAction({...item, color: COLORS.green}))}
            style={[
              styles.colorButton,
              {backgroundColor: COLORS.green},
              item.color == COLORS.green ? {borderColor: COLORS.main} : null,
            ]}
          />
          <TouchableOpacity
            disabled={item.color == COLORS.pink}
            onPress={() => dispatch(EditNoteAction({...item, color: COLORS.pink}))}
            style={[
              styles.colorButton,
              {backgroundColor: COLORS.pink},
              item.color == COLORS.pink ? {borderColor: COLORS.main} : null,
            ]}
          />
          <TouchableOpacity
            disabled={item.color == COLORS.orange}
            onPress={() => dispatch(EditNoteAction({...item, color: COLORS.orange}))}
            style={[
              styles.colorButton,
              {backgroundColor: COLORS.orange},
              item.color == COLORS.orange ? {borderColor: COLORS.main} : null,
            ]}
          />
          <TouchableOpacity
            disabled={item.color == COLORS.blue}
            onPress={() => dispatch(EditNoteAction({...item, color: COLORS.blue}))}
            style={[
              styles.colorButton,
              {backgroundColor: COLORS.blue},
              item.color == COLORS.blue ? {borderColor: COLORS.main} : null,
            ]}
          />
          <AppIcon
            onPress={() => {
              setSelectedNote(item);
              setType('edit');
              setAddNoteVisible(true);
            }}
            name="pencil"
            size={DEVICE_WIDTH * 0.05}
            color={COLORS.main}
          />
          <AppIcon
            onPress={() => {
              setSelectedNote(item);
              setDeleteNoteVisible(true);
            }}
            name="trash"
            size={DEVICE_WIDTH * 0.05}
            color={COLORS.red}
          />
        </View>
      </View>
    );
  };

  const _search = () => {
    if (searchText == '') {
      setFilterNotes(notes);
    } else {
      let fn = notes.filter((n) => n.note.search(searchText) != -1);
      setFilterNotes(fn ? fn : []);
    }
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: COLORS.background}}>
        {/* modal for Addition and for Editing */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={AddNoteVisible}>
          <AddNote
            type={type}
            note={selectedNote}
            close={() => setAddNoteVisible(false)}
          />
        </Modal>

        {/* modal for Deletion */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={DeleteNoteVisible}>
          <DeleteNote
            type={type}
            id={selectedNote.id}
            close={() => setDeleteNoteVisible(false)}
          />
        </Modal>

        <FlatList
          data={filterNotes}
          bounces={false}
          keyExtractor={(item, index) => `item--${index}${item}`}
          renderItem={renderItem}
          ListEmptyComponent={
            <View style={styles.emptyComonent}>
              <Text style={styles.emptyComonentText}>
                You Don't have any notes till NOW!!
              </Text>
              <Text style={styles.emptyComonentText}>Go Add Some!</Text>
            </View>
          }
          ListHeaderComponent={
            <TextInput
              placeholder="search here.."
              onChangeText={(search) => {
                setSearchText(search);
                _search();
              }}
              onEndEditing={_search}
              style={styles.search}
            />
          }
        />
        <TouchableOpacity
          onPress={() => {
            setSelectedNote({});
            setType('add');
            setAddNoteVisible(true);
          }}
          style={styles.addNote}>
          <AppIcon
            name="plus-circle"
            style={{margin: 0}}
            size={DEVICE_WIDTH * 0.09}
            color={COLORS.main}
          />
        </TouchableOpacity>
      </View>
      <Button title={'Logo Out'} containerStyle={{backgroundColor:'red'}} onPress={()=>dispatch(logout(navigation))}/>
    </>
  );
};
// Header name and styles
Home.navigationOptions = () => {
  return {
    // header name
    header: null,
  };
};

export default Home

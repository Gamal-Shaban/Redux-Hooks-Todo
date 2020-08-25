import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, } from 'react-native';
import { COLORS, DEVICE_HEIGHT as height, DEVICE_WIDTH as width, ICONS } from '../../../common';
// redux imports
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddNoteAction, EditNoteAction, DeleteNoteAction } from '../../../redux/actions/Home'
import Input from '../../../Components/Input';
import AppIcon from '../../../Components/AppIcon';
import styles from './CrudNoteModalsStyles'

const AddNote = ({ close, type, note }) => {
    const dispatch = useDispatch()
    const [formError, setformError] = useState(false);
    const [noteData, setNoteData] = useState({
        note: note ? note.note : '',
        color: note ? note.color : '',
    });

    const _handleAction = () => {
        console.log(type, note)
        if (type == 'add') {
            let data = {};
            data['id'] = '_' + Math.random().toString(36).substr(2, 9);
            data['created_at'] = Math.floor(Date.now() / 1000);
            data['note'] = noteData.note;
            data['color'] = noteData.color ? noteData.color : COLORS.default;
            dispatch(AddNoteAction(data))
        } else if (type == 'edit') {
            let data = {};
            data['id'] = note.id;
            data['created_at'] = note.created_at;
            data['note'] = noteData.note;
            data['color'] = noteData.color;
            dispatch(EditNoteAction(data))
        }
        close();
    }

    return (
        <View style={styles.Modalcontainer}>
            <View style={styles.container}>
                <AppIcon onPress={close} name={ICONS.close} size={width * 0.05} style={styles.close} color={COLORS.main} />
                <Input
                    placeholder='type your note..'
                    error={formError ? 'you have to type something!' : ''}
                    onChangeText={(note) => setNoteData({
                        ...noteData,
                        note,
                    })}
                    returnKeyType="done"
                    iconName="user"
                    value={noteData.note}
                    name='Note'
                    onEndEditing={() => {
                        if (!noteData.note) {
                            setformError(true);
                        } else {
                            setformError(false);
                        }
                    }}
                    multiline
                    style={{ width: '90%', padding: 0, }}
                />
                <View style={styles.actionContainer}>
                    <TouchableOpacity disabled={formError} onPress={_handleAction} style={styles.actionButton}>
                        <Text style={styles.actionText}>{type == 'add' ? 'Add Note' : 'Edit Note'}</Text>
                    </TouchableOpacity>
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={() => setNoteData({ ...noteData, color: COLORS.green })} style={[styles.colorButton, { backgroundColor: COLORS.green }, noteData.color == COLORS.green ? { borderColor: COLORS.main } : null]} />
                        <TouchableOpacity onPress={() => setNoteData({ ...noteData, color: COLORS.pink })} style={[styles.colorButton, { backgroundColor: COLORS.pink }, noteData.color == COLORS.pink ? { borderColor: COLORS.main } : null]} />
                        <TouchableOpacity onPress={() => setNoteData({ ...noteData, color: COLORS.orange })} style={[styles.colorButton, { backgroundColor: COLORS.orange }, noteData.color == COLORS.orange ? { borderColor: COLORS.main } : null]} />
                        <TouchableOpacity onPress={() => setNoteData({ ...noteData, color: COLORS.blue })} style={[styles.colorButton, { backgroundColor: COLORS.blue }, noteData.color == COLORS.blue ? { borderColor: COLORS.main } : null]} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const DeleteNote = ({ close, id }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.Modalcontainer}>
            <View style={styles.container}>
                <AppIcon onPress={close} name={ICONS.close} size={width * 0.05} style={styles.close} color={COLORS.main} />
                <Text style={styles.deleteText}>Are you sure you need to delete this note?</Text>
                <View style={[styles.actionContainer, { width: width * 0.35 }]}>
                    <TouchableOpacity onPress={() => { dispatch(DeleteNoteAction(id)); close() }} style={[styles.actionButton, { backgroundColor: COLORS.delete }]}>
                        <Text style={styles.actionText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={close} style={styles.actionButton}>
                        <Text style={styles.actionText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}



export { AddNote, DeleteNote };

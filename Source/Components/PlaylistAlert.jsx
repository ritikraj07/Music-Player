import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const PlaylistAlert = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleOkPress = () => {
        console.log('Input Text:', inputText);
        setInputText('');
        setModalVisible(false);
    };

    const handleCancelPress = () => {
        setInputText('');
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
                <Text style={styles.buttonText}>Open Alert</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.heading}>Playlist Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter playlist name"
                            value={inputText}
                            onChangeText={setInputText}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={handleCancelPress} style={[styles.modalButton, styles.cancelButton]}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleOkPress} style={[styles.modalButton, styles.okButton]}>
                                <Text style={styles.buttonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 5,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    modalButton: {
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5,
    },
    cancelButton: {
        backgroundColor: '#FF3B30',
    },
    okButton: {
        backgroundColor: '#007AFF',
    },
});

export default PlaylistAlert;

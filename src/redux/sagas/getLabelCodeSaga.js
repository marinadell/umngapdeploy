import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getLabelCode(action){
    console.log('in getLabelCodeSaga')
    try{
        let result = yield axios.get(`/setup/label_code/`)
        console.log(`result label codes `, result.data);
        
        yield put({type: "SET_LABEL_CODE", payload: result.data})
        
    }
    catch (error){
        console.log('ERROR IN getLabelCodeSaga GET', error);
        alert(`Sorry! Was unable to setup the farm! Try again later.`)
    }
}

function* addLabelCode(action) {
    console.log('Hit the addLabelCode', action.payload);

    try {
        yield axios.post(`/setup/label_code`, action.payload);
        yield put({ type: 'GET_LABEL_CODE' });
    }
    catch (error) {
        console.log(`Couldn't add the label code`, action.payload, error);
        alert(`Sorry, couldn't add the labelcode. Try again later`);
    }
}

function* deleteLabelCode(action) {
    console.log('Hit the deleteLabelCode', action);

    try {
        yield axios.delete(`/setup/label_code/${action.payload}`);
        console.log('saga id is', action.payload);

        yield put({ type: 'GET_LABEL_CODE' });
    }
    catch (error) {
        console.log(`Couldn't delete labelCode`, error);
        alert(`Sorry, couldn't delete your labelCode. Try again later`);
    }
}

function* disableLabelCode(action) {
    console.log('Hit the disableLabelCode', action);

    try {
        yield axios.put(`/setup/label_code/disable`, action.payload);
        console.log('saga id is', action.payload);

        yield put({ type: 'GET_LABEL_CODE' });
    }
    catch (error) {
        console.log(`Couldn't disable lable`, error);
        alert(`Sorry, couldn't disable your lable. Try again later`);
    }
}

function* editLabelCode(action) {
    console.log('Hit the editLabelSource', action);

    try {
        yield axios.put(`/setup/label_code/edit`, action.payload);
        console.log('saga id is', action.payload);

        yield put({ type: 'GET_LABEL_CODE' });
    }
    catch (error) {
        console.log(`Couldn't change label`, error);
        alert(`Sorry, couldn't change your label. Try again later`);
    }
}

function* getLabelCodeSaga() {
    //   yield takeLatest('ADD_FARM', addFarmSaga);
    yield takeLatest('GET_LABEL_CODE', getLabelCode);
    yield takeLatest('ADD_LABEL_CODE', addLabelCode);
    yield takeLatest('DELETE_LABEL_CODE', deleteLabelCode);
    yield takeLatest('EDIT_LABEL_CODE', editLabelCode);
    yield takeLatest('DISABLE_LABEL_CODE', disableLabelCode);
}

export default getLabelCodeSaga;


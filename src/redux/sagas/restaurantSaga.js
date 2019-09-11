import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';


function* addRestaurant(action) {
    try {
        console.log(action.payload)
        //sends new restaurant info to server
        yield axios.post('/api/restaurant', action.payload)
    } catch (error) {
        console.log('error with add restaurant', error)
    }
}

function* fetchRestaurants(action) {
    try {
        console.log('in fetch restaurants')
        //fetches list of restaurants user should see
        const response = yield axios.get('/api/restaurant')
        yield put ({
            type: 'SET_RESTAURANTS',
            payload: response.data
        })

    } catch (error) {
        console.log('error with fetch restaurants', error)
    }
}

function* restaurantSaga() {
    yield takeEvery('ADD_RESTAURANT', addRestaurant)
    yield takeEvery('FETCH_RESTAURANTS', fetchRestaurants)

}

export default restaurantSaga;
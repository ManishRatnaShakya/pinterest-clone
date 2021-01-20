import { takeEvery, call, put, select } from 'redux-saga/effects';
import { ACTION_GET_IMAGES } from './constants';
import { getImagesFailure, getImagesSuccess, getImages } from './actions';
// Individual exports for testing
export function* homepageSaga() {
  try {
    yield put(getImages());
    const requestURL =
      'https://api.unsplash.com/photos/?client_id=bITu8iYf64lfIQTGO3m3OzQm5hMOQ4p_KhFBd2pJnNE';
    const data = yield call(() => fetch(requestURL).then(res => res.json()));
    yield put(getImagesSuccess(data));
  } catch (err) {
    yield put(getImagesFailure(err));
  }
  //   console.log('from saga data ', data);
}

export default function* fetchImages() {
  console.log('from saga');
  yield takeEvery(ACTION_GET_IMAGES.IMAGES, homepageSaga);
}

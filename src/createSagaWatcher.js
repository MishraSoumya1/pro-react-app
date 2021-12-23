import { takeEvery } from "redux-saga/effects";

export default createSagaWatcher = (sagas) =>
  Object.keys(sagas).map((type) =>
    (function* () {
      yield takeEvery(type, sagas[type]);
    })()
  );

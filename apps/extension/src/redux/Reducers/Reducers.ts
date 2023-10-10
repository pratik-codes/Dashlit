import {
  USER_SETTINGS_REQUEST,
  USER_SETTINGS_SUCCESS,
  USER_SETTINGS_FAIL
} from '../Constants/Actions'

export type getUserSettingsAction = {
  type: string
  payload: any
}

const settingsInitialState = { settingsInitialState: [] }

export const getSettingsReducers = (
  state = settingsInitialState,
  action: getUserSettingsAction
) => {
  switch (action.type) {
    case USER_SETTINGS_REQUEST:
      return { loading: true }
    case USER_SETTINGS_SUCCESS:
      return { loading: false, data: action.payload }
    case USER_SETTINGS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

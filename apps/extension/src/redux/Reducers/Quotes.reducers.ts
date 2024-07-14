import {
  USER_MY_QUOTES_FAIL,
  USER_MY_QUOTES_REQUEST,
  USER_MY_QUOTES_SUCCESS
} from '../Constants/Actions'

export type getMyQuotesAction = {
  type: string
  payload: any
}

const InitialState = { InitialState: [] }

export const getMyQuotesReducers = (
  state = InitialState,
  action: getMyQuotesAction
) => {
  switch (action.type) {
    case USER_MY_QUOTES_REQUEST:
      return { loading: true }
    case USER_MY_QUOTES_SUCCESS:
      return { loading: false, data: action.payload }
    case USER_MY_QUOTES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

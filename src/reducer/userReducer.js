import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from '~/action/types';

const INITIAL_STATE = {
  listUser: [],
  loading: false,
  error: null,
  isCreating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        listUser: action.payload,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_USER_REQUEST:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreating: false,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    default:
      return state;
  }
};

export default userReducer;

/* 
...state: Giúp giữ nguyên các giá trị khác trong state và đảm bảo Redux không thay đổi state trực tiếp.
listUser: Chứa danh sách người dùng được lấy từ Redux store và cập nhật khi Redux nhận action FETCH_USER_SUCCESS.
*/

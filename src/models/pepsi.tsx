import { createSlice } from '@reduxjs/toolkit'

export const pepsiModel = createSlice({
    name: 'pepsi',
    initialState: {
      data:{},
      statusActivityIndicator:false,
      isDone:false,
    },
    reducers: {
      changeStatusActivityIndicator: (state, action) => {
        return {
          ...state,
          statusActivityIndicator: action.payload,
        }
    },
    handleIsDone: (state, action) => {
      return {
        ...state,
        isDone: action.payload,
      }
  },
    }
  })

export default pepsiModel.reducer
  
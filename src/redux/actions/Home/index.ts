import { START_LOADING, STOP_LOADING, FETCH_NOTES, EDIT_NOTE, ADD_NOTE, DELETE_NOTE } from "../../actions/actionTypes"
import { get_request, post_request, put_request, delete_request } from '../../../Services/Api'

export const FetchNotes = () => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING });
        
         const response = await get_request({ target: 'todo/' })
         if (response) {
             dispatch({ type: FETCH_NOTES, payload: response })
         }else{
            //  toast('errorInConnection')
         }
          
        dispatch({ type: FETCH_NOTES, payload:[] });
        dispatch({ type: STOP_LOADING });
    }
}

export const AddNoteAction = (data) => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING });
        /**
         * request go here--->
         * const response = await post_request({ target: 'note/add', data })
         * if (response) {
         *     dispatch({ type: ADD_NOTE, payload: response })
         * }else{
         *     toast('errorInConnection')
         * }
         *  */ 
        
        dispatch({ type: ADD_NOTE, payload: data });
        dispatch({ type: STOP_LOADING });
        
    }
}

export const EditNoteAction = (data) => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING });
        /**
         * request go here--->
         * const response = await put_request({ target: `note/${id}/edit`, data })
         * if (response) {
         *     dispatch({ type: EDIT_NOTE, payload: response })
         * }else{
         *     toast('errorInConnection')
         * }
         *  */ 
        
        dispatch({ type: EDIT_NOTE, payload: data });
        dispatch({ type: STOP_LOADING });
        
    }
}

export const DeleteNoteAction = (id) => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING });
        /**
         * request go here--->
         * const response = await delete_request({ target: `note/${id}/delete` })
         * if (response) {
         *     dispatch({ type: DELETE_NOTE, payload: response })
         * }else{
         *     toast('errorInConnection')
         * }
         *  */ 
        
        dispatch({ type: DELETE_NOTE, payload: id });
        dispatch({ type: STOP_LOADING });
        
    }
}

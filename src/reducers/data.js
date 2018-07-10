import initialData from '../schemas'
import { fromJS } from 'immutable'


const initialState = fromJS({
  entities: initialData.entities,
  categories: initialData.result.categories,
  search: '',
})


function data(state = initialState, action) {
  switch(action.type) {
    case 'SEARCH_ENTITIES':{
      return state.set('search', action.payload.query)
    }
    default:
      return state
  }
}

export default data

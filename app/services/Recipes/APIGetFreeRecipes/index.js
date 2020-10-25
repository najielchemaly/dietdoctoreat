import API from '../..'
import RECIPES_QUERY from '../../../graphql/queries/recipes.query.json'

export default function APIGetFreeRecipes() {
  return API(false).then((axios) => {
    return axios
      .post('/v1', RECIPES_QUERY)
      .then((result) => result.data)
      .catch((error) => {
        throw error.response
      })
  })
}

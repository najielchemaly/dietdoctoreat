import API from '../..'
import FREE_MEAL_PLANS_QUERY from '../../../queries/freemealplans.query.json'

export default function APIGetFreeMealPlans() {
  return API(false).then((axios) => {
    return axios
      .post('/v1', FREE_MEAL_PLANS_QUERY)
      .then((result) => result.data)
      .catch((error) => {
        throw error.response
      })
  })
}

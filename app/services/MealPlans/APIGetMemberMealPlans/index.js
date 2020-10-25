import API from '../..'
import MEMBER_MEAL_PLANS_QUERY from '../../../queries/membermealsplans.query.json'

export default function APIGetMemberMealPlans() {
  return API().then((axios) => {
    return axios
      .post('/v1', MEMBER_MEAL_PLANS_QUERY)
      .then((result) => result.data)
      .catch((error) => {
        throw error.response
      })
  })
}

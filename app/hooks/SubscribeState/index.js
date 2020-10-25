import {useState} from 'react'

export default function SubscribeState() {
  const defaultValue = {
    value: '',
    valid: true,
  }

  const [email, setEmail] = useState(defaultValue)

  function clear() {
    setEmail(defaultValue)
  }

  function validate() {
    if (email.value === '') {
      setEmail({...email, valid: email.value !== ''})
      return false
    }
    return true
  }

  return {
    email,
    setEmail,
    validate,
    clear,
  }
}

import {useState} from 'react'

export default function SigninState() {
  const defaultValue = {
    value: '',
    valid: true,
  }

  const [username, setUsername] = useState(defaultValue)
  const [password, setPassword] = useState(defaultValue)

  function clear() {
    setUsername(defaultValue)
    setPassword(defaultValue)
  }

  function validate() {
    if (username.value === '' || password.value === '') {
      setUsername({...username, valid: username.value !== ''})
      setPassword({...password, valid: password.value !== ''})
      return false
    }
    return true
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    validate,
    clear,
  }
}

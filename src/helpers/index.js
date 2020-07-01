import { extend  } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

const loggers = {
  movePage: pagePosition => {
    console.log('CURRENT PAGE: ', pagePosition)
  },
  dropshipperStatus: status => {
    console.log('IS_DROPSHIPPER: ', status)
  }
}

const formattedNumber = number => {
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}

const formRules = () => {
  extend('required', {
    ...required,
    message: 'This field is required'
  })
  extend('email', {
    ...email,
    message: 'Please fill as email'
  })
  extend('phone_number', {
    validate(val) {
      let re = new RegExp(/^[\s()+-]*([0-9][\s()+-]*){6,20}$/)
      if (val.length < 6 || val.length > 20 || !re.test(val)) {
        return false
      }
      return true
    },
    message: 'Please enter your correct phone number'
  })
  extend('address', {
    validate(val) {
      if (val.length < 5 || val.length > 120) {
        return false
      }
      return true
    },
    message: 'Too short address'
  })
}

export {
  loggers,
  formattedNumber,
  formRules
}
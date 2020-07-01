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

export {
  loggers,
  formattedNumber
}
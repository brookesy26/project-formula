const StatusChecker = ({ objState, itemState, trueElements, falseElements }) => {
  return (objState == itemState ? (<>{trueElements}</>) : (<>{falseElements}</>))
}

export default StatusChecker
import { connect } from 'react-redux'
import { changeStateProps } from '../../actions'
import { decrement, increment } from '../../actions/counter'
import TestComponent from './testComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    someUserName: state.main.name,
    isUserEqual: state.main.name === ownProps.testName,
    count: state.counter.count,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeStateProps: (prop, value) => {
      dispatch(changeStateProps(prop, value))
    },
    incrementCount: () => {
      dispatch(increment())
    },
    decrementCount: () => {
      dispatch(decrement())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TestComponent)

import { connect } from 'react-redux'
import { simpleAction } from '../../actions/simpleAction'
import Home from './Home'

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
    btnClickValue: state.home.btnClickValue
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { formSubmitAction } from '../../actions/formSubmitAction'
import AddUserMain from './AddUserMain'

const mapDispatchToProps = dispatch => ({
    formSubmitAction: (values) => dispatch(formSubmitAction(values)),
    resetForm: () => dispatch(reset('addUserForm')),
})

export default connect(null, mapDispatchToProps)(AddUserMain)
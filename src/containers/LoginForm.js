import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {FaExclamationCircle} from 'react-icons/lib/fa'
import {connect} from 'react-redux'
import classNames from 'classnames'

const required = value => (value ? undefined : 'Required')

const renderField = ({input, label, type, className, meta: {touched, error, warning}}) => (
    <div className="form-group">
        <label>{label}</label>
        <div>
            <input {...input} type={type} className={className}/>
            {touched && ((error && <span className="error-hint"><FaExclamationCircle/>{error}</span>) || (warning &&
                <span className="warning-hint">{warning}</span>))}
        </div>
    </div>
)


class LoginForm extends Component {
    render() {
        const {submitting, handleSubmit, user} = this.props
        return (
            <div className={classNames('register_form', {
                'loader': user.isRequest,
            })}>
                { (!user.isHasUser)?
                    <form onSubmit={handleSubmit}>
                        <Field className="form-control form-control-has-validation form-control-last-child" label="Name"
                               type="text" validate={[required]}
                               name="name" component={renderField}/>
                        <Field className="form-control form-control-has-validation form-control-last-child"
                               label="Password"
                               type="password" validate={[required]} name="pass" component={renderField}/>
                        <button className="btn btn-primary btn-block btn-square" type="submit" disabled={submitting}>
                            Sign
                            In
                        </button>
                    </form>
                    :
                    <p>Hello, {user.user.name}</p>
                }
            </div>
        );
    }

    constructor(props, context) {
        super(props, context);
    }
};

function mapStateToProps(state) {
    return {
        user: state.user,
        form: state.form
    }
}

LoginForm = connect(mapStateToProps)(LoginForm);

export default reduxForm({
    form: 'syncValidation', // a unique identifier for this form
})(LoginForm)
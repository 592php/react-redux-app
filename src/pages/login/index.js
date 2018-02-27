import React from 'react'
import './index.css'
import logo from '../../assets/images/logo.svg'
import { connect } from 'react-redux'
import { DECREMENT_REQUESTED, INCREMENT_REQUESTED } from '../../store/modules/login'
const Login = props => {
  // console.log(props, 'props')
  let increment = () => {
    props.dispatch({ type: INCREMENT_REQUESTED })
  }
  let decrement = () => {
    props.dispatch({ type: DECREMENT_REQUESTED })
  }
  return (
    <div className='login'>
      <div className='title' />
      <div className='coordinates-icon'>
        <div className='coordinates topAct'>
          <img src={logo} alt='logo' />
        </div>
        <div className='circle-1-1 circle-show-2' />
        <div className='circle-2-2 circle-show-1' />
        <div className='circle-3-3 circle-show' />
      </div>
      <div className='login-form'>
        <form action='#'>
          <div className='user-pasw common-div'>
            <span className='pasw-icon common-icon'>
              <i className='iconfont  icon-home' />
            </span>
            <input type='text' name='password' placeholder='' defaultValue={props.login.count}   value={props.login.count}/>
          </div>
          <div className='user-pasw common-div'>
          <span className='pasw-icon common-icon'>
            <i className='iconfont  icon-miyao' />
          </span>
          <input type='password' name='password' placeholder='accesstoken'  defaultValue={props.login.count}   value={props.login.count} />
        </div>
          <div className='login-btn' onClick={increment} >
          increment
          </div>
          <div className='login-btn' onClick={decrement}>
          decrement
         </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(
  mapStateToProps
)(Login)

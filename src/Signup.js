import React from "react";
import './App.css';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const validPhoneRegex = RegExp(
    /^(\+91-|\+91|0)?\d{10}$/
  );

  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
  
  export default class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fullName: null,
        email: null,
        phone: null,
        address: null,
        city: null,
        errors: {
          fullName: '',
          email: '',
          phone: '',
          address: '',
          city: ''
        }
      };
    }
  
    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
  
      switch (name) {
        case 'fullName': 
          errors.fullName = 
            value.length < 3
              ? 'Full Name must be at least 3 characters long!'
              : '';
          break;
        case 'email': 
          errors.email = 
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;
          case 'phone': 
          errors.phone = 
          validPhoneRegex.test(value)
              ? ''
              : 'Phone no. is not valid!';
          break;
          case 'address': 
          errors.address = 
          value.length < 3
              ? 'Address name must be atleast 3 characters long!'
              : '';
          break;
          case 'city': 
          errors.city = 
          value.length < 3
              ? 'City name must be 3 atleast characters long!'
              : '';
          break;
        default:
          break;
      }
  
      this.setState({errors, [name]: value});
    }
  
     handleSubmit = (event) => {
      event.preventDefault();
      if(validateForm(this.state.errors)) {
        event.target.reset();
        console.log(this.state);
      }else{
        console.error('Invalid Form')
      }
    }
  
    render() {
      const {errors} = this.state;
      return (
        <div className='container'>
          <div className='form-wrapper'>
            <h2>Aelum Consulting</h2>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className='form-item'>
                <label htmlFor="fullName">Full Name</label>
                <input type='text' id="v1" name='fullName' onChange={this.handleChange} noValidate />
                {errors.fullName.length > 0 && 
                  <span className='error'>{errors.fullName}</span>}
              </div>
              <div className='form-item'>
                <label htmlFor="email">Email</label>
                <input type='email' id="v1" name='email' onChange={this.handleChange} noValidate />
                {errors.email.length > 0 && 
                  <span className='error'>{errors.email}</span>}
              </div>
              <div className='form-item'>
                <label htmlFor="phone">Mobile No.</label>
                <i className="flag flag-india"></i>
                <input type='tel' id="v1" name='phone' onChange={this.handleChange} noValidate />
                {errors.phone.length > 0 && 
                  <span className='error'>{errors.phone}</span>}
              </div>
              <div className='form-item'>
                <label htmlFor="dob">D.O.B</label>
                <input type='date' id="v1" name='dob' required />
              </div>
              <div className='form-item'>
                <label htmlFor="address">Address</label>
                <input type='text' id="v1" name='address' onChange={this.handleChange} noValidate />
                {errors.address.length > 0 && 
                  <span className='error'>{errors.address}</span>}
              </div>
              <div className='form-item'>
                <label htmlFor="city">City</label>
                <input type='text' id="v1" name='city' onChange={this.handleChange} noValidate />
                {errors.city.length > 0 && 
                  <span className='error'>{errors.city}</span>}
              </div>
              <div className='submit'>
                <button className="button" type="submit">Submit</button>
                <button className="button" type="reset">Reset</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
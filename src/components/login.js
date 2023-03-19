import React, { Component } from 'react'
import PropTypes from 'prop-types'

function login(props) {
  return (
    <div>
                <section class="vh-100 gradient-custom">
                    <div class="container py-5 h-100 ">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div class="card bg-dark text-white rounded-4">
                                    <div class="card-body p-5 text-center">
                                        <div class="mb-md-5 mt-md-4 pb-5">
                                            <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                            <p class="text-white-50 mb-5">Please enter your Name</p>
                                            <div class="form-outline form-white mb-4">
                                                <label class="form-label">Username</label>
                                                <input type="text" id="user" class="form-control form-control-lg" />
                                            </div>
                                            <button class="btn btn-outline-light btn-lg px-5" onClick={()=>{props.onLogin()}}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
  )
}

login.propTypes = {}

export default login

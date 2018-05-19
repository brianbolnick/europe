import React, { Component } from 'react'

const Checkbox = ({ checked, onChange }) => (
    <label className='check-container' >
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark"></span>
    </label>
)

export default Checkbox;


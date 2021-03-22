import React, { Fragment } from 'react'
import './Form.css'

export default function Form(props) {
  return (
    <Fragment>
      <form className="Form" method="POST" action="">
        <table>
          <thead key="thead"></thead>
          <tbody key="tbody">
            {props.labels.map(el => {
              let inputType;
              if (el === "password") {
                inputType = "password"
              } else if (el === "experience" || el === "level") {
                inputType = "number"
              } else {
                inputType = "text"
              }
              return (
                <tr key={el}>
                  <td>
                    <label htmlFor={el}>{el.charAt(0).toUpperCase() + el.slice(1)}</label>
                  </td>
                  <td>
                    <input type={inputType} name={el} placeholder={el} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button className="btn-info" type="submit">Submit</button>
      </form>
    </Fragment>
  )
}

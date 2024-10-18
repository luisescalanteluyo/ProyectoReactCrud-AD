import React from 'react'

const BUTTONS = {
  primary: {
    color: 'white',
    backgroundColor: 'blue',
  },
  default: {
    color: 'black',
    backgroundColor: 'white',
  },
  danger: {
    color: 'white',
    backgroundColor: 'red',
  },
}

//const Button = ({ onClick, children, type }) => <button type={type} onClick={onClick}>{children}</button>;


const Button = (props: any) => (
  <button
  //type="button"
   // style={{ ...BUTTONS["primary"] }}
    className="button primary"
    onClick={props.onClick}
  >{props.text}</button>
)

export default Button
/*
export default function ButtonSubmit(props: any) {
    return (
      <button
        // type="submit"
        //onClick={props.buttonClick}
        style={{ ...BUTTONS[type] }}
        onClick={() => props.buttonClick ? onClick(children) : console.info(children)}
        className="bg-cyan-400 hover:bg-cyan-700 px-8 py-2 text-white rounded-lg ease-linear duration-300 w-full"
      >
        Submit
      </button>
    )
  }*/
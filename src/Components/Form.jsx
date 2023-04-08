import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [form, setForm] = useState({
    fullName: "",
    email: ""
  })

  const { fullName, email } = form

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const onChangeInput = ({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (fullName.trim().length >= 5 && email.trim().includes("@")) {
      setShow(true)
      setErr(false)
      event.target.reset()
    } else {
      setShow(false)
      setErr(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Nombre Completo</label>
          <input type="text" onChange={onChangeInput} name="fullName" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" onChange={onChangeInput} name="email" />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>

      {err ? <p>Por favor verifique su información nuevamente</p> : null}
      {show && <p>Gracias {fullName}, te contactaremos vía email</p>}
    </div>
  )
};

export default Form;

import { useState } from "react"
import Confirmation from "../Confirmation/Confirmation"
import "./Form.scss"

const initialFormData = {
  firstName: "",
  lastName: "",
  companyName: "",
  companyEmail: "",
  address: "",
  postcode: "",
}

const Form = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [validated, setValidated] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    for (const field in formData) {
      if (formData[field] === "") {
        setValidated(false)
        return
      }
    }

    await fetch(
      "https://stone2stone-e7618-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: formData,
        }),
      }
    )
    setFormSubmitted(true)
    setValidated(true)
  }

  return (
    <div className="form">
      {formSubmitted ? (
        <Confirmation />
      ) : (
        <>
          <div className="form__heading-container">
            <p className="form__heading">Register here</p>
          </div>
          <form className="form__form" onSubmit={handleSubmit}>
            {validated === false ? (
              <p className="form__invalid">Please fill out all fields</p>
            ) : null}
            <div className="form__section form__section--name">
              <div className="form__field">
                <label className="form__label" htmlFor="firstName">
                  first name
                </label>
                <input
                  id="firstName"
                  className="form__input"
                  type="text"
                  onChange={event =>
                    setFormData(prevState => ({
                      ...prevState,
                      [event.target.id]: event.target.value,
                    }))
                  }
                />
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="lastName">
                  last name
                </label>
                <input
                  id="lastName"
                  className="form__input"
                  type="text"
                  onChange={event =>
                    setFormData(prevState => ({
                      ...prevState,
                      [event.target.id]: event.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <label className="form__label" htmlFor="companyName">
              company name
            </label>
            <input
              id="companyName"
              className="form__input"
              type="text"
              onChange={event =>
                setFormData(prevState => ({
                  ...prevState,
                  [event.target.id]: event.target.value,
                }))
              }
            />

            <label className="form__label" htmlFor="companyEmail">
              company email address
            </label>
            <input
              id="companyEmail"
              className="form__input"
              type="text"
              onChange={event =>
                setFormData(prevState => ({
                  ...prevState,
                  [event.target.id]: event.target.value,
                }))
              }
            />

            <div className="form__section form__section--address">
              <div className="form__field">
                <label className="form__label" htmlFor="address">
                  address
                </label>
                <input
                  id="address"
                  className="form__input"
                  type="text"
                  onChange={event =>
                    setFormData(prevState => ({
                      ...prevState,
                      [event.target.id]: event.target.value,
                    }))
                  }
                />
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="postcode">
                  postcode
                </label>
                <input
                  id="postcode"
                  className="form__input"
                  type="text"
                  onChange={event =>
                    setFormData(prevState => ({
                      ...prevState,
                      [event.target.id]: event.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <button className="form__button">register</button>
          </form>
        </>
      )}
    </div>
  )
}
export default Form

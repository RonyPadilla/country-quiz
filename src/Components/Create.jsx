import { useState } from "react";
import "../Style/create.css";

export const Create = () => {
  const [formData, setFormData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    urlForImg: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "text") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="create">
        <h2 className="h2-create-title">¡Create you question!</h2>
        <div className="create-div">
          <form onSubmit={handleSubmit} className="form-data">
            <div className="form-send-data">
              <div className="form-input-label-div">
                <label htmlFor="question">question</label>
                <input
                  type="text"
                  className="form-input-create"
                  name="question"
                  placeholder=""
                  value={formData.inputValue}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-send-data">
              <div className="form-input-label-div">
                <label htmlFor="option1">option 1</label>
                <input
                  type="text"
                  className="form-input-create"
                  name="option1"
                  placeholder=""
                  value={formData.inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="checkbox"
                className="form-checkbox"
                name="checkbox1"
                checked={formData.checkboxValue}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-send-data">
              <div className="form-input-label-div">
                <label htmlFor="option2">option 2</label>
                <input
                  type="text"
                  className="form-input-create"
                  name="option2"
                  placeholder=""
                  value={formData.inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="checkbox"
                className="form-checkbox"
                name="checkbox2"
                checked={formData.checkboxValue}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-send-data">
              <div className="form-input-label-div">
                <label htmlFor="option3">option 3</label>
                <input
                  type="text"
                  className="form-input-create"
                  name="option3"
                  placeholder=""
                  value={formData.inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="checkbox"
                className="form-checkbox"
                name="checkbox3"
                checked={formData.checkboxValue}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-send-data">
              <div className="form-input-label-div">
                <label htmlFor="option4">option 4</label>
                <input
                  type="text"
                  className="form-input-create"
                  name="option4"
                  placeholder=""
                  value={formData.inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="checkbox"
                className="form-checkbox"
                name="checkbox4"
                checked={formData.checkboxValue}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-send-data">
              <div className="form-input-label-div">
                <label htmlFor="urlForImg">URL for img</label>
                <input
                  type="text"
                  className="form-input-create"
                  name="urlForImg"
                  placeholder=""
                  value={formData.inputValue}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-send-data">
              <button className="button-form-submit" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

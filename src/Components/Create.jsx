import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../Style/create.css";

export const Create = ({ newQuestion, onNextClick }) => {
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

  const [request, setRequest] = useState([]);
  const [count, setCount] = useState(1)

  const clearForm = () => {
    setFormData({
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
  };
  

  const handleInputChange = (e) => {
    console.log(request.length)
    if (request.length < 5) {
      const { name, value, type, checked } = e.target;

      setFormData((prevDatos) => ({
        ...prevDatos,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    if (request.length < 5) {
      setCount(count+1)
      const newObject = {
          id: count,
          question: formData.question,
          option: [
            ["A", formData.option1, formData.checkbox1],
            ["B", formData.option2, formData.checkbox2],
            ["C", formData.option3, formData.checkbox3],
            ["D", formData.option4, formData.checkbox4],
          ],
          url: formData.urlForImg,
      }
    setRequest((prevArray) => [...prevArray, newObject]);
    }
    
  };

  useEffect(() => {
    console.log("this is the requests");
    console.log(request);
  }, [request]);

  const sendData = () => {
    newQuestion(request)
    onNextClick([true,true])
  }

  return (
    <>
      <section className="create">
        <div className="div-first-info">
          <h2 className="h2-create-title">¡Create you question!</h2>
          <div className="div-count-create">
            <h1>
              <strong className="strong-count-create">
                {request.length}/5
              </strong>
            </h1>
          </div>
        </div>

        <div className="create-div">
          <form autoComplete="off" onSubmit={handleSubmit} className="form-data">
            <div className="form-send-data">
              <div className="form-input-label-div">
                <label className="form-label" htmlFor="question">
                  Question
                </label>
                <textarea
                  name="question"
                  type="textarea"
                  className="form-textarea-create"
                  placeholder="Write your question"
                  value={formData.question}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="div-for-option">
              <div className="form-send-data">
                <div className="form-input-label-div">
                  <label className="form-label" htmlFor="option1">
                    Option 1
                  </label>
                  <input
                    type="text"
                    className="form-input-option-create"
                    name="option1"
                    autoComplete="off"
                    placeholder="Write the option"
                    value={formData.option1}
                    onChange={handleInputChange}
                  />
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="checkbox1"
                  checked={formData.checkbox1}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-send-data">
                <div className="form-input-label-div">
                  <label className="form-label" htmlFor="option2">
                    Option 2
                  </label>
                  <input
                    type="text"
                    className="form-input-option-create"
                    name="option2"
                    autoComplete="off"
                    placeholder="Write the option"
                    value={formData.option2}
                    onChange={handleInputChange}
                  />
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="checkbox2"
                  checked={formData.checkbox2}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-send-data">
                <div className="form-input-label-div">
                  <label className="form-label" htmlFor="option3">
                    Option 3
                  </label>
                  <input
                    type="text"
                    className="form-input-option-create"
                    name="option3"
                    autoComplete="off"
                    placeholder="Write the option"
                    value={formData.option3}
                    onChange={handleInputChange}
                  />
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="checkbox3"
                  checked={formData.checkbox3}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-send-data">
                <div className="form-input-label-div">
                  <label className="form-label" htmlFor="option4">
                    Option 4
                  </label>
                  <input
                    type="text"
                    className="form-input-option-create"
                    name="option4"
                    autoComplete="off"
                    placeholder="Write the option"
                    value={formData.option4}
                    onChange={handleInputChange}
                  />
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="checkbox4"
                  checked={formData.checkbox4}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-send-data">
              <div className="form-input-label-div">
                <label className="form-label" htmlFor="urlForImg">
                  URL for img
                </label>
                <input
                  type="text"
                  className="form-input-create"
                  name="urlForImg"
                  autoComplete="off"
                  placeholder="Write the url of the img"
                  value={formData.urlForImg}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-send-data">
              {request.length < 5? <button 
              className="button-form-submit" type="submit">
                Send
              </button>:<button className="button-form-submit" onClick={sendData}>
              Start
              </button>}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

Create.propTypes ={
  newQuestion: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired
}

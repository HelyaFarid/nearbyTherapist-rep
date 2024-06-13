import "./style.css";
import { FormGroup, Input, Button } from "reactstrap";
import AvatarCard from "../AvatarCard";
import React, { useState, useContext } from "react";
import { SearchContext } from "../App";
import { useNavigate } from "react-router-dom";

const Form = ({ addToQuery }) => {
  let navigate = useNavigate();

  const searchContext = useContext(SearchContext);
  const [formData, setFormData] = useState({ type: "", suburb: "" });

  const handleChange = (evt) => {
    console.log("handleChange - event", evt.target.name, evt.target.value);
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value
    }));
  };

  function HandleSubmit(evt) {
    evt.preventDefault();
    console.log("onsubmit-", formData);
    searchContext.addToQuery(formData);
    setFormData({
      type: "",
      suburb: ""
    });
    navigate("/Search", { replace: true });
  }

  return (
    <div className="hero">
      <div className="hero-form">
        <FormGroup className="search-wrapper">
          <section className="search-box">
            <Input
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Type of Therapy"
              type="search"
            />
            <Input
              name="suburb"
              value={formData.suburb}
              onChange={handleChange}
              placeholder="Suburb or Postcode"
              type="search"
            />
            <div className="btn">
              <Button color="secondary" outline onClick={HandleSubmit}>
                Search
              </Button>
            </div>
          </section>
        </FormGroup>
      </div>
      <div className="hero-feed">
        <AvatarCard />
      </div>
    </div>
  );
};
export default Form;

import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemonPls}) {
  const [formValue, setFormValue] = useState({
    name:"",
    hp:"",
    frontUrl:"",
    backUrl:""
  })

  function onChange(event){
    setFormValue({...formValue, 
      [event.target.name]: event.target.value})
  }

  function handleSubmit(){
    const newPokemon={
      name: formValue.name,
      hp: formValue.hp,
      sprites: {
      front: formValue.frontUrl,
      back: formValue.backUrl
      }
    }


    fetch('http://localhost:3001/pokemon', {
      method: "POST", 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(addPokemonPls)
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={onChange} fluid value={formValue.name} label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={onChange} fluid value={formValue.hp} label="hp" placeholder="hp" name="hp" />
          <Form.Input
          onChange={onChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formValue.frontUrl}
          />
          <Form.Input
          onChange={onChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formValue.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

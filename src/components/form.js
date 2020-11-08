import React from 'react';

const FormComponent = (props) => {
    var inputText = '';

    const updateText = (e) => {
        inputText = e.target.value;
        props.updateText(inputText);
    }

    const submit = (e) => {
        console.log("Submitting with text: " + props.inputText);
        props.setTasks([...props.tasks], {text: e.target.value, completed: false, id: Math.random() * 1000 });
    }

    return (
        <div>
            <div>
                <input type="test" placeholder={props.placeholder} onChange={updateText}></input>
            </div>
            <div>
                <button type="submit" onClick={submit} > Add </button>
            </div>
        </div>

    );
}





export default FormComponent;
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionFormInput from './QuestionFormInput.js';


class CreateForm extends Component{
  constructor(props) {
        super(props);
        this.state = {
          label:'',
          desc: '',
          form_name: "",
          inputs: ['input0'],
          survey_questions:[]
        };

    }

  handleChange(e){
    e.preventDefault();
    this.setState({
      form_name: e.target.value
    })
  }

  handleFormName(e){
    e.preventDefault();
    console.log(e.target.value)
  }

  handleFormDesc(e){
    e.preventDefault();
    console.log(e.target.value)
  }

  formData(){

    const nam = ReactDOM.findDOMNode(this.refs.name0)
    const lab = ReactDOM.findDOMNode(this.refs.label0)
    let question = { nam : lab }
    console.log(question)
    this.setState({
      survey_questions: this.state.survey_questions.concat([question])
    })
  }

  alertRef(e){
    e.preventDefault();
    alert(ReactDOM.findDOMNode(this.refs.label0).value)
    alert(ReactDOM.findDOMNode(this.refs.name0).value)
  }

render() {
        return(
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-8 form">
                 <form>

                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <input className="form-control" type="text" name="form_name" placeholder="Enter form name" onChange={(e)=>this.handleChange(e)}/>
                      <br />
                    </div>
                  </div>
                </div>

                   {this.state.inputs.map( (input, num) => <QuestionFormInput
                                                            key={input}
                                                            num={num}
                                                            name={this.handleFormName.bind(this)}
                                                            desc={this.handleFormDesc.bind(this)}
                                                            />)}
                  <br />

                 <button type="button" className="btn btn-primary" onClick={ () => this.appendInput() }>
                     CLICK ME TO ADD QUESTION
                 </button>
                 <button type="button" className="btn btn-success" onClick={(e)=>this.alertRef(e)}>
                    Submit
                 </button>
                 </form>
                </div>
              </div>
            </div>
        );
    }

    appendInput() {
        var newInput = `input${this.state.inputs.length}`;
        this.setState({ inputs: this.state.inputs.concat([newInput]) });
    }


}

export default CreateForm;

import React, { Component } from 'react'

class QuestionFormInput extends Component {


  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="col-xs-4">
             <input type="text" className="form-control" placeholder="Question Name" ref={"name" + this.props.num}
              onChange={(e)=>this.props.name(e)}
             />

            </div>
            <div className="col-xs-8">
             <input type="text" className="form-control" placeholder="Question Description" ref={"label" + this.props.num}
              onChange={(e)=>this.props.desc(e)}
             />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionFormInput

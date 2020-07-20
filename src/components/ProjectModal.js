import React from 'react';
class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
    console.log('ProjectModal constructor');
    this.vistPage = this.vistPage.bind(this);
  }
  vistPage(event) {
    event.preventDefault();
    let clicked = this.state ? this.state.clicked : 0;
    this.setState({
      clicked: clicked+1
    });
  }
  componentWillMount() {
    console.log('ProjectModal componentWillMount');
  }
  componentDidMount() {
    console.log('ProjectModal componentDidMount');
  }
  componentWillUpdate() {
    console.log('ProjectModal componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('ProjectModal componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('ProjectModal componentWillUnmount');
  }
  componentWillReceiveProps() {
    console.log('ProjectModal componentWillReceiveProps');
  }
  componentDidCatch() {
    console.log('ProjectModal componentDidCatch');
  }
  render() {
    console.log('ProjectModal render');
    let props = this.props;
    return (
      <>
        <div id="portfolioItem1" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal" href="/" onClick={(event) => {event.preventDefault()}}><span className="glyphicon glyphicon-remove"></span></a>
                <img className="img-res" src={props.img} alt="" />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">{props.title}</h4>
                <p>{props.description}</p>
              </div>
              <div className="modal-footer">
                <a href={props.url} className="btn btn-fill" onClick={this.vistPage}>Visit Page ({this.state && this.state.clicked})</a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProjectModal;

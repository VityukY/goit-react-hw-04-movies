import { Component } from 'react';

class SearchForm extends Component {
   state = {
      query: '',
   };

   changeHandler = e => {
      this.setState({ query: e.currentTarget.value });
   };

   submitHandler = async e => {
      e.preventDefault();

      this.props.submitFormHandler(this.state.query);
      this.setState({ query: '' });
   };

   render() {
      return (
         <>
            <h1> Your choise</h1>
            <form onSubmit={this.submitHandler}>
               <input value={this.state.query} onChange={this.changeHandler} />
               <button type="submit"> Search </button>
            </form>
         </>
      );
   }
}

export default SearchForm;

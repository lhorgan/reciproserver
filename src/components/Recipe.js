import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'

const recipes = [{
  
}];

class Recipe extends Component {
  constructor(props) {
    super(props);
    
    this.setRecipe = this.setRecipe.bind(this);
  }
  
  setRecipe(recipe) {
    this.setState({recipe: recipe});
  }
  
  render() {
    return (<div>
      This is a recipe!
    </div>)
  }
}

export default Recipe;
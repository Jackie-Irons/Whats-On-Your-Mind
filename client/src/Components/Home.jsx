import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component{
		
		render() {
			return(
				  <div>
        <div>
          <h1>What On Your Mind?</h1>
          <input type="text" name="user" />
          <button>New Game</button>
        </div>
    </div>
				);
		}
	}

export default Home;
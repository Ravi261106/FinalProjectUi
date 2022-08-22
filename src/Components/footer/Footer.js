import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import '../../Styles/footer.css';

export default class Footer extends PureComponent {
  render() {
    return (
      <div><div class="card text-center">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Social Links</h5>
        <div class='socialmed'>
        <a href="https://twitter.com/zomato?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className='socialmed1'>Twitter</a><a href="https://www.youtube.com/c/zomato/featured" className='socialmed1'>Youtube</a><a href="https://www.linkedin.com/company/zomato/?originalSubdomain=in" className='socialmed1'>linkedIn</a><a href="https://www.instagram.com/zomato/?hl=en" className='socialmed1'>Instagram</a>
        </div>
        
      </div> 
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div></div>
    )
  }
}




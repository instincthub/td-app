import React from "react";
import ReactTable from "react-table";  
// import "react-table/react-table.css";  
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Form from "../components/DiversityForm";

import { fetAPI, spinBtn, handleError, setCookie, getCookie, HOST_URL } from "../components/static/assets/js/help_func";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/register.css";
import "../components/static/assets/scss/custom-select.css";

class RegTracker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      status: null,
      error: null,
      token: getCookie('access')
    };
  }

  componentDidMount(){
    const requestOptions = {
        method: 'GET',
        'X-CSRFToken': getCookie('csrftoken'),
        'headers': {
          "Authorization": "Token " + getCookie('access')
        }
      };
  
  
        fetAPI(this, HOST_URL+"/assessment/reg_tracker/", requestOptions)


  }
  
  
  render(){ 
    const columns = [
        {  
            Header: 'Name',  
            accessor: 'name'  
        },
        {  
            Header: 'Phone',  
            accessor: 'phone'  
        },
        {  
            Header: 'Details',  
            accessor: 'details'  
        },
        {  
            Header: 'Quiz',  
            accessor: 'quiz'  
        }
    ] 
    return (
        <div>  
        <ReactTable  
            data={this.state.data}  
            columns={columns}  
            defaultPageSize = {2}  
            pageSizeOptions = {[2,4, 6]}  
        />  
    </div>    
    );
  }
}

export default RegTracker;

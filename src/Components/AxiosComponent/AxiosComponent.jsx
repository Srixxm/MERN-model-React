import axios from 'axios'
import React, { Component } from 'react'

class AxiosComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            datapost:[]
        }
    }

    componentDidMount(){
        axios.get('https://date.nager.at/api/v3/PublicHolidays/2023/AT')
        .then(response => {
            this.setState({datapost: response.data})
            console.log(response.data.localName)

        })
        .catch(error => {
          console.log(error)
        })
    }
  render() { 
    const {datapost}= this.state
    return (
      <React.Fragment>
        <div>{datapost.length ?
         datapost.map(a => <div key ={a.date}>{a.localName}</div>)
         :
         null
         }
            </div>
      </React.Fragment>
    )
}
}
export default AxiosComponent 
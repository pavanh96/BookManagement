import React, {Component} from 'react';
import{loadBooks}from './booksAction';
import{connect} from 'react-redux';



class BooksDashboard extends Component {
    componentDidMount(){
this.props.dispatch(loadBooks());
    }
    render(){
        console.log(this.props);
        return(
            <div>From book dashboard
               
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        books:state.books.book
    }
}
export default connect(mapStateToProps) (BooksDashboard);
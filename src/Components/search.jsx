import React, { Component ,Fragment} from 'react'
import "./Search.css";
class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            term:"",
        }
        this.fullstak=React.createRef();
        this.handleChnage=this.handleChnage.bind(this);
        this.handleSumbmit=this.handleSumbmit.bind(this);

    }
    componentDidMount(){
        console.log(this.fullstak.current)
    }
  handleChnage(e){
      this.setState({
        term: e.target.value
      })
  }
  handleSumbmit(e){
      e.preventDefault();
      this.props.submit(this.state.term);
  }
    render() {
        // console.log(this.props.submit);
        return (
            <Fragment>
                <section>
                   <div className="searchSection">
                    <div className="serchBody">
                        <form onSubmit={this.handleSumbmit} >
                        <div>
                            <input type="text" 
                            ref={this.fullstak}
                            name="imageName" 
                            id="search" 
                            placeholder="Search Images"
                            value={this.state.term}
                            onChange={this.handleChnage}
                             />
                            <button className="btn btn-dark ">Search</button>
                        </div>
                        </form>
                    </div> 
                   </div>
                </section>
            </Fragment>
        )
    }
}
export default Search;
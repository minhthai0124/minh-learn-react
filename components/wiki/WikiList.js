import React            from 'react';
import jsonpFallback    from 'jsonp-fallback';
import { Card ,CardBlock, Container,Form,FormGroup,CardTitle, CardText, InputGroup,
   Input, FormFeedback, Row, Col} from 'reactstrap';
import FontAwesome  from 'react-fontawesome';

function Search (props){
    if(props.isSearch){
        return (
            <Form >
                <FormGroup>
                    <h1>Search</h1>
                    <InputGroup>
                        <Input type="search" value={props.value} 
                        onChange={props.handleChange}  placeholder="Search... " />
                    </InputGroup>
                </FormGroup>
            </Form>
        );
    } else {
        return (
            <Form >
                <FormGroup >
                    <h1>Search</h1>
                    <InputGroup>
                        <Input type="search" value={props.value} 
                        onChange={props.handleChange}  placeholder="Search ... " />
                    </InputGroup><FormFeedback>Not found {props.value}!</FormFeedback>
                </FormGroup>
            </Form>
        );
    }
}
function Show (props){
    var wiki = props.wiki ;
        return (
            <Card>
                <CardBlock>
                    <CardTitle>{wiki.title}</CardTitle>
                    <CardText>{wiki.extract}</CardText>
                </CardBlock>
            </Card>
        )
}
class WikiList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: {},
            value: '',
            isSearch: false
        };
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        jsonpFallback('https://en.wikipedia.org/w/api.php', {
            format: 'json' ,
            action: 'query',
            generator: 'search',
            gsrnamespace: 0,
            gsrlimit: 10,
            prop: 'pageimages|extracts',
            pilimit: 'max',
            exintro: '',
            explaintext: '',
            exsentences: 1,
            exlimit: 'max',
            gsrsearch: this.state.value
        })
        .then(data => {
            this.setState({
                list: data.query.pages
        });
        if(this.state.value.length == 0 || this.state.value === '' ){
            this.setState({
                list: {},
                isSearch: false
            });
        }})
        .catch(err => {
            console.log(err);
            this.setState({
                list: {},
                isSearch: false
            });
        });
        this.setState({
        value: e.target.value,
        isSearch: true
        }, () => {
            console.log(this.state.value);
        });
        console.log(this.state.isSearch);
    }
    render(){
        var list = Object.keys(this.state.list).map(index => (
            <Show wiki={this.state.list[index]} key={this.state.list[index].pageid}/>
        ));
        return (
        <div>
            <Row>
                <Col>
                <Search isSearch={this.state.isSearch} value={this.state.value} 
                handleChange ={this.handleChange}/>
                <div>
                    {list}
                <br/>
                </div>
                </Col>
            </Row>
        </div>
    );
  }
}

export default WikiList


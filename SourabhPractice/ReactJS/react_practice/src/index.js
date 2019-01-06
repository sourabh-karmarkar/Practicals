import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* 1) Basic JSX */
/*
function formatName(user)
{
    return user.firstName+' '+user.lastName;
}

function getGreeting(user){
    if(user)
    {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger!</h1>;
}

const user={
    firstName:'Sourabh',
    lastName:'Karmarkar'
}

const element=getGreeting(user);
*/

/* 2) Babel compiles JSX down to React.createElement() calls.*/
/*
---> The below 2 examples are identical 

const element1=(<div>
    <h1 className="greeting">Hello World</h1>
    </div>);

const element2=React.createElement(
    'h1',
    {className:'greeting'},
    'Hello World'
);
*/

/* 3) Ticking Clock Example */
/*
function tick(){
    const element3=(
        <div>
            <h1>Hello Sourabh</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element3, document.getElementById('root'));
}
setInterval(tick,1000);
*/

/* 4) User Defined Components And passing properties */
/*
function Welcome(props){
    return <h1>Hello {props.name}<br/>Age Is : {props.age}</h1>;
}

const element4=<Welcome age="29" name="Sara"/>
*/

/* 5) Composing Components */
/*
function Welcome(props){
    return <h1>Hello {props.name}<br/>Age Is : {props.age}</h1>;
}

function App(){
    return (
        <div>
            <Welcome name="Sourabh" age="21"/>
            <Welcome name="Amit" age="24"/>
            <Welcome name="Neha" age="27"/>
        </div>
    );
}
*/

/* 6) Extracting Components */
/*
function Comment(props){
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props){
    return(
        <img className="Avatar"
            src="http://picsum.photos/300/400?random"
            alt={props.user}
        />
    );
}

function UserInfo(props)
{
    return(
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user}
            </div>
        </div>
    );
}

function formatDate(date)
{
    return date.toLocaleDateString()
}

ReactDOM.render(<Comment author="Sourabh Karmarkar" text="Hi How Are You" date={new Date()}/>, document.getElementById('root'));
*/

/* 7) State And Lifecycle */
/*
class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={date:new Date()};
    }

    componentDidMount()
    {
        this.timerID=setInterval(()=>this.tick(),1000);
    }

    componentWillMount()
    {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date:new Date()});
    }

    render(){
        return(
            <div>
                <h1>Hello Sourabh</h1>
                <h2>Time : {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

//To show that all components are truly isolated, we create an App component that renders three Clocks
function App(){
    return(
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById('root'));
*/

/* 8) Handling Events  */
/*
class Toggle extends React.Component
{
    constructor(props){
        super(props);
        this.state={isToggleOn:true};

        //this binding is necessary to make 'this' work in the callback
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state=>
            ({
                isToggleOn:!state.isToggleOn
            })
        );
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
);
*/

/* 9) Condotional Rendering */
/*
function UserGreeting(props){
    return <h1>Welcome Back User</h1>;
}

function GuestGreeting(props){
    return <h1>Please Sign Up</h1>;
}

function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn)
    {
        return <UserGreeting/>;
    }
    else
    {
        return <GuestGreeting/>;
    }
}

ReactDOM.render(
    <Greeting isLoggedIn={true}/>,
    document.getElementById('root')
);
*/

/* 10) Conditional Rendering (Element Variables) */
/*
function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function UserGreeting(props){
    return <h1>Welcome Back User</h1>;
}

function GuestGreeting(props){
    return <h1>Please Sign Up</h1>;
}

function Greeting(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn)
    {
        return <UserGreeting/>;
    }
    else
    {
        return <GuestGreeting/>;
    }
}

class LoginControl extends React.Component
{
    constructor(props){
        super(props);
        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogoutClick=this.handleLogoutClick.bind(this);
        this.state={isLoggedIn:false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn:false});
    }

    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button=<LogoutButton onClick={this.handleLogoutClick}/>;
        }else{
            button=<LoginButton onClick={this.handleLoginClick}/>;
        }

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
);
*/

/* 11) Conditional Rendering (Inline If with Logical && Operator) */
/*
function Mailbox(props)
{
    const unreadMessages=props.unreadMessages;
    return(
        <div>
            <h1>Hello</h1>
            {unreadMessages.length>0 &&
                <h2>
                    You have {unreadMessages.length} unread messages
                </h2>
            }
        </div>
    );
}

const messages=['React','Re:React','Re:Re:React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages}/>,
    document.getElementById('root')
);
*/

/* 12) Preventing Component From Rendering */
/*
function WarningBanner(props){
    if(!props.warn)
        return null;
    return(
        <div className="warning">
            Warning
        </div>
    );
}

class Page extends React.Component
{
    constructor(props){
        super(props);
        this.state={showWarning:true};
        this.handleToggleClick=this.handleToggleClick.bind(this);
    }
    Warning
    handleToggleClick(){
        this.setState(state=>({
            showWarning:!state.showWarning
        }));
    }

    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning?'Hide':'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);
*/

/* 13) Lists And Keys */
/*
function ListItem(props)
{
    return <li>{props.value}</li>
}

function NumberList(props){
    const numbers=props.numbers;
    
    return(
        <ul>
        {numbers.map((no)=>
            <ListItem key={no.toString()} value={no}/>
        )}
        </ul>
    );
}

const number=[1,2,3,4,5,6,7,8,9];

ReactDOM.render(
    <NumberList numbers={number}/>,
    document.getElementById('root')
);
*/

/* 14) Controlled Components */
/*
class NameForm extends React.Component
{
    constructor(props){
        super(props);
        this.state={value:''}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value.toUpperCase()});
    }

    handleSubmit(event){
        alert('A Name Was Submitted: '+this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:<input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm/>,
    document.getElementById('root')
);
*/

/* 15) Controlled Components (TextArea) */
/*
class EssayForm extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            value:"Please write an essay about your favorite DOM element"
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleSubmit(event){
        alert('An Essay Was Submitted: '+this.state.value);
        event.preventDefault();
    }

    render()
    {
        return(
          <form onSubmit={this.handleSubmit}>
            <label>
              Essay:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
    }
}

ReactDOM.render(
    <EssayForm/>,
    document.getElementById('root')
);
*/

/* 16) Controlled Components (Select) */
/*
class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

ReactDOM.render(
    <FlavorForm/>,
    document.getElementById('root')
);
*/

/* 17) Handling Multiple Inputs */
/*
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation/>,
    document.getElementById('root')
);
*/

/* 18) Lifting State Up */
/*
const scaleNames={
    c:"Celsius",
    f:"Fahrenheit"
}

function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}

function toFahrenheit(celsius){
    return (celsius*9/5)+32;
}

function tryConvert(temperature, convert)
{
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props)
{
    if(props.celsius>=100)
    {
        return <p>The Water Would Boil.</p>;
    }
    return <p>The Water Would Not Boil.</p>;
}

class TemperatureInput extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e)
    {
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const temperature=this.props.temperature;
        const scale=this.props.scale;
        return(
            <fieldset>
                <legend>Enter Temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

class Calculator extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleCelsiusChange=this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this);
        this.state={temperature:'',scale:'c'}
    }
    
    handleCelsiusChange(temperature)
    {
        this.setState({scale:'c',temperature});
    }

    handleFahrenheitChange(temperature)
    {
        this.setState({scale:'f',temperature});
    }

    render(){
        const scale=this.state.scale;
        const temperature=this.state.temperature;
        const celsius=scale==='f'?tryConvert(temperature,toCelsius):temperature;
        const fahrenheit=scale==='c'?tryConvert(temperature,toFahrenheit):temperature;
        return(
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);
*/

/* 19) Compostion vs Inheritance 1 */
/*
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
);
*/

/* 19) Compostion vs Inheritance 2 */
/*
function Contacts()
{
    return <div className="Contacts">This is Contacts Section</div>;
}
  
function Chat()
{
    return <div className="Chat">This is Chat Section</div>;
}

function SplitPane(props)
{
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App(){
    return(
        <SplitPane left={<Contacts/>} right={<Chat/>}/>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/

/* 19) Compostion vs Inheritance (Specialization-1) */
/*
function FancyBorder(props)
{
    return(
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props)
{
    return(
        <FancyBorder color="blue">
            <h1 className='Dialog-title'>
                {props.title}
            </h1>
            <p className='Dialog-message'>
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog(){
    return(
        <Dialog title="Welcome" message="Thank You For Visting Our Spacecraft"/>
    );
}

ReactDOM.render(
    <WelcomeDialog/>,
    document.getElementById('root')
);
*/

/* 20) Compostion vs Inheritance (Specialization-2) */
/*
function FancyBorder(props)
{
    return(
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props)
{
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSignUp=this.handleSignUp.bind(this);
        this.state={login:''};
    }

    render(){
        return(
            <Dialog title="Mars Exploration Program" message="How Should We Refer To You?">
                <input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>Sign Me Up</button>
            </Dialog>
        );
    }

    handleChange(e)
    {
        this.setState({login:e.target.value});
    }

    handleSignUp(e)
    {
        alert(`Welcome Abroad, ${this.state.login}`);
    }
}

ReactDOM.render(
    <SignUpDialog/>,
    document.getElementById('root')
);
*/
import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            score : 0,
            count : 10
        }
    }

    static getDerivedStateFromProps(props,state){
        return {
            score:100
        }
    }

    componentDidMount(){
        console.warn('componentDidMount called');
        this.timerID = setInterval(() => this.randomNumber(),3000);
    }

    randomNumber() {
        return this.setState({
            count : this.state.count + 1
        });
    }

    shouldComponentUpdate(nextProps,nextState){
        console.warn('shouldComponentUpdate called');
        return this.state.count != nextState.count;   
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.warn('getSnapshotBeforeUpdate called',this.state.count);
        return this.state.count;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.warn('componentDidUpdate called',snapshot);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        console.warn('render called');
        return (
            <div className = 'app_name'>
                <h1> {this.props.name}</h1>
                <p> Your Assesment score is {this.state.score} %. </p>
                <Home count = {this.state.count}/>
            </div>
        );
    }
}
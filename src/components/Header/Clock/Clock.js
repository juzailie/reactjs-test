import React , { Component } from "react";
import { format } from 'date-fns';
import { map, timer } from 'rxjs';
import './Clock.css';

class Clock extends Component {

    state = {
        dateToday: new Date()
    }

    componentDidMount()
    {
        timer(0, 1000).pipe(map(() => new Date())).subscribe(time => {
                this.setState({dateToday : time});
            });
    }
    render(){
        return (
            <div className="clock">
                <div>Time : {format(this.state.dateToday, 'hh:mm a')}</div>
            </div>
        );
    }
   

}

export default Clock;

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import swal from "sweetalert";
import Sidebar from '../compossant/Slidebar'

// must manually import the stylesheets for each plugin
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/bootstrap/main.css";

export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "evenement du jour", start: new Date() }
    ]
  };

  render() {
    return (
      <div className="d-flex">
        <Sidebar/>
        <div >
        <div className="app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
        </div>
        </div>
      </div>
    );
  }

 

  handleDateClick = arg => {
    swal("Ecrire nouvaux evenement:", {
        content: "input",
      })
      .then((value) => {
       
   
   
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: value,
          start: arg.date,
          allDay: arg.allDay
        })
      });
    })
  };
}

import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import React, { Component } from 'react'
import Swal from 'sweetalert2'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = BigCalendar.momentLocalizer(moment)
class Calendario extends Component {
  constructor() {
    super();
    this.selectEvent = this.selectEvent.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }
  formatDate(date) {
    const dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    console.log(date.getDay())
    return dia[date.getDay()] + ", " + date.getDate() + " de " + months[date.getMonth()] + " " + date.getHours() + ":" + date.getMinutes()
  }
  selectEvent(event) {
    const endDate = this.formatDate(event.endDate)
    const startDate = this.formatDate(event.startDate)
    return (
      Swal.fire({
        html:
          '<div class="container my-4">' +
          '<table class="table">' +
          '<tbody>' +
          '<tr>' +
          '<th scope="row" colspan = "2">' + event.title + '</th>' +
          '</tr>' +
          '<tr>' +
          '<th scope="row">Inicio de reserva</th>' +
          '<td>' + startDate + '</td>' +
          '</tr>' +
          '<tr>' +
          '<th scope="row">Fin de reserva</th>' +
          '<td>' + endDate + '</td>' +
          '</tr>' +
          '</tbody>' +
          '</table>' +
          '</div>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
    );
  };
  render() {
    const events = [
      {
        id: 1,
        title: 'Prueba',
        startDate: new Date('2019/3/7 12:30'),
        endDate: new Date('2019/3/7 14:35'),

      },
      {
        id: 2,
        title: 'Prueba2',
        startDate: new Date('2019/3/7 14:30'),
        endDate: new Date('2019/3/7 16:30'),
      },
      {
        id: 3,
        title: 'Prueba2',
        startDate: new Date('2019/3/7 16:30'),
        endDate: new Date('2019/3/7 18:30'),
      }
    ]
    return (
      <div className="mx-4 my-3">
        <BigCalendar
          selectable
          localizer={localizer}
          events={events}
          startAccessor="startDate"
          endAccessor="endDate"
          onSelectEvent={event => this.selectEvent(event)}
          style={{ height: 550 }}
        />
      </div>
    )
  };
}
export default Calendario;
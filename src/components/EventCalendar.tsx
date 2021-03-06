import { Calendar } from "antd";
import React, { FC } from "react";
import { IEvent } from "../models/IEvent";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = () => {
  return (
    <div>
      <Calendar />
    </div>
  );
};

export default EventCalendar;

import {
  Day,
  ScheduleComponent,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,
  Inject,
  ViewsDirective,
  ViewDirective,
  View,
} from "@syncfusion/ej2-react-schedule";
import React, { useState } from "react";
import { scheduleObj } from "../../commonTypes/schedule";
import { scheduleData } from "../../mocks/data";

export default function Schedule() {
  const [scheduleObjs, setScheduleObj] = useState<scheduleObj>();

  const onDragStart = (arg: any) => {
    arg.navigation.enable = true;
  };

  return (
    <div style={{ padding: 50 }}>
      <ScheduleComponent
        height="650px"
        ref={(schedule: any) => setScheduleObj(schedule)}
        selectedDate={new Date()}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => {
            return <ViewDirective key={item} option={item as View} />;
          })}
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
}

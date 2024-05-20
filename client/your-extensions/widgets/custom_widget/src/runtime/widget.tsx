import { React, type AllWidgetProps } from "jimu-core";
import { type IMConfig } from "..config";

export default function Widget({ props }: AllWidgetProps<IMConfig>) {
  return (
    <div className="widget-demo jimu-widget m-2">
      <p>Simple Widget</p>
      <p>exampleConfigProperty: {props.config.exampleConfigProperty}</p>
      <div className="widget">
        This is your first custom widget with TS!!!!!
      </div>
    </div>
  );
}

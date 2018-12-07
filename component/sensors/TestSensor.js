import React, { Component } from "react";
import { ScrollView } from "react-native";
import SensorView from "./SensorView";

const axis = ["x", "y", "z"];

const availableSensors = {
  accelerometer: axis,
};
const viewComponents = Object.entries(availableSensors).map(([name, values]) =>
  SensorView(name, values)
);

export default class TestSensor extends Component {
  render() {
    return (
      <ScrollView>
        {viewComponents.map((Comp, index) => <Comp key={index} />)}
      </ScrollView>
    );
  }
}
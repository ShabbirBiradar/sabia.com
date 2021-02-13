import { Col, Row } from "antd";
import React from "react";
import {
  HeatChart,
  NodeHeader,
  Piehart,
  Qd5Ahart,
  Qd5hart,
  Qd5BChart,
  QdAChart,
  QdBChart,
  QdCChart,
} from "../../../shared";
import "../style.scss";

export function Dashboard(props) {
  return (
    <div>
      <NodeHeader {...props} />
      <div>
        <Row>
          <Col style={{ width: "48%" }} className="chart-card-container">
            <QdAChart />

            <QdBChart />

            <QdCChart />
          </Col>
          <Col style={{ width: "48%", marginLeft: "2%" }}>
            <Row>
              <Col span={12} className="chart-card-container">
                <HeatChart />
              </Col>
              <Col span={12} className="chart-card-container">
                <Piehart />
              </Col>
            </Row>
            <Col span={24} className="chart-card-container">
              <Row>
                <Col span={24}>
                  <Qd5hart />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Qd5Ahart />
                </Col>
                <Col span={12}>
                  <Qd5BChart />
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        {/* <Piehart /> */}
        {/* <HeatChart /> */}
        {/* <Qd5hart /> */}
        {/* <Qd5Ahart /> */}
        {/* <Qd5BChart /> */}
        {/* <QdAChart /> */}
        {/* <QdBChart /> */}
        {/* <QdCChart /> */}
      </div>
    </div>
  );
}

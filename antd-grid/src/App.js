import "./App.css";
import { useEffect, useState } from "react";
import { Row, Col, Divider } from "antd";
import { debounce, throttle } from "lodash";
import "antd/dist/antd.css";

function App() {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = debounce(() => {
        setWidth(window.innerWidth);
        console.log(window.innerWidth);
    }, 200);
    /*    const handleResize = throttle(() => {
        setWidth(window.innerWidth);
        console.log(window.innerWidth);
    }, 200); */
    /* 
    const handleResize = () => {
        setWidth(window.innerWidth);
    }; */

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="App" style={{ margin: "auto 24px" }}>
            <div style={{ height: "10px" }}></div>
            <Row gutter={8}>
                <Col span={8}>
                    <div style={{ height: "100px", background: "skyblue" }}></div>
                </Col>
                <Col span={12}>
                    <div style={{ height: "100px", background: "coral" }}></div>
                </Col>
                <Col span={4}>
                    <div style={{ height: "100px", background: "lightgray" }}></div>
                </Col>
            </Row>

            <Divider orientation="left">반응형 {width}px</Divider>

            <Row gutter={[8, 16]}>
                <Col xs={24} md={8}>
                    <div style={{ height: "100px", background: "skyblue" }}></div>
                </Col>
                <Col xs={24} md={12}>
                    <div style={{ height: "100px", background: "coral" }}></div>
                </Col>
                <Col xs={24} md={4}>
                    <div style={{ height: "100px", background: "lightgray" }}></div>
                </Col>
            </Row>
        </div>
    );
}

export default App;

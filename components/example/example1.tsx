import {InputGroup,FormControl, Col, Row, Card, Button,Form} from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Example1 = () =>{
    return (
        <>
            <Row>
                <Col>
                    <Card>
                    <Card.Img variant="top" id="selectedImg"
                    src="https://cdn.rawgit.com/konpa/devicon/master/icons/android/android-plain.svg"
                    width="100px" height="100px"/>
                    <Card.Body>
                        <Card.Title>
                            <InputGroup size="sm" className="mb-3">
                                <FormControl aria-label="Small" name="width" placeholder="100"
                                aria-describedby="inputGroup-sizing-sm" readOnly/>
                                X
                                <FormControl aria-label="Small"name="height" placeholder="100"
                                aria-describedby="inputGroup-sizing-sm" readOnly/>
                            </InputGroup>
                            <InputGroup>
                                <p>개발 관련 아이콘 html 이미지 태그를 만들 수 있어요.</p>
                            </InputGroup>
                        </Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
            <Col>
                <Button> HTML 생성</Button>
            </Col>
            <Col>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea"  rows={3} placeholder="클릭하면 복사됩니다."  readOnly/>
                </Form.Group>
                </Form>
            </Col>
            </Row>
        </>
    )
};

export default Example1;
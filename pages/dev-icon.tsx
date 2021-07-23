import Layout from '../components/layout';
import axios from 'axios';
import {InputGroup,FormControl, Col, Row, Card,Form,Button} from 'react-bootstrap';
import React, {useEffect, useState, useCallback, MouseEvent, useRef} from 'react';

interface Icon{
  name: string
  versions: any
  main: string
  src : string
  show: boolean
}

function DevIcon() {

  const [devIcons, setDevIcons] = useState<Icon[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSrc, setSelectedSrc] = useState("");
  const [clipboard, setClipboard] = useState("");
  const [width, setWitdh] = useState(50);
  const [height, setHeight] = useState(50);
  const [size, setSize] = useState({
      width: "50px",
      height: "50px"
    });
    const textarea = useRef();
  
  const addIcons = useCallback(()=>{
    const apiCall = async () => {
      var url = "https://cdn.rawgit.com/konpa/devicon/master/devicon.json";
      var baseUrl = "https://cdn.rawgit.com/konpa/devicon/master/icons/";
      const response = await axios.get(url);
      var icons: Icon[] = [];
      response.data.map((icon:any)  =>{
        var newIcon: Icon = {
          name: icon.name,
          versions: icon.versions.svg,
          main: "",
          src: "",
          show: true
        };
        for (var i = 0, len = icon.versions.font.length; i < len; i++) {
          if (icon.name+icon.versions.font[i] == icon.name+"plain") {
              newIcon.main = icon.name+"-"+icon.versions.font[i];
              break;
            } else if (icon.name+icon.versions.font[i] == icon.name+"line") {
              newIcon.main = icon.name+"-"+icon.versions.font[i];
              break;
            } else if (icon.name+icon.versions.font[i] == icon.name+"original") {
              newIcon.main = icon.name+"-"+icon.versions.font[i];
              break;
            } else if (icon.name+icon.versions.font[i] == icon.name+"plain-wordmark") {
              newIcon.main = icon.name+"-"+icon.versions.font[i];
              break;
            }
        }
        newIcon.src = baseUrl+icon.name+"/"+newIcon.main+".svg";
        icons.push(newIcon);
      });
      setDevIcons(icons);
    };
    apiCall();
    setLoading
  },[]);

  //초기 호출
  useEffect(() => {
    //상태변경
    setLoading(true);
    addIcons();
  },[]);

  const copyToClipboard = () => {
    const el= textarea.current;
    el.select();
    document.execCommand('copy');
    alert('복사 되었습니다.');
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    var searchCtx = e.target.value;
    var icons: Icon[] = [];
    searchCtx = searchCtx.replaceAll("+","plus");

    if(searchCtx.length > 0 ){
      devIcons.map((icon:Icon)  =>{
        if(icon.name.includes(searchCtx)){
          icon.show=true;
        }else{
          icon.show=false;
        }
        icons.push(icon);
      });
    }
    else {
      devIcons.map((icon:Icon)  =>{
          icon.show=true;
        icons.push(icon);
      });
    }
    setDevIcons(icons);
  }
  const handlClick = (e: MouseEvent) =>{
    alert("HTML 파일로 가져옵니다.\n 복사하여 github에 붙여넣으세요.");
    var src = selectedSrc;
    var width= size.width;
    var height= size.height;
    var html="<img src=\""+src+"\" width=\""+width +"\" height=\""+height+"\"/>"
    setClipboard(html);
  }
  const handleImgClick = (e: MouseEvent) => {
    var target:string = e.currentTarget.getAttribute("src") as string;
    setSelectedSrc(target);
  }
  const handleWidth = (e: React.ChangeEvent) => {
    var width = e.target.value;
    var tempSize = size;
    tempSize.width = width+"px";
    setSize(tempSize);
  }
  const handleHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    var height = e.target.value;
    var tempSize = size;
    tempSize.height = height+"px";
    setSize(tempSize);
  }

  return (
    <Layout>
        <section>
        <Row>
          <h2>DevIcons</h2>
          <p>
            프로그래밍 관련 아이콘 집합입니다.
          </p>
          <p>
            아이콘을 검색할 수 있으며, 아이콘 이미지 소스를 복사 할 수 있습니다.
          </p>
        </Row>
        <Row xs="auto">
          <Col>
            <Card>
              <Card.Img variant="top" id="selectedImg"
               src={selectedSrc}
               width={size.width} height={size.height}/>
              <Card.Body>
                <Card.Title>
                  <InputGroup size="sm" className="mb-3">
                    <FormControl aria-label="Small" name="width" placeholder="50"
                    onChange={handleWidth} aria-describedby="inputGroup-sizing-sm" />
                    X
                    <FormControl aria-label="Small"name="height" placeholder="50"
                    onChange={handleHeight} aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Button onClick={handlClick}> HTML 생성</Button>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" ref={textarea} rows={3} onClick={copyToClipboard} value={clipboard} placeholder="클릭하면 복사됩니다." readOnly/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">검색</InputGroup.Text>
            <FormControl aria-label="Small" name="searchCtx" onChange={handleChange} aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        </Row>
        <Row xs={1} md={6} className="g-4">
            {devIcons?.map((icon: any) => 
              icon.show?
                <Col key={icon.name}>
                  <Card>
                    <Card.Img variant="top" src={icon.src} onClick={handleImgClick}/>
                    <Card.Body>
                      <Card.Title>{icon.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              :null
            )}
          </Row>
        </section>
    </Layout>
  );
}
export default DevIcon;

import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router';
import {ListGroup,ListGroupItem,Button,Panel} from 'react-bootstrap';

const Dashboard = ({ 
  name,
  phone,
  email,
  wechat,
  birthday,
  address,
  successMessage,
  profileOpen,
  serviceOpen,
  toggle
  
}) => (
  <Card className="container">
    <CardTitle
      title="用户主页"
      subtitle="这里有您的个人信息和我们提供的服务"
    />
    {successMessage && <p className="success-message">{successMessage}</p>}
    <Button bsSize="lg" onClick={toggle} name="profileButton" style = {{margin:"auto",width:"50%",
			display:"block"}}>
          个人信息
        </Button>
          <ListGroup>
              <ListGroupItem>姓名   : {name}</ListGroupItem>
              <ListGroupItem>电话   : {phone}</ListGroupItem>
              <ListGroupItem>email  : {email}</ListGroupItem>
              <ListGroupItem>微信  : {wechat}</ListGroupItem>
              {birthday && <ListGroupItem>产时  : {birthday}</ListGroupItem>}
              <ListGroupItem>地址  : {address}</ListGroupItem>
          </ListGroup>

        <Button bsSize="lg" onClick={toggle} name="serviceButton" style = {{margin:"auto",width:"50%",
			display:"block"}}>
          申请服务
        </Button>
            <ListGroup style={{color: 'blue' }}>
              <ListGroupItem><Link to={'/medicine'}>医疗接送</Link></ListGroupItem>
              <ListGroupItem><Link to={'/food'}>餐饮订单</Link></ListGroupItem>
              <ListGroupItem><Link to={'/house'}>住房维修</Link></ListGroupItem>
              <ListGroupItem><Link to={'/tour'}>出行接送</Link></ListGroupItem>
              <ListGroupItem><Link to={'/certificate'}>办理证件（未完成）</Link></ListGroupItem>
              <ListGroupItem><Link to={'/nurse'}>找月嫂</Link></ListGroupItem>
            </ListGroup>

      <Button bsSize="lg"><Link to={'/request'} >查看已预定的服务</Link></Button>
  </Card>
);


export default Dashboard;

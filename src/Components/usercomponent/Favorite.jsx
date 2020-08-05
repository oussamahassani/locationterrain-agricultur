import React ,  {useRef} from 'react'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card



export default function Mapfavoriteannonce(props) {

   function hidemovie (e){
     
        
        let a =  e.target;
           a.style.display="none"
		  document.getElementById("cardfavorite").style="display : none"
           e.preventDefault()
        
    }
    return (

    <div className="cardfavorite" id="cardfavorite">
      	<div className="c" id="c">
	   <p  onClick={hidemovie} style={{float:"right"}} >❌</p>
		<div className="panel-heading">
		 <h3 className="text-centre clor">Titel :	{props.favorite.Price} </h3>
		</div>
		<div><img src={props.favorite.image} width="200px" alt="filmimage"></img></div>
		<div className="panel-body">
			<p className="text-centre ">Year: {props.favorite._id}</p>
			<Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>,
		</div>
        
	</div>
	<div></div>
        </div>
    )
}

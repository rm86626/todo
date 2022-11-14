import React, {Component} from 'react';
import axios from 'axios'
import '@/mock/check'
import Style from '@/css/style.css'
//受控组件：表单受到state控制可以随时获得表单项数据

class Reg extends Component {
    constructor() {
        super();
        this.state={
            value:"",
            msg:""
        }
    }
    handdleChange=(event)=>{
        this.setState({
            value:event.target.value
        })
    }
    handdleClick=()=>{
        let {value}=this.state;
        axios.post("check.php",{
            userName:value
        })
            .then(res=>{
                if(res.data.code=="20001"){
                    //显示用户名被占用信息，清空userName
                    this.setState({msg:res.data.msg,userName:""});
                }else{
                    //进行注册业务
                }
            })

    }
    render() {
        let { value ,msg} =this.state;
        return (
            <div>
                <div>欢迎注册</div>
                用户名: <input type="text" defaultValue={value} onChange={this.handdleChange}
                     onFocus={()=>{
                          this.setState({msg:""})
                       }
                     }
                 />
                {/*省略其他表单项。。。。*/}
                <div className={Style.tips}>{msg}</div>
                <button onClick={this.handdleClick}>登录</button>
            </div>
        );
    }
}

export default Reg;
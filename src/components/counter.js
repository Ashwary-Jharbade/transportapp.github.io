import React from 'react'
import axios from 'axios'

import key from '../dummydata'

var globaldata = key["data"]

const getdata = async() =>{
    const config = {
        headers: { Authorization: "Bearer tTU3gFVUdP" }
    };
    
    const bodyParameters = {
       email: "ashwary.jharbade99@gmail.com"
    };
    let data =await axios.post('https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',config,bodyParameters).then((res)=>{
        return res.data
    }).catch(err=>console.log("Unable to make connection"))

    return globaldata
}


const defaultList = () =>{
    let arr=[]
    globaldata.filter((item)=>{
        if(item.current_status_code == "DEL")
        {
            arr.push(item)
        }
    })

    return arr
}

const getCount = () =>{
    let arr={DEL:0,INT:0,OOD:0,DEX:0,NFI:0}
    globaldata.filter((item)=>{
        if(item.current_status_code == "DEL"){
            arr.DEL = arr.DEL+ 1
        }
        else if(item.current_status_code == "INT"){
            arr.INT = arr.INT + 1
        }
        else if(item.current_status_code == "OOD"){
            arr.OOD  =arr.OOD + 1
        }
        else if(item.current_status_code == "DEX"){
            arr.DEX =arr.DEX + 1
        }
        else{
            arr.NFI =arr.NFI + 1
        }
    })
    return arr
}


class Counter extends React.Component{

    constructor(){
        super();
        this.state = {
            overview:globaldata[0].scan,
            list: defaultList(),
            data: globaldata,
            count: getCount()
        }
    }


    getOverview = (overview)=>{
        return overview.map((item)=>(
            <>
               <div  className="d-flex">
                    <div className="d-flex" style={{margin:"14px 0px 0px 0px"}}>
                        <div>
                            <div style={{ height:"14px",width:"14px",backgroundColor:"rgb(219 241 248)",borderRadius:"50%",margin:"10px 0 0 0"}}>
                                
                            </div>
                            <div style={{ height:"10px",width:"10px",backgroundColor:"rgb(63 182 220)",borderRadius:"50%",padding:"5px",margin:"-12px 0 0 2px"}}>
                                
                            </div>
                        </div>
                        <div style={{ width:"50px" }}>
                            <hr/>
                        </div>
                    </div>
                    <div className="d-flex overviewStyler" >
                        <div style={{width:"200px"}}>
                            <small>{item.location}</small>
                        </div>
                        <div>
                            <small>{item.time.split(' ')[0]} &nbsp; {item.time.split(' ')[1]}</small>
                        </div>
                    </div>
               </div>
            </>
        ))
    }

    changeOverview = (event)=>{
        let accesskey = event.target.accessKey
        let arr=[]
        this.state.list.filter((item)=>{
            if(item.awbno == accesskey){
                arr = item.scan
            }
        })
        this.setState({
            overview : arr
        })

    }

    getList = (lis)=>{
        return lis.map((item)=>(
            <>  
                <div style={{ display:"block",height:"10px" }}></div>
                <tr className="" style={{ cursor:"pointer" }}   onClick={this.changeOverview}>
                    <td className="text-center pt-3 pb-3  border-1 applyborderleft" accessKey={item.awbno}>#{item.awbno}</td>
                    <td className="pt-3 pb-3 border-1" accessKey={item.awbno} >{item.carrier}</td>
                    <td className="pt-3 pb-3 border-1" accessKey={item.awbno}>{item.from}</td>
                    <td className="pt-3 pb-3 border-1" accessKey={item.awbno}>{item.to}</td>
                    <td className="text-center pt-3 pb-3 border-1" accessKey={item.awbno}>{item.carrier}</td>
                    <td className="pt-3 pb-3 border-1" accessKey={item.awbno}>{item.pickup_date.split(' ')[0]}</td>
                    <td className="pt-3 pb-3 border-1" accessKey={item.awbno}>{item.extra_fields.expected_delivery_date.split(' ')[0]}</td>
                    <td className="pt-3 pb-3 border-1 applyborderright" style={{ color:"#33ac2e" }} accessKey={item.awbno}>{item.current_status}</td>
                </tr>
            </>
        ))
    }

    changeCounter = (event) =>{
        var x = event.target.accessKey;
        var status = 'DEL'
        if(parseInt(x) == 2){

            status="INT"
        }
        else if(parseInt(x)==3){
            status="OOD"
        }
        else if(parseInt(x)==4){
            status="DEX"
        }
        else if(parseInt(x)==5){
            status="NFI"
        }


        let arr = []
        this.state.data.filter((item)=>{
            if(item.current_status_code == status){
                arr.push(item)
            }
        })

        this.setState({
            list:arr
        })
    }

    render(){

        return (
            <>
                <div style={{ height:"30px" }}></div>
                <div className="container-fluid">
                     <div className="row">
                         <div className="col-lg-12">
                             <div className="row">
                                 <div className="col-lg-12">
                                     <ul className="counterUL  text-center" style={{ marginLeft:"-25px" }}>
                                         <li className="counterStyle" onClick={ this.changeCounter } >
                                             <div>
                                                <div align="left">
                                                    <div> <small>DEL</small> </div>
                                                </div>
                                                <div>
                                                    <div  accessKey="1" className="text-center counterNumber">{this.state.count.DEL}</div>
                                                </div>
                                             </div>
                                         </li>
                                         <li className="counterStyle" onClick={ this.changeCounter }>
                                             <div>
                                                <div align="left">
                                                    <div> <small>INT</small> </div>
                                                </div>
                                                <div>
                                                    <div accessKey="2" className="text-center counterNumber">{this.state.count.INT}</div>
                                                </div>
                                             </div>
                                         </li>
                                         <li className="counterStyle" onClick= {this.changeCounter }>
                                             <div>
                                                <div align="left">
                                                    <div> <small>OOD</small> </div>
                                                </div>
                                                <div>
                                                    <div  accessKey="3" className="text-center counterNumber">{this.state.count.OOD}</div>
                                                </div>
                                             </div>
                                         </li>
                                         <li className="counterStyle" onClick= {this.changeCounter }>
                                             <div>
                                                <div align="left">
                                                    <div> <small>DEX</small> </div>
                                                </div>
                                                <div>
                                                    <div  accessKey="4" className="text-center counterNumber">{this.state.count.DEX}</div>
                                                </div>
                                             </div>
                                         </li>
                                         <li className="counterStyle" onClick= {this.changeCounter }>
                                             <div>
                                                <div align="left">
                                                    <div> <small>NFI</small> </div>
                                                </div>
                                                <div>
                                                    <div accessKey="5" className="text-center counterNumber">{this.state.count.NFI}</div>
                                                </div>
                                             </div>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>
                <div style={{ height:"15px" }}></div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <br/>
                            <div className="sideblock">
                                <div>
                                    <img src="destination.svg" alt="Destination Image"/>
                                </div>
                                <div style={{ height:"270px",borderLeft:"2px dashed #2f61d5",marginLeft:"20px",overflowY:"scroll" }}>
                                    <div className="overview">
                                        {this.getOverview(this.state.overview)}
                                    </div>
                                </div>
                                <div>
                                    <img src="warehouse.svg" alt="Warehouse Image"/>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <div className="col-lg-8 table-responsive">
                            <div className="tableOverflow">
                                <table className="table table-borderless">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col" className="text-center">AWB NUMBER <span className="fa fa-angle-down" style={{color:" #2e5bff",fontSize:"medium",fontWeight:"bold"}}></span> </th>
                                            <th scope="col">TRANSPORTER</th>
                                            <th scope="col">SOURCE</th>
                                            <th scope="col">DESTINATION</th>
                                            <th scope="col" className="text-center">BRAND</th>
                                            <th scope="col">START DATE</th>
                                            <th scope="col">ETO</th>
                                            <th scope="col">STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.getList(this.state.list) }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Counter
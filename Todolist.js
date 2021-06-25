import React, {useState, useEffect, useRef} from 'react';
const Todolist = (props) =>{
    const [Cnt,setCnt] = useState(0);
    const [childs,setChilds] =useState([]);
    const [inp,setInp]=useState("");
    const reference = useRef("");

    useEffect(()=>{
        document.title = `TODO(${Cnt})`;
        if (Cnt===0 || inp===""){
            ;
        }
        else{
            let str2 = {id:Cnt,str3:inp};
            setChilds((oldChilds)=>{
                return [...oldChilds,str2];
            })
            setInp("");
        }
    },[Cnt]);

    function clickHandler1(){
        setCnt((oldValue) =>{
            return oldValue+1;});
    }

    function clickHandler2(id){
        console.log(id);
        setChilds((oldChilds)=>{
            let newChilds=[];
            console.log(oldChilds);
            for(let i=0;i<oldChilds.length;i++){
                if (oldChilds[i].id!==id){
                    console.log(oldChilds.id,id);
                newChilds.push(oldChilds[i]);}}
            if (newChilds.length===0){
                setCnt(0);
            }
            return newChilds;
        })
        setCnt(childs.length);
    }

    function change(event){
        console.log("event");
        console.log(event.target.value);
        console.log(reference.current);
        setInp(event.target.value);
    }
    return (
        <>
        <div className="root">{props.title}</div>
        <div className="main">
        {Cnt}
        </div>
        <div className="main1">
        {childs.map((childss) =>{
            return(<div className="inner" key={childss.id}>{childss.id}{childss.str3}<button className="innerbutton" onClick={()=>{clickHandler2(childss.id);}}>Done</button></div>);
        })}
        </div>
        <input className="inputbox" type="type" ref={reference} value={inp} onChange={(event) =>{change(event);}}></input>
        <button className="button" onClick={() => {clickHandler1();}}>Add</button>
        </>
    );
}

export default Todolist;

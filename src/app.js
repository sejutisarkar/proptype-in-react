import React from "react";
import ReactDom from "react-dom";

class App extends React.Component{
	render(){
		return <Title text=" " />
	}
}
const Title = (props)=><h1>Title :{props.text}</h1>
Title.propType={
	text(props,propName,component){
		if(!(propname in prop)){
			return new Error("missing ${propName}")
		}
		if(props[propName].length<6){
			return new Error("${propName} is too short")
		}
	}
}



ReactDom.render(<App txt="this is a value"/>,document.getElementById("app"))

(
	//Returns true if it is a DOM node
function isNode(o){
  return (
    typeof Node === "object" ? o instanceof Node :
    o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
  );
}

	let makeTogglable = function(element,args){
		const defToggledClass = "toggled";
		if (! isNode(element)){

} 
	}

)(document, document.documentElement);

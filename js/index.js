/*
 * Polyfills and global inits
 */
flexibility(document.documentElement);
/*
 * GSAP animations
 */
const defaultFrom = 'orange';
const defaultTo = 'blue';
let find = document.querySelector.bind(document);
let findAll = document.querySelectorAll.bind(document);
let subpages = findAll('.subpage');
const config = {
	discrete: false,
	scrollControlled: true
}
const tween = new TimelineMax;
window.colours = {from: 'white', to: 'black'};
let wrapper = find('#wrapper');

	function colourise(element){
		console.log('Colorisation commencing');
		TweenMax.set(element,{backgroundImage:"-webkit-linear-gradient(to bottom left," + colours.from + ", " + colours.to + ")",background:"linear-gradient(to bottom left," + colours.from + ", " + colours.to + ")", });
	}
subpages.forEach(function(e){
	let from = e.getAttribute('data-from') || defaultFrom;
	let to = e.getAttribute('data-to') || defaultTo;
	let sceneParams = {triggerElement: e, triggerHook: 'onLeave',_tfyFirstTop: -1};
	if(config.scrollControlled){
		console.log('scrollControlled');
		sceneParams.duration = window.innerHeight; //TODO resize with window
	}
	let timeline = new TimelineMax();
		timeline.add(TweenMax.to(colours,1,{colorProps: {from: from, to: to}, onUpdate: colourise,onUpdateParams:[wrapper]}));
	let scene = new ScrollMagic.Scene(sceneParams)
	if(e.id == "break-scroll"){
			let cont = find('#slideshow-container');
			let width = cont.clientWidth;
			scene.setPin(e);
			scene.duration(width);
			
			timeline.add(TweenMax.fromTo(cont,1,{x:-width},{x:width}))
	}
		scene.setTween(timeline)
			.addTo(controller);

});


	

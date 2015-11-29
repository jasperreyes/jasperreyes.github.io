$(document).ready(function() {

	// $('.item').draggable( {snap: "#targetArea"});
	// $('.item').draggable( { delay: 300 });
	// $('.item').draggable( { helper: "clone" });
	$('.item').draggable(
		{ opacity: "0.35" },
		{ snap: "#targetArea"},
		{ snapTolerance: 50},
        { revert: "invalid"}
	);

	$('.item').droppable(
		{ }
		);


});
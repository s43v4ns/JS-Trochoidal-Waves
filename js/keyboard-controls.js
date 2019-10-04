document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65) {
        console.log('A was pressed');
        currentCameraPosition();
    }
    else if(event.keyCode == 87) {
        console.log('W was pressed');
    }
    else if(event.keyCode == 83) {
        console.log('S was pressed');
    }
    else if(event.keyCode == 68) {
        console.log('D was pressed');
    }
});

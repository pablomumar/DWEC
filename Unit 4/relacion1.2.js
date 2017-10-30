function show_coord(Mouse) {
    let x = Mouse.screenX;
    let y = Mouse.screenY;
    console.log(x, y);
}

addEventListener('mousemove', show_coord);
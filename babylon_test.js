// fajny playground: https://playground.babylonjs.com/

const props = {
    width: 10,
    height: 10,
    bars: [
        [ 0, 0, 1, 2, 2, 2, 2, 1, 2, 1 ],
        [ 0, 1, 2, 4, 2, 1, 2, 2, 2, 2 ],
        [ 1, 0, 2, 2, 3, 1, 2, 2, 2, 2 ],
        [ 1, 0, 1, 2, 2, 2, 2, 0, 1, 2 ],
        [ 0, 0, 1, 2, 2, 2, 2, 1, 2, 1 ],
        [ 0, 1, 2, 4, 2, 1, 2, 2, 2, 2 ],
        [ 1, 0, 2, 2, 3, 1, 2, 2, 2, 2 ],
        [ 1, 0, 1, 2, 2, 2, 2, 0, 1, 2 ],
        [ 0, 0, 1, 2, 2, 2, 2, 1, 2, 1 ],
        [ 0, 1, 2, 4, 2, 1, 2, 2, 2, 2 ]
    ]
};

var createScene = function () {
	var scene = new BABYLON.Scene(engine);

	var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2.2, Math.PI / 3.5, 20, BABYLON.Vector3.Zero(), scene);

	camera.attachControl(canvas, true);

    var light = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(-2, -4, 1), scene);

	var plan = BABYLON.Mesh.CreatePlane("plane", props.width, scene);

    var materialGround = new BABYLON.StandardMaterial("Mat", scene); 
    materialGround.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    plan.material = materialGround;

    plan.rotation.x = Math.PI / 2;
    plan.scaling.y = props.height / props.width;
    plan.position.y -= 0.5;

    props.bars.forEach((row, i) => {
        row.forEach((bar, j) => {
            if (bar) {
                var box = BABYLON.Mesh.CreateBox("box_" + i + "_" + j, 1.0, scene);
                box.position.x += j - (props.width - 1) / 2;
                box.position.z -= i - (props.height - 1) / 2;
                box.scaling.y = bar;
                box.position.y += (bar - 1) / 2;
            }
        });
    });

	return scene;
}
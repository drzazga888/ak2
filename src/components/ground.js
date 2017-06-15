import React from 'react';
import BABYLON from 'babylonjs';

class Ground extends React.PureComponent {

    constructor(props) {
        super(props);
        this.boxes = [];
        this.plane = null;
    }

    _createScene(props) {
        this.scene = new BABYLON.Scene(this.engine);

        var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2.2, Math.PI / 3.5, 33, BABYLON.Vector3.Zero(), this.scene);

        camera.attachControl(this.refs.canvas, true);

        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

        var light = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(-2, -4, 1), this.scene);

        this.plane = BABYLON.Mesh.CreatePlane("plane", 1, this.scene, false, BABYLON.Mesh.DOUBLESIDE);

        var materialGround = new BABYLON.StandardMaterial("Mat", this.scene);
        materialGround.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
        this.plane.material = materialGround;

        this.plane.rotation.x = Math.PI / 2;
        this.plane.position.y -= 0.5;

        this._createGround(props);
    }

    _createGround(props) {
        let self = this;
        this.plane.scaling.x = props.height;
        this.plane.scaling.y = props.width;
        this.boxes.forEach(box => {
            box.visibility = false;
            box.dispose();
        });
        this.boxes = new Array(props.height * props.width);
        props.bars.forEach((row, i) => {
            row.forEach((bar, j) => {
                let box = BABYLON.Mesh.CreateBox("box_" + i + "_" + j, 1.0, this.scene);
                box.position.x += j - (props.height - 1) / 2;
                box.position.z -= i - (props.width - 1) / 2;
                self.boxes[i + j * props.width] = box;
            });
        });
    }

    _updateGround(props) {
        props.bars.forEach((row, i) => {
            row.forEach((bar, j) => {
                let box = this.boxes[i + j * props.width];
                box.visibility = bar;
                box.scaling.y = bar;
                box.position.y = (bar - 1) / 2;
            });
        });
    }

    _initScene() {
        this.engine = new BABYLON.Engine(this.refs.canvas, true);
        this._createScene(this.props);
        this._updateGround(this.props);
        this.engine.runRenderLoop(function(){
            this.scene.render();
        }.bind(this));
        window.addEventListener('resize', function(){
            this.engine.resize();
        }.bind(this));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.width !== prevProps.width || this.props.height !== prevProps.height) {
            this._createGround(this.props);
        }
        if (this.props.bars !== prevProps.bars) {
            this._updateGround(this.props);
        }
    }

    componentDidMount() {
        this._initScene();
    }

    render() {
        return <canvas ref="canvas" className="ground" style={this.props.style}></canvas>;
    }

}

export default Ground;

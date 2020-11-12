import {
  PerspectiveCamera, WebGLRenderer, TextureLoader, Mesh, Scene
} from 'three';

const createCamera = () => {
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  return camera;
}

const createScene = () => { return Scene }

const attatchRenderer = () => {
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

const createModel = (OBJFile, MTLFile, JPGFile) => {
  loadModel(MTLFile, (materials) => {
    materials.preload();
    setMaterials(materials).load(OBJFile, (obj) => {
      const object = obj;
      object.position.y = -95;
      const texture = new TextureLoader().load(JPGFile);

      object.traverse((childObj) => {
        const child = childObj;
        if (child instanceof Mesh) {
          child.material.map = texture;
        }
      });
      
      return object;
    });
  });
}

const renderScene = (scene) => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

export default { renderScene, createModel, createCamera, attatchRenderer, createScene};
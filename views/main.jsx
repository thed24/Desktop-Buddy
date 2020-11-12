'use babel';

import React from 'react';
import { createModel, createCamera, attatchRenderer, renderScene, createScene } from '../scripts/load'

const OBJFile = '/home/dom/WSLProjects/DesktopBuddy/src/resources/Megaman/megaman_exe.obj';
const MTLFile = '/home/dom/WSLProjects/DesktopBuddy/src/resources/Megaman/megaman_exe.mtl';
const JPGFile = '/home/dom/WSLProjects/DesktopBuddy/src/resources/Megaman/Material0.png';

export default class Main extends React.Component {
  render() {
    scene = createScene();

    attatchRenderer();
    camera = createCamera();
    model = createModel(OBJFile, MTLFile, JPGFile);
    renderScene(scene);

    scene.add(model);
    
    return <div>Hello from React with ES6 :)</div>;
  }
}

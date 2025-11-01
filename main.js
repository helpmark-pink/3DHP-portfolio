import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

// シーン、カメラ、レンダラー、光源、コントロールの変数を定義
let scene, camera, renderer, pointLight, controls;
let kumaModel;
let teddyText, portfolioText;

// シーンを追加
scene = new THREE.Scene();
scene.background = new THREE.Color (0x7cfc00); // 背景色を設定

// カメラを追加
camera = new THREE.PerspectiveCamera(
    50, // 視野角
    window.innerWidth / window.innerHeight, // アスペクト比
    0.1, // 開始距離
    1000 // 終了距離
);
// カメラの位置を調整
camera.position.set(0, 1, 5);
camera.lookAt(0, 0, 0);

// レンダラーを追加
renderer = new THREE.WebGLRenderer({antialias: true}); // アンチエイリアスを有効化
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.shadowMap.enabled = true; // シャドウを有効化
document.body.appendChild(renderer.domElement);


// 光源を追加
// 平行光源を追加
let directionalLight = new THREE.DirectionalLight(0xffffff, 4.0); // 強度を1.0に調整
directionalLight.position.set(1, 1, 1); // 正面（z軸の正の方向）から光を当てる
//directionalLight.castShadow = true; // シャドウを有効化
scene.add(directionalLight);

// 環境光を追加
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // 環境光の強度を0.8に増加
scene.add(ambientLight);

// ポイント光源を追加
pointLight = new THREE.PointLight(0xffffff, 0.5); // 強度を0.5に調整
pointLight.position.set(-2, -2, -2);
pointLight.castShadow = true; // シャドウを有効化

// ポイント光源がどこにあるか特定しよう
// let pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2);
// scene.add(pointLightHelper);

// ポイント光源の設定
pointLight.decay = 1;
pointLight.power = 300; // パワーを300に調整
scene.add(pointLight);

// くまモデルを読み込む
const loader = new GLTFLoader();
loader.load(
    'models/kuma.glb', // モデルのパス
    function (gltf) {
        console.log('モデルの読み込みが完了しました');
        kumaModel = gltf.scene;
        kumaModel.scale.set(0.5, 0.5, 0.5); // モデルのサイズを調整
        kumaModel.position.set(0, -0.2, 0); // モデルの位置を設定
        scene.add(kumaModel); // モデルをシーンに追加
        
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('モデルの読み込みエラー:', error);
    }
);

// テキストを読み込む
const fontLoader = new FontLoader();
fontLoader.load(
    'fonts/kawaii_font.json',
    function (font) {
        // "Teddy Bear" テキストの作成
        const teddyGeometry = new TextGeometry('Help mark', {
            font: font, // 使用するフォント
            size: 0.22, // テキストのサイズ
            height: 0, // テキストの高さ（厚み）
            curveSegments: 12, // 曲線のセグメント数（滑らかさ）
            bevelEnabled: true, // ベベル（縁取り）を有効にするかどうか
            bevelThickness: 0.02, // ベベルの厚さ（縁取りの厚さ）
            bevelSize: 0.01, // ベベルのサイズ（縁取りのサイズ）
            bevelOffset: 0, // ベベルのオフセット（縁取りのオフセット）
            bevelSegments: 4 // ベベルのセグメント数（縁取りの滑らかさ）
        });
        
        // "Portfolio" テキストの作成
        const portfolioGeometry = new TextGeometry('Portfolio', {
            font: font,
            size: 0.22,
            height: 0,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.01,
            bevelOffset: 0,
            bevelSegments: 4
        });
        
        // テキストのマテリアルを作成
        const textMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x0000ff, // 青色
            specular: 0xffffff,
            shininess: 100,
            emissive: 0x330033, // わずかな発光効果を追加
            emissiveIntensity: 0.2
        });
        
        // メッシュを作成
        teddyText = new THREE.Mesh(teddyGeometry, textMaterial);
        portfolioText = new THREE.Mesh(portfolioGeometry, textMaterial);
        
        // テキストの位置を調整
        teddyGeometry.computeBoundingBox();
        portfolioGeometry.computeBoundingBox();
        
        const teddyWidth = teddyGeometry.boundingBox.max.x - teddyGeometry.boundingBox.min.x;
        const portfolioWidth = portfolioGeometry.boundingBox.max.x - portfolioGeometry.boundingBox.min.x;
        
        teddyText.position.set(-teddyWidth / 2, -1.3, 0);
        portfolioText.position.set(-portfolioWidth / 2, -1.7, 0);
        
        // シーンにテキストを追加
        scene.add(teddyText);
        scene.add(portfolioText);
        
        
    }
);

// くまモデル用のOrbitControlsを設定
controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // スムーズな操作を有効化
controls.dampingFactor = 0.05;
controls.minDistance = 3;
controls.maxDistance = 10;
controls.target.set(0, -0.2, 0); // くまモデルの位置を中心に設定
controls.enablePan = false; // パン操作を無効化
controls.enableZoom = true; // ズーム操作を有効化
controls.maxPolarAngle = Math.PI / 2; // 垂直方向の回転を制限（下から見上げないように）
controls.enableRotate = true; // 回転操作を有効化
controls.rotateSpeed = 0.5; // 回転速度を調整
controls.minAzimuthAngle = -Math.PI / 2; // 水平方向の回転を制限（左側）
controls.maxAzimuthAngle = Math.PI / 2; // 水平方向の回転を制限（右側）

// ブラウザのリサイズに対応させよう(画面幅)
function onWindowResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
window.addEventListener('resize', onWindowResize);

// アニメーション関数
function animate(){
    requestAnimationFrame(animate);
    
    //kumaモデルが存在する場合、アニメーションを適用
    if (kumaModel) {
        // くまモデルの回転をOrbitControlsに合わせる
        kumaModel.rotation.y = -controls.getAzimuthalAngle();
    }
    
    controls.update(); // OrbitControlsの更新
    
    // レンダリングの順序が重要
    // 最初に描画されたものが最背面に表示される
    renderer.render(scene, camera);
}

// アニメーションを開始
animate();










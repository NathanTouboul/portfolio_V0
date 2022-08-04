import {v4 as uuidv4} from 'uuid'
import QtImage from "../images/QtPathFinding.jpg"
import GraphSlam from "../images/lidar_measurements.gif"
import MultiSpiderman from "../images/multi_classification.png"
import Fisher from "../images/fisher.jpg"

const projects_data = [

    {
        id: uuidv4(), 
        name: 'Path Finding with Qt',
        desc:
            "Path-finding algorithms with C++ and the Qt framework. Visualizing these algorithms searching for the goal", 
        img: QtImage,
        link: "https://github.com/NathanTouboul/PathPlanning",
    },


    {
        id: uuidv4(), 
        name: 'Neural Networks for a multi-class classification',
        desc:
            "Comparison of classification metrics using different architectures and parameters: type of layers: (Dense, Conv2D, MaxPooling2D), size of kernel for convolution, number of hidden layers, optimizer", 
        img: MultiSpiderman,
        link: "https://github.com/NathanTouboul/Classification_NeuralNetwork",

    },
    {
        id: uuidv4(), 
        name: 'Graph SLAM from Scratch',
        desc:
            "Coding a Graph SLAM algorithm by hand, and applying it to the Victoria Park Dataset", 
        img: GraphSlam,
        link: "https://github.com/NathanTouboul/Graph_Slam_Victoria_Park",

    },
    {
        id: uuidv4(), 
        name: 'Neural network from scratch',
        desc:
            "Coding a simple neural networks without any library (besides numpy). Comparing metrics with Fischer Discriminant", 
        img: Fisher,
        link:"https://github.com/NathanTouboul/FischerDiscriminant_VS_NeuralNetwork",
    },

]

export default projects_data
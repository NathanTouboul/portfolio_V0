import {v4 as uuidv4} from 'uuid'
import QtImage from "/src/images/QtPathFinding.jpg"
import Lidar from "/src/images/complexity_localization.jpg"
import MultiSpiderman from "/src/images/multi_classification.png"
import GraphSlam from "/src/images/lidar_measurements.gif"
import Fisher from "/src/images/fisher.jpg"
import DriveCycle from "/src/images/drive_cycle.png"
import Scara from "/src/images/RobotScara.jpg"

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
        name: 'Lidar-Localization of autonomous Vehicle',
        desc:
            "Ensuring navigation integrity and safety in an area with low GNSS availability with a lidar sensor.",
        img: Lidar,
        link: "https://github.com/NathanTouboul/ResearchProject_LidarVisualization",
    },

    {
        id: uuidv4(), 
        name: 'Neural network from scratch',
        desc:
            "Coding a simple neural networks without any library (besides numpy). Comparing metrics with Fischer Discriminant", 
        img: Fisher,
        link:"https://github.com/NathanTouboul/FischerDiscriminant_VS_NeuralNetwork",
    },

    {
        id: uuidv4(), 
        name: 'Drive Cycle and Autonomous Vehicle',
        desc:
            "Building an autonomous drive cycle vehicle by implementing following-controls of a standard EPA drive cycle", 
        img: DriveCycle,
        link:"https://github.com/NathanTouboul/AutonomousVehicle_DriveCycle",
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
        name: 'SCARA',
        desc:
            "Kinematic and dynamic modelization of a 3-axis SCARA robot, with controls.",
        img: Scara,
        link: "https://github.com/NathanTouboul/ScaraRobotControl",
    },

]

export default projects_data
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract OpenInnovation is Ownable, ReentrancyGuard {
    struct Project {
        string title;
        string description;
        address creator;
        uint256 bountyAmount;
        bool isCompleted;
        string githubUrl;
        string telegramId;
    }

    Project[] public projects;
    mapping(address => Project[]) public userProjects;

    event ProjectSubmitted(
        uint256 indexed projectId,
        address indexed creator,
        string title
    );

    event ProjectCompleted(
        uint256 indexed projectId,
        string githubUrl,
        string telegramId
    );

    constructor() Ownable(msg.sender) {}

    function submitProject(
        string memory _title,
        string memory _description,
        uint256 _bountyAmount
    ) external {
        Project memory newProject = Project({
            title: _title,
            description: _description,
            creator: msg.sender,
            bountyAmount: _bountyAmount,
            isCompleted: false,
            githubUrl: "",
            telegramId: ""
        });

        projects.push(newProject);
        userProjects[msg.sender].push(newProject);

        emit ProjectSubmitted(projects.length - 1, msg.sender, _title);
    }

    function completeProject(
        uint256 _projectId,
        string memory _githubUrl,
        string memory _telegramId
    ) external nonReentrant {
        require(_projectId < projects.length, "Invalid project ID");
        Project storage project = projects[_projectId];
        require(!project.isCompleted, "Project already completed");

        project.isCompleted = true;
        project.githubUrl = _githubUrl;
        project.telegramId = _telegramId;

        emit ProjectCompleted(_projectId, _githubUrl, _telegramId);
    }

    function getProject(uint256 _projectId) external view returns (Project memory) {
        require(_projectId < projects.length, "Invalid project ID");
        return projects[_projectId];
    }

    function getAllProjects() external view returns (Project[] memory) {
        return projects;
    }

    function getUserProjects(address _user) external view returns (Project[] memory) {
        return userProjects[_user];
    }
}
/*const projects = [
  {projectId: 1, candidates: ["a", "b", "c", "e"]},
  {projectId: 2, candidates: ["a", "c", "d"]},
  {projectId: 3, candidates: ["c"]},
  {projectId: 4, candidates: ["a", "d"]},
]

//expecting result: ==》 整理成一个condidates的列表

const candidates: [
  {name: "a", projects: [1,2,4]},
  {name: "b", projects: [1]},
  {name: "c", projects: [1,2,3]},
  {name: "d", projects: [2,4]},
  {name: "e", projects: [1]},
]
*/

const project = [
	{projectId: 1, candidates: ["a", "b", "c", "e"]},
  	{projectId: 2, candidates: ["a", "c", "d"]},
  	{projectId: 3, candidates: ["c"]},
  	{projectId: 4, candidates: ["a", "d"]},
]

//Solution 1: Used general for-loop
let candidatesProject = [];
for (let i = 0; i < project.length; i++) {
    //get the every projectId and name
    let projectid = project[i].projectId;
    let nameList = project[i].candidates;

    for (let j = 0; j < nameList.length; j++) {
    	let nameCond = nameList[j]; //get the name list of every project

    	//check whether this name have joined other project before
        const exitName = candidatesProject.find(item => item.name === nameCond);
        
        if (exitName) { //if there is ready have the name
        	exitName.projects.push(projectid);
        } else { //if there did not have curr name
            candidatesProject.push({name: nameCond, projects: [projectid]});
        }
    }
}


//Solution 2: Used forEach() 
const candidatesProject2 = []
project.forEach((element) => {
    element.candidates.forEach((candidate) => {
        //if have meet this candidates name in the previous project
        //pust the project id into previous project list
        const hasName = candidatesProject2.find(item => item.name === candidate);
        if(hasName){
            hasName.projects.push(element.projectId);
        } else{ //create a new object, if did not meet this candidates in the before
            candidatesProject2.push({name: candidate, projects: [element.projectId]});
        }
    })
})


//sort the name based character increasing order
candidatesProject.sort((a, b) => a.name.localeCompare(b.name));
candidatesProject2.sort((a, b) => a.name.localeCompare(b.name));

console.log(candidatesProject);
console.log(candidatesProject2);




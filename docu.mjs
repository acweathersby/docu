import cmjs from "commentar";
import {
	return_statement
} from "@candlefw/js"
import fs from "fs";
import path from "path";


const poc_file_path = "./poc.mjs";
const poc_file = fs.readFileSync(poc_file_path, "utf8");
const poc =  poc_file;

console.log(poc_file)

const data = cmjs(poc)

console.dir(data, {depth:6})


//At this point, if there is a data, then there can be comments

//Docu comments are statement level objects that link into the generated AST of the input. 

//They can contain generic data, hook components, a test information. 

//Docu can output HTML w/ and w/o integrated tests, JSON, and 

//A DOCU composer is a JSON object that tells docu how to handle output data. It is a script that can be used to 
// orchestrate the final output. 

//Docu can be used with the import system in Javascript to document code and test outof line 

//Orginization

// Test Block -> a single test expressions / series of statements that can throw. Can be linked to function blocks to create a test unit. 
// Function / Class.Parameter. A unit that 

/*
{	
	// The index are top level organization objects that tell DOCU wha

	index {
		functions:
		comments:
		modules:
	}
	views : { // views automatically get their
		functions
		identifiers

	}
}
*/


//lOAD FILE
//Extract data. Mind level
	//Compile dependency tree
//Create docs if tasked.
//Create tests if tasked. 
	//load any foreign tests from cache
//Run tests if tasked. 


for(const comment of data.comments){

	for(const line of comment.comment){
		if(line[0] == "$"){
			//Extract test graph
			const result = cmjs(line);
			const ast = result.ast;

			//Add to tests list for this block
			console.dir(result, {depth:9})
			

			const test_block = new Function("$expect", new return_statement(ast).render());
			const test_unit = new Function((new return_statement(data.ast)).render())();
			
		}
	}
	console.log(comment, comment.ast.render())
}

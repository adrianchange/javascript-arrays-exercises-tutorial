function sumTheElements(theArray){
	
	var total = 0;
	
	//your code here

  
	// Iterate through all elements and add them to sum
	for (i = 0; i < theArray.length; i++)
		total += theArray[i];

	return total;
}
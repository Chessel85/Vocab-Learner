async function displayFilesHeading() 
{
  const fileListRegion = document.getElementById("file-list-region");
  const textNode = document.createTextNode("Files:");
  fileListRegion.appendChild(textNode);

  try 
  {
    const fileContent = await fetch("/csv/")
    .then(response => response.text()); // Await before fetch, add comma
    alert( fileContent );
  } 
  catch(error)
  {
    alert( error.message );
  }
}

function onOpen() 
{
  var inny = "1"
  do{
    var stingy = "Choose one, and enter its number: 0. Exit; 1. Star; 2. Line; 3. AutoStar; 4. AutoLine; 5. Predict.";
    var inny = Browser.inputBox(stingy).trim();
    switch(inny){
      case "1":
        Star();
        break;
      case "2":
        Line();
        break;
      default:
        break;
        
    }
  }while(inny != "0");
  
}
function otherLogger(sting){
  Logger.log(sting);
  Browser.msgBox(sting);
}
function removeDupSoma(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var newData = new Array();
  for(var i in data){
    var row = data[i];
    var duplicate = false;
    for(var j in newData){
      if(row[0] == newData[j][0] /*&& row[1] == newData[j][1]*/){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData.push(row);
    }
  }
  sheet.clearContents();
  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
  toilet();
}
function toilet(){
  SpreadsheetApp.flush();
}
function findSoma(name){
  removeDupSoma();

  name = name.toUpperCase().trim();
  var row=0;
  var newRow = null;
  var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues()
  var somaColumn = 0;
  for(var i = 0; i < data.length; i++){
    row = data[i];
    //otherLogger("test mo in:" + newRow);
    if(row[somaColumn].toUpperCase().trim() == name)
      newRow = i;
    //otherLogger("testFS in:" + row[somaColumn].toUpperCase().trim() + "::" + name + ";");
    //otherLogger("newRow: " + newRow);
  }
  if (newRow == null)
    newRow = i;
  if (newRow == 0)
    newRow = 0;
  newRow++;
  var mRow = SpreadsheetApp.getActiveSheet().getMaxRows() - 1;
  if((newRow + 2) > mRow){
    SpreadsheetApp.getActiveSheet().insertRowsAfter(mRow, 26);
    toilet();    
  }
  //otherLogger("test1 FS:" + newRow);
  return newRow ;
}
function findNeurPointer(rowNum, name){
  name=name.toUpperCase();
  rowNum = rowNum - 1;
  var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  var row = data[rowNum];
  //otherLogger("test1FNP:" + row);
  var theCol = null;
  for (var col = 0;col < row.length;col += 3){
    //otherLogger("test2:col:" + col + ":FNP:tcol:" + theCol);
    if(row[col].toUpperCase() == name){
      theCol = col;
      col=row.length + 5;
    }
    else if (row[col].toUpperCase() == ""){
      theCol = col;
      //otherLogger("test3:col:" + col + ":FNP:tcol:" + theCol);
      col =  row.length + 5;
    }
  }
  if (theCol == null)
    theCol = col;
  theCol++;
  var mCol = SpreadsheetApp.getActiveSheet().getMaxColumns() - 1;
  if((theCol + 4) > mCol){
    SpreadsheetApp.getActiveSheet().insertColumnsAfter(mCol + 1, 26);
    toilet();    
  }
  //otherLogger("test4 FNP tcol:" + (theCol + 1));
  return theCol;
}
function findNeurEnd(rowNum){
  //otherLogger("test FNE:" + rowNum);
  var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  rowNum = rowNum - 1;
  //otherLogger("test2FNE:" + rowNum);
  var row = data[rowNum];
  //otherLogger("test3FNE:" + row);
  var TCol = row.length + 1;
  //var TCol = row.getLastColumn() + 2; 
  //otherLogger("test7FNE:" + TCol);
  return TCol;
}

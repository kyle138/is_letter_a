module.exports = function(input) {
  if((input==='a')
  || (input==='A')
  || (input==='À')
  || (input==='Á')
  || (input==='Â')
  || (input==='Ã')
  || (input==='Ä')
  || (input==='Å')
  || (input==='à')
  || (input==='á')
  || (input==='â')
  || (input==='ã')
  || (input==='ä')
  || (input==='å')
  || (input==='ª')) {
    return true
  } else {
    return false
  }
}

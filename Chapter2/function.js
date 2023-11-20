//1
function checkAge(age) {
  let result = age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
  return result;
}

//2
function checkAge(age) {
  return age > 18 || confirm("보호자의 동의를 받으셨나요?");
}

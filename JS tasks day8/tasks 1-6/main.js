{
  function errHandler() {
    let num = 1;
    try {
      num.toPrecision(500);
    } catch (err) {
      console.log(err.name);
    }
  }
  errHandler();
}
//#############################################################################
{
  function errHandler() {
    try {
      x = y - 3;
    } catch (err) {
      console.log(err.name);
    }
  }
  errHandler();
}
//#############################################################################

{
  function errHandler() {
    try {
      decodeURI("%%");
    } catch (err) {
      console.log(err.name);
    }
  }
  errHandler();
}
//#############################################################################

{
  function errHandler() {
    let z = 10;
    try {
      z.upperCase();
    } catch (err) {
      console.log(err.name);
    }
  }
  errHandler();
}
//#############################################################################

{
  function errHandler() {
    const x = "hello";
    try {
      if (isNaN(x ** 2)) throw "is not a number";
    } catch (err) {
      console.log(err);
    }
  }
  errHandler();
}

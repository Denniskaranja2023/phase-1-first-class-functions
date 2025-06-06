function receivesAFunction(emotion){
    return emotion()
}
receivesAFunction(function(){return 'I am feeling happy'});



function returnsANamedFunction() {
  function namedFunction() {
    console.log("I am a DK!");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("I am a Deno!");
  };
}

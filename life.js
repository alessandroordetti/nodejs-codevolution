// Immediately Invoked Function Expression (IIFE):
// By wrapping the code in a function and immediately invoking it, the variables and functions defined 
// inside the function are kept within the scope of the function and are not accessible outside of it.

(function () {
   const superHero = "Batman"
   console.log(superHero); 
})();

(function () {
    const superHero = "Superman"
    console.log(superHero); 
 })();
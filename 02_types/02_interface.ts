(()=>{
    //define an interface
    interface IPerson{
        firstName:string
        lastName:string
    }
    function showFullName(person:IPerson){
        return person.firstName+'_' +person.lastName
    }
    const person:IPerson={
        firstName:'jay',
        lastName:'den'
    }
    console.log(showFullName(person))

})()

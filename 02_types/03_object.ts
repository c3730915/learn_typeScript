(()=>{
    //define an interface
    interface IPerson{
        firstName:string
        lastName:string
    }
    //define a type
    class Person{
        firstName:string
        lastName:string
        fullName:string
        //define a constructor
        constructor(firstName:string,lastName:string) {
            //update properties
            this.firstName=firstName
            this.lastName=lastName
            this.fullName=this.firstName+'_'+this.lastName

        }
    }
    function showFullname(person:IPerson){
        return person.firstName+'_'+person.lastName
    }

    //instantiated object
    const person = new Person('zhu','kong')
    console.log(showFullname(person))

})()

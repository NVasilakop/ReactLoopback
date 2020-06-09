var models = require('./server.js').models;

//To Update

// models.Profile.create({name:'Nick'},(err,profile)=>{
//     console.log("data?",err,profile);

// })


// models.Profile.upsert({id:'5edea3ec3ec43758a4a38ff8',name:'Nick1'},(err,profile)=>{
//     console.log("data?",err,profile);

// })


// models.Profile.findOrCreate({name:'Nick2'},(err,profile)=>{
//     // console.log("data?",err,profile);
//     if(err){
//         console.log("There was an error",err)
//     }
//     else if(profile){
//         // profile.updateAttributes({
//         //     email:"nick@nickupdated.com"
//         // },(updateError,updated) => {
//         //     console.log("Saved?" ,updateError,updated);
//         // })
//         profile.email='nick@nickupdated3.com';
//         profile.save((ue,updated)=> {
//             console.log("Updated?" , ue,updated);
//         });
//     }

// })

////ToSave

// var toSave = [
//     {name:"Nick",email:"nick@nick.com"},
//     {name:"Nick1",email:"nick1@nick1.com"},
//     {name:"Nick",email:"nick2@nick2.com"},
//     {name:"Nick2",email:"nick3@nick3.com"},
//     {name:"Nick",email:"nick4@nick4.com"},
//     {name:"Nick34",email:"nick5@nick5.com"},
//     {name:"Someone",email:"nick6@nick6.com"},
//     {name:"SomeoneNick",email:"nick7@nick7.com"},
//     {name:"Some",email:"nick8@nick8.com"},
//     {name:"Some2",email:"nick9@nick9.com"},
//     {name:"Nickkekes    ",email:"nick99@nick99.com"},
//     {name:"HowAbout",email:"nick11@nick11.com"}
// ]

// toSave.map(
//     obj =>{ models.Profile.create(obj,(err,created)=> {console.log("Created",err,created)})
//     });

//How to find Data
var filter = {
    where: {
        //name:'Nick'

        //Modifiers for data
        name:{like:'Nick'},
        // postCount:{gte:10}
    }, //Like mysql where
    order: 'id DESC',
    limit: 10,
    skip: 0,
    fields:{
        email:true
    }
    // include: ['user',{Posts:'Image'}],
    // include:{
    //     relation : 'Posts',
    //     scope: {
    //         limit:5,
    //         order:'date DESC',
    //         include:{
    //             relation:'Image',
    //             limit:1,
    //             where:{type:'thumbnail'}
    //         }
    //     } 
    // }
}

// models.Profile.findOne({
// where:{name:'Nick'},
// order:'id DESC'
// }, (err,found)=> {
//     console.log("Found?",err,found);
// })

//  models.Profile.find(
// //       {
// //     where:{name:'Nick'},
// //     order:'id DESC'
// //     }
//     filter, (err,found)=> {
//         console.log("Found?",err,found);
//     })

//How to Delete Data

// // 1st way
// models.Profile.findById('',(err,found)=> {
//     console.log("Found?",err,found );
//     found.destroy();
// });

// //2nd way
models.Profile.destroyAll(filter.where,(err,found)=> {
    console.log("Found?",err,found);
})
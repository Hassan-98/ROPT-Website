firebase.initializeApp({
    apiKey: "AIzaSyD3-20AqP8ZgZLKvCmUvR7JLqfmXDswo2k",
    authDomain: "test-website-5d77c.firebaseapp.com",
    databaseURL: "https://test-website-5d77c.firebaseio.com",
    projectId: "test-website-5d77c",
    storageBucket: "",
    messagingSenderId: "782822263164",
    appId: "1:782822263164:web:c34b95dda8f9354a"
});

// firebase.database().ref("users/moustafa").set({
//     Name: 'Moustafa',
//     data: "17-9-1998"
// })
// .then(function(){
//     console.log("done");
// }).catch(function(err){
//     console.log(err);
// });


// ADD DATA To Ref

// $(".send").click(function(){
//     var name = $(".title").val();
//     var content = $(".content").val();

//     firebase.database().ref(`users/${name}`).set({
//         Caption: name,
//         Description: content
//     }).then(function(){
//         alert("Done");
//     }).catch(function(err){
//         console.log(err);
//     });
// });



// PUSH DATA (in Random Object)

// $(".send").click(function(){
//     var name = $(".title").val();
//     var content = $(".content").val();

//     firebase.database().ref(`users`).push({
//         Caption: name,
//         Description: content
//     }).then(function(){
//         alert("Done");
//     }).catch(function(err){
//         console.log(err);
//     });
// });


// UPDATE DATA

// $(".send").click(function(){
//     var name = $(".title").val();
//     var content = $(".content").val();

//     firebase.database().ref(`users/Hassan`).update({
//         Caption: name
//     }).then(function(){
//         alert("Done");
//     }).catch(function(err){
//         console.log(err);
//     });
// });

// UPDATE DATA

// $(".send").click(function(){
//     var name = $(".title").val();
//     var content = $(".content").val();

//     firebase.database().ref(`users/Hassan`).update({
//         Caption: null // Delete Child
//     }).then(function(){
//         alert("Done");
//     }).catch(function(err){
//         console.log(err);
//     });
// });


// DELETE DATA

// $(".send").click(function(){
//     firebase.database().ref(`users/Hassan`).remove().then(function(){
//         alert("Done");
//     }).catch(function(err){
//         console.log(err);
//     });
// });

// Get Data Once
// firebase.database().ref("users/moustafa").once("value").then(function(data){
//     $(".gTitle").text(data.val().Name);
//     $(".gContent").text(data.val().data);
// }).catch(function(err){
//     console.log(err);
// });

// Get Data 
// firebase.database().ref("users").on("value", function(data){
//     console.log(data.val());
// });


// Get Data Once |||orders|||
// firebase.database().ref("users").orderByChild("comments").once("value").then(function(data){
//     data.forEach(single => {
//         console.log(single.val());
//     });
// }).catch(function(err){
//     console.log(err);
// });

// Get Data Once |||Filters which needs orders|||
// firebase.database().ref("users").orderByChild("comments").startAt(5).once("value").then(function(data){
//     console.log(data.val());
// }).catch(function(err){
//     console.log(err);
// });
const blog = new XMLHttpRequest();
blog.onload = function() {
    const data = JSON.parse(this.responseText);
    console.log(data);
    
  var randomNumber = Math.floor(Math.random() * 100);
    const Post1Id=document.getElementById("post1Id");
    const Post1Title=document.getElementById("post1Title");
    const Post1Body=document.getElementById("post1Body");

    Post1Id.textContent=data[randomNumber].id;
   Post1Title.textContent=data[randomNumber].title;
   Post1Body.textContent=data[randomNumber].body;

  var randomNumber = Math.floor(Math.random() * 100);
    const Post2Id=document.getElementById("post2Id");
    const Post2Title=document.getElementById("post2Title");
    const Post2Body=document.getElementById("post2Body");

   Post2Id.textContent=data[randomNumber].id;
   Post2Title.textContent=data[randomNumber].title;
   Post2Body.textContent=data[randomNumber].body;

   var randomNumber = Math.floor(Math.random() * 100);
    const Post3Id=document.getElementById("post3Id");
    const Post3Title=document.getElementById("post3Title");
    const Post3Body=document.getElementById("post3Body");

   Post3Id.textContent=data[randomNumber].id;
   Post3Title.textContent=data[randomNumber].title;
   Post3Body.textContent=data[randomNumber].body;

   var randomNumber = Math.floor(Math.random() * 100);
    const Post4Id=document.getElementById("post4Id");
    const Post4Title=document.getElementById("post4Title");
    const Post4Body=document.getElementById("post4Body");

   Post4Id.textContent=data[randomNumber].id;
   Post4Title.textContent=data[randomNumber].title;
   Post4Body.textContent=data[randomNumber].body;

   var randomNumber = Math.floor(Math.random() * 100);
    const Post5Id=document.getElementById("post5Id");
    const Post5Title=document.getElementById("post5Title");
    const Post5Body=document.getElementById("post5Body");

   Post5Id.textContent=data[randomNumber].id;
   Post5Title.textContent=data[randomNumber].title;
   Post5Body.textContent=data[randomNumber].body;

   var randomNumber = Math.floor(Math.random() * 100);
    const Post6Id=document.getElementById("post6Id");
    const Post6Title=document.getElementById("post6Title");
    const Post6Body=document.getElementById("post6Body");

   Post6Id.textContent=data[randomNumber].id;
   Post6Title.textContent=data[randomNumber].title;
   Post6Body.textContent=data[randomNumber].body;

}
blog.onerror = function() {
    console.log("ERROR!!!!");
    length.log(this);
}

blog.open("GET","https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11");
blog.send();

  
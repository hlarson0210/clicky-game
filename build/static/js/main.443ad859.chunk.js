(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"B. Mayfield","image":"https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336358-e29a2aa7c67c731aee95alt1_full.jpg&w=900"},{"id":2,"name":"M. Lynch","image":"https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336546-c4444180532484b7271calt1_full.jpg&w=900"},{"id":3,"name":"C. Ocho Cinco","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mbYAJc1xty8PCRENswv6wa-iJ4MeY_hXwriWPQVgEYUsPtE5FQ&s"},{"id":4,"name":"T. Brady","image":"https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336519-7fa3a85a152d0db82b03alt1_full.jpg&w=900"},{"id":5,"name":"R. Wilson","image":"https://i.pinimg.com/originals/5d/b7/62/5db7620964e88d011c76e071fcbc2c15.jpg"},{"id":6,"name":"D. Cook","image":"https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336618-1568d582e18fa0e851e3alt1_full.jpg&w=900"},{"id":7,"name":"S. Diggs","image":"https://static.clubs.nfl.com/image/private/t_editorial_squared_6_desktop/f_png/nfl100/ouhwa3tlqwpcg9rdjevi.png"},{"id":8,"name":"A. Barr","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrcUa2fy9SHW-reptMyTQvR_TfYu4kx9LOceXVnyeXwNB06ouJQ&s"},{"id":9,"name":"D. Brees","image":"https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/ff_3336575-e7a2aaea93ea78d0fead_full.jpg&w=340"},{"id":10,"name":"D. Hopkins","image":"https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/ff_3336601-ad612bd139cf2cf884ae_full.jpg&w=340"},{"id":11,"name":"J. Jones","image":"https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/ff_3336432-4eda4224b9052f51d15c_full.jpg&w=340"},{"id":12,"name":"Z. Elliot","image":"https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/ff_3336402-ee3d5600c06eab9b0c32_full.jpg&w=340"}]')},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(7),i=a.n(n),r=a(1),m=a(2),o=a(4),l=a(3),u=a(5),f=(a(14),{height:"160px",width:"160px"}),p={width:"12rem",height:"12rem"};var g=function(e){return c.a.createElement("div",{style:p,className:"card",onClick:function(){return e.shuffleArr(e.id)}},c.a.createElement("img",{onClick:function(){return e.checkGuess(e.id)},style:f,alt:e.name,src:e.image,id:e.id,key:e.key,className:"card-img-top mx-auto my-auto"}))};a(15);var d=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)},h=a(8),b=(a(16),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid fixed-top p-0 m-0"},c.a.createElement("div",{className:"row m-0 p-0 motto"},c.a.createElement("ul",{className:"nav col-sm-12"},c.a.createElement("li",{className:"nav-item col col-sm-6 mx-auto text-center"},c.a.createElement("span",{className:"nav-link text-white"},this.props.children)),c.a.createElement("li",{className:"nav-item col col-sm-6 mx-auto text-center"},c.a.createElement("span",{className:"nav-link text-white"},"score: ",this.props.score," | top score: ",this.props.topScore," ")))))}}]),t}(s.Component)),y=(a(17),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid m-0 p-0 botom"},c.a.createElement("div",{className:"row m-0 p-0"}))}}]),t}(s.Component)),v=(a(18),function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={friends:h,score:0,topScore:0,start:"click any image to start",textClass:"",shuffle:[],guessed:new Set},a.shuffleArray=function(e){return e.sort((function(){return Math.random()-.5}))},a.shuffleMeTimbers=function(){a.setState({shuffle:a.shuffleArray(a.state.friends)})},a.checkGuess=function(e){a.shuffleMeTimbers(),a.state.guessed.has(e)?a.setState({guessed:new Set},(function(){a.incorrect()})):(a.state.guessed.add(e),a.correct())},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.shuffleMeTimbers(),this.setState({start:"click any image to start"})}},{key:"incorrect",value:function(){this.setState({score:0,start:"you guessed incorrectly"})}},{key:"correct",value:function(){var e=this.state.score+1;e>this.state.topScore?this.setState({score:e,topScore:e,start:"you guessed correctly"}):this.setState({score:e,start:"you guessed correctly"})}},{key:"render",value:function(){var e=this;return c.a.createElement(d,null,c.a.createElement(b,{score:this.state.score,topScore:this.state.topScore,textClass:this.state.textClass},this.state.start),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"jumbotron-fluid pt-5 mt-5"},c.a.createElement("h1",{className:"title"},"clicky game"),c.a.createElement("h5",{className:"title"},"click on an image to earn points...but don't click on the same one twice"))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.state.friends.map((function(t){return c.a.createElement(g,{shuffleArr:e.shuffleMeTimbers,onCorrect:function(){e.correct()},onIncorrect:function(){e.incorrect()},checkGuess:e.checkGuess,id:t.id,key:t.id,name:t.name,image:t.image})})))),c.a.createElement(y,null))}}]),t}(c.a.Component));a(19);i.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.443ad859.chunk.js.map
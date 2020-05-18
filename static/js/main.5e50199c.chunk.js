(this["webpackJsonpsongbook-front"]=this["webpackJsonpsongbook-front"]||[]).push([[0],{29:function(e,t,a){e.exports=a(50)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),o=(a(34),a(1)),i=a(13),c=(a(35),a(36),a(7));function u(e){return{type:"LOG_IN",payload:e}}var m=Object(c.b)((function(e){return{user:e.user}}),(function(e){return{logOut:function(){return e({type:"LOG_OUT"})}}}))((function(e){var t=Object(i.e)(),a=e.user;return r.a.createElement("div",{id:"user-bar"},"Hello, ",a.firstName,". ",r.a.createElement("button",{id:"logout-button",onClick:function(){e.logOut(),t.push("/")}},"Log Out"))}));var h=Object(c.b)((function(e){return{user:e.user}}))((function(e){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/",activeClassName:"active",exact:!0},"Songs")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/categories",activeClassName:"active"},"Categories")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/playlists",activeClassName:"active"},"Playlists")),e.user.id&&r.a.createElement("li",{id:"nav-add-li"},r.a.createElement(o.c,{to:"/add",activeClassName:"active"},"Add a song")),e.user.id&&r.a.createElement("li",{id:"nav-create-li"},r.a.createElement(o.c,{to:"/create",activeClassName:"active"},"Create a playlist")),e.user.id&&r.a.createElement("li",{id:"nav-myPlaylists-li"},r.a.createElement(o.c,{to:"/myPlaylists",activeClassName:"active"},"My playlists")," "),!e.user.id&&r.a.createElement("li",{id:"nav-login-li"},r.a.createElement(o.c,{to:"/login",activeClassName:"active"},"Log In")),!e.user.id&&r.a.createElement("li",{id:"nav-register-li"},r.a.createElement(o.c,{to:"/register",activeClassName:"active"},"Register")),e.user.id&&r.a.createElement("li",null,r.a.createElement(m,null))))})),d=a(3),p=a(4),g=a(6),f=a(5),E=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return Object(d.a)(this,a),(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.debounce=function(e,t){var a;return function(){var n=this,r=arguments;clearTimeout(a),a=setTimeout((function(){return e.apply(n,r)}),t)}},e.handleOnChange=function(t){e.setState({inputValue:t.target.value})},e.handleOnKeyUp=function(){(0,e.props.fetchStuff)(e.state.inputValue)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.inputValue,t=this.props.type;return"songsForPlaylists"===t?r.a.createElement("input",{type:"text",id:"search-bar",placeholder:"Search songs",value:e,onChange:this.handleOnChange,onKeyUp:this.debounce(this.handleOnKeyUp,750)}):r.a.createElement("input",{type:"text",id:"search-bar",placeholder:"Search ".concat(t),value:e,onChange:this.handleOnChange,onKeyUp:this.debounce(this.handleOnKeyUp,750)})}}]),a}(n.Component);a(42);var v=function(e){var t=e.list,a=e.type,n=e.handleOnClick;if(!t[0])return"authors"===a?r.a.createElement("p",{id:"no-results-p"},"This author has not been created yet. When you submit this form he/she will be automatically created."):"songsForPlatlists"===a?r.a.createElement("p",{id:"no-results-p"},"Couldn't find any songs matching this phrase"):r.a.createElement("p",{id:"no-results-p"},"Couldn't find any ".concat(a," matching this phrase"));switch(a){case"songs":return r.a.createElement("ul",{className:"results-list"},"Results:",t.map((function(e){return r.a.createElement("li",{className:"search-result-li",key:e.id},r.a.createElement(o.b,{to:"/songs/".concat(e.id)},e.title))})));case"playlists":return r.a.createElement("ul",{className:"results-list"},"Results:",t.map((function(e){return r.a.createElement("li",{className:"search-result-li",key:e.id},r.a.createElement(o.b,{to:"/playlists/".concat(e.id)},e.name))})));case"authors":return r.a.createElement("ul",{className:"results-list"},"Results:",t.map((function(e){return r.a.createElement("li",{className:"search-result-li",key:e.id,onClick:n},e.name)})));case"songsForPlaylists":return r.a.createElement("ul",{className:"results-list"},"Results:",t.map((function(e){return r.a.createElement("li",{className:"search-result-li",key:e.id,value:e.id,onClick:n},'"',e.title,'" by ',e.author.name," ")})))}},y=(a(43),"https://stk-songbook.herokuapp.com/api/"),b=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={results:[],searched:!1},e.fetchStuff=function(t){var a=e.props.type;if(t)switch(a){case"songs":fetch(y+"songs/title/".concat(t,"?limit=3")).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(t){return e.setState({results:t,searched:!0})})).catch((function(e){return console.log(e)}));break;case"authors":fetch(y+"authors/name/".concat(t,"?limit=3")).then((function(e){return e.json()})).then((function(t){return e.setState({results:t,searched:!0})}));break;case"playlists":fetch(y+"playlists/name/".concat(t,"?limit=3")).then((function(e){return e.json()})).then((function(t){return e.setState({results:t,searched:!0})}));break;case"songsForPlaylists":fetch(y+"songs/title/".concat(t,"?limit=3")).then((function(e){return e.json()})).then((function(t){return e.setState({results:t,searched:!0})}))}else e.setState({searched:!1})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.results,a=e.searched,n=this.props,s=n.type,l=n.handleOnClick;return r.a.createElement("div",{id:"search-engine"},r.a.createElement(E,{fetchStuff:this.fetchStuff,type:s}),a&&r.a.createElement(v,{list:t,type:s,handleOnClick:l}))}}]),a}(n.Component),k=(a(44),function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={songs:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://stk-songbook.herokuapp.com/api/songs?limit=10").then((function(e){return e.json()})).then((function(t){return e.setState({songs:t})}))}},{key:"render",value:function(){var e=this.state.songs;return e?r.a.createElement("div",{id:"main"},r.a.createElement(b,{type:"songs"}),r.a.createElement("div",{className:"introduction"},r.a.createElement("h1",null,"Latest songs: ")),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{className:"song-list-li",key:e.id},r.a.createElement(o.b,{to:"/songs/".concat(e.id)},e.title))})))):r.a.createElement("div",null,"Loading...")}}]),a}(n.Component)),O=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={list:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.url,a=this.props.user;"/myPlaylists"===t?a.id&&fetch("https://stk-songbook.herokuapp.com/api/playlists/ownerId/".concat(this.props.user.id,"?include_private=true")).then((function(e){return e.json()})).then((function(t){return e.setState({list:t})})):"/playlists"===t?fetch("https://stk-songbook.herokuapp.com/api".concat(t,"?limit=10")).then((function(e){return e.json()})).then((function(t){return e.setState({list:t})})):fetch("https://stk-songbook.herokuapp.com/api".concat(t)).then((function(e){return e.json()})).then((function(t){return e.setState({list:t})}))}},{key:"render",value:function(){var e=this.state.list,t=this.props.match.url,a=this.props.user;if("/myPlaylists"===t)return a.id?e[0]?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"introduction"},r.a.createElement("h1",null,"My playlists:")),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:"/playlists/".concat(e.id)},e.name))})))):r.a.createElement("div",null,"You haven't created any playlist. You can do so ",r.a.createElement(o.b,{to:"/create"},"here"),"."):r.a.createElement("div",null,"You have to be logged in to view this page. ",r.a.createElement(o.b,{to:"/login"},"Log In")," or ",r.a.createElement(o.b,{to:"/register"},"Register"));if(!e[0])return r.a.createElement("div",null,"Loading...");switch(t){case"/playlists":return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{type:"playlists"}),r.a.createElement("div",{className:"introduction"},r.a.createElement("h1",null,"Latest playlists:")),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id,className:"playlist-list-li"},r.a.createElement(o.b,{to:"/playlists/".concat(e.id)},e.name))}))));case"/categories":return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{type:"songs"}),r.a.createElement("div",{className:"introduction"},r.a.createElement("h1",null,"Categories:")),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id,className:"category-list-li"},r.a.createElement(o.b,{to:"/categories/".concat(e.name)},e.name))}))))}}}]),a}(n.Component),w=Object(c.b)((function(e){return{user:e.user}}))(O),N=a(10);a(45);var S=function(e){var t=e.status,a=e.children;return r.a.createElement("div",{className:"alert ".concat(t)},a)};var j=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",loggedIn:null,message:""},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,r=a.password,s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:r})};n&&r?fetch("https://stk-songbook.herokuapp.com/api/users/login",s).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(t){e.props.logIn(t),e.setState({loggedIn:!0,password:"",email:"",message:"Hello ".concat(t.firstName,".")})})).catch((function(t){401===t.status?e.setState({loggedIn:!1,message:"Wrong password"}):404===t.status&&e.setState({loggedIn:!1,message:"There is no user with that e-mail in the database"})})):e.setState({loggedIn:!1,message:"Please fill in the form"})},e.handleOnChange=function(t){var a,n=t.target.id;e.setState((a={},Object(N.a)(a,n,t.target.value),Object(N.a)(a,"loggedIn",null),a))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.loggedIn,s=e.message;return this.props.user.id?r.a.createElement(S,{status:"success"},"Succesfully logged in. Do you want to ",r.a.createElement("button",{onClick:this.props.logOut},"Log Out"),"?"):r.a.createElement("div",null,r.a.createElement("div",{className:"introduction"},r.a.createElement("h1",null,"Login"),r.a.createElement("p",null,"Logging in allows you to add songs and create your own playlists")),r.a.createElement("form",{onSubmit:this.handleSubmit,id:"login-form"},r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null," E-mail:",r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"email",value:t,onChange:this.handleOnChange}))),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null," Password:",r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password",value:a,onChange:this.handleOnChange}))),r.a.createElement("div",{className:"form-div"},r.a.createElement("button",{type:"submit",id:"login-submit"},"Login"))),n&&r.a.createElement(S,{status:"success"},s),!1===n&&r.a.createElement(S,{status:"error"},s))}}]),a}(n.Component),C=Object(c.b)((function(e){return{user:e.user}}),(function(e){return{logIn:function(t){return e(u(t))},logOut:function(){return e({type:"LOG_OUT"})}}}))(j),A=(a(46),function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={song:[]},e.handleDelete=function(){var t=e.state.song;fetch("https://stk-songbook.herokuapp.com/api/songs/id/".concat(t.id),{method:"DELETE"}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.songId;fetch("https://stk-songbook.herokuapp.com/api/songs/id/".concat(t)).then((function(e){return e.json()})).then((function(t){return e.setState({song:t})}))}},{key:"render",value:function(){var e=this.state.song,t=this.props.user;return e.author?r.a.createElement("div",{id:"main"},r.a.createElement(b,{type:"songs"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Title: ",e.title),r.a.createElement("li",null,"Author: ",e.author.name),r.a.createElement("li",null,"Lyrics: ",e.lyrics),r.a.createElement("li",null,"Guitar Tabs: ",e.guitarTabs),r.a.createElement("li",null,"Category:",r.a.createElement(o.b,{to:"/categories/".concat(e.category.name)}," ",e.category.name," ")),t.id&&r.a.createElement("button",{onClick:this.handleDelete},"Delete"))):r.a.createElement("div",null,"Loading...")}}]),a}(n.Component)),T=Object(c.b)((function(e){return{user:e.user}}))(A),I=(a(47),/^[a-zA-Z0-9 _-]{4,15}$/i),P=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,40}$/,L=/^[a-zA-Z ]{2,15}$/,D=/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;var B=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",email:"",firstName:"",lastName:"",errors:{username:"",email:"",password:"",firstName:"",lastName:""},registered:null,message:""},e.handleOnChange=function(t){var a,n=t.target,r=n.id,s=n.value,l=e.state.errors;switch(r){case"username":l.username="";break;case"password":l.password="";break;case"email":l.email="";break;case"firstName":l.firstName="";break;case"lastName":l.lastName=""}e.setState((a={},Object(N.a)(a,r,s),Object(N.a)(a,"registered",null),a))},e.handleOnBlur=function(t){var a=t.target,n=a.id,r=a.value,s=e.state.errors;switch(n){case"username":s.username=I.test(r)?"":"Username has to consist of 4 to 15 letters, numbers or ' ', '_', '-'";break;case"password":s.password=P.test(r)?"":"Password has to consist of 6 to 40 letters or numbers (including at least 1 upper and lower case and 1 digit)";break;case"email":s.email=D.test(r)?"":"Incorrect email";break;case"firstName":s.firstName=L.test(r)?"":"Your name can only consist of 2 to 15 letters and or ' '";break;case"lastName":s.lastName=L.test(r)?"":"Your name can only consist of 2 to 15 letters and or ' '"}e.setState({errors:s})},e.handleOnSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password,s=a.email,l=a.firstName,o=a.lastName,i=a.errors,c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,firstName:l,lastName:o,password:r,username:n})};i.username||i.password||i.email||i.firstName||i.lastName?e.setState({registered:!1}):fetch("https://stk-songbook.herokuapp.com/api/users/register",c).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(t){e.props.logIn(t),e.setState({registered:!0,username:"",password:"",email:"",firstName:"",lastName:""})})).catch((function(t){switch(t.status){case 400:e.setState({registered:!1,message:"There already exists an account with that name or under that email."})}}))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.email,s=e.firstName,l=e.lastName,o=e.registered,i=e.errors,c=e.message;return this.props.user.id?r.a.createElement(S,{status:"success"},"Succesfully registered. Do you want to ",r.a.createElement("button",{onClick:this.props.logOut},"Log Out"),"?"):r.a.createElement("div",{id:"registration-wrapper"},r.a.createElement("div",{className:"introduction"},r.a.createElement("h1",null,"User Registration"),r.a.createElement("p",null,"Please fill in all the required fields to create a new user account.")),r.a.createElement("form",{onSubmit:this.handleOnSubmit,id:"registration-form"},r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"Email:",r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"E-mail",value:n,onChange:this.handleOnChange,onBlur:this.handleOnBlur,required:!0})),i.email&&r.a.createElement("p",{style:{color:"red"}},"Incorrect e-mail.")),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Username",value:t,onChange:this.handleOnChange,onBlur:this.handleOnBlur,required:!0})),i.username?r.a.createElement("p",{style:{color:"red"}}," Username has to consist of 4 to 15 letters, numbers or ' ', '_', '-'."):r.a.createElement("p",null," Username has to consist of 4 to 15 letters, numbers or ' ', '_', '-'.")),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"Password:",r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password",value:a,onChange:this.handleOnChange,onBlur:this.handleOnBlur,required:!0})),i.password?r.a.createElement("p",{style:{color:"red"}},"Password has to consist of 6 to 40 letters or numbers (including at least 1 upper and lower case and 1 digit)."):r.a.createElement("p",null,"Password has to consist of 6 to 40 letters or numbers (including at least 1 upper and lower case and 1 digit).")),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"First Name:",r.a.createElement("input",{type:"text",name:"firstName",id:"firstName",placeholder:"First Name",value:s,onChange:this.handleOnChange,onBlur:this.handleOnBlur,required:!0})),i.firstName?r.a.createElement("p",{style:{color:"red"}}," Your name can only consist of 2 to 15 letters and or ' '. Those are the rules boss."):r.a.createElement("p",null," Your name can only consist of 2 to 15 letters and or ' '. Those are the rules boss.")),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"Last Name:",r.a.createElement("input",{type:"text",name:"lastName",id:"lastName",placeholder:"Last Name",value:l,onChange:this.handleOnChange,onBlur:this.handleOnBlur,required:!0})),i.lastName?r.a.createElement("p",{style:{color:"red"}}," Your name can only consist of 2 to 15 letters and or ' '. Those are the rules boss."):r.a.createElement("p",null," Your name can only consist of 2 to 15 letters and or ' '. Those are the rules boss.")),r.a.createElement("div",{className:"form-div"},r.a.createElement("button",{type:"submit"},"Submit!"))),o&&r.a.createElement(S,{status:"success"},"Account created."),!1===o&&r.a.createElement(S,{status:"error"},c))}}]),a}(n.Component),x=Object(c.b)((function(e){return{user:e.user}}),(function(e){return{logIn:function(t){return e(u(t))}}}))(B),F=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={playlist:[],owner:"",songs:[],message:""},e.handleDelete=function(){var t=e.state.playlist;e.props.user.id===t.ownerId&&fetch("https://stk-songbook.herokuapp.com/api/playlists/id/".concat(t.id),{method:"DELETE"}).then((function(e){if(!e.ok)throw e;window.location="/playlists"})).catch((function(e){return console.log(e)}))},e.handleDownload=function(t){var a=e.state.playlist;t.preventDefault(),fetch("https://stk-songbook.herokuapp.com/api/playlists/download/".concat(a.id)).then((function(e){if(!e.ok)throw e;return e})).then((function(e){window.open(e.url)})).catch((function(e){console.log(e),alert("Something went wrong")}))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.playlistId;fetch("https://stk-songbook.herokuapp.com/api/playlists/id/".concat(t)).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(t){return e.setState({playlist:t})})).catch((function(t){switch(t.status){case 404:e.setState({message:"There is no such playlist"})}}))}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.playlist;t.playlist.id!==n.id&&Promise.all([fetch("https://stk-songbook.herokuapp.com/api/users/id/".concat(n.ownerId)).then((function(e){return e.json()})),fetch("https://stk-songbook.herokuapp.com/api/songs").then((function(e){return e.json()}))]).then((function(e){return a.setState({owner:e[0].username,songs:e[1].filter((function(e){return n.songs.includes(e.id)}))})}))}},{key:"render",value:function(){var e=this.state,t=e.playlist,a=e.owner,n=e.songs,s=e.message,l=this.props.user;return t.songs?r.a.createElement("div",{id:"main"},r.a.createElement("h1",null,t.name),r.a.createElement("h2",null,"Created by: ",a),r.a.createElement("button",{id:"download-playlist-button",onClick:this.handleDownload},"Download this playlist as PDF"),l.id===t.ownerId&&r.a.createElement("button",{onClick:this.handleDelete},"Delete this playlist"),r.a.createElement("div",{id:"song-list"},"Songs: ",n.map((function(e){return r.a.createElement("div",{id:"single-song",key:e.id},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,"Guitar Tabs: ",e.guitarTabs),r.a.createElement("p",null,"Lyrics: ",e.lyrics),r.a.createElement("p",null,r.a.createElement(o.b,{to:"/songs/".concat(e.id)},"Song page")))})))):r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(S,{status:"error"},s),!s&&r.a.createElement("div",null,"Loading..."))}}]),a}(n.Component),U=Object(c.b)((function(e){return{user:e.user}}))(F),Y=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={songs:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.filterName;fetch("https://stk-songbook.herokuapp.com/api/categories").then((function(e){return e.json()})).then((function(e){return e.find((function(e){return e.name===t})).id})).then((function(t){fetch("https://stk-songbook.herokuapp.com/api/categories/id/".concat(t,"/songs")).then((function(e){return e.json()})).then((function(t){return e.setState({songs:t})}))}))}},{key:"render",value:function(){var e=this.state.songs;return e?r.a.createElement("div",{id:"main"},r.a.createElement(b,{type:"songs"}),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:"/songs/".concat(e.id)},e.title))})))):r.a.createElement("div",null,"Loading...")}}]),a}(n.Component),q=(a(48),/^[a-zA-Z 0-9]{2,20}$/i),M=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={categories:[],authorName:"",categoryId:"",title:"",lyrics:"",guitarTabs:"",curio:"",songAdded:null,errors:{authorName:"",title:"",lyrics:"",curio:"",guitarTabs:""},message:""},e.handleOnChange=function(t){var a,n=t.target.id,r=e.state.errors;e.setState((a={},Object(N.a)(a,n,t.target.value),Object(N.a)(a,"songAdded",null),Object(N.a)(a,r.id,""),a))},e.handleOnBlur=function(t){var a=t.target,n=a.id,r=a.value,s=e.state.errors;switch(n){case"authorName":s.authorName=q.test(r)?"":"Author name has to consist of 2 to 20 letters, numbers or ' '.";break;case"title":s.title=q.test(r)?"":"Song title has to consist of 2 to 20 letters, numbers or ' '.";break;case"lyrics":s.lyrics=r.length>0?"":"Might as well put 'none' or 'instrumental' into lyrics";break;case"guitarTabs":s.guitarTabs=r.length>0?"":"A song has to have guitar tabs";break;case"categoryId":s.categoryId=""!==r?"":"You need to choose the category"}e.setState({errors:s})},e.handleOnFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,r=a.authorName,s=a.categoryId,l=a.lyrics,o=a.guitarTabs,i=a.curio,c=a.errors,u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({authorName:r,categoryId:parseInt(s),coauthors:[],curio:i,guitarTabs:o,lyrics:l,tags:[],title:n})};n&&r&&s&&l&&o?c.title||c.authorName||c.categoryId||c.lyrics||c.guitarTabs?e.setState({songAdded:!1,message:"One or more space doesn't meet the requirements"}):fetch("https://stk-songbook.herokuapp.com/api/songs/",u).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(t){return e.setState({songAdded:!0,message:t.id,authorName:"",categoryId:"",curio:"",guitarTabs:"",lyrics:"",title:""})})).catch((function(t){switch(t.status){case"401":e.setState({songAdded:!1,message:"Unauthorized"});break;case"403":e.setState({songAdded:!1,message:"Forbidden"});break;case"404":e.setState({songAdded:!1,message:"Not found"})}})):e.setState({songAdded:!1,message:"Fill in all of the required spaces"})},e.handleOnFileSubmit=function(t){t.preventDefault();var a=document.querySelector("#song-file-input"),n=new FormData;n.append("file",a.files[0]),fetch("https://stk-songbook.herokuapp.com/api/songs/upload",{method:"POST",body:n}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(t){e.setState({songAdded:!0,message:t.id})})).catch((function(t){console.log(t),e.setState({songAdded:!1,message:"Incorrect file"})}))},e.handleOnClick=function(t){e.setState({authorName:t.target.innerHTML})},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://stk-songbook.herokuapp.com/api/categories").then((function(e){return e.json()})).then((function(t){return e.setState({categories:t})}))}},{key:"render",value:function(){var e=this.state,t=e.authorName,a=e.title,n=e.lyrics,s=e.guitarTabs,l=e.curio,i=e.categories,c=e.songAdded,u=e.errors,m=e.message;return this.props.user.id?r.a.createElement("div",null,r.a.createElement("div",{className:"introduction"},r.a.createElement("h1",null,"Add song form"),r.a.createElement("p",null,"Please fill in all the required fields to create a new song.")),r.a.createElement("form",{onSubmit:this.handleOnFormSubmit,id:"add-song-form"},r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null," Title*:",r.a.createElement("input",{type:"text",name:"title",id:"title",placeholder:"title",value:a,onChange:this.handleOnChange,onBlur:this.handleOnBlur})),u.title?r.a.createElement("p",{style:{color:"red"}},"Song title has to consist of 2 to 20 letters, numbers or ' '."):r.a.createElement("p",null,"Song title has to consist of 2 to 20 letters, numbers or ' '.")),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null," Author*:",r.a.createElement("input",{type:"text",id:"authorName",placeholder:"Author",value:t,onChange:this.handleOnChange,onBlur:this.handleOnBlur})),u.authorName?r.a.createElement("p",{style:{color:"red"}},"Author name has to consist of 2 to 20 letters, numbers or ' '."):r.a.createElement("p",null,"Author name has to consist of 2 to 20 letters, numbers or ' '."),r.a.createElement("label",null,"Search existing authors (after you use this you have to still click on the input - a feature not a bug):",r.a.createElement(b,{id:"author-search",type:"authors",handleOnClick:this.handleOnClick}))),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"Category*:",r.a.createElement("select",{id:"categoryId",name:"categoryId",onChange:this.handleOnChange,defaultValue:"",onBlur:this.handleOnBlur},r.a.createElement("option",{value:"",disabled:!0}," --- "),i.map((function(e){return r.a.createElement("option",{className:"generated-option",key:e.id,value:e.id},e.name)})))),u.categoryId?r.a.createElement("p",{style:{color:"red"}},"You need to choose the category."):r.a.createElement("p",null,"Choose the category.")),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"Song trivia:",r.a.createElement("textarea",{name:"curio",id:"curio",placeholder:"Mo\u017cesz tu napisa\u0107 co\u015b o piosence",value:l,onChange:this.handleOnChange,onBlur:this.handleOnBlur})),r.a.createElement("p",null,"You can write something interesting about the song (not required).")),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"Song lyrics*:",r.a.createElement("textarea",{name:"lyrics",id:"lyrics",placeholder:"lyrics",value:n,onChange:this.handleOnChange,onBlur:this.handleOnBlur,required:!0})),u.lyrics?r.a.createElement("p",{style:{color:"red"}},"Might as well put 'none' or 'instrumental' into lyrics"):r.a.createElement("p",null,"You can type in the lyrics here.")),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"Guitar tabs*:",r.a.createElement("textarea",{name:"guitarTabs",id:"guitarTabs",placeholder:"guitarTabs",value:s,onChange:this.handleOnChange,onBlur:this.handleOnBlur,required:!0})),u.guitarTabs?r.a.createElement("p",{style:{color:"red"}},"A song has to have guitar tabs"):r.a.createElement("p",null,"A song has to have guitar tabs")),r.a.createElement("button",{type:"submit"},"Submit!")),r.a.createElement("p",null,"OR alternatively you can add a song from a json file"),r.a.createElement("form",{id:"song-from-file",onSubmit:this.handleOnFileSubmit},r.a.createElement("input",{type:"file",accept:".json",id:"song-file-input"}),r.a.createElement("button",{type:"submit"},"Upload!")),c&&r.a.createElement(S,{status:"success"},"Song added. You can view it ",r.a.createElement(o.b,{to:"/songs/".concat(m)},"here")),!1===c&&r.a.createElement(S,{status:"error"},m)):r.a.createElement("div",null,r.a.createElement("h3",null,"You have to be logged in to add a song."),r.a.createElement(o.b,{to:"/login"},"Log In")," or ",r.a.createElement(o.b,{to:"/register"},"Register"))}}]),a}(n.Component),R=Object(c.b)((function(e){return{user:e.user}}))(M),_=a(24),z=(a(49),/^[a-zA-Z 0-9]{2,20}$/i),G=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",isPrivate:!1,songList:[],errors:{name:""},playlistAdded:null,message:""},e.handleOnChange=function(t){switch(t.target.id){case"name":e.setState({name:t.target.value});break;case"isPrivateCheckbox":e.setState({isPrivate:t.target.checked})}e.setState({playlistAdded:null})},e.handleOnClick=function(t){var a=e.state.songList,n=Object(_.a)(a);n.push({id:t.target.value,title:t.target.innerHTML}),e.setState({songList:n})},e.handleDelete=function(t){var a=e.state.songList;t.preventDefault();var n=Object(_.a)(a);n.splice(t.target.value,1),e.setState({songList:n})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,r=a.isPrivate,s=a.songList;if(a.errors.name||0===s.length)e.setState({playlistAdded:!1,message:"Either the name doesn't meet the requirements or the list is empty"});else{var l=[];s.forEach((function(e){return l.push(e.id)}));var o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({creationTime:null,id:0,isPrivate:r,name:n,ownerId:e.props.user.id,songs:l})};fetch("https://stk-songbook.herokuapp.com/api/playlists/",o).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(t){return e.setState({playlistAdded:!0,name:"",songList:[],message:t.id})})).catch((function(t){switch(t.status){case"401":e.setState({songAdded:!1,message:"Unauthorized"});break;case"403":e.setState({songAdded:!1,message:"Forbidden"});break;case"404":e.setState({songAdded:!1,message:"Not found"})}}))}},e.handleOnBlur=function(t){var a=t.target,n=a.id,r=a.value,s=e.state.errors;switch(n){case"name":s.name=z.test(r)?"":"Playlist name has to consist of 2 to 20 letters, numbers or ' '."}},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.songList,s=t.playlistAdded,l=t.message;return this.props.user.id?r.a.createElement("div",null,r.a.createElement("div",{className:"introduction"},r.a.createElement("h1",null,"Create a playlist"),r.a.createElement("p",null,"Fill the form below to create a new playlist")),r.a.createElement("form",{onSubmit:this.handleSubmit,id:"create-playlist-form"},r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"name:",r.a.createElement("input",{type:"text",id:"name",placeholder:"name",value:a,onChange:this.handleOnChange,onBlur:this.handleOnBlur}))),r.a.createElement("div",{className:"form-div"},r.a.createElement("label",null,"Private:",r.a.createElement("input",{type:"checkbox",id:"isPrivateCheckbox",name:"isPrivate",value:"isPrivate",onChange:this.handleOnChange}))),r.a.createElement("div",{className:"form-div"},r.a.createElement(b,{type:"songsForPlaylists",handleOnClick:this.handleOnClick})),r.a.createElement("div",{className:"form-div"},r.a.createElement("button",{type:"submit"},"Create playlist"))),s&&r.a.createElement(S,{status:"success"},"Playlist added. You can view it ",r.a.createElement(o.b,{to:"/playlists/".concat(l)},"here"),". "),!1===s&&r.a.createElement(S,{status:"error"},l),n[0]&&r.a.createElement("div",{id:"current-playlist"},r.a.createElement("p",null,1===n.length?"".concat(n.length," song"):"".concat(n.length," songs"),"  currently in the playlist:"),r.a.createElement("ul",null,n.map((function(t,a){return r.a.createElement("li",{key:a},t.title,r.a.createElement("button",{onClick:e.handleDelete,value:a},"Delete"))}))))):r.a.createElement("div",null,r.a.createElement("h3",null,"You have to be logged in to create a playlist."),r.a.createElement(o.b,{to:"/login"},"Log In")," or ",r.a.createElement(o.b,{to:"/register"},"Register"))}}]),a}(n.Component),$=Object(c.b)((function(e){return{user:e.user}}))(G);var J=function(){return r.a.createElement(o.a,null,r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(i.a,{path:["/","/songs"],component:k,exact:!0}),r.a.createElement(i.a,{path:"/categories",component:w,exact:!0}),r.a.createElement(i.a,{path:"/playlists",component:w,exact:!0}),r.a.createElement(i.a,{path:"/songs/:songId",component:T}),r.a.createElement(i.a,{path:"/add",component:R,exact:!0}),r.a.createElement(i.a,{path:"/login",component:C}),r.a.createElement(i.a,{path:"/register",component:x}),r.a.createElement(i.a,{path:"/playlists/:playlistId",component:U}),r.a.createElement(i.a,{path:"/categories/:filterName",component:Y}),r.a.createElement(i.a,{path:"/create",component:$}),r.a.createElement(i.a,{path:"/myPlaylists",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(18),K=a(23),V={user:{}};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;return"LOG_IN"===t.type?Object(K.a)({},e,{user:t.payload}):"LOG_OUT"===t.type?Object(K.a)({},e,{user:{}}):e},W=Object(Z.b)(H);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:W},r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.5e50199c.chunk.js.map
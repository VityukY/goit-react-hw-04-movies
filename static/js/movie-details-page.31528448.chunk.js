(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{36:function(e,t,r){"use strict";var n=r(37),a=r.n(n),c=r(38),s=r(40),i=r.n(s);i.a.defaults.baseURL="https://api.themoviedb.org",i.a.defaults.params={api_key:"0e0748a6c8b324a098ac6737209de7e8"};var o={Trends:function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,i.a.get("/3/trending/movie/week?page=".concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log("error",{error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),MovieDetails:function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",{error:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Cast:function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",{error:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Reviews:function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",{error:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Movies:function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://api.themoviedb.org/3/search/movie?api_key=0e0748a6c8b324a098ac6737209de7e8&language=en-US&query=".concat(t,"&page=").concat(r,"&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()};t.a=o},39:function(e,t,r){"use strict";var n=r(1);t.a=function(e){var t=e.action,r=e.children;return Object(n.jsx)("div",{className:"btnContaine",children:Object(n.jsx)("button",{type:"button",onClick:t,children:r})})}},71:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t);var s=r(15),i=r(16),o=r(18),u=r(17),l=r(0),h=r(1),p=function(e){var t=e.title,r=e.overview,n=e.poster;return Object(h.jsxs)("div",{className:"MovieDetailsContainer",children:[Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:t,height:"400"}),Object(h.jsxs)("div",{className:"MovieDetailsDescription",children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)("p",{children:r})]})]})},v=r(36),j=r(9),b=r(2),f=function(e){var t=e.name,r=e.src;return Object(h.jsxs)("li",{className:"actorContainer",children:[Object(h.jsx)("h3",{className:"actorName",children:t}),Object(h.jsx)("img",{width:"100",height:"150",src:r,alt:t})]})},d=r.p+"static/media/unknown.850b6605.jpg",O=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={actors:e.props.cast},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"castinContainer",children:[Object(h.jsx)("h1",{className:"castinTitle",children:"Cast "}),this.state.actors&&Object(h.jsx)("ul",{className:"castList",children:this.state.actors.map((function(e){var t=e.cast_id,r=e.name,n=e.profile_path;return Object(h.jsx)(f,{name:r,src:n?"https://image.tmdb.org/t/p/w500".concat(n):d},t)}))})]})}}]),r}(l.Component),w=function(e){var t=e.author,r=e.content;return Object(h.jsxs)("li",{className:"reviewContainer",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsxs)("p",{children:[" ",r]})]})},m=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Reviews "}),this.props.reviews.length>0?Object(h.jsx)("ul",{className:"castList",children:this.props.reviews.map((function(e){var t=e.id,r=e.author,n=e.content;return Object(h.jsx)(w,{id:t,author:r,content:n},t)}))}):Object(h.jsx)("h3",{children:" 'We have no reviews for this movie'"})]})}}]),r}(l.Component),g=r(7),x=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={castShow:!1,reviewsShow:!1},e.castToogle=function(){e.setState((function(e){return{castShow:!e.castShow,reviewsShow:!1}}))},e.reviewsToogle=function(){e.setState((function(e){return{reviewsShow:!e.reviewsShow,castShow:!1}}))},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.props,t=e.id,r=e.cast,n=e.reviews,a=this.state,s=a.castShow,i=a.reviewsShow;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"additionalInformation",children:[Object(h.jsx)(j.c,{to:"/movies/".concat(t,"/cast"),children:Object(h.jsx)("button",{type:"button",onClick:this.castToogle,children:s?"Close Cast":"Open Cast"})}),Object(h.jsx)(j.c,{to:"/movies/".concat(t,"/reviews"),children:Object(h.jsx)("button",{type:"button",onClick:this.reviewsToogle,children:i?"Close Reviews":"Open Reviews"})})]}),Object(h.jsxs)("div",{children:[s&&Object(h.jsx)(b.a,{path:g.a.cast,render:function(e){return Object(h.jsx)(O,c(c({},e),{},{cast:r}))}}),i&&Object(h.jsx)(b.a,{path:g.a.reviews,render:function(e){return Object(h.jsx)(m,c(c({},e),{},{reviews:n}))}})]})]})}}]),r}(l.Component),y=r(39),k=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieId:e.props.match.params.movieId,title:null,poster_path:null,overview:null,cast:null,reviews:null},e.featchMovieDetails=function(){v.a.MovieDetails(e.state.movieId).then((function(t){return e.setState(c({},t.data))}))},e.fetchCast=function(){v.a.Cast(e.state.movieId).then((function(t){return e.setState({cast:t.data.cast})}))},e.fetchReviews=function(){v.a.Reviews(e.state.movieId).then((function(t){return e.setState({reviews:t.data.results})}))},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.featchMovieDetails(),this.fetchCast(),this.fetchReviews()}},{key:"render",value:function(){var e=this,t=this.state,r=t.title,n=t.overview,a=t.poster_path,c=t.cast,s=t.reviews,i=t.movieId;return Object(h.jsx)(h.Fragment,{children:this.state.title&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y.a,{action:function(){return e.props.history.push(e.props.location.state.from)},children:"go back"}),Object(h.jsx)(p,{title:r,overview:n,poster:a}),Object(h.jsx)(x,{cast:c,reviews:s,id:i})]})})}}]),r}(l.Component);t.default=k}}]);
//# sourceMappingURL=movie-details-page.31528448.chunk.js.map